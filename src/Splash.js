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
  ImageBackground,
  ActivityIndicator,
  BackHandler,
  ToastAndroid,
  // Button
  } from 'react-native';

  // import TextField from 'react-native-md-textinput';
  import { TextField } from 'react-native-material-textfield';
  import { Input,Button } from 'react-native-elements';
  import { Actions } from 'react-native-router-flux';
  import AsyncStorage from '@react-native-community/async-storage';


  import Api from '../libs/api';
  import AlertMessage from '../libs/msg';

  const widthWindows = Dimensions.get('window').width;
  const heightWindows = Dimensions.get('window').height;

type Props = {};
export default class Splash extends Component<Props> {

  constructor() {
    super();

     // Actions.calories();
    this.state = {
      number: null,
      code: "",
      verificationStatus: false,
      indicatorStatus: false
    };
      AsyncStorage.getItem('token', (err, result) => {
          if(result==null)
          {
              Actions.replace('login');
          }else{
              Actions.replace('menu');
          }
      });
  }


    componentWillMount() {
      // back button handler
      BackHandler.addEventListener('hardwareBackPress', () => {
        return true;
      });
    }


  render() {
    return (
      <View style={styles.container}>
          <ImageBackground style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            resizeMode: 'cover',
            }}
            source={require('./../assets/images/splash.png')}>
          </ImageBackground>
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
    backgroundColor: '#c6c6c6',
    width: widthWindows/1.5,
    borderRadius: 10,
    padding: 5,
    flexDirection: 'row',
    alignContent: 'space-between',
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
    
  },
  currencyMotherBlockStyle: {
    flex: 1,
    
  },
  currencyChildBlockStyle: {
    
    backgroundColor: '#dc9af4',
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
    fontSize: 20,
    color: 'black',
    fontFamily: 'BYekan',
  },

});
