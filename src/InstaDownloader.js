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
  Linking,
  ActivityIndicator,
  TextInput
  } from 'react-native';
  import {WebView} from "react-native-webview";

  import Icon from 'react-native-vector-icons/FontAwesome';
  import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

  import { Input,Button,Slider } from 'react-native-elements';

  import Api from '../libs/api';

type Props = {};
export default class InstaDownloader extends Component<Props> {

  constructor() {
    super();

    this.state = {
      instagramResult: null,
      instagramUrl: null,
      indicatorStatus: false

     };
  }


  getInstagram()
  {
    this.setState({
        indicatorStatus: true
      })
    Api.post('instadownloader',{url: this.state.instagramUrl})
    .then((result)=>
    {
      this.setState({
        instagramResult: result,
        indicatorStatus: false
      })
    })
    .catch((err)=>
    {
    })
  }

  gotoWebsite(url)
  {
    Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
      } else {
        return Linking.openURL(url);
      }
    })
    .catch((err) => console.error('An error occurred', err));
  }


  render() {
    const widthWindows = Dimensions.get('window').width;
    const heightWindows = Dimensions.get('window').height;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center',flexDirection: 'column'}}>
            <View  style={{
              flex: 1,
              padding: 30,
              flexDirection: 'column',
              justifyContent: 'center',
              }}>
              <Image style={{
                height: 100,
                resizeMode: 'contain',
                alignSelf:'center',

              }}
              source={require('./../assets/images/instagram.png')} />
            <Input
                placeholder='لینک عکس یا فیلم کپی شده را اینجا وارد کنید'
                onChangeText={(instagramUrl) => this.setState({instagramUrl})}
                containerStyle={{
                  alignItems:'center',
                  width: Dimensions.get('window').height/2,
                  height: 40,
                  }}
                labelStyle={{ fontFamily: 'BYekan'}}
                inputStyle={{
                  fontSize: 15,
                  fontFamily: 'BYekan',
                  textAlign: 'center'
                  }}
                inputContainerStyle={{
                  backgroundColor:'#e41f84',
                  elevation:0.2,
                  borderRadius:20,
                  marginTop:10,
                  width: Dimensions.get('window').height/2,
                  height: 40,
                  }}
            />
              <Button
              title="نمایش"
              type="solid"
              raised={true}
              onPress={()=>{this.getInstagram()}}
              buttonStyle={{
                width:150,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#b8289c',
              }}
              containerStyle={{
                width:150,
                marginTop:15,
                alignSelf:'center',
                borderRadius: 20,
                backgroundColor: '#b8289c',
              }}
              titleStyle={{fontSize: 15,fontFamily: 'BYekan',}}
              loadingProps={<ActivityIndicator size="large" color="#0000ff" />}
              loading={this.state.indicatorStatus}
            />
            </View>
            <View style={{
              padding: 10,
              width: Dimensions.get('window').width,
              flex: 5
              }}>
              {this.state.instagramResult ?
              <WebView
                source={{uri: this.state.instagramResult ? this.state.instagramResult.link : 'https://instagram.com'}}
                style={{
                  padding:10,
                  width:Dimensions.get('window').width,
                  height:Dimensions.get('window').width,
                  resizeMode: 'contain',
                  }}
              />
              : null }
              {this.state.instagramResult ?
                <TextInput
                multiline={true}
                style={{
                  fontSize: 15,
                  marginTop: 10,
                  fontFamily: 'BYekan',
                  borderColor: 'black',
                  padding: 20,
                  borderRadius: 10,
                  borderWidth: 1,
                  }}
                  value={this.state.instagramResult.title}
                  />
            : null}
            {this.state.instagramResult ?
              <Button
              title="دانلود"
              type="solid"
              raised={true}
              onPress={()=> this.gotoWebsite(this.state.instagramResult.link)}
              buttonStyle={{
                width:200,
                borderRadius: 20,
                backgroundColor: '#b8289c'}}
              containerStyle={{
                width:200,
                marginTop:10,
                alignSelf:'center',
                borderRadius: 10,
                backgroundColor: '#b8289c',


              }}
              titleStyle={{fontSize: 20,fontFamily: 'BYekan',}}
            />
          : null}
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
    justifyContent: 'center',
    alignItems: 'center',
  },

});
