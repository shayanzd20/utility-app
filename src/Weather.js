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
  ActivityIndicator
  } from 'react-native';
  import ModalSelector from 'react-native-modal-selector'
  import Selective from '../components/Selective';

  import Api from '../libs/api';

type Props = {};
export default class Weather extends Component<Props> {

  constructor() {
    super();

    this.state = {
      textInputValue: '',
      cities: [],
      showWeather:false,
      weather: null,
      cityTarget: null,
      showCities: false,
      indicatorStatus: false,
     };
    this.getCities();
  }

getCities()
{
  Api.get('getcities')
  .then((result)=>
  {
    console.log("getcities:::");
    this.setState({
      cities: result, indicatorStatus: true
    })
  })
  .catch((err)=>
  {
  })
}


getWeather(param)
{
  Api.post('weather',{city:param})
  .then((result)=>
  {
    let weatherLogo = null;
    if(result.weather[0].main == 'Clouds')
    {
      weatherLogo = require('./../assets/images/cloudy.png');
    }else if(result.weather[0].main == 'Sunny' || result.weather[0].main == 'Clear')
    {
      weatherLogo = require('./../assets/images/sunny.png');

    }else if(result.weather[0].main == 'Rainy')
    {
      weatherLogo = require('./../assets/images/rainy.png');

    }else if(result.weather[0].main == 'Snowy')
    {
      weatherLogo = require('./../assets/images/snowy.png');

    }
    this.setState({
      weather: result,
      showWeather:true,
      cityTarget:param,
      weatherLogo:weatherLogo
    })
  })
  .catch((err)=>
  {
  })
}

openWeather()
{
  return(
    <View style={styles.ViewCityTitleAndAzanTimes}>

        <View style={styles.cityTitle}>
          <Text style={{fontSize: 17, fontFamily: 'BYekan', alignSelf:'center'}}>{this.state.cityTarget ? this.state.cityTarget : "شهر"}</Text>
          <Text style={styles.timesNumber}>{this.state.oghat ? this.state.oghat.Today : null}</Text>
        </View>
        <View style={styles.azanTimesText}>
          <View style={styles.timesTitleView}>
            <Text style={styles.timesTitle}>طول جغرافیایی:</Text>
            <Text style={styles.timesTitle}>عرض جغرافیایی:</Text>
            <Text style={styles.timesTitle}>وضعیت آب و هوا:</Text>
            <Text style={styles.timesTitle}>دما:</Text>
            <Text style={styles.timesTitle}>فشار:</Text>
            <Text style={styles.timesTitle}>رطوبت:</Text>
            <Text style={styles.timesTitle}>حداقل دما:</Text>
            <Text style={styles.timesTitle}>حداکثر دما:</Text>
            <Text style={styles.timesTitle}>میدان دید:</Text>
            <Text style={styles.timesTitle}>سرعت وزش باد:</Text>
          </View>
          <View style={styles.timesNumberView}>
            <Text style={styles.timesNumber}>{this.state.weather ? this.state.weather.coord.lat : null}</Text>
            <Text style={styles.timesNumber}>{this.state.weather ? this.state.weather.coord.lon : null}</Text>
            <Text style={[styles.timesNumber,{fontSize:15}]}>{this.state.weather ? this.state.weather.weather[0].description : null}</Text>
            <Text style={styles.timesNumber}>{this.state.weather ? this.state.weather.main.temp : null}</Text>
            <Text style={styles.timesNumber}>{this.state.weather ? this.state.weather.main.pressure : null}</Text>
            <Text style={styles.timesNumber}>{this.state.weather ? this.state.weather.main.humidity : null}</Text>
            <Text style={styles.timesNumber}>{this.state.weather ? this.state.weather.main.temp_min : null}</Text>
            <Text style={styles.timesNumber}>{this.state.weather ? this.state.weather.main.temp_max : null}</Text>
            <Text style={styles.timesNumber}>{this.state.weather ? this.state.weather.visibility : null}</Text>
            <Text style={styles.timesNumber}>{this.state.weather ? this.state.weather.wind.speed : null}</Text>
          </View>
        </View>
      </View>

    )
}




  render() {
    return (
      <View style={styles.container}>

        {this.state.showCities ?
          <Selective
            show={this.state.showCities}
            data={this.state.cities}
            rowColor="#afc3f9"
            onChange={(option)=>{this.getWeather(option.label);this.setState({showCities: false})}}
          /> : null}


          <View style={styles.cityInput}>
            <View style={{flex:2,backgroundColor:'transparent',justifyContent: 'center'}}>
              <Image style={{  resizeMode: 'contain'}}
              source={this.state.weatherLogo} />
            </View>
            <View style={{flex:1,backgroundColor:'transparent',justifyContent: 'center',}}>
                  {this.state.indicatorStatus ?
                  <TouchableOpacity onPress={()=>{this.setState({showCities:true})
                  setTimeout(()=>this.setState({showCities: true}),500)
                  }}>
                    <View style={{
                    backgroundColor: '#cccccc',
                    // width:150,
                    borderRadius:5,
                    height: 30,
                    // borderRadius:20,
                    justifyContent: 'center',
                    }}>
                      <Text style={{fontFamily: 'BYekan', fontSize:15, alignSelf: 'center'}}>شهر مورد نظر را انتخاب کنید</Text>
                    </View>
                  </TouchableOpacity>
                  : <View style={{ paddingTop: 30}}><ActivityIndicator size={60} color="#0000ff" /></View>}

            </View>
          </View>
            {this.state.showWeather ? this.openWeather() :<View style={styles.ViewCityTitleAndAzanTimes}></View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  rowComponent: {
    alignItems: 'stretch',
    
  },
  cityInput:{
    flex:2,
    flexDirection:'column',
    // backgroundColor: '#DC7633',
    justifyContent: 'center',
    alignItems:'center',
    paddingHorizontal: 40

  },
  ViewCityTitleAndAzanTimes:{
    flex:4,
    // backgroundColor: '#3498DB',
    paddingHorizontal: 40,
    paddingBottom: 40,
    // bottom: 40,
  },
  cityTitle:{
    flex: 2,
    backgroundColor: '#f69ed7',
    justifyContent:'center',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,

  },
  azanTimesText:{
    flex: 7,
    
    flexDirection: 'row-reverse',

  },
  timesTitleView:{
    flex: 1,
    // backgroundColor: 'gray',
    backgroundColor: '#f9c4e7',
    borderBottomEndRadius: 20,
    paddingRight: 20
  },
  timesNumberView:{
    flex: 1,
    // backgroundColor: 'purple',
    backgroundColor: '#f9c4e7',
    borderBottomStartRadius: 20,
  },
  timesTitle:{
    fontSize: 15,
    fontFamily: 'BYekan',
    color: 'white',
    // alignSelf:'center'
    textAlign: 'left'
  },
  timesNumber:{
    fontSize: 15,
    fontFamily: 'BYekan',
    alignSelf:'center',
    color: 'white',

  },
  colomn: {
    flex: 1,
    
  },
});
