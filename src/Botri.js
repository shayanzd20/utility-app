/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ActivityIndicator, ImageBackground, Platform, StyleSheet, Text, View} from 'react-native';
import {styles} from "./styles/Botri.css"
import {WebView} from "react-native-webview";
import {Button, Icon} from "react-native-elements";
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Animated,Easing} from "react-native";

type Props = {};
export default class Botri extends Component<Props> {

    state={
        rotate: 0,
        spin:'0deg',
        spinValue:0
    };

    interval=null;
    render() {

        return (
            <View style={{flex:1,alignItems:'center',paddingTop:100}}>
                <ImageBackground style={{width:200,height:200,justifyContent:'center',alignItems:'center',transform: [{ rotate: this.state.rotate.toString()+'deg'}]}}
                                 source={require('../assets/images/bottle.png')}>
                </ImageBackground>
                {/*<Animated.Image*/}
                    {/*style={[{width:200,height:200,justifyContent:'center',alignItems:'center'},{transform: [{rotate: RotateData}]}]}*/}
                    {/*source={require('../assets/images/bottle.png')}*/}
                {/*/>*/}
                <View style={{flexDirection:'row'}}>
                <Button
                iconRight
                icon={
                <MIcon
                    name="account-group"
                    size={25}
                    color="#cccccc"
                />
                }
                buttonStyle={{backgroundColor:'#f88c8c',marginTop:25,justifyContent:'flex-end',flexDirection:'column-reverse',margin:5}}
                titleStyle={{color:'white'}}
                title="3 نفره"
                />
                <Button
                    iconRight
                    icon={
                        <MIcon
                            name="account-group"
                            size={25}
                            color="#cccccc"
                        />
                    }
                    buttonStyle={{backgroundColor:'#f88c8c',marginTop:25,justifyContent:'flex-end',flexDirection:'column-reverse',margin:5}}
                    titleStyle={{color:'white'}}
                    title="4 نفره"
                />
                <Button
                    iconRight
                    icon={
                        <MIcon
                            name="account-group"
                            size={25}
                            color="#cccccc"
                        />
                    }
                    buttonStyle={{backgroundColor:'#f88c8c',marginTop:25,justifyContent:'flex-end',flexDirection:'column-reverse',margin:5}}
                    titleStyle={{color:'white'}}
                    title="5 نفره"
                />
                <Button
                    iconRight
                    icon={
                        <MIcon
                            name="account-group"
                            size={25}
                            color="#cccccc"
                        />
                    }
                    buttonStyle={{backgroundColor:'#f88c8c',marginTop:25,justifyContent:'flex-end',flexDirection:'column-reverse',margin:5}}
                    titleStyle={{color:'white'}}
                    title="6 نفره"
                />
                </View>
                <Button
                    iconRight
                    icon={
                        <MIcon
                            name="rotate-left"
                            size={25}
                            color="#000"
                        />
                    }
                    onPress={() => {
                        setTimeout(()=>clearInterval(this.interval),5000)
                        this.interval = setInterval(() => {
                            this.setState({rotate: this.state.rotate + Math.floor(Math.random() * 10) })
                        }, 1)
                    }}
                    buttonStyle={{backgroundColor:'#f88c8c',marginTop:50,width:200,justifyContent:'flex-end',borderBottomRightRadius:50,borderTopRightRadius:50,}}
                    titleStyle={{paddingRight:50,}}
                    title="بچرخ"
                />
            </View>
        );
    }
}
