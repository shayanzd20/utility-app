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
  import { Input,Button, ListItem } from 'react-native-elements';

  import Api from '../libs/api';

type Props = {};
export default class Corrector extends Component<Props> {

  constructor() {
    super();

    this.state = {
      textInputValue: '',
      outputText: ''
     };

  }

  getCorrectText()
  {
    Api.post('corrector',{text:this.state.textInputValue})
    .then((result)=>{
      this.setState({outputText: result.correct})
      })
      .catch((err)=>{
        })
  }


  render() {

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={[styles.cityInput,{backgroundColor:'transparent'}]}>
            <Text style={{ fontSize: 15, fontFamily:'BYekan'}}>ابتدا متن خود را در کادر وارد کنید سپس با زدن دکمه غلطگیر متن تصحیح شده را دریافت کند</Text>
          </View>
          <View style={[styles.cityInput,{backgroundColor:'transparent',marginVertical: 40}]}>
            <TextInput
              placeholder='متن خود را اینجا وارد کنید'
              style={{
                fontSize: 15,
                fontFamily: 'BYekan',
                backgroundColor:'#b5e8fb',
                borderRadius:10,
                padding: 10,
                height: Dimensions.get('window').width/3,
                width: Dimensions.get('window').width/1.5,
                }}
                multiline={true}
              onChangeText={(textInputValue) => this.setState({textInputValue})}

            />
          </View>
          <View style={[styles.cityInput,{backgroundColor:'transparent'}]}>
            <Button
              title="غلط گیر"
              type="solid"
              raised={true}
              onPress={()=>{this.getCorrectText()}}
              buttonStyle={{
                width:200,
                borderRadius:20,
                backgroundColor:'#8ddbf9'
                }}
              containerStyle={{
                width:200,
                alignSelf:'center',
              }}
              titleStyle={{fontSize: 15,fontFamily: 'BYekan',}}

            />
          </View>
          {this.state.outputText ? <View style={styles.ViewCityTitleAndAzanTimes}>
            <Text style={{
                  fontSize: 15,
                  fontFamily: 'BYekan',
                  alignSelf:'center',
                  }}>
                  {this.state.outputText}
            </Text>
          </View>
        : null}

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
    marginVertical: 10,
    paddingHorizontal: 40

  },
  ViewCityTitleAndAzanTimes:{
    flex:4,
    backgroundColor: '#8ddbf9',
    paddingHorizontal: 40,
    paddingBottom: 40,
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
    fontSize: 15,
    fontFamily: 'BYekan',
    color: 'white',
    textAlign: 'left'
  },
  timesNumber:{
    fontSize: 15,
    fontFamily: 'BYekan',
    alignSelf:'center',
    color: 'white',

  },
  colomn: {
    flex: 1,
    backgroundColor: 'orange',
  },
});
