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
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  ActivityIndicator,

  } from 'react-native';
  import Api from '../libs/api';

type Props = {};
export default class Faal extends Component<Props> {

  constructor() {
    super();
    // SoundPlayer.unmount();

    this.state = {
      faalText: "",
      faalAudio: "",
      indicatorStatus: true
     };

  }


  getFaal()
  {
    this.setState({
        // faalText: data.poem,
        indicatorStatus: false
        // faalAudio: data.mp3
      })
    return Api.get('getfal').then(data=>{
        this.setState({
            faalText: data.poem,
            indicatorStatus: true
            // faalAudio: data.mp3
          })

          try {
          // play the file tone.mp3
          // SoundPlayer.playSoundFile(data.mp3, 'mp3')

          // SoundPlayer.playUrl(data.mp3)
          } catch (e) {
          }
    }).catch(er=>{

    });
  }

  componentWillUnmount() {
    // SoundPlayer.unmount()
  }

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <View style={styles.colomn}>
        <View style={styles.hafezView}>
        <Image style={styles.hafezImage}
        source={require('./../assets/images/hafez1.png')} />
        </View>
        <View style={styles.buttonView}>
        {this.state.indicatorStatus ?
          <TouchableOpacity onLongPress={()=>{this.getFaal()}}>
            <Image style={{width: 100,height: 100,alignSelf: 'center',}}
            source={require('./../assets/images/finger.png')} />
          </TouchableOpacity>
          :
        <ActivityIndicator size="small" color="#0000ff" />}

        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20, }}>
          <Text style={{ fontSize: 15, fontFamily: 'BYekan'}}>انگشت خود را روی اسکنر قرار دهید</Text>
        </View>
        </View>
        <View style={styles.textView}>
        {this.state.faalText ? <Text style={styles.poemText}>{this.state.faalText}</Text> : null}
        </View>
        </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  colomn: {
    flex: 1,
    
    alignItems: 'center',
    flexDirection: 'column',
  },
  hafezView:{
    flex:2 ,
    justifyContent: 'center'
  },
  hafezImage:{
    height: (Dimensions.get('window').height/7)*2,
    resizeMode: 'contain',
  },
  buttonView:{
    flex:1 ,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',

  },
  textView:{
    flex:2,
    
    padding: 20,

  },
  poemText:{
    fontSize: 15,
    fontFamily: 'BYekan',
    borderColor: 'black',
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
  },

});
