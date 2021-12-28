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
  FlatList,
  ActivityIndicator,
  ToastAndroid,
  Alert,

  } from 'react-native';

  import { Input,Button, ListItem } from 'react-native-elements';
  import ModalSelector from 'react-native-modal-selector'
  import DisplayModal from '../components/Modal';
  import {WebView} from "react-native-webview";
  import Selective from '../components/Selective';

  import Api from '../libs/api';

  const widthWindows = Dimensions.get('window').width;
  const heightWindows = Dimensions.get('window').height;

type Props = {};
export default class Charge extends Component<Props> {

  constructor() {
    super();

    this.state = {
      charge: [
        {key:1,label:'20000',type: '20000'},
        {key:2,label:'50000',type: '50000'},
        {key:3,label:'100000',type: '100000'},
      ],
      types: [
        {key:1,label:'اعتباری',type: '1'},
        {key:2,label:'دائمی',type: '2'},
      ],
      operator: [
        {key:1,label:'ایرانسل',type: '1'},
        {key:2,label:'همراه اول',type: '2'},
        {key:2,label:'رایتل',type: '3'},
      ],
      dataSource: null,
      indicatorStatus: false,
      numberValue: "",
      textInputValue: "",
      bankLink: null,
      showOperator: false,
      showTypes: false,
      showCharge: false,
      showScrollView: true,
      labelOperator: null,
      labelType: null,
      labelCharge: null,
      valueOperator: null,
      valueType: null,
      valueCharge: null,
      serviceId: null,
      buttonIndicatorStatus: false

    };

  }


  getLink()
  {
    if(this.state.numberValue){
      Api.post('getChargeLink',{number: this.state.numberValue, amount: this.state.valueCharge, ServiceId: 5, Params: this.state.serviceId})
      .then(data=>{
        console.log("data2:",data)
        if(data)
        {
          console.log("data.Result.Url:",JSON.parse(data.Result).Url)
          this.setState({dataSource: data,indicatorStatus: false, bankLink: JSON.parse(data.Result).Url})
        }else{
          ToastAndroid.show('خطایی رخ داده', ToastAndroid.SHORT);

        }

      }).catch(er=>{
        console.log("er:",er);
        ToastAndroid.show('خطایی رخ داده', ToastAndroid.SHORT);

      });
    }else{
      ToastAndroid.show('شماره تلفن خود را وارد کنید', ToastAndroid.SHORT);
    }

  }

  getList()
  {          this.setState({buttonIndicatorStatus: true})

      Api.post('getInternetPackages',{operator: this.state.valueOperator})
      .then(data=>{
        console.log("data1 in getInternetPackages:",data)
        if(data)
        {
          console.log("data.Result.Url:",data)
          this.setState({dataSource: data,indicatorStatus: true,buttonIndicatorStatus: false})
        }else{
          ToastAndroid.show('خطایی رخ داده', ToastAndroid.SHORT);

        }

      }).catch(er=>{
        console.log("er:",er);
        ToastAndroid.show('خطایی رخ داده', ToastAndroid.SHORT);

      });
  }


  renderWebView()
  {
    return(
      <WebView
          source={{uri: this.state.bankLink}}
          style={{
            overflow:'hidden',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            backgroundColor:'transparent'
        }}
          scalesPageToFit={true}
          javaScriptEnabled={true}
          renderLoading={()=>{return <View style={{ paddingTop: Dimensions.get("window").height/3}}><ActivityIndicator size={80} color="#0000ff" /></View>}}
          startInLoadingState
      />
      )
  }

