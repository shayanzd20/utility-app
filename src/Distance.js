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
  StyleSheet,
  Text,
  View,
  Dimensions,
  } from 'react-native';
  import AsyncStorage from '@react-native-community/async-storage';
import {styles} from "./styles/Distance.css"
import {WebView} from "react-native-webview";
type Props = {};
export default class Distance extends Component<Props> {

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


    sendPostMessage = () => setTimeout(() => {
        this.webView.postMessage('ًں¤‘ loaded')
    }, 100)

    render() {
        return (
          <View style={{flex:1}}>
          {this.state.token ?
            <WebView
              source={{uri: 'http://api.karrahandaz-app.ir/distance',headers: {"Authorization": "JWT "+this.state.token}}}
              style={{marginTop: 20,overflow:'hidden'}}
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
