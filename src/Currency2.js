/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions,
  Text,
  View,
  ImageBackground,
  CameraRoll,
  TouchableOpacity,
  Image,
  ListView
} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Currency = [
	{
		"currency": "دلار آمریکا",
		"amount": "44,856",
		"diff": "78",
		"status": "down"
	},
	{
		"currency": "یورو",
		"amount": "55,770",
		"diff": "30",
		"status": "up"
	},
	{
		"currency": "پوند انگلیس",
		"amount": "68,450",
		"diff": "6,155",
		"status": "up"
	},
	{
		"currency": "افغانی",
		"amount": "670.02",
		"diff": "39.84",
		"status": "up"
	},
	{
		"currency": "رینگیت مالزی",
		"amount": "12,224",
		"diff": "751",
		"status": "down"
	},
	{
		"currency": "دینار کویت",
		"amount": "160,666",
		"diff": "9,865",
		"status": "up"
	},
	{
		"currency": "دینار عراق",
		"amount": "39.893",
		"diff": "2.431",
		"status": "up"
	},
	{
		"currency": "بات تایلند",
		"amount": "1,539.64",
		"diff": "96.73",
		"status": "up"
	},
	{
		"currency": "روپیه پاکستان",
		"amount": "435.74",
		"diff": "25.27",
		"status": "up"
	},
	{
		"currency": "ریال عربستان",
		"amount": "12,832",
		"diff": "782",
		"status": "up"
	},
	{
		"currency": "روبل روسیه",
		"amount": "840.59",
		"diff": "48.82",
		"status": "up"
	},
	{
		"currency": "دلار سنگاپور",
		"amount": "37,057",
		"diff": "2,376",
		"status": "up"
	},
	{
		"currency": "کرون سوئد",
		"amount": "7,900",
		"diff": "396",
		"status": "up"
	},
	{
		"currency": "درهم امارات",
		"amount": "13,500",
		"diff": "1,301",
		"status": "up"
	},
	{
		"currency": "دلار کانادا",
		"amount": "39,300",
		"diff": "4,435",
		"status": "up"
	},
	{
		"currency": "یوان چین",
		"amount": "7,708",
		"diff": "491",
		"status": "up"
	},
	{
		"currency": "لیره ترکیه",
		"amount": "12,900",
		"diff": "1,014",
		"status": "up"
	},
	{
		"currency": "ین ژاپن",
		"amount": "456.49",
		"diff": "29.40",
		"status": "up"
	},
	{
		"currency": "روپیه هند",
		"amount": "727.37",
		"diff": "45.07",
		"status": "up"
	},
	{
		"currency": "دلار استرالیا",
		"amount": "38,750",
		"diff": "3,564",
		"status": "up"
	},
	{
		"currency": "کرون سوئد",
		"amount": "6,200",
		"diff": "717",
		"status": "up"
	},
	{
		"currency": "فرانک سوئیس",
		"amount": "51,425",
		"diff": "3,292",
		"status": "up"
	},
	{
		"currency": "کرون نروژ",
		"amount": "6,190",
		"diff": "396",
		"status": "up"
	}
];
export default class CurrencyComp extends Component {

  constructor() {
    super();

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(Currency),
    };
  }

  render() {

    return (
      <View style={{ flex: 1,  }}>
        <ImageBackground
        source={require('../images/spring.jpg')}
        style={styles.backGroundStyle}
        resizeMode='cover'>

        <View style={{
          flex: 5,
          }}>
          {/* title component start */}
          <View style={styles.titleBlock}>
            <Text style={styles.titleText} >تنظیمات</Text>
          </View>
          {/* title component end */}

          {/* setting buttoms component start */}
          <View style={styles.buttonSettingBlockStyle}>
            <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
              <View style={styles.currencyMotherBlockStyle}>
                <View style={styles.currencyChildBlockStyle}>

                  <View style={{ flex:1 ,flexDirection: 'row'}}>
                    <View style={{ flex: 1, backgroundColor: 'transparent' , paddingLeft: 5}}>
                      <Text style={styles.buttonTextItem}  >{rowData.amount}</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                      <Image style={{width: 20, height:20, transform:   rowData.status == 'up' ? [{ rotate: '0deg'}] : [{ rotate: '180deg'}]}} source={ rowData.status == 'up' ? require('../images/Arrow-Up.png'): require('../images/Red_Arrow_Up.png') }/>
                    </View>
                    <View style={{ flex: 1.5, backgroundColor: 'transparent'}}>
                      <Text style={styles.buttonTextItem}  >{rowData.currency}</Text>
                    </View>
                  </View>


                </View>
                <Image source={require('../images/britain.png')} style={styles.currencyFlagStyle}/>
              </View>
            }
            />
          </View>
          {/* setting buttoms component end */}

        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  titleBlock: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'BYekan',
  },

  footerBlock: {
    flex: 2,
    backgroundColor: 'rgba(24,36,66,0.9)',
    flexDirection: 'row'
  },
  backGroundStyle: {
    width: deviceWidth,
    height: deviceHeight
  },
  buttonSettingBlockStyle: {
     flex: 7,
     backgroundColor: 'transparent',

  },
  currencyMotherBlockStyle: {
    flex: 1,
    backgroundColor: 'transparent',
    marginVertical: 1,
    marginHorizontal: 10,
    paddingVertical: 10,
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 50,
  },
  currencyChildBlockStyle: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginVertical: 1,
    marginLeft: 5,
    marginRight: 5,
    right: 0,
    left: 0,
    paddingRight: 50,
    paddingVertical: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currencyFlagStyle: {
    position: 'absolute',
    
    width: 45,
    height: 45,
    right: 0,
    borderColor:'#BABABA',
    borderWidth:1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  persianText: {
  },
  buttonTextItem: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'BYekan',
  },
  arrowDownStyle: {
    transform: [{ rotate: '180deg'}]
  }

});
