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
  ToastAndroid

  // Button
  } from 'react-native';
  import { Input,Button, ListItem } from 'react-native-elements';

  import Api from '../libs/api';

  const widthWindows = Dimensions.get('window').width;
  const heightWindows = Dimensions.get('window').height;

type Props = {};
export default class CurrencyComponent extends Component<Props> {

  constructor() {
    super();

    this.state = {
      indicatorStatus:false,
      currencyPrices: [],

    };


    this.getcurrency();
  }


  getcurrency()
  {
      Api.post('getprices')
      .then(data=>{

        if(data.currency.length > 0)
        {
          let i = 1;
          let status=null;
          for(var key in data.currency)
          {
            if(data.currency[key]["تغییر"] && data.currency[key]["تغییر"].indexOf("low")>0)
            {
              status = "down";
            }
            if(data.currency[key]["تغییر"] && data.currency[key]["تغییر"].indexOf("high")>0)
            {
              status = "up";
            }
            this.state.currencyPrices.push({key:i.toString(),label:data.currency[key]["عنوان"],status:status,price:data.currency[key]["قیمت"],...data.currency[key]})
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
                source={require('./../assets/images/currency_logo.png')} />
            </View>
          </View>
          <View style={styles.currencyView}>
          {this.state.indicatorStatus ?
                <FlatList
                  keyExtractor={(item, index) => index.toString()}
                  data={this.state.currencyPrices}
                  renderItem={({ item }) =>
                        <View style={styles.currencyMotherBlockStyle}>
                          <View style={styles.currencyChildBlockStyle}>
                            <View style={{ flex:1 ,flexDirection: 'row'}}>
                              <View style={{ flex: 1, backgroundColor: 'transparent' , paddingLeft: 5}}>
                                <Text style={styles.buttonTextItem}  >{item["قیمت"]}</Text>
                              </View>
                              <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                                {item.status ? <Image style={{width: 20, height:20, transform:   item.status == 'up' ? [{ rotate: '0deg'}] : [{ rotate: '180deg'}]}} source={ item.status == 'up' ? require('./../assets/images/Arrow-Up.png'): require('./../assets/images/Red_Arrow_Up.png') }/> : null}
                              </View>
                              <View style={{ flex: 1.5, backgroundColor: 'transparent'}}>
                                <Text style={styles.buttonTextItem}  >{item["عنوان"]}</Text>
                              </View>
                            </View>
                          </View>
                          <Image source={{ uri: item.image}} style={styles.currencyFlagStyle}/>
                        </View>
                      }
                />
                : <View style={{ paddingTop: 30}}><ActivityIndicator size={60} color="#0000ff" /></View>}

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
    
    backgroundColor: 'rgba(255, 201, 201,0.7)',
    marginVertical: 7,
    marginLeft: 5,
    marginRight: 15,
    
    paddingRight: 50,
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
