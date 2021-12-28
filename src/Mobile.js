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
  FlatList,
  ActivityIndicator,
  ToastAndroid
  } from 'react-native';

  import Api from '../libs/api';

type Props = {};
export default class Mobile extends Component<Props> {

  constructor() {
    super();

    this.state = {
      display: false,
      phonesAndBrands: null,
      dataSource: null,
      phonesBrand: [],
      indicatorStatus: false,

    };

    this.getPhones();
  }


  getPhones()
  {
      Api.post('getprices')
      .then(data=>{

        if(data.phone.length > 0)
        {
          this.setState({phonesAndBrands: data.phone})
          let i = 1;
          for(var key in data.phone)
          {
            this.state.phonesBrand.push({key:i,label:data.phone[key].englishTitle})
            i++;
          }
        }else{
          ToastAndroid.showWithGravityAndOffset(
            'در حال حاضر قیمت ها بروز رسانی نشده اند. لطفا بعدا مجددا تلاش کنید',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
        }

      }).catch(er=>{
      });
  }

getPhonesList(brand)
{
  this.setState({dataSource : this.state.phonesAndBrands[brand]});
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
        backgroundColor: '#6ddf9c',
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
          <View style={styles.rows}>
          <View style={[styles.titleSectionView,{backgroundColor:'transparent'}]}>
          <View style={[styles.titleLogoView,{backgroundColor:'transparent'}]}>
              <Image style={styles.logoImage}
              source={require('./../assets/images/phone.png')} />
          </View>
          </View>
            <View style={styles.currencyView}>
            {this.state.phonesAndBrands ?
              <View>
                  <FlatList
                  keyExtractor={(item, index) => index.toString()}
                  data={this.state.phonesAndBrands}
                  ListHeaderComponent =
                  {
                    <View style={[styles.currencyMotherBlockStyle,{backgroundColor:'transparent'}]}>
                      <Text style={{fontSize: 15, fontFamily: 'BYekan',textAlign: 'center'}}>روی هر آیتم کلیک کنید تا جزییات نمایش داده شود</Text>
                      <View style={{
                      backgroundColor: '#219651',
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
                            <Text style={[styles.buttonTextItem,{color:'white'}]}  >قیمت بازار</Text>
                          </View>
                          <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={[styles.buttonTextItem,{color:'white'}]}  >عنوان</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  }
                  renderItem={({ item }) =>
                  <View style={styles.currencyMotherBlockStyle}>
                    <TouchableOpacity onPress={()=> this.setState({display:true,description:"مشخصات: "+"\n\n"+"صفحه نمایش: "+item.specifications[0].value+"\n\n"+"میکروچیپ: "+item.specifications[1].value+"\n\n"+"دوربین: "+item.specifications[2].value+"\n\n"+"باطری: "+item.specifications[3].value})}>
                    <View style={styles.currencyChildBlockStyle}>
                      <View style={{ flex:1 ,flexDirection: 'row'}}>
                        <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                          <Text style={styles.buttonTextItem}  >{item.lowestPrice}</Text>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                          <Text style={[styles.buttonTextItem,{fontSize:15,textAlign:'center'}]}  >{item.englishTitle}</Text>
                        </View>
                      </View>
                    </View>

                    </TouchableOpacity>
                  </View>
                  }
                  />
            </View>
            : <View style={{ paddingTop: 30}}><ActivityIndicator size={60} color="#0000ff" /></View>}

          </View>
          </View>


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
    
    backgroundColor: '#9effbb',
    marginVertical: 7,
    marginLeft: 15,
    marginRight: 15,
    
    // paddingRight: 50,
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
