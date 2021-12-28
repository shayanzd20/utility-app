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
  ActivityIndicator
  } from 'react-native';
  import AsyncStorage from '@react-native-community/async-storage';

  import Icon from 'react-native-vector-icons/FontAwesome';
  import { Input,Button } from 'react-native-elements';
  import {WebView} from "react-native-webview";

  import Api from '../libs/api';

type Props = {};
export default class Calendar extends Component<Props> {

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
                source={{uri: 'https://www.todaytime.ir/?calendar',headers: {"Authorization": "JWT "+this.state.token}}}
                style={{overflow:'hidden', width: Dimensions.get('window').width, height: Dimensions.get('window').height,backgroundColor:'transparent'}}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});
