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

  } from 'react-native';

  import { Input,Button, ListItem } from 'react-native-elements';
  import ModalSelector from 'react-native-modal-selector'
  import DisplayModal from '../components/Modal';

  import Api from '../libs/api';

  const widthWindows = Dimensions.get('window').width;
  const heightWindows = Dimensions.get('window').height;

type Props = {};
export default class Names extends Component<Props> {

  constructor() {
    super();

    this.state = {

      dataSource: null,
      display: false,
      description: "",
      indicatorStatus: false,
    };

    this.getNames();
  }


  getNames()
  {
      Api.post('names',{text: this.state.textInputValue})
      .then(data=>{
        if(data && data.length>0)
        {

          this.setState({dataSource: data,indicatorStatus: false})
        }else{
          ToastAndroid.show('موردی یافت نشد', ToastAndroid.SHORT);

        }

      }).catch(er=>{
      });
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
        <View style={{
          paddingVertical: 20,
          paddingHorizontal: 10,
          backgroundColor: '#dbbdd3',
        }}>
          <TouchableOpacity onPress={()=>this.setState({display: false})}>
            <Image style={{width: 40,height: 40}} source={require('./../assets/images/cancel.png')}/>
          </TouchableOpacity>
          <Text style ={{
            fontSize: 15,
            fontFamily: 'BYekan',
          }}>{this.state.description}</Text>
        </View>
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
          <View style={[styles.titleLogoView,{backgroundColor:'f464cf'}]}>
          <Image style={styles.logoImage}
          source={require('./../assets/images/boy.png')} />
          <Image style={styles.logoImage}
          source={require('./../assets/images/girl.png')} />
          </View>
          <View style={[styles.cityInput,{backgroundColor:'transparent',marginVertical: 40}]}>
            <TextInput
              placeholder='نام مورد نظر خود را وارد کنید'
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
              onChangeText={(textInputValue) => this.setState({textInputValue})}

            />
          </View>
          <View style={[styles.cityInput,{backgroundColor:'transparent'}]}>
            <Button
              title="جستجو"
              type="solid"
              raised={true}
              onPress={()=>{this.getNames()}}
              buttonStyle={{
                width:150,
                borderRadius:20,
                backgroundColor:'#aa6498'
                }}
              containerStyle={{
                width:150,
                borderRadius:20,
                alignSelf:'center',
              }}
              titleStyle={{fontSize: 15,fontFamily: 'BYekan',}}
              loadingProps={<ActivityIndicator size="large" color="#0000ff" />}
              loading={this.state.indicatorStatus}
            />
          </View>
          </View>
          <View style={[styles.currencyMotherBlockStyle,{backgroundColor:'transparent'}]}>
          {this.state.dataSource ? <View style={{
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
                  <Text style={[styles.buttonTextItem,{color:'white'}]}  >نام</Text>
                </View>
              </View>
            </View>: null}


            </View>
            <View style={styles.currencyView}>
            {this.state.dataSource ?
            <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={this.state.dataSource}
            renderItem={({ item }) =>
            <View style={styles.currencyMotherBlockStyle}>
            <TouchableOpacity onPress={()=> this.setState({display:true,description:"نام: "+item.Nam+"\n"+"جنسیت: "+item.Noe+"\n"+"اصالت: "+item.Keshvar+"\n"+"معنی: "+item.Tozih})}>
            <View style={styles.currencyChildBlockStyle}>
            <View style={{ flex:1 ,flexDirection: 'row'}}>
            <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.buttonTextItem}  >{item.Nam}</Text>
            </View>
            </View>
            </View>
            </TouchableOpacity>
            </View>
            }
            /> : null}

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
    backgroundColor:'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flexDirection:'column',
  },
  titleLogoView:{
    width: widthWindows/1.5,
    borderRadius: 10,
    padding: 5,
    paddingHorizontal: 50,
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
