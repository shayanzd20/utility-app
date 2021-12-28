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

  import Icon from 'react-native-vector-icons/FontAwesome';
  import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

  import Api from '../libs/api';

  const widthWindows = Dimensions.get('window').width;
  const heightWindows = Dimensions.get('window').height;

type Props = {};
export default class Banks extends Component<Props> {

  constructor() {
    super();

    this.state = {
      indicatorStatus:false,
      banks: [],
    };

    this.gotoWebsite = this.gotoWebsite.bind(this);
    this.getBanks();
  }


  getBanks()
  {

      Api.get('banks')
      .then(data=>{

        this.setState({banks: data, indicatorStatus: true})

      }).catch(er=>{
      });
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
                backgroundColor: '#f88c8c',
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
                  <Text style={[styles.buttonTextItem,{color:'white'}]}  >تلفن</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={[styles.buttonTextItem,{color:'white'}]}  >سایت</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={[styles.buttonTextItem,{color:'white'}]}  >اپلیکیشن</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={[styles.buttonTextItem,{color:'white'}]}  >بانک</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.currencyView}>
          {this.state.indicatorStatus ?
            <FlatList
                  keyExtractor={(item, index) => index.toString()}
                  data={this.state.banks}
                  renderItem={({ item }) =>
                        <View style={styles.currencyMotherBlockStyle}>
                          <View style={styles.currencyChildBlockStyle}>
                            <View style={{ flex:1 ,flexDirection: 'row'}}>
                              <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                                <TouchableOpacity onPress={()=> this.gotoWebsite(item.ussd)}>
                                  <Icon
                                      name='phone'
                                      size={25}
                                      color='black'
                                  />
                                </TouchableOpacity>
                              </View>
                              <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                                <TouchableOpacity onPress={()=> this.gotoWebsite(item.website)}>
                                  <MCIcon
                                      name='web'
                                      size={25}
                                      color='blue'
                                  />
                                </TouchableOpacity>
                              </View>
                              <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                                <TouchableOpacity onPress={()=> this.gotoWebsite(item.app)}>
                                  <Icon
                                      name='android'
                                      size={25}
                                      color='green'
                                  />
                                </TouchableOpacity>
                              </View>
                              <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                                <Image source={{uri: item.image}} style={styles.currencyFlagStyle}/>
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
    height: 50,
    backgroundColor: '#fab0b0',
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
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextItem: {
    fontSize: 17,
    color: 'black',
    fontFamily: 'BYekan',
  },

});
