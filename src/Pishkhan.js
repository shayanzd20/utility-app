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
  ActivityIndicator,
  } from 'react-native';

  // import TextField from 'react-native-md-textinput';
  import { TextField } from 'react-native-material-textfield';
  import { Input,Button, ListItem } from 'react-native-elements';
  import ModalSelector from 'react-native-modal-selector'

  import Api from '../libs/api';

  const widthWindows = Dimensions.get('window').width;
  const heightWindows = Dimensions.get('window').height;

type Props = {};
export default class Pishkhan extends Component<Props> {

  constructor() {
    super();

    this.state = {
      govServices: [],
    };

    this.gotoWebsite = this.gotoWebsite.bind(this);
    this.getGovServices();
  }


  getGovServices()
  {
      Api.get('govServices')
      .then(data=>{
        this.setState({govServices: data})
      }).catch(er=>{
      });
  }

  getImage(img)
  {
    // return require(`./../assets/images/${img}.png`)
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
        <View style={styles.rows}>
          <View style={[styles.currencyMotherBlockStyle,{backgroundColor:'transparent'}]}>
            <View style={{
                backgroundColor: '#ff8d4b',
                marginVertical: 7,
                marginLeft: 15,
                marginRight: 15,
                height:50,
                // right: 0,
                // left: 0,
                // paddingRight: 50,
                paddingVertical: 5,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{ flex:1 ,flexDirection: 'row'}}>
                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={[styles.buttonTextItem,{color:'white'}]}  >سایت</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={[styles.buttonTextItem,{color:'white'}]}  >پیشخوان</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.currencyView}>
          {this.state.govServices ?
            <FlatList
                  keyExtractor={(item, index) => index.toString()}
                  data={this.state.govServices}
                  renderItem={({ item }) =>
                        <View style={styles.currencyMotherBlockStyle}>
                          <View style={styles.currencyChildBlockStyle}>
                            <View style={{ flex:1 ,flexDirection: 'row'}}>
                              <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'flex-end'}}>
                                <TouchableOpacity onPress={()=> this.gotoWebsite(item.url)}>
                                  <Image style={{ width: 50, height: 50 ,resizeMode: 'contain'}} source={require('./../assets/images/website.png')}  ></Image>
                                </TouchableOpacity>
                              </View>
                              <View style={{ flex: 1.5,backgroundColor: 'transparent', justifyContent: 'center',paddingRight:60}}>
                                  <Text style={[styles.buttonTextItem,{fontSize: 13}]}  >{item.name}</Text>
                                {/*<Image source={require(`./../assets/images/${item._id}.png`)} style={styles.currencyFlagStyle}/>*/}
                                {/*<Image source={{uri:`file://./../assets/images/${item._id}.png`}} style={styles.currencyFlagStyle}/>*/}
                                {/*<Image source={getImage(item._id)} style={styles.currencyFlagStyle}/>*/}
                                {/*<Image source={{uri:item.image}} style={styles.currencyFlagStyle}/>*/}
                              </View>
                            </View>
                          </View>
                        </View>
                      }
                />
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
    paddingTop: 10,

    
  },
  currencyMotherBlockStyle: {
    flex: 1,
    
  },
  currencyChildBlockStyle: {
    
    backgroundColor: '#ffcdb0',
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
    fontSize: 20,
    color: 'black',
    fontFamily: 'BYekan',
  },

});
