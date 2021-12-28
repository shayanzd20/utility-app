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
  import {WebView} from "react-native-webview";
  import Icon from 'react-native-vector-icons/FontAwesome';
  import { Input,Button } from 'react-native-elements';

  import Api from '../libs/api';

type Props = {};
export default class Post extends Component<Props> {

  constructor() {
    super();

    this.state = {
     };
  }





  render() {

    return (
      <View style={styles.container}>
            <WebView
              source={{uri: 'http://newtracking.post.ir/'}}
              style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height,backgroundColor:'transparent'}}
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

});
