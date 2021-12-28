/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Platform,
    ProgressBarAndroid,
    StyleSheet,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    View,Dimensions,
    WebView
} from 'react-native';
import styles from "./styles/Khalafi.css"
import Api from "../libs/api";
import {Input, Button} from "react-native-elements";
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {};
export default class Khalafi extends Component<Props> {
    // khalafies= [{"desc":"تسليمي","type":"عدم توجه به اخطار و تذكر پليس","code":"2165","amount":"200000","position":"مدرس","city":"تهران","date":"1396/08/27 _ 15:00","serial":"8633779550","barcode":"36143868","plaque":" ايران 66 ــ  235ج71","paymentid":"40024661","billid":"3377955000290","paymentInfo":{}},{"desc":"تسليمي","type":"همراه نداشتن گواهي يا برچسب معتبر معاينه","code":"2163","amount":"200000","position":"مدرس","city":"تهران","date":"1396/08/27 _ 15:00","serial":"8633779550","barcode":"36143868","plaque":" ايران 66 ــ  235ج71","paymentid":"40024661","billid":"3377955000290","paymentInfo":{}},{"desc":"الصاقي","type":"هرنوع توقف كه منجر به سد معبر و يا اختلا","code":"2101","amount":"600000","position":"خيابان پناهي نيا","city":"تهران","date":"1395/10/13 _ 18:11","serial":"5609645875","barcode":"36143868","plaque":" ايران 66 ــ  235ج71","paymentid":"60029199","billid":"964587500298","paymentInfo":{}},{"desc":"دوبرگي","type":"دور زدن در محل ممنوع","code":"2013","amount":"750000","position":"هروي","city":"تهران","date":"1395/06/15 _ 19:05","serial":"7601067366","barcode":"36143868","plaque":" ايران 66 ــ  235ج71","paymentid":"75017062","billid":"106736600296","paymentInfo":{}},{"desc":"دوبرگي","type":"عدم استفاده از كمربند ايمني توسط راننده ","code":"2160","amount":"150000","position":"ب بابايي","city":"تهران","date":"1395/06/03 _ 19:15","serial":"0600034864","barcode":"36143868","plaque":" ايران 66 ــ  235ج71","paymentid":"","billid":"","paymentInfo":{}},{"desc":"الصاقي","type":"توقف درمحل ايستادن ممنوع (توقف مطلقاً مم","code":"2062","amount":"800000","position":"ارتش","city":"تهران","date":"1395/05/02 _ 20:29","serial":"0597902927_97","barcode":"36143868","plaque":" ايران 66 ــ  235ج71","paymentid":"80014566","billid":"9790292700290","paymentInfo":{}},{"desc":"دوربين","type":"عبور يا توقف در معابري كه از طرف راهنماي","code":"2126","amount":"200000","position":"نواب خ هلال احمر","city":"تهران","date":"1394/12/17 _ 08:17","serial":"1729399458","barcode":"36143868","plaque":" ايران 66 ــ  235ج71","paymentid":"20035621","billid":"2939945800293","paymentInfo":{}}]
    khalafies= [];
    captcha=false;
    componentWillMount(){

    }
    state={
        barcode:"",
        showFooter:false
    }

