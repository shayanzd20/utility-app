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
  ScrollView,
  FlatList,
  } from 'react-native';

  import Selective from '../components/Selective';
  import Api from '../libs/api';


type Props = {};
export default class Proteins extends Component<Props> {

  constructor() {
    super();

    this.state = {
      alphabet: [
        {key:1,label:'گوشت',type: 'meat'},
        {key:2,label:'لبنیات',type: 'dairy'},
        {key:3,label:'ماهی',type: 'fish'},
        {key:4,label:'میوه جات',type: 'fruit'},
        {key:5,label:'موارد دیگر',type: 'other'},
      ],
      dataSource: null,
      display: false,
      description: "",
      indicatorStatus: false,
      showTypes: false,

    };
  }



  getProteins(type)
  {
      Api.get('protein/'+type)
      .then(data=>{

        this.setState({ProteinsData: data, indicatorStatus: true})

      }).catch(er=>{
      });
  }

  render() {
    return (
      <View style={styles.container}>

      {this.state.showTypes &&
        <Selective
          show={this.state.showTypes}
          data={this.state.alphabet}
          rowColor="#afc3f9"
          onChange={(option)=>{
              this.getProteins(option.type)
            ;
            this.setState({showTypes: false}
            )}}
        />}

        <ScrollView>
          <View style={styles.rows}>
            <View style={[styles.titleSectionView,{backgroundColor:'transparent'}]}>
              <View style={[styles.titleLogoView,{backgroundColor:'transparent'}]}>
                  <Image style={styles.logoImage}
                  source={require('./../assets/images/protein.png')} />
              </View>
              <View style={{backgroundColor:'transparent', marginVertical: 10}}>
                <TouchableOpacity onPress={()=> {
                    this.setState({showTypes: true})
                    setTimeout(()=>this.setState({showTypes: true}),1200)
                }
                }>
                  <View style={{
                  backgroundColor: '#cccccc',
                  borderRadius:5,
                  height: 30,
                  justifyContent: 'center',
                  }}>
                    <Text style={{fontFamily: 'BYekan', fontSize:15, alignSelf: 'center'}}>نوع پروتئین را انتخاب کنید</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {this.state.indicatorStatus ?
              <View style={[styles.currencyMotherBlockStyle,{backgroundColor:'transparent'}]}>
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
                      <Text style={[styles.buttonTextItem,{color:'white'}]}  >پروتئین</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={[styles.buttonTextItem,{color:'white'}]}  >مقدار</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={[styles.buttonTextItem,{color:'white'}]}  >ماده غذایی</Text>
                    </View>
                  </View>
                </View>
              </View>
              : null}

            <View style={styles.currencyView}>
              <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.ProteinsData}
                    renderItem={({ item }) =>
                          <View style={styles.currencyMotherBlockStyle}>
                            <View style={styles.currencyChildBlockStyle}>
                              <View style={{ flex:1 ,flexDirection: 'row'}}>
                                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                                  <Text style={[styles.buttonTextItem,{fontSize: 13}]}  >{item["پروتئین (گرم)"] ? item["پروتئین (گرم)"] : item["پروتئین (گرم) بر 100 گرم"]+" گرم بر 100 گرم"}</Text>
                                </View>
                                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                                  <Text style={[styles.buttonTextItem,{fontSize: 13}]}  >{item["مقدار"] ? item["مقدار"] : item["مقدار (گرم)"]}</Text>
                                </View>
                                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                                  <Text style={[styles.buttonTextItem,{fontSize: 13}]}  >{item["ماده غذایی"]}</Text>
                                </View>
                              </View>
                            </View>
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
    fontSize: 15,
    color: 'black',
    fontFamily: 'BYekan',
  },

});
