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
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  ActivityIndicator,
  ToastAndroid
  } from 'react-native';

  import Selective from '../components/Selective';

  import Api from '../libs/api';


type Props = {};
export default class CarsPrice extends Component<Props> {

  constructor() {
    super();

    this.state = {
      carsAndBrands: null,
      dataSource: null,
      carsBrand: [],
      showCars: false,
      indicatorStatus: false,
    };

    this.getCars();
  }


  getCars()
  {
      Api.post('getprices')
      .then(data=>{

        console.log("data.cars in getcars::",data.cars);
        if(data.cars.length > 0)
        {
          this.setState({carsAndBrands: data.cars,  indicatorStatus: true})
          let i = 1;
          for(var key in data.cars)
          {
            this.state.carsBrand.push({key:i,label:key})
            i++;
          }
        }else{
          ToastAndroid.showWithGravityAndOffset(
            'در حال حاضر قیمت ها بروز رسانی نشده اند. لطفا بعدا مجددا تلاش کنید',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
        }

      }).catch(er=>{

        console.log("er in getcars::",er);

      });
  }

getCarsList(brand)
{
  this.setState({dataSource : this.state.carsAndBrands[brand]});
}

  render() {
    return (
      <View style={styles.container}>
      {this.state.showCars ?
        <Selective
          show={this.state.showCars}
          data={this.state.carsBrand}
          rowColor="#afc3f9"
          onChange={(option)=>{this.getCarsList(option.label);this.setState({showCars: false})}}
        /> : null}

          <View style={styles.rows}>
          <View style={[styles.titleSectionView,{backgroundColor:'transparent'}]}>
          <View style={[styles.titleLogoView,{backgroundColor:'transparent'}]}>
              <Image style={styles.logoImage}
              source={require('./../assets/images/carprice.png')} />
          </View>
          <View style={{backgroundColor:'transparent', marginVertical: 10}}>
          {this.state.indicatorStatus ?
          <TouchableOpacity onPress={()=>{this.setState({showCars:true});setTimeout(()=>this.setState({showTypes: true}),1200)}}>
            <View style={{
            backgroundColor: '#cccccc',
            borderRadius:5,
            height: 30,
            justifyContent: 'center',
            }}>
              <Text style={{fontFamily: 'BYekan', fontSize:15, alignSelf: 'center'}}>مدل ماشین مورد نظر را وارد کنید</Text>
            </View>
          </TouchableOpacity>
          : <View style={{ paddingTop: 30}}><ActivityIndicator size={60} color="#0000ff" /></View>}

          </View>
          </View>
          {this.state.dataSource ?
            <View style={styles.currencyView}>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={this.state.dataSource}
                ListHeaderComponent={
              <View style={[styles.currencyMotherBlockStyle,{backgroundColor:'transparent'}]}>
                <View style={{
                  backgroundColor: '#219651',
                  marginVertical: 7,
                  marginLeft: 15,
                  marginRight: 15,
                  height:50,
                  paddingVertical: 5,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  }}>
                    <View style={{ flex:1 ,flexDirection: 'row'}}>
                      <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={[styles.buttonTextItem,{color:'white'}]}  >قیمت کارخانه</Text>
                      </View>
                      <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={[styles.buttonTextItem,{color:'white'}]}  >قیمت بازار</Text>
                      </View>
                      <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={[styles.buttonTextItem,{color:'white'}]}  >خودرو</Text>
                      </View>
                    </View>
                  </View>
                </View>
            }
            renderItem={({ item }) =>
            <View style={styles.currencyMotherBlockStyle}>
              <View style={styles.currencyChildBlockStyle}>
                <View style={{ flex:1 ,flexDirection: 'row'}}>
                  <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.buttonTextItem}  >{item["قیمت کارخانه"]}</Text>
                  </View>
                  <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.buttonTextItem}  >{item["قیمت بازار"]}</Text>
                  </View>
                  <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={[styles.buttonTextItem,{fontSize:15,textAlign:'center'}]}  >{item["خودرو"]}</Text>
                  </View>
                </View>
              </View>
            </View>
          }
          />
            </View>
            : null }
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rows: {
    flex: 1,
    flexDirection: 'column',
  },
  titleSectionView:{
    flex:2.5 ,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flexDirection:'column',
  },
  titleLogoView:{
  },
  logoView:{
    flex:1
  },
  logoImage:{
    resizeMode: 'contain',
  },
  titleView:{
    flex:1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  title:{
    fontFamily: 'BYekan',
    fontSize: 20,
    alignSelf: 'center'
  },
  currencyView:{
    flex:7,
  },
  currencyMotherBlockStyle: {
    flex: 1,
  },
  currencyChildBlockStyle: {
    backgroundColor: '#9effbb',
    marginVertical: 7,
    marginLeft: 15,
    marginRight: 15,
    paddingVertical: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currencyFlagStyle: {
    position: 'absolute',
    width: 45,
    height: 45,
    top: 3,
    right: 3,
    borderColor:'#BABABA',
    borderWidth:1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextItem: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'BYekan',
  },

});