     _sendRequestCaptcha=()=> {
        this.khalafies=[];
        this.setState({showFooter:true})
        Api.post('getcaptcha',{barcode:this.state.barcode}).then(data=>{

          console.log("data captcha:",data);
            this.captcha=data;
            this.setState({showFooter:false})
        }).catch(err=>{
            this.setState({showFooter:false})
        })
    }
    _sendRequestKhalafi=()=> {
        this.khalafies=[];
        this.setState({showFooter:true})
        Api.post('getkhalafi',{barcode:this.state.barcode,id:this.captcha.id}).then(data=>{
            this.khalafies=data.fines;
            this.captcha=false;
            this.setState({showFooter:false})
        }).catch(err=>{
            this.setState({showFooter:false})
        })
    }
    render() {
        return (
            <View style={styles.container}>
                {!this.captcha &&
                <View  style={styles.captcha}>
                    <Image style={{width:218,height:156.5,marginBottom:15}}  source={require("../assets/images/khalafi-header.png")}/>
                    <Text style={{fontSize:20,fontFamily:'BYekan'}}>شماره بارکد کنار کارت ماشین رو وارد کنید</Text>
                    <Input
                        keyboardType='numeric'
                        onChangeText={(barcode) => this.setState({barcode})}
                        containerStyle={{alignItems:'center'}}
                        inputContainerStyle={{backgroundColor:'white',elevation:0.2,width:'100%',height:30,borderColor:'black',borderWidth:1,borderRadius:10,marginTop:10}}
                        inputStyle={{fontSize:17,fontFamily:'BYekan'}}
                    />

                    <Button
                    title="نمایش"
                    type="solid"
                    raised={true}
                    onPress={()=>{this._sendRequestCaptcha()}}
                    buttonStyle={{
                      width:150,
                      height: 40,
                      borderRadius: 20,
                      backgroundColor: '#63bf57',
                      // marginTop: 15,
                    }}
                    containerStyle={{
                      width:150,
                      marginTop:15,
                      alignSelf:'center',
                      borderRadius: 20,
                      backgroundColor: '#b8289c',
                    }}
                    titleStyle={{fontSize: 15,fontFamily: 'BYekan',color:'black'}}
                    loadingProps={<ActivityIndicator size="large" color="#0000ff" />}
                    loading={this.state.indicatorStatus}
                    />
                </View>
                }
                {this.captcha &&
                <View  style={styles.captcha}>
                    <Image style={{width:180,height:80,marginBottom:15}}  source={{uri:this.captcha.captcha}}/>
                    <Text style={{fontSize:20,fontFamily:'BYekan'}}>حروف در تصویر رو وارد کنید</Text>
                    <Input
                        onChangeText={(barcode) => this.setState({barcode})}
                        containerStyle={{alignItems:'center'}}
                        inputContainerStyle={{backgroundColor:'white',elevation:0.2,width:'100%',height:30,borderColor:'black',borderWidth:1,borderRadius:10,marginTop:10}}
                        inputStyle={{fontSize:17,fontFamily:'BYekan'}}

                    />
                    <Button
                    title="ارسال حروف"
                    type="solid"
                    raised={true}
                    onPress={()=>{this._sendRequestKhalafi()}}
                    buttonStyle={{
                      width:150,
                      height: 40,
                      borderRadius: 20,
                      backgroundColor: '#63bf57',
                      // marginTop: 15,
                    }}
                    containerStyle={{
                      width:150,
                      marginTop:15,
                      alignSelf:'center',
                      borderRadius: 20,
                      backgroundColor: '#b8289c',
                    }}
                    titleStyle={{fontSize: 15,fontFamily: 'BYekan',color:'black'}}
                    loadingProps={<ActivityIndicator size="large" color="#0000ff" />}
                    loading={this.state.indicatorStatus}
                    />
                </View>
                }
                <FlatList
                    style={[styles.khalafiList,{width:Dimensions.get('window').width}]}
                    data={this.khalafies}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return this._renderKhalafi(item,index);
                    }}
                    ListEmptyComponent={()=>{
                        if(this.state.showFooter){
                            return(
                                <ProgressBarAndroid styleAttr="Horizontal" color="#00172f" />
                            );
                        }else{
                            return(
                                <View>
                                    <Text> </Text>
                                </View>
                            )
                        }
                    }}
                />
            </View>
            );
    }

    _renderKhalafi=(item, index)=>{
        return(
          <View style={styles.khalafi}>
              <View style={{flexDirection:'row-reverse',justifyContent:'center',alignItems:'center'}}>
                  <Text style={styles.khalafiField}>
                      {item.date}
                  </Text>
                  <Text style={styles.khalafiField}>
                      {item.position+" "+item.city}
                  </Text>
                  <Text style={styles.khalafiField}>
                      {item.type}
                  </Text>
                  <Text style={styles.khalafiField}>
                      {item.amount}
                  </Text>
              </View>
          </View>
        );
    }
}
