/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  TouchableOpacity,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  I18nManager,
  TextInput,s
  } from 'react-native';
  import ModalSelector from 'react-native-modal-selector'
  import { Input,Button,Slider } from 'react-native-elements';

  import Api from '../libs/api';

type Props = {};
export default class Corrector extends Component<Props> {

  constructor() {
    super();

    this.state = {
      weight: 0,
      height: 0,
      bmi: {}
     };
  }

  getBMI()
  {
          let weight=this.state.weight
          let height=(this.state.height/100)
          let bmi= weight / (height * height);
          let message="";
          let color="#fff";
          if(bmi <= 15) {
              message= "کمبود وزن بسیار شدید";
              color="#f6ff00"
          }
          else if(bmi > 15 && bmi <= 16) {
              message= "کمبود وزن شدید";
              color="#dfff02"
          }
          else if(bmi > 16 && bmi <= 18.5) {
              message= "دارای کمبود وزن هستید";
              color="#8fff01"

          }
          else if(bmi > 18.5 && bmi <= 25) {
              message="دارای وزن طبیعی و سلامت";
              color="#3bff00"
          }
          else if(bmi > 25 && bmi <= 30) {
              message="دارای اضافه وزن هستید";
              color="#ffb288"
          }
          else if(bmi > 30 && bmi <= 35) {
              message= "چاقی نوع اول (چاقی معمولی)";
              color="#ff6152"
          }
          else if(bmi > 35 && bmi <= 40) {
              message= "چاقی نوع دوم (چاقی شدید)";
              color="#ff3533"
          }
          else {
              message= "چاقی نوع سوم (چاقی بسیار شدید)";
              color="#ff000d"
          }
          this.setState({bmi:{message,color}})
  }


  render() {

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={[styles.cityInput,{backgroundColor:'transparent'}]}>
            <Text style={{alignItems: 'center',fontSize: 25, fontFamily: 'BYekan',}}>وزن: {Math.round(this.state.weight)}</Text>
            <Slider
              value={this.state.weight}
              onValueChange={weight => this.setState({ weight })}
              minimumValue={20}
              maximumValue={150}
              style={{width: 200}}
            />
            <Text style={{alignItems: 'center',fontSize: 25, fontFamily: 'BYekan',}}>قد: {Math.round(this.state.height)}</Text>
            <Slider
              value={this.state.height}
              onValueChange={height => this.setState({ height })}
              minimumValue={100}
              maximumValue={250}
              style={{width: 200}}
            />
          </View>
          <View style={[styles.cityInput,{backgroundColor:'transparent'}]}>
            <Button
              title="محاسبه BMI و قد و وزن مناسب"
              type="solid"
              raised={true}
              onPress={()=>{this.getBMI()}}
              buttonStyle={{
                borderRadius:20,
                backgroundColor:'#f88c8c'
                }}
              containerStyle={{
                width:200,
                alignSelf:'center',
              }}
              titleStyle={{fontSize: 15,fontFamily: 'BYekan',}}

            />
          </View>
          <View style={[styles.ViewCityTitleAndAzanTimes,{backgroundColor: this.state.bmi.color}]}>

            <Text style={{
                  fontSize: 20,
                  fontFamily: 'BYekan',
                  alignSelf:'center',
                  color: 'black',
                  }}>
                  {this.state.bmi.message}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  rowComponent: {
    alignItems: 'stretch',
  },
  cityInput:{
    flex:2,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center',
    marginVertical: 40,
    paddingHorizontal: 40

  },
  ViewCityTitleAndAzanTimes:{
    flex:4,
    backgroundColor: '#8ddbf9',
    paddingHorizontal: 40,
    paddingVertical: 30,
    marginTop: 20,
    marginHorizontal: 30,
    borderRadius: 15,
    borderWidth:1,
  },
  cityTitle:{
    flex: 2,
    backgroundColor: '#f69ed7',
    justifyContent:'center',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,

  },
  azanTimesText:{
    flex: 7,
    backgroundColor: 'yellow',
    flexDirection: 'row-reverse',

  },
  timesTitleView:{
    flex: 1,
    backgroundColor: 'gray',
    borderBottomEndRadius: 20,
    paddingRight: 20
  },
  timesNumberView:{
    flex: 1,
    backgroundColor: '#f9c4e7',
    borderBottomStartRadius: 20,
  },
  timesTitle:{
    fontSize: 20,
    fontFamily: 'BYekan',
    color: 'white',
    textAlign: 'left'
  },
  timesNumber:{
    fontSize: 20,
    fontFamily: 'BYekan',
    alignSelf:'center',
    color: 'white',

  },
  colomn: {
    flex: 1,
    backgroundColor: 'orange',
  },
});