  render() {

    return (
      <View style={styles.container}>
      {this.state.showOperator &&
        <Selective
          show={this.state.showOperator}
          data={this.state.operator}
          rowColor="#afc3f9"
          onChange={(option)=>{
              console.log("options:",option)
            ;
            this.setState({showScrollView:true,showOperator: false,labelOperator: option.label, valueOperator: option.type,indicatorStatus: false})
            }}
        />}
      {this.state.bankLink ?
        this.renderWebView()
        :
        this.state.showScrollView ?
          <ScrollView>
            <View style={styles.rows}>
            <View style={[styles.titleSectionView,{backgroundColor:'transparent'}]}>
            <View style={[styles.titleLogoView,{backgroundColor:'transparent'}]}>
            <Image style={styles.logoImage}
            source={require('./../assets/images/signal.png')} />
            </View>
            <View style={[styles.cityInput,{backgroundColor:'transparent',marginVertical: 40}]}>
              <TextInput
                keyboardType={'numeric'}
                placeholder='شماره تلفن'
                style={{
                  justifyContent: 'center',
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
                  value={this.state.numberValue}
                onChangeText={(numberValue) => this.setState({numberValue})}

              />
              <TouchableOpacity onPress={()=> {
                  this.setState({showOperator: true})
                  setTimeout(()=>this.setState({showOperator: true, showScrollView: false}),1200)
              }
              }>
                <View style={{
                  justifyContent: 'center',
                  fontSize: 15,
                  fontFamily: 'BYekan',
                  backgroundColor:'#b3b3b3',
                  borderRadius:10,
                  padding: 10,
                  marginTop: 10,
                  width: Dimensions.get('window').height/3,
                  height: 40,
                }}>
                  <Text style={{fontFamily: 'BYekan', fontSize:15, alignSelf: 'center'}}>{this.state.labelOperator ? this.state.labelOperator:"نوع اپراتور"}</Text>
                </View>
              </TouchableOpacity>

            </View>
            <View style={[styles.cityInput,{backgroundColor:'transparent'}]}>
              <Button
                title="انتخاب بسته"
                type="solid"
                raised={true}
                onPress={()=>{this.getList()}}
                buttonStyle={{
                  width:150,
                  borderRadius:20,
                  backgroundColor:'#346b25'
                  }}
                containerStyle={{
                  width:150,
                  borderRadius:20,
                  alignSelf:'center',
                }}
                titleStyle={{fontSize: 15,fontFamily: 'BYekan',}}
                loading={this.state.buttonIndicatorStatus}
              />
            </View>
            </View>
            <View style={[styles.currencyMotherBlockStyle,{backgroundColor:'transparent'}]}>
            {this.state.indicatorStatus ?
                  <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.dataSource}
                    renderItem={({ item }) =>
                          <View style={styles.currencyMotherBlockStyle}>
                          <TouchableOpacity onPress={()=> {
                              this.setState({serviceId: item.ServiceID, valueCharge: item.ServicePrice,indicatorStatus: false})
                              console.log("item:",item)
                              Alert.alert(
                                null,
                                'لطفا برای پرداخت تایید کنید',
                                [
                                  {
                                    text: 'مخالفم',
                                    onPress: () => console.log('Cancel Pressed'),
                                    style: 'cancel',
                                  },
                                  {text: 'موافقم', onPress: () => this.getLink()},
                                ],
                                {cancelable: false},
                              );
                          }
                          }>
                            <View style={styles.currencyChildBlockStyle}>
                              <View style={{ flex:1 ,flexDirection: 'row'}}>
                                <View style={{ flex: 1, backgroundColor: 'transparent',marginRight: 40}}>
                                  <Text style={[styles.buttonTextItem, {backgroundColor: 'transparent'}]}  >{item.ServiceName}</Text>
                                </View>
                              </View>
                            </View>
                            { item.ProviderTitle ===  'ایرانسل'?
                            <Image source={require('./../assets/images/mtn.png')} style={styles.currencyFlagStyle}/>
                            : item.ProviderTitle ===  'همراه اول' ? <Image source={require('./../assets/images/mci.png')} style={styles.currencyFlagStyle}/>
                            : <Image source={require('./../assets/images/rightel.png')} style={styles.currencyFlagStyle}/> }
                            </TouchableOpacity>
                          </View>
                        }
                  />
                  : <View style={{ paddingTop: 30}}>{this.state.indicatorStatus ? <ActivityIndicator size={60} color="#f4b042" /> : null}</View>}



              </View>
              <View style={styles.currencyView}>

            </View>
            </View>
          </ScrollView> : null
        }
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
    backgroundColor:'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flexDirection:'column',
  },
  titleLogoView:{
    borderRadius: 10,
    padding: 5,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  logoView:{
    flex:1,
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
    backgroundColor: '#b3b3b3',
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
    fontSize: 15,
    color: 'black',
    fontFamily: 'BYekan',
  },

});
