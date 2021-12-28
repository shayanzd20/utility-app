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
  ActivityIndicator,

  } from 'react-native';
  import { Button } from 'react-native-elements';

  import Api from '../libs/api';

type Props = {};
export default class Faal extends Component<Props> {

  constructor() {
    super();

    this.state = {
      faalText: "",
      faalAudio: "",
      indicatorStatus: true
     };

  }


  getFaal()
  {
    this.setState({
        indicatorStatus: false
      })
    return Api.get('getfal').then(data=>{
        this.setState({
            faalText: data.poem,
            indicatorStatus: true
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
        source={require('./../assets/images/hafez.png')} />
        </View>
        <View style={styles.buttonView}>
        <Button
        title="نیت کن کلیک کن"
        type="solid"
        raised={true}
        onPress={()=>{this.getFaal()}}
        buttonStyle={{
          width:200,
          backgroundColor: '#a0d699',
          borderRadius:7,
          }}
          containerStyle={{
            width:200,
            alignSelf:'center',
            marginTop: 10,

            }}
            loadingProps={<ActivityIndicator size="large" color="#0000ff" />}
            loading={!this.state.indicatorStatus}
            titleStyle={{fontSize: 15,fontFamily: 'BYekan',}}
            />
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
    justifyContent: 'center',

  },
  textView:{
    flex:2,
    
    padding: 20,

  },
  poemText:{
    fontSize: 16,
    fontFamily: 'BYekan',
    borderColor: 'black',
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
  },

});
