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
  Linking,
  // Button
  } from 'react-native';

  // import TextField from 'react-native-md-textinput';
  import { TextField } from 'react-native-material-textfield';
  import { Input,Button, ListItem } from 'react-native-elements';
  import DisplayModal from '../components/ModalView';

  import Api from '../libs/api';
  import Converter from '../libs/converter';

  const widthWindows = Dimensions.get('window').width;
  const heightWindows = Dimensions.get('window').height;

type Props = {};
export default class News extends Component<Props> {

  constructor() {
    super();

    this.state = {
      newsStand: null,
    };
    var GTJ = Converter.gregorian_to_jalali(2019,5,6);
    var JTG = Converter.jalali_to_gregorian("2018","01","11");
    var dateVar = new Date();
    this.getAllNews = this.getAllNews.bind(this);
  }




getAllNews()
{
  let news =
  [
    "Ebtekaar",
    "Ettelaat",
    "Iran",
    "Shargh",
    "Shahrvand",
    "KayhanNews",
    "SedayeEslahat",
    "Javan",
    "Piroozi",
    "Shoot",
    "KhabarVarzeshi",
    "Gol",
    "Hadaf",
    "EsteghlalJavan",
    "AbrarSport",
  ]

  var dateVar = new Date();
  let GY = dateVar.getYear() + 1900;
  let GM = dateVar.getMonth() + 1;
  let GD = dateVar.getDate();

  var GTJ = Converter.gregorian_to_jalali(GY,GM,GD);
  let year = GTJ[0].toString();
  let month = GTJ[1] > 9 ? GTJ[1] : "0"+GTJ[1].toString()
  let day = GTJ[2] > 9 ? GTJ[2] : "0"+GTJ[2].toString();

  var newsStandArray = []
  news.forEach(function(element){
    newsStandArray.push({address: "http://www.pishkhaan.net/Archive/"+year+"/"+month+"/"+year+month+day+"/"+element+".jpg"})
  })
  return newsStandArray;
}

  gotoWebsite(url)
  {
    Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
      } else {
        return Linking.openURL(url);
      }
    })
    .catch((err) => console.error('An error occurred', err));
  }


    render() {
      return (
        <View style={styles.container}>
        <DisplayModal
          data = {this.state.image}
          display = { this.state.display }
        />
          <View style={styles.rows}>
            <View style={styles.currencyView}>
              <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.getAllNews()}
                    renderItem={({ item }) =>
                          <View style={styles.currencyMotherBlockStyle}>
                          <TouchableOpacity onPress={()=> this.setState({display:true,image:item.address})}>
                            <View style={styles.currencyChildBlockStyle}>
                              <View style={{ flex:1 ,flexDirection: 'row'}}>
                                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                                  <Image style={{width: Dimensions.get("window").width, height: 200, resizeMode: 'contain'}}
                                  source={{ uri: item.address}} />
                                </View>
                              </View>
                            </View>
                            </TouchableOpacity>
                          </View>
                        }
                  />
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
      backgroundColor: '#c6c6c6',
      width: widthWindows/1.5,
      // marginVertical: 10,
      borderRadius: 10,
      padding: 5,
      flexDirection: 'row',
      alignContent: 'space-between',
      // marginVertical: 10
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
      // right: 0,
      // left: 0,
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
      fontSize: 20,
      color: 'black',
      fontFamily: 'BYekan',
    },

  });
