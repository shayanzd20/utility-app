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
  View,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
  } from 'react-native';
  import { Input,Button } from 'react-native-elements';
  import AsyncStorage from '@react-native-community/async-storage';
  import ImagePicker from 'react-native-image-picker'


  import Api from '../libs/api';

  const widthWindows = Dimensions.get('window').width;

type Props = {};
export default class Profile extends Component<Props> {

  constructor() {
    super();
    this.state = {
      number: "",
      name: "",
      token: "",
      indicatorStatus: false,
      photo: null,

    };

    AsyncStorage.getItem('token', (err, result) => {
      if(result)
      {
        this.setState({token: result})
      }
    });

    AsyncStorage.getItem('number', (err, result)=>{
      if(result){
        this.setState({number: result})
      }
    });

    AsyncStorage.getItem('name', (err, result)=>{
      if(result){
        this.setState({name: result})
      }
    });

    AsyncStorage.getItem('photo', (err, result)=>{
      if(result){
        this.setState({photo: result})
      }
    });
  }


updateUser()
{

    Api.post('user/update',{name: this.state.name,mail: this.state.mail,number: this.state.number})
    .then(data=>{
      AsyncStorage.setItem('number', data.phoneNumber);
      AsyncStorage.setItem('name', data.name);

      this.setState({number: data.phoneNumber,name: data.name,indicatorStatus: true})
    }).catch(er=>{
    });
}

handleChoosePhoto = () => {
   const options = {
     noData: true,
   }
   ImagePicker.launchImageLibrary(options, response => {
     if (response.uri) {
       this.setState({ photo: response.uri })
       AsyncStorage.setItem('photo', response.uri, () => {
       });
     }
   })
 }


 createFormData = (photo, body) => {
  const data = new FormData();

  data.append("photo", {
    name: photo.fileName,
    type: photo.type,
    uri:
      Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
  });

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  return data;
};

handleUploadPhoto = () => {

  AsyncStorage.getItem('photo', (result)=>{
  });
  fetch("http://api.karrahandaz-app.ir/user/profilePic", {
    method: "POST",
    headers:{
      'Authorization': 'JWT '+this.state.token,
    },
    body: this.createFormData(this.state.photo, { userId: "123" })
  })
    .then(response => response.json())
    .then(response => {
      alert("با موفقیت باگزاری شد!");
    })
    .catch(error => {
      alert("نا موفق!");
    });
};


  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
          <ImageBackground style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            resizeMode: 'cover',
          }}
          source={require('./../assets/images/profile.png')}>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <TouchableOpacity onPress={this.handleChoosePhoto}>
                  {this.state.photo ?
                    <View style={{
                      width: Dimensions.get('window').width/2.5,
                      height: Dimensions.get('window').width/2.5,
                      top: (Dimensions.get('window').height/18)*2,
                      marginBottom: 30,
                      resizeMode: 'contain',
                      borderWidth: 3,
                      borderColor: 'white',
                      borderRadius: 100,
                      overflow: 'hidden',

                      }}
                      >
                      <Image style={{
                        width: Dimensions.get('window').width/2.5,
                        height: Dimensions.get('window').width/2.5,
                        resizeMode: 'cover',
                      }}
                      source={{uri: this.state.photo}}/>
                    </View>
                    :
                    <Image style={{
                      width: Dimensions.get('window').width/2.5,
                      height: Dimensions.get('window').height/2.5,
                      resizeMode: 'contain',
                      top: (Dimensions.get('window').height/18)*2,
                    }}
                    source={require('./../assets/images/profile-pic-frame.png')}/>}


                  </TouchableOpacity>
                <Input
                  containerStyle={{
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'gray',
                  width: 200,
                  height: 50,
                  marginTop: 30,
                  margin: 10,
                  backgroundColor: 'white',
                  top: Dimensions.get('window').height/14,
                  }}
                  inputStyle={{fontFamily: 'BYekan',fontSize: 17}}

                  rightIcon={{ type: 'font-awesome', name: 'user-o',color: 'gray' }}
                  onChangeText={(name) => this.setState({ name })}
                  placeholder='نام و نام خانوادگی'
                  value={this.state.name}
                  />
                <Input
                  containerStyle={{
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'gray',
                  width: 200,
                  height: 50,
                  marginBottom: 10,
                  backgroundColor: 'white',
                  top: Dimensions.get('window').height/14,
                  }}
                  inputStyle={{fontFamily: 'BYekan',fontSize: 17}}
                  rightIcon={{ type: 'foundation', name: 'mail',color: 'gray' }}
                  onChangeText={(mail) => this.setState({ mail })}
                  placeholder='ایمیل'
                  value={this.state.mail}
                  />
                <Input
                  containerStyle={{
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'gray',
                  width: 200,
                  height: 50,
                  backgroundColor: 'white',
                  marginBottom: 10,
                  top: Dimensions.get('window').height/14,
                  }}
                  inputStyle={{fontFamily: 'BYekan',fontSize: 17}}
                  rightIcon={{ type: 'foundation', name: 'telephone',color: 'gray' }}
                  onChangeText={(number) => this.setState({ number })}
                  placeholder='شماره همراه'
                  value={this.state.number}
                  />
                  <Button
                        title="بروز رسانی"
                        type="solid"
                        raised={true}
                        onPress={()=>{this.updateUser()}}
                        buttonStyle={{
                          width:150,
                          borderRadius:20,
                          backgroundColor:'#FFFFFF',

                          }}
                        containerStyle={{
                          width:150,
                          top: Dimensions.get('window').height/10,
                        }}
                        titleStyle={{fontSize: 25,fontFamily: 'BYekan',color:'#000000'}}
                        loadingProps={<ActivityIndicator size="large" color="#0060f1" />}
                        loading={this.state.indicatorStatus}
                      />
                </View>
          </ImageBackground>
        </ScrollView>
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
    fontSize: 20,
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
    color: 'gray',
    fontFamily: 'BYekan',
  },

});
