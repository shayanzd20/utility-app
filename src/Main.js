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
  BackHandler,
  Animated,
  Alert,
  } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Actions } from 'react-native-router-flux';

import Api from '../libs/api';



type Props = {};
export default class Main extends Component<Props> {

  constructor(props) {
    super(props);

    this.springValue = new Animated.Value(100);


    AsyncStorage.getItem('token', (err, result) => {
        if(result==null)
        {
          Actions.login();
        }else{
            Api.token = result;
        }
      });


    this.state = {
        categoryOneIsCollapsed:false,
        categoryTwoIsCollapsed:false,
        categoryThreeIsCollapsed:false,
        categoryFourIsCollapsed:false,
        backClickCount: 0
    }
    this.itemClick=this.itemClick.bind(this);
  }

      componentDidMount() {
          BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
      }


      handleBackButton = () => {
        console.log("handleBackButton:::")
          // this.state.backClickCount == 1 ? BackHandler.exitApp() : this._spring();
          this.setState({backClickCount: this.state.backClickCount + 1})
          let cur = Actions.currentScene;
          console.log("current: ",cur)
          console.log("this.state.backClickCount: ",this.state.backClickCount)


            if(Actions.currentScene == 'splash' || Actions.currentScene == 'menu')
            {
              if(this.state.backClickCount > 1)
              {
                Alert.alert(
                    'خروج',
                    'قصد خروج از برنامه را دارید؟', [{
                        text: 'خیر',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    }, {
                        text: 'بله',
                        onPress: () => BackHandler.exitApp()
                    }, ], {
                        cancelable: false
                    }
                 )
                 return true;

              }else{

                return true;
                }

              }else{
                return false;
              }


      };

  itemClick() {
  }


  render() {
    const widthWindows = Dimensions.get('window').width;
    const heightWindows = Dimensions.get('window').height;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
        {/*carousel*/}
          <ScrollView pagingEnabled={true} horizontal={true} style={{height:200,width:widthWindows, }}>
            <View style={styles.carouselItemView}>
              <Image
                style={styles.carouselItemImage}
                source={require('./../assets/images/carousel1.png')}
                />
            </View>
            <View style={styles.carouselItemView}>
              <Image
                style={styles.carouselItemImage}
                source={require('./../assets/images/carousel2.png')}
                />
            </View>
            <View style={styles.carouselItemView}>
              <Image
                style={styles.carouselItemImage}
                source={require('./../assets/images/carousel3.png')}
                />
            </View>
          </ScrollView>


          {/*section one*/}
          {/*section one row one*/}
          <View style={styles.categoryTitle_categoryItems}>
            <View style={styles.categoryTitleView}>
              <Text style={styles.categoryTitleText}>پزشکی</Text>
            </View>
            <View style={[styles.item,{backgroundColor: 'transparent'}]}>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.bmi()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset8.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.medicalplants()}>

                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset2.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.diseases()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset3.png')}
                    />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/*section two row two*/}
            <View style={[styles.item,{backgroundColor: 'transparent'}]}>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.calories()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset4.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.fat()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset5.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.carbohydrates()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset6.png')}
                    />
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.item,{backgroundColor: 'transparent'}]}>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.proteins()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset7.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
              </View>
            </View>
          {/*section Two*/}
          {/*section two row one*/}
          <View style={styles.categoryTitle_categoryItems}>
            <View style={styles.categoryTitleView}>
              <Text style={styles.categoryTitleText}>کاربردی</Text>
            </View>
            <View style={[styles.item,{backgroundColor: 'transparent'}]}>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.currency()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset11.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.gold()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset17.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.phoneprice()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset49.png')}
                    />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/*section two row two*/}
            <View style={[styles.item,{backgroundColor: 'transparent'}]}>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
              <TouchableOpacity onPress={()=>Actions.carprice()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset14.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.metro()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset15.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.azantime()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset16.png')}
                    />
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.item,{backgroundColor: 'transparent'}]}>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.salavat()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset34.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.coins()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset18.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.tabir()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset32.png')}
                    />
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.item,{backgroundColor: 'transparent'}]}>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.news()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset33.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.names()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset43.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.pishkhan()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset35.png')}
                    />
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.item,{backgroundColor: 'transparent'}]}>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.banks()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset40.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.post()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset42.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.weather()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset41.png')}
                    />
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.item,{backgroundColor: 'transparent'}]}>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.calendar()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset13.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
              </View>
            </View>
          {/*section Three*/}
          {/*section Three row one*/}
          <View style={styles.categoryTitle_categoryItems}>
            <View style={styles.categoryTitleView}>
              <Text style={styles.categoryTitleText}>ابزارها</Text>
            </View>
            <View style={[styles.item,{backgroundColor: 'transparent'}]}>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.internetpackage()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset52.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.qabz()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset53.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.taxi()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset46.png')}
                    />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/*section Three row two*/}
            <View style={[styles.item,{backgroundColor: 'transparent'}]}>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.charge()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset51.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.bankprofit()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset39.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.khalafi()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset19.png')}
                    />
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.item,{backgroundColor: 'transparent'}]}>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.distance()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset20.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.instadownloader()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset36.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.deviceinfo()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset45.png')}
                    />
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.item,{backgroundColor: 'transparent'}]}>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.storydownloader()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset22.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.translate()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset38.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.corrector()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset37.png')}
                    />
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.item,{backgroundColor: 'transparent'}]}>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.qrcode()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset12.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
              </View>
            </View>
          {/*section Four*/}
          {/*section Four row one*/}
          <View style={styles.categoryTitle_categoryItems}>
            <View style={styles.categoryTitleView}>
              <Text style={styles.categoryTitleText}>سرگرمی</Text>
            </View>
            <View style={[styles.item,{backgroundColor: 'transparent'}]}>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.game()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset25.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.botri()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset26.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.fingerfaal()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset44.png')}
                    />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/*section Four row two*/}
            <View style={[styles.item,{backgroundColor: 'transparent'}]}>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.faal()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset28.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>
                <TouchableOpacity onPress={()=>Actions.quote()}>
                  <Image
                    style={styles.imageItem}
                    source={require('./../assets/images/asset29.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={[styles.colomn,{backgroundColor: 'transparent'}]}>

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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop:10
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  categoryTitleView:{
    justifyContent: 'center',
    paddingLeft:'50%'
  },
  titleText:{
    fontSize:20,
    right:10,
    marginTop:10,
    marginBottom:10,
    fontFamily: 'BYekan',
    textShadowColor: 'blue',
    borderRadius: 5,
    borderWidth: 0,
  },
  categoryTitleText:{
    color:'black',
    fontSize:22,
    right:10,
    marginTop:10,
    marginBottom:10,
    fontFamily: 'BYekan',
    borderRadius: 5,
    paddingHorizontal: 15,
    borderBottomWidth: 2,
  },
  categoryTitle_categoryItems:{
    flexDirection: 'column'
  },
  imageItem:{
    left:0,
    resizeMode:'contain',
    overflow: 'hidden',
    width: Dimensions.get("window").width/3.25,
    height: 135,

  },
  colomn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  scrollView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  collapseButtonView: {
    alignItems: 'center',
  },
  arrowDownImage: {
    height: 25,
    width: 25,
    transform: [{rotate:'180deg'}]
  },
  arrowUpImage: {
    height: 25,
    width: 25,
    transform: [{rotate:'0deg'}]
  },
  carouselItemView:{
    width: Dimensions.get('window').width,
    height:200,
    alignItems:'center',
  },
  carouselItemImage:{
    height:200,
    width:Dimensions.get('window').width,
  }

});
