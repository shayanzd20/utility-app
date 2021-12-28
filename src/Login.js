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
    ImageBackground,
    ActivityIndicator,
    BackHandler,
    ToastAndroid,
} from 'react-native';

import { Input,Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';

import Api from '../libs/api';

const widthWindows = Dimensions.get('window').width;

type Props = {};
export default class Login extends Component<Props> {

    constructor() {
        super();

        this.state = {
            number: null,
            code: "",
            verificationStatus: false,
            indicatorStatus: false
        };
        this.login = this.login.bind(this);
    }


    componentWillMount() {
        // back button handler
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true;
        });

    }

    login()
    {
        if(this.state.number.length == 11 && this.state.number.substr(0,2) == "09")
        {
            this.setState({
                indicatorStatus: true
            })
            Api.post('auth/login',{phoneNumber: this.state.number})
                .then(data=>{
                    console.log("'auth/login data:",data);
                    if(data.message == 'verification code sent' || data.verificationCode)
                    {
                        this.setState({verificationStatus:true});
                        ToastAndroid.show('کد ارسال شده را وارد کنید', ToastAndroid.SHORT);

                    }

                }).catch(er=>{
            });
        }else{
            ToastAndroid.show('شماره معتبر نمی باشد', ToastAndroid.SHORT);
        }
    }

    verify()
    {
        console.log("this.state.number:",this.state.number);
        console.log("this.state.code:",this.state.code);
        console.log("verify:");
        Api.post('auth/verification',{phoneNumber: this.state.number, vercode: this.state.code})
            .then(data=>{
                console.log("data:",data);
                if(data.token)
                {
                    console.log("data.token:",data.token);

                    AsyncStorage.setItem('number', data.phoneNumber);
                    AsyncStorage.setItem('name', data.name);
                    AsyncStorage.setItem('token', data.token, () => {
                    });
                    console.log("data.token1:");
                    Actions.replace('menu');
                }
            }).catch(er=>{
            if(er.error == "verification code does not match")
            {
                ToastAndroid.show("کد ارسالی نادرست است", ToastAndroid.SHORT);
            }else{
                ToastAndroid.show(er.message, ToastAndroid.SHORT);

            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ImageBackground style={{
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height,
                        resizeMode: 'cover',
                    }}
                        source={require('./../assets/images/login.png')}>
                        {this.state.verificationStatus ?
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <Image style={{
                                    width: Dimensions.get('window').width/1.3,
                                    height: Dimensions.get('window').height/1.3,
                                    resizeMode: 'contain',
                                    top: Dimensions.get('window').height/7,
                                }}
                                       source={require('./../assets/images/login-inner.png')}>
                                </Image>
                                <Text style={{ paddingBottom:15, fontSize: 15, fontFamily: 'BYekan',bottom: Dimensions.get('window').height/4}}>کد ارسالی را وارد کنید</Text>
                                <Input
                                    containerStyle={{
                                        borderRadius: 20,
                                        width: Dimensions.get('window').height/3,
                                        height: 40,
                                        backgroundColor: 'white',
                                        bottom: Dimensions.get('window').height/4,

                                    }}
                                    inputStyle={{fontFamily: 'BYekan',fontSize: 15, textAlign:'center'}}
                                    leftIcon={{ type: 'font-awesome', name: 'calculator',color: 'green' }}
                                    onChangeText={(code) => this.setState({ code })}
                                    keyboardType= 'numeric'
                                    value={this.state.code}
                                />
                                <Button
                                    title="تایید"
                                    type="solid"
                                    raised={true}
                                    onPress={()=>{this.verify()}}
                                    buttonStyle={{
                                        width:150,
                                        borderRadius:20,
                                        backgroundColor:'#FFFFFF',

                                    }}
                                    containerStyle={{
                                        width:150,
                                        bottom: Dimensions.get('window').height/4.5,
                                    }}
                                    titleStyle={{fontSize: 15,fontFamily: 'BYekan',color:'#000000'}}

                                />
                                <View style={{bottom: Dimensions.get('window').height/5}}>
                                    <TouchableOpacity onPress={()=>this.setState({verificationStatus: false,indicatorStatus:false})}>
                                        <Text style={{ fontSize: 15, fontFamily: 'BYekan', color: 'red'}}>تغییر شماره</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            :
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <Image style={{
                                    width: Dimensions.get('window').width/1.3,
                                    height: Dimensions.get('window').height/1.3,
                                    resizeMode: 'contain',
                                    top: Dimensions.get('window').height/7,
                                }}
                                source={require('./../assets/images/login-inner.png')}>
                                </Image>
                                <Text style={{ marginBottom: 15,fontSize: 15, fontFamily: 'BYekan',bottom: Dimensions.get('window').height/4}}>شماره خود را وارد کنید</Text>
                                <Input
                                    containerStyle={{
                                        borderRadius: 20,
                                        width: Dimensions.get('window').height/3,
                                        height: 40,
                                        backgroundColor: 'white',
                                        bottom: Dimensions.get('window').height/4,

                                    }}
                                    inputStyle={{fontFamily: 'BYekan',fontSize: 15, textAlign:'center'}}
                                    leftIcon={{ type: 'font-awesome', name: 'phone',color: 'green' }}
                                    onChangeText={(number) => this.setState({ number })}
                                    keyboardType= 'numeric'
                                />
                                {!this.state.indicatorStatus ? <Button
                                        title="ارسال"
                                        type="solid"
                                        raised={true}
                                        onPress={()=>{this.login()}}
                                        buttonStyle={{
                                            width:150,
                                            borderRadius:20,
                                            backgroundColor:'#FFFFFF',
                                        }}
                                        containerStyle={{
                                            width:150,
                                            bottom: Dimensions.get('window').height/4.5,
                                        }}
                                        titleStyle={{fontSize: 15,fontFamily: 'BYekan',color:'#000000'}}
                                        loadingProps={<ActivityIndicator size="small" color="#000000" />}
                                        loading={this.state.indicatorStatus}
                                    />
                                    :
                                    <View style={{bottom: Dimensions.get('window').height/4.5}}>
                                        <ActivityIndicator size="small" color="#000000"/>
                                    </View>
                                }

                                <View style={{bottom: Dimensions.get('window').height/5}}>
                                    <TouchableOpacity onPress={()=>this.setState({verificationStatus: false,indicatorStatus:false})}>
                                        <Text style={{ fontSize: 15, fontFamily: 'BYekan', color: 'red'}}>تغییر شماره</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>}

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
