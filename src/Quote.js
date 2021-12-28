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
  } from 'react-native';
  import Api from '../libs/api';

type Props = {};
export default class Quote extends Component<Props> {

  constructor() {
    super();

    this.state = {
      quote: ""
     };
    this.getQuote();
  }


  getQuote()
  {
    Api.get('sokhanan')
    .then((result)=>
    {
      this.setState({
        quote: result
      })
    })
    .catch((err)=>
    {
    })
  }



  render() {

    return (
      <View style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
          <View style={{ flex: 1 , backgroundColor: 'transparent'}}>
            <Image style={styles.logoImage} source={require('./../assets/images/quote_logo.png')} />
          </View>
          <View style={{
            flex: 0.5,
            alignItems: 'stretch',
            justifyContent: 'center',
            backgroundColor: 'transparent' }}>
            <Text style={{fontSize: 17, fontFamily: 'BYekan', alignSelf:'center'}}>{this.state.quote.author}</Text>
          </View>
          <View style={{
            flex: 2,
            paddingHorizontal: 50,
            backgroundColor: 'transparent' }}>
            <Text style={{fontSize: 17, fontFamily: 'BYekan', alignSelf:'center'}}>{this.state.quote.quotation}</Text>
          </View>
        </View>
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
  item: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  imageItem:{
    left:0,
    resizeMode:'cover',
    overflow: 'hidden',
    width: 110,
    height: 150

  },
  poemText: {
    fontSize: 25,
    fontFamily: 'BYekan',
  },
  logoImage:{
    resizeMode: 'contain',
    marginVertical: 20,
  },
});
