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
  TextInput,
  ListView,
  FlatList,
  ActivityIndicator,
  ToastAndroid,
  // Button
  } from 'react-native';

  import { Input,Button, ListItem } from 'react-native-elements';

  import Api from '../libs/api';

  const widthWindows = Dimensions.get('window').width;
  const heightWindows = Dimensions.get('window').height;

type Props = {};
export default class Gold extends Component<Props> {

  constructor() {
    super();

    this.state = {
      indicatorStatus:false,
      goldPrices: [],
    };

    this.getGold();
  }


  getGold()
  {
      Api.post('getprices')
      .then(data=>{

        if(data.golds.length > 0)
        {
          let i = 1;
          let status=null;
          for(var key in data.golds)
          {
            if(data.golds[key]["تغییر"] && data.golds[key]["تغییر"].indexOf("low")>0)
            {
              status = "down";
            }
            if(data.golds[key]["تغییر"] && data.golds[key]["تغییر"].indexOf("high")>0)
            {
              status = "up";
            }
            this.state.goldPrices.push({key:i.toString(),label:data.golds[key]["عنوان"],status:status,price:data.golds[key]["قیمت"],...data.golds[key]})
            i++;
          }
          this.setState({indicatorStatus:true})
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
      });
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rows}>
          <View style={styles.titleSectionView}>
            <View style={styles.titleLogoView}>
                <Image style={styles.logoImage}
                source={require('./../assets/images/gold.png')} />
            </View>
          </View>
          <View style={[styles.currencyMotherBlockStyle,{backgroundColor:'transparent'}]}>
            <View style={{
                backgroundColor: 'rgba(212,175,55,0.7)',
                marginVertical: 7,
                marginLeft: 15,
                marginRight: 15,
                height:50,
                // right: 0,
                // left: 0,
                // paddingRight: 50,
                paddingVertical: 5,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{ flex:1 ,flexDirection: 'row'}}>
                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={[styles.buttonTextItem,{color:'white'}]}  >قیمت</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={[styles.buttonTextItem,{color:'white'}]}  >تغییرات</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center',paddingRight: 30}}>
                  <Text style={[styles.buttonTextItem,{color:'white',backgroundColor: 'transparent'}]}  >فلز</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.currencyView}>
          {this.state.indicatorStatus ?
                <FlatList
                  keyExtractor={(item, index) => index.toString()}
                  data={this.state.goldPrices}
                  renderItem={({ item }) =>
                        <View style={styles.currencyMotherBlockStyle}>
                          <View style={styles.currencyChildBlockStyle}>
                            <View style={{ flex:1 ,flexDirection: 'row'}}>
                              <View style={{ flex: 1, backgroundColor: 'transparent' , paddingLeft: 5}}>
                                <Text style={[styles.buttonTextItem,{backgroundColor: 'transparent',fontSize: 15, textAlign: 'center'}]}  >{item.ServicePrice}</Text>
                              </View>
                              <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                                <Image style={{width: 20, height:20, transform:   item.status == 'up' ? [{ rotate: '0deg'}] : [{ rotate: '180deg'}]}} source={ item.status == 'up' ? require('./../assets/images/Arrow-Up.png'): require('./../assets/images/Red_Arrow_Up.png') }/>
                              </View>
                              <View style={{ flex: 1, backgroundColor: 'transparent'}}>
                                <Text style={[styles.buttonTextItem, {backgroundColor: 'transparent'}]}  >{item.label}</Text>
                              </View>
                            </View>
                          </View>
                          <Image source={require('./../assets/images/gold.png')} style={styles.currencyFlagStyle}/>
                        </View>
                      }
                />
                : <View style={{ paddingTop: 30}}><ActivityIndicator size={60} color="#f4b042" /></View>}

          </View>
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
    flex:2 ,
    
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
    fontSize: 40,
    alignSelf: 'center'
  },
  currencyView:{
    flex:7,
    paddingTop: 10,

    
  },
  currencyMotherBlockStyle: {
    flex: 1,
    
  },
  currencyChildBlockStyle: {
    
    // backgroundColor: 'rgba(99, 208, 250,0.7)',
    backgroundColor: 'rgba(250, 213, 99,0.7)',
    marginVertical: 7,
    marginLeft: 15,
    marginRight: 15,
    
    paddingRight: 50,
    paddingVertical: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currencyFlagStyle: {
    position: 'absolute',
    
    width: 35,
    height: 35,
    top: 3,
    right: 3,
    // borderColor:'#BABABA',
    // borderWidth:1,
    // borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextItem: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'BYekan',
  },

});
