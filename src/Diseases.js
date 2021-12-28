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
  FlatList,
  ToastAndroid,
  } from 'react-native';
  import { Button } from 'react-native-elements';

  import Api from '../libs/api';

type Props = {};
export default class Diseases extends Component<Props> {

  constructor() {
    super();

    this.state = {
      alphabet: [
        {key:1,label:'آ'},
        {key:2,label:'ا'},
        {key:3,label:'ب'},
        {key:4,label:'پ'},
        {key:5,label:'ت'},
        {key:6,label:'ث'},
        {key:7,label:'ج'},
        {key:8,label:'چ'},
        {key:9,label:'ح'},
        {key:10,label:'خ'},
        {key:11,label:'د'},
        {key:12,label:'ذ'},
        {key:13,label:'ر'},
        {key:14,label:'ز'},
        {key:15,label:'ژ'},
        {key:16,label:'س'},
        {key:17,label:'ش'},
        {key:18,label:'ص'},
        {key:19,label:'ض'},
        {key:20,label:'ط'},
        {key:21,label:'ظ'},
        {key:22,label:'ع'},
        {key:23,label:'غ'},
        {key:24,label:'ف'},
        {key:25,label:'ق'},
        {key:26,label:'ک'},
        {key:27,label:'گ'},
        {key:28,label:'ل'},
        {key:29,label:'م'},
        {key:30,label:'ن'},
        {key:31,label:'و'},
        {key:32,label:'ه'},
        {key:33,label:'ی'},
      ],
      dataSource: null,
      display: false,
      description: "",
      indicatorStatus: false,
    };
  }
  letters=["ا","ب","پ","ت","ث","ج","چ" ,"ح","خ","د","ذ","ر","ز" ,"ژ","س" ,"ش","ص","ض","ط","ظ","ع","غ","ف","ق","ک","گ","ل","م","ن","و","ه","ی"]

  componentWillUnmount() {
    this.setState({display: false})
 }


  getDiseases(label)
  {
    this.setState({indicatorStatus: true})

      Api.post('diseases',{label: label})
      .then(data=>{
        console.log("data:",data);
        if(data.length>0)
        {

          this.setState({diseasesWithAlphabet: data,indicatorStatus: false})
        }else{
          ToastAndroid.show('موردی یافت نشد', ToastAndroid.SHORT);

        }


      }).catch(er=>{
        console.error("err:",er);
      });
  }

  _renderLetter(item, index){
      return(
          <Button
              iconRight
              containerStyle={{width:50,height:50}}
              buttonStyle={{backgroundColor:'#2d5a76',margin:5,padding:5}}
              titleStyle={{color:'white',fontFamily: 'BYekan'}}
              title={item}
              onPress={()=>{
                  this.getDiseases(item)
              }}
          />
      )
  }


  renderModal()
  {
    return(
      <View style={{
        position: 'absolute',
        zIndex: 1,
        backgroundColor:'rgba(0,0,0,0.5)',
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width,
        }}>
        <ScrollView>
        <View style={{
          paddingVertical: 20,
          paddingHorizontal: 10,
          backgroundColor: '#efd1fa',
        }}>
          <TouchableOpacity onPress={()=>this.setState({display: false})}>
            <Image style={{width: 40,height: 40}} source={require('./../assets/images/cancel.png')}/>
          </TouchableOpacity>
          <Text style ={{
            fontSize: 15,
            fontFamily: 'BYekan',
          }}>{this.state.description}</Text>
        </View>
        </ScrollView>

      </View>
      )
  }

  render() {
    return (
      <View style={styles.container}>

      {this.state.display ?
          this.renderModal()
      : null}
        <ScrollView>
          <View style={styles.rows}>
          <View style={[styles.titleSectionView,{backgroundColor:'transparent'}]}>
          <View style={[styles.titleLogoView,{backgroundColor:'transparent'}]}>
              <Image style={styles.logoImage}
              source={require('./../assets/images/diseases.png')} />
          </View>
            <View style={{backgroundColor:'transparent', marginVertical: 10}}>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20, }}>
                  <Text style={{ fontSize: 15, fontFamily: 'BYekan'}}>حرف اول بیماری را انتخاب کنید</Text>
                </View>
            </View>
          </View>
          <View style={{
            flex:2,
                        }}>
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
          </View>
          <View style={[styles.currencyMotherBlockStyle,{backgroundColor:'transparent'}]}>
          {this.state.indicatorStatus ?

            <View style={{
              backgroundColor: '#c560ea',
              marginVertical: 7,
              marginLeft: 15,
              marginRight: 15,
              height:50,
              paddingVertical: 5,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              }}>
                <View style={{ flex:1 ,flexDirection: 'row'}}>
                  <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={[styles.buttonTextItem,{color:'white'}]}  >بیماری</Text>
                  </View>
                </View>
              </View>
              : null
               }
            </View>
            <View style={styles.currencyView}>
              <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={this.state.diseasesWithAlphabet}
              renderItem={({ item }) =>
                <View style={styles.currencyMotherBlockStyle}>
                  <TouchableOpacity onPress={()=> this.setState({display:true,description:item.matn})}>
                    <View style={styles.currencyChildBlockStyle}>
                      <View style={{ flex:1 ,flexDirection: 'row'}}>
                        <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                          <Text style={styles.buttonTextItem}  >{item.onvan}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
            }
            />
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
    color: 'black',
    fontFamily: 'BYekan',
  },

});
