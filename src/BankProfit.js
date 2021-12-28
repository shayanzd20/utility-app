/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Alert,ActivityIndicator, FlatList, Image, ImageBackground, Platform, StyleSheet, Text, View,ScrollView} from 'react-native';
import {styles} from "./styles/BankProfit.css"
import {WebView} from "react-native-webview";
import {Button, Icon, Input} from "react-native-elements";
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Api from "../libs/api";

type Props = {};
export default class Sudebank extends Component<Props> {
    state={
        mablaq:"",
        nerkh:"",
        ruz:"",
    };
    render() {
        return (
            <View style={{flex:1}}>
              <ScrollView>
                <View style={{flex:1,alignItems:'center',paddingTop:50}}>
                      <Image style={{width:100,height:100,marginBottom:50}}  source={require("../assets/images/sude-header.png")}/>
                      <Input
                          placeholder='مبلغ خود را به تومان وارد کنید'
                          onChangeText={(mablaq) => this.setState({mablaq})}
                          leftIcon={
                              <MIcon
                                  name='coin'
                                  size={25}
                                  color='black'
                              />
                          }
                          inputStyle={{
                            fontSize: 15,
                            fontFamily: 'BYekan',
                            paddingRight: 15,
                            }}
                          keyboardType='numeric'
                          containerStyle={{alignItems:'center'}}
                          inputContainerStyle={{backgroundColor:'#a3e4d9',elevation:0.2,borderRadius:50,width:'80%',height:30,margin:5}}
                      />
                      <Input
                          placeholder='نرخ سود روز شمار'
                          onChangeText={(nerkh) => this.setState({nerkh})}
                          leftIcon={
                              <MIcon
                                  name='percent'
                                  size={25}
                                  color='black'
                              />
                          }
                          inputStyle={{
                            fontSize: 15,
                            fontFamily: 'BYekan',
                            paddingRight: 15,
                            }}
                          keyboardType='numeric'
                          containerStyle={{alignItems:'center'}}
                          inputContainerStyle={{backgroundColor:'#a3e4d9',elevation:0.2,borderRadius:50,width:'80%',height:30,margin:5}}
                      />
                      <Input
                          placeholder='تعداد روز'
                          onChangeText={(ruz) => this.setState({ruz})}
                          leftIcon={
                              <MIcon
                                  name='calendar'
                                  size={25}
                                  color='black'
                              />
                          }
                          inputStyle={{
                            fontSize: 15,
                            fontFamily: 'BYekan',
                            paddingRight: 15,
                            }}
                          keyboardType='numeric'
                          containerStyle={{alignItems:'center'}}
                          inputContainerStyle={{backgroundColor:'#a3e4d9',elevation:0.2,borderRadius:50,width:'80%',height:30,margin:5}}
                      />
                      <Button
                        buttonStyle={{marginTop:10,backgroundColor:'#a3e4d9',paddingLeft:10,paddingRight:10,padding:2,margin:10}}
                        icon={
                            <MIcon
                                name="calculator"
                                size={15}
                                color="black"
                            />
                        }
                        onPress={()=>{
                            let soodehKol=parseInt(this.state.nerkh*this.state.ruz*(this.state.mablaq/365));
                            let soodehMahane=parseInt(soodehKol/(this.state.ruz/12));
                            let soodehRoozShomar=parseInt(soodehMahane/30);

                            Alert.alert(
                                "مقدار سود",
                              'سود کل :'+soodehKol+'\n'+'سود ماهانه :'+soodehMahane+'\n'+'سود روزشمار :'+soodehRoozShomar,
                                [
                                  { text: "باشه", onPress: () => console.log("OK Pressed") }
                                ],
                                { cancelable: false }
                              );
                        }}
                        titleStyle={{fontSize: 15,
                        fontFamily: 'BYekan',color:'black',marginLeft:5}}
                        title="محاسبه کن"
                    />
                </View>
              </ScrollView>
            </View>
        );
    }
}
