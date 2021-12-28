/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  ActivityIndicator,

  } from 'react-native';


  import Api from '../libs/api';


type Props = {};
export default class Carbohydrates extends Component<Props> {

  constructor() {
    super();

    this.state = {
      dataSource: null
    };


    this.getCarbohydrates();
  }


  getCarbohydrates()
  {
      Api.get('carbohydrate')
      .then(dataSource=>{
        this.setState({dataSource})
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
                source={require('./../assets/images/carbohydrate.png')} />
            </View>
          </View>
          <View style={[styles.currencyMotherBlockStyle,{backgroundColor:'transparent'}]}>
            <View style={{
                backgroundColor: 'rgba(247, 128, 128,0.7)',
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
                  <Text style={[styles.buttonTextItem,{color:'white'}]}  >مقدار</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={[styles.buttonTextItem,{color:'white'}]}  >نام ماده غذایی</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.currencyView}>
          {this.state.dataSource ?
            <FlatList
                  keyExtractor={(item, index) => index.toString()}
                  data={this.state.dataSource}
                  renderItem={({ item }) =>
                        <View style={styles.currencyMotherBlockStyle}>
                          <View style={styles.currencyChildBlockStyle}>
                            <View style={{ flex:1 ,flexDirection: 'row'}}>
                              <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={styles.buttonTextItem}  >{item.meghdar}</Text>
                              </View>
                              <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={styles.buttonTextItem}  >{item.madeh}</Text>
                              </View>
                            </View>
                          </View>
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
    fontSize: 15,
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
