/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  } from 'react-native';

  import { Button } from 'react-native-elements';

  import Api from '../libs/api';


type Props = {};
export default class QRCode extends Component<Props> {

  constructor() {
    super();

    this.state = {
      qrText: "",
      qrImage: null
     };
  }


  getQRCode()
  {

    Api.post('qrcreator',{text: this.state.textInputValue})
    .then(data=>{
      this.setState({qrImage: data.url})

    }).catch(er=>{
    });

  }

  render() {

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.colomn}>
            <View style={styles.inputView}>
              <TextInput
                placeholder='متن خود را وارد کنید'
                style={{
                  fontSize: 15,
                  fontFamily: 'BYekan',
                  backgroundColor:'#b3b3b3',
                  borderRadius:10,
                  padding: 10,
                  marginTop: 10,
                  width: Dimensions.get('window').height/3,
                  height: 40,
                  }}
                  multiline={true}
                  onChangeText={ (qrText) => this.setState({ qrText }) }
              />
            </View>
            <View style={styles.buttonView}>
              <Button
                title="کیو آر کد دریافت کن"
                type="solid"
                raised={true}
                onPress={()=>{this.getQRCode()}}
                buttonStyle={styles.buttonStyle}
                containerStyle={styles.buttonContainerStyle}
                titleStyle={{fontSize: 15,fontFamily: 'BYekan',}}
              />
            </View>
            <View style={styles.qrtView}>
            {this.state.qrImage ?
              <Image
                style={{width: 100, height: 100, borderRadius:10, borderWidth:5}}
                source={{uri: this.state.qrImage}}
              />
              :
              <Image
                style={{width: 100, height: 100, borderRadius:10, borderWidth:5}}
                source={require('./../assets/images/qr_default.png')}
              />}

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
  },
  colomn: {
    flex: 1,
    
    flexDirection: 'column',
  },
  inputView:{
    flex:2 ,
    
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  TextFieldLabelText:{
    fontFamily: 'BYekan',
    textAlign:'right',
  },
  TextFieldContainer:{
    backgroundColor: '#c4c8ce',
    width: ((Dimensions.get('window').width)/3)*2,
    borderRadius: 7,
    borderWidth:2,
    padding:10,
    paddingHorizontal:30,
  },
  TextFieldTitleText:{
    color: 'black',
    textAlign:'right',

  },
  buttonView:{
    flex:1 ,
    justifyContent: 'center',
    paddingHorizontal: Dimensions.get('window').width/4,
    padding: 10,

  },
  buttonStyle:{
    backgroundColor: '#8786fc',
    borderRadius:7,
  },
  buttonContainerStyle:
  {
    width:150,
    borderRadius:20,
    alignSelf:'center',
  },
  qrtView:{
    flex:3,
    
    alignItems: 'center',
    padding: 20,

  },
});
