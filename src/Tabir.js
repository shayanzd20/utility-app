/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ActivityIndicator,
  FlatList,
  Dimensions,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
}
  from 'react-native';
import {styles} from "./styles/Tabir.css"
import {WebView} from "react-native-webview";
import {Button, Icon, Input} from "react-native-elements";
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import  {Animated,Easing}from "react-native";
import Api from "../libs/api";

type Props = {};
export default class Tabir extends Component<Props> {
    state={
        showLetter:false,
        text:"",
        indicatorStatus:false
    };
    interval=null;
    tabires=[];
    letters=["ا","ب","پ","ت","ث","ج","چ" ,"ح","خ","د","ذ","ر","ز" ,"ژ","س" ,"ش","ص","ض","ط","ظ","ع","غ","ف","ق","ک","گ","ل","م","ن","و","ه","ی"]
    render() {
        return (
            <View style={{flex:1,alignItems:'center',paddingTop:50}}>
                <Input
                    placeholder='موضوع خواب خود را وارد کنید'
                    leftIcon={
                        <MIcon
                            name='magnify'
                            size={25}
                            color='black'
                            onPress={()=>{
                                this._sendRequest(null,this.state.text)
                            }}
                        />
                    }
                    onChangeText={(text) => this.setState({text})}
                    containerStyle={{alignItems:'center'}}
                    labelStyle={{ fontFamily: 'BYekan'}}
                    inputStyle={{fontFamily: 'BYekan'}}
                    inputContainerStyle={{backgroundColor:'#8ddbf9',elevation:0.2,borderRadius:50,width:'80%',height:30}}
                />
                <View style={{width:Dimensions.get("window").width,
                justifyContent:'center',
                alignContent:'center',
                alignSelf: 'center',
                backgroundColor: 'transparent',
                }}>
                    <Button
                        icon={
                            <MIcon
                                name={!this.state.showLetter?'chevron-down':'chevron-up'}
                                size={15}
                                color='#fff'
                            />
                        }
                    onPress={()=>this.setState({showLetter:!this.state.showLetter})}
                    buttonStyle={{backgroundColor:'#2d5a76',marginTop:10,alignItems:'center',alignSelf: 'center',margin:5,width:Dimensions.get("window").width/3}}
                    titleStyle={{color:'white',fontSize:20,marginLeft:10,fontFamily: 'BYekan'}}
                    title="نمایش حروف"
                />
                </View>


                {this.state.showLetter &&
                <FlatList
                    columnWrapperStyle
                        ={{marginTop: 10, justifyContent: 'center',flexDirection:'row-reverse'}}
                    data={this.letters}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return this._renderLetter(item, index);
                    }}
                    numColumns={6}
                    
                />
                }
                <FlatList
                    data={this.tabires}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return this._renderTabirers(item, index);
                    }}
                   
                />
            </View>
        );
    }
    _sendRequest=(letter=null,text=null)=> {
        this.tabires=[];
        this.setState({showLetter:false})
        Api.post("tabirs",{label:letter,text:text}).then(data=>{
            this.tabires=data;
            this.setState({showFooter:false})
        }).catch(err=>{
            this.setState({showFooter:false})
        })
    }
    _renderTabirers=(item, index)=>{
            return(
                <View>

                    <View  style={{backgroundColor:'#f4f4f3',margin:5,borderRadius:20,padding:20,width:'93%'}}>
                        <View style={{justifyContent:'space-around',width:'100%',flexDirection:'row',margin:5}}>
                            <Text style={{backgroundColor:'#2d5a76',color:'white',padding:10,paddingLeft:20,paddingRight:20,borderRadius:5,fontFamily: 'BYekan'}}>{item.topic}</Text>
                            <Text style={{backgroundColor:'#2d5a76',color:'white',padding:10,paddingLeft:20,paddingRight:20,borderRadius:5,width:'60%',fontFamily: 'BYekan'}}>{item.name}</Text>
                        </View>
                        <Text style={{color:'black',fontFamily: 'BYekan'}}>{item.comment}</Text>
                    </View>
                </View>
            );
    }
    _renderLetter=(item, index)=>{
        return(
            <Button
                iconRight
                containerStyle={{width:50,height:50}}
                buttonStyle={{backgroundColor:'#2d5a76',margin:5,padding:5}}
                titleStyle={{color:'white'}}
                title={item}
                onPress={()=>{
                    this._sendRequest(item)
                }}
            />
        )
    }
}
