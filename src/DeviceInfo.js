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
    Image,
    FlatList, Platform, ProgressBarAndroid, StyleSheet, Text, TextInput, TouchableOpacity, View,Dimensions,
    WebView
} from 'react-native';
import styles from "./styles/DeviceInfo.css"
import Api from "../libs/api";
import {Input} from "react-native-elements";
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DeviceInfo from 'react-native-device-info';

type Props = {};
export default class Info extends Component<Props> {
    // infoes= [{"desc":"تسليمي","type":"عدم توجه به اخطار و تذكر پليس","code":"2165","amount":"200000","position":"مدرس","city":"تهران","date":"1396/08/27 _ 15:00","serial":"8633779550","barcode":"36143868","plaque":" ايران 66 ــ  235ج71","paymentid":"40024661","billid":"3377955000290","paymentInfo":{}},{"desc":"تسليمي","type":"همراه نداشتن گواهي يا برچسب معتبر معاينه","code":"2163","amount":"200000","position":"مدرس","city":"تهران","date":"1396/08/27 _ 15:00","serial":"8633779550","barcode":"36143868","plaque":" ايران 66 ــ  235ج71","paymentid":"40024661","billid":"3377955000290","paymentInfo":{}},{"desc":"الصاقي","type":"هرنوع توقف كه منجر به سد معبر و يا اختلا","code":"2101","amount":"600000","position":"خيابان پناهي نيا","city":"تهران","date":"1395/10/13 _ 18:11","serial":"5609645875","barcode":"36143868","plaque":" ايران 66 ــ  235ج71","paymentid":"60029199","billid":"964587500298","paymentInfo":{}},{"desc":"دوبرگي","type":"دور زدن در محل ممنوع","code":"2013","amount":"750000","position":"هروي","city":"تهران","date":"1395/06/15 _ 19:05","serial":"7601067366","barcode":"36143868","plaque":" ايران 66 ــ  235ج71","paymentid":"75017062","billid":"106736600296","paymentInfo":{}},{"desc":"دوبرگي","type":"عدم استفاده از كمربند ايمني توسط راننده ","code":"2160","amount":"150000","position":"ب بابايي","city":"تهران","date":"1395/06/03 _ 19:15","serial":"0600034864","barcode":"36143868","plaque":" ايران 66 ــ  235ج71","paymentid":"","billid":"","paymentInfo":{}},{"desc":"الصاقي","type":"توقف درمحل ايستادن ممنوع (توقف مطلقاً مم","code":"2062","amount":"800000","position":"ارتش","city":"تهران","date":"1395/05/02 _ 20:29","serial":"0597902927_97","barcode":"36143868","plaque":" ايران 66 ــ  235ج71","paymentid":"80014566","billid":"9790292700290","paymentInfo":{}},{"desc":"دوربين","type":"عبور يا توقف در معابري كه از طرف راهنماي","code":"2126","amount":"200000","position":"نواب خ هلال احمر","city":"تهران","date":"1394/12/17 _ 08:17","serial":"1729399458","barcode":"36143868","plaque":" ايران 66 ــ  235ج71","paymentid":"20035621","billid":"2939945800293","paymentInfo":{}}]
    infoes= [];
    captcha=false;
    componentWillMount(){
        this.updateInfo();
    }
    state={
        showFooter:true
    }
    infoList=[{func:"UniqueID",title:"شناسه منحصر به فرد"},
        {func:"Manufacturer",title:"شرکت تولید کننده"},
        {func:"Brand",title:"نام تجاری"},
        {func:"Model",title:"مدل"},
        {func:"DeviceId",title:"شناسه دستگاه"},
        {func:"SystemName",title:"نام سیستم"},
        {func:"SystemVersion",title:"نسخه سیستم"},
        {func:"BuildId",title:"شناسه ساخت"},
        // {func:"BundleId",title:"شناسه بسته"},
        // {func:"ApplicationName",title:"نام نرم افزار"},
        // {func:"BuildNumber",title:"شماره ساخت"},
        // {func:"Version",title:"نسخه"},
        {func:"ReadableVersion",title:"نسخه قابل خواندن"},
        {func:"DeviceName",title:"نام دستگاه"},
        {func:"UserAgent",title:"عامل کاربر"},
        {func:"DeviceLocale",title:"زبان مقصد"},
        {func:"PreferredLocales",title:"ترجیحات محلی"},
        {func:"DeviceCountry",title:"کشور دستگاه"},
        {func:"Timezone",title:"منطقه زمانی"},
        {func:"InstanceID",title:"شناسه نمونه"},
        {func:"InstallReferrer",title:"نصب ارجاع"},
        {func:"FontScale",title:"مقیاس قلم"},
        {func:"FirstInstallTime",title:"اولین زمان نصب"},
        {func:"LastUpdateTime",title:"زمان آخرین بروز رسانی"},
        {func:"SerialNumber",title:"شماره سریال"},
        {func:"IPAddress",title:"نشانی آیپی"},
        {func:"MACAddress",title:"مک آدرس"},
        {func:"PhoneNumber",title:"شماره تلفن"},
        {func:"APILevel",title:"سطح API"},
        {func:"Carrier",title:"حامل"},
        {func:"TotalMemory",title:"مجموع حافظه"},
        {func:"MaxMemory",title:"حداکثر حافظه"},
        {func:"TotalDiskCapacity",title:"ظرفیت مجموع دیسک"},
        {func:"FreeDiskStorage",title:"ذخیره سازی دیسک آزاد"},
        {func:"BatteryLevel",title:"سطح باتری"},
        // {func:"PowerState",title:"دولت قدرت"},
        {func:"DeviceType",title:"نوع وسیله"},
        {func:"SystemAvailableFeatures",title:"ویژگی های سیستم موجود"}]
    detailsList=[];
    render() {
        return (
            <View style={styles.container}>
                <Image style={{width:100,height:100,marginBottom:50}}  source={require("./../assets/images/info-header.png")}/>
                <FlatList
                    style={[styles.infoList,{width:Dimensions.get('window').width}]}
                    data={this.detailsList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return this._renderInfo(item,index);
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

    _renderInfo=(item, index)=>{
        return(
          <View style={styles.info}>
              <View style={{flexDirection:'row-reverse',justifyContent:'center',alignItems:'center'}}>
                  <Text style={styles.infoField}>
                      {item.title}
                  </Text>
                  <Text style={styles.infoField}>
                      {item.myvalue.toString()}
                  </Text>
              </View>
          </View>
        );
    }

    updateInfo=async()=> {
        this.detailsList=[];
        for (let i=0;i<this.infoList.length;i++){
            this.infoList[i].myvalue=(await DeviceInfo['get'+this.infoList[i].func]())?(await DeviceInfo['get'+this.infoList[i].func]()).toString():"نامشخص";
            this.detailsList.push(this.infoList[i])
        }
        this.setState({showFooter:false})
    }
}
