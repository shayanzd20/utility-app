/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  ActivityIndicator,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {styles} from "./styles/Metro.css"
import {WebView} from "react-native-webview";
type Props = {};
export default class Metro extends Component<Props> {

  constructor() {
    super();

    this.state = {
      token: null,
     };

     AsyncStorage.getItem('token', (err, result) => {
       if(result)
       {
           this.setState({token: result});
       }
     });
  }

    render() {
        return (
          <View style={{flex:1}}>
          {this.state.token ?
              <WebView
                source={{uri: 'http://metro.tehran.ir/Default.aspx?tabid=85'}}
                style={{overflow:'hidden'}}
                scalesPageToFit={true}
                javaScriptEnabled={true}
                renderLoading={()=>{return <View style={{ paddingTop: Dimensions.get("window").height/3}}><ActivityIndicator size={80} color="#0000ff" /></View>}}
                startInLoadingState
                />
            : <View style={{ paddingTop: 30}}><ActivityIndicator size={60} color="#0000ff" /></View>}
          </View>
        );
    }
}
