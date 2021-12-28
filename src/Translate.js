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
  ActivityIndicator,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome';
  import { Input,Button } from 'react-native-elements';
  import { WebView } from 'react-native-webview';

  import Api from '../libs/api';

type Props = {};
export default class Translate extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{uri: 'http://translate.google.com/?hl=fa'}}
          style={{overflow:'hidden', width: Dimensions.get('window').width, height: Dimensions.get('window').height,backgroundColor:'transparent'}}
          scalesPageToFit={true}
          javaScriptEnabled={true}
          renderLoading={()=>{return <View style={{ paddingTop: Dimensions.get("window").height/3}}><ActivityIndicator size={80} color="#0000ff" /></View>}}
          startInLoadingState
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
    // paddingTop:10
  },
  item: {
    // flex: 1,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    flexDirection: 'row',
  },
  imageItem:{
    left:0,
    resizeMode:'cover',
    overflow: 'hidden',
    width: 110,
    // width: '100%',
    height: 150

  },
  colomn: {
    flex: 1,
    backgroundColor: 'orange',
  },
  poemText: {
    fontSize: 25,
    fontFamily: 'BYekan',
  }
});
