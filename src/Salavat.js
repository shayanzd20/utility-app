
import React, {Component} from 'react';
import {ImageBackground,  Text, View} from 'react-native';
import {Button, Icon} from "react-native-elements";
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {};
export default class Salavat extends Component<Props> {

    state={
        counter:0
    };
    sendPostMessage = () => setTimeout(() => {
        this.webView.postMessage('ًں¤‘ loaded')
    }, 100)

    render() {
        return (
            <View style={{flex:1,alignItems:'center',paddingTop:100}}>
                <ImageBackground style={{width:50,height:50,justifyContent:'center',alignItems:'center'}} source={require('../assets/images/salavat-header.png')}>
                    <Text style={{color:'black' , fontFamily:'BYekan'}}>{this.state.counter}</Text>
                </ImageBackground>
                <Button
                    iconRight
                    icon={
                        <MIcon
                            name="plus"
                            size={25}
                            color="#23a24d"
                        />
                    }
                    onPress={()=>{
                        this.setState({counter:this.state.counter+1})}}
                    buttonStyle={{backgroundColor:'#cccccc',marginTop:50,width:200,justifyContent:'flex-end',borderBottomRightRadius:50,borderTopRightRadius:50,}}
                    titleStyle={{paddingRight:20, fontFamily:'BYekan'}}
                    title="افزایش شمارنده"
                />
                <Button
                    iconRight
                    icon={
                        <MIcon
                            name="close"
                            size={25}
                            color="#dd2e44"
                        />
                    }
                    onPress={()=>this.setState({counter:0})}
                    buttonStyle={{backgroundColor:'#cccccc',marginTop:25,width:200,justifyContent:'flex-end',borderBottomRightRadius:50,borderTopRightRadius:50,}}
                    titleStyle={{paddingRight:20, fontFamily:'BYekan'}}
                    title="پاک کردن شمارنده"
                />
            </View>
        );
    }
}
