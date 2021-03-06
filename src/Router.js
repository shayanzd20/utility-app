import React, {Component} from 'react';
import {
  TouchableOpacity,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView
  } from 'react-native';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';

// pages
import Main from './Main';
import BMI from './BMI';
import MedicalPlants from './MedicalPlants';
import Diseases from './Diseases';
import Calories from './Calories';
import Fat from './Fat';
import Carbohydrates from './Carbohydrates';
import Proteins from './Proteins';

import Currency from './Currency';
import Gold from './Gold';
import Mobile from './Mobile';
import CarsPrice from './CarsPrice';
import Metro from './Metro';
import AzanTime from './AzanTime';
import Salavat from './Salavat';
import Coins from './Coins';
import Tabir from './Tabir';
import News from './News';
import Names from './Names';
import Pishkhan from './Pishkhan';
import Banks from './Banks';
import Post from './Post';
import Weather from './Weather';
import Calendar from './Calendar';

import QRCode from './QRCode';
import Corrector from './Corrector';
import Taxi from './Taxi';
import Translate from './Translate';
import BankProfit from './BankProfit';
import Khalafi from './Khalafi';
import Distance from './Distance';
import InstaDownloader from './InstaDownloader';
import DeviceInfo from './DeviceInfo';
import StoryDownloader from './StoryDownloader';

import Game from './Game';
import Botri from './Botri';
import FingerFaal from './FingerFaal';
import Faal from './Faal';
import Quote from './Quote';
import Login from './Login';
import Profile from './Profile';
import Splash from './Splash';

import Qabz from './Qabz';
import InternetPackage from './InternetPackage';
import Charge from './Charge';

import Icon from 'react-native-vector-icons/FontAwesome';
import AIcon from 'react-native-vector-icons/AntDesign';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EIcon from 'react-native-vector-icons/EvilIcons';


class TabIcon extends Component {
  render() {
    var color = this.props.selected ? '#00f240' : '#FFFFFF';

    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        <Icon style={{color: '#424242'}} name={this.props.iconName || "circle"} size={22}/>
      </View>
    );
  }
}

const renderBackButton = () => (
    <TouchableOpacity
        onPress={() => Actions.pop()}
    >
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
          <EIcon name='chevron-left' size={50} style={{color: '#000000', }} />
        </View>
    </TouchableOpacity>
);

const RouterComponent = () => {
  return (
      <Router>
        <Stack key='root'>
          <Scene key='tabs'
            hideNavBar={true}
            tabs
            tabBarStyle={{backgroundColor: '#00bdb8'}}
            swipeEnabled
            labelStyle={{fontSize: 13, fontFamily: 'BYekan',color: 'black'}}
              >
              <Scene key="tab1" title="????????" iconName="home" showLabel={false} icon={TabIcon}>
                <Scene key="menu" title="Main" component={Main} hideNavBar={true}/>
              </Scene>
              <Scene key="tab3" title="??????????????" iconName="user-o" showLabel={false} icon={TabIcon}>
                <Scene key="profile" title="Profile" component={Profile} hideNavBar={true} initial/>
              </Scene>
          </Scene>
          <Scene key="calories" title="?????????? ????????" component={Calories} navigationBarStyle={{ backgroundColor: '#8786fc' }}     renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>?????????? ????????</Text></View>}
          />
          <Scene key="medicalplants" title="???????? ????????????" component={MedicalPlants} navigationBarStyle={{ backgroundColor: '#f88c8c' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>???????? ????????????</Text></View>}
          />
          <Scene key="diseases" title="???????????? ????" component={Diseases} navigationBarStyle={{ backgroundColor: '#8786fc' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>???????????? ????</Text></View>}
          />
          <Scene key="fat" title="???????? ????????" component={Fat} navigationBarStyle={{ backgroundColor: '#f69ed7' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>???????? ????????</Text></View>}
          />
          <Scene key="carbohydrates" title="???????? ???????????? ????????" component={Carbohydrates} navigationBarStyle={{ backgroundColor: '#ffa977' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>???????? ???????????? ????????</Text></View>}
          />
          <Scene key="proteins" title="?????????????? ????????" component={Proteins} navigationBarStyle={{ backgroundColor: '#9ebef2' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>?????????????? ????????</Text></View>}
          />
          <Scene key="bmi" title="???????????? ???? ?? ??????" component={BMI} navigationBarStyle={{ backgroundColor: 'rgb(160, 214, 154)' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>???????????? ???? ?? ??????</Text></View>}
          />
          <Scene key="currency" title="?????? ??????" component={Currency} navigationBarStyle={{ backgroundColor: '#f69ed7' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>?????? ??????</Text></View>}
          />
          <Scene key="qrcode" title="??????????????" component={QRCode} navigationBarStyle={{ backgroundColor: '#8786fc' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>??????????????</Text></View>}
          />
          <Scene key="calendar" title="??????????" component={Calendar} navigationBarStyle={{ backgroundColor: '#f88c8c' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>??????????</Text></View>}
          />
          <Scene key="carprice" title="???????? ??????????" component={CarsPrice} navigationBarStyle={{ backgroundColor: '#a0d699' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>???????? ??????????</Text></View>}
          />
          <Scene key="metro" title="????????" component={Metro} navigationBarStyle={{ backgroundColor: '#ffa977' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>????????</Text></View>}
          />
          <Scene key="azantime" title="?????????? ????????" component={AzanTime} navigationBarStyle={{ backgroundColor: '#8786fc' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>?????????? ????????</Text></View>}
          />
          <Scene key="gold" title="???????? ?????????? ??????????????" component={Gold} navigationBarStyle={{ backgroundColor: '#8ddbf9' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>???????? ?????????? ??????????????</Text></View>}
          />
          <Scene key="coins" title="???????? ??????" component={Coins} navigationBarStyle={{ backgroundColor: '#f88c8c' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>???????? ??????</Text></View>}
          />
          <Scene key="storydownloader" title="?????????????? ???????????? ????????????????????" component={StoryDownloader} navigationBarStyle={{ backgroundColor: '#8cd5ca' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>?????????????? ???????????? ????????????????????</Text></View>}
          />
          <Scene key="corrector" title="?????? ????????????" component={Corrector} navigationBarStyle={{ backgroundColor: '#8ddbf9' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>?????? ????????????</Text></View>}
          />
          <Scene key="bmi" title="???? ???? ????" component={BMI} navigationBarStyle={{ backgroundColor: '#8786fc' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>???? ???? ????</Text></View>}
          />
          <Scene key="weather" title="???? ?? ??????" component={Weather} navigationBarStyle={{ backgroundColor: '#f69ed7' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>???? ?? ??????</Text></View>}
          />
          <Scene key="quote" title="?????? ????????????" component={Quote} navigationBarStyle={{ backgroundColor: '#8ddbf9' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>?????? ????????????</Text></View>}
          />
          <Scene key="instadownloader" title="???????????? ????????????????????" component={InstaDownloader} navigationBarStyle={{ backgroundColor: '#8786fc' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>???????????? ????????????????????</Text></View>}
          />
          <Scene key="translate" title="??????????" component={Translate} navigationBarStyle={{ backgroundColor: '#86b0fd' }}  renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>??????????</Text></View>}
          />
          <Scene key="banks" title="???????? ????" component={Banks} navigationBarStyle={{ backgroundColor: '#f88c8c' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>???????? ????</Text></View>}
          />
          <Scene key="pishkhan" title="??????????????" component={Pishkhan} navigationBarStyle={{ backgroundColor: '#f88c8c' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>??????????????</Text></View>}
          />
          <Scene key="news" title="??????????????" component={News} navigationBarStyle={{ backgroundColor: '#9ebef2' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>??????????????</Text></View>}
          />
          <Scene key="faal" title="?????? ????????" component={Faal} navigationBarStyle={{ backgroundColor: '#f88c8c' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>?????? ????????</Text></View>}
          />
          <Scene key="botri" title="???????? ????????" component={Botri} navigationBarStyle={{ backgroundColor: '#a0d699' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>???????? ????????</Text></View>}
          />
          <Scene key="distance" title="?????????? ?????? ??????????" component={Distance} navigationBarStyle={{ backgroundColor: '#8ddbf9' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>?????????? ?????? ??????????</Text></View>}
          />
          <Scene key="khalafi" title="?????????? ??????????" component={Khalafi} navigationBarStyle={{ backgroundColor: '#a0d699' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>?????????? ??????????</Text></View>}
          />
          <Scene key="salavat" title="?????????? ????????" component={Salavat} navigationBarStyle={{ backgroundColor: '#ffa977' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>?????????? ????????</Text></View>}
          />
          <Scene key="bankprofit" title="?????? ??????????" component={BankProfit} navigationBarStyle={{ backgroundColor: '#a3e4d9' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>?????? ??????????</Text></View>}
          />
          <Scene key="tabir" title="?????????? ????????" component={Tabir} navigationBarStyle={{ backgroundColor: '#8ddbf9' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>?????????? ????????</Text></View>}
          />
          <Scene key="game" title="????????" component={Game} navigationBarStyle={{ backgroundColor: '#bca1f2' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>????????</Text></View>}
          />
          <Scene key="post" title="???????????? ????????????" component={Post} navigationBarStyle={{ backgroundColor: '#ffa977' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>???????????? ????????????</Text></View>}
          />
          <Scene key="names" title="?????? ?????? ????????????" component={Names} navigationBarStyle={{ backgroundColor: '#f69ed7' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>?????? ?????? ????????????</Text></View>}
          />
          <Scene key="fingerfaal" title="?????? ?????? ??????????" component={FingerFaal} navigationBarStyle={{ backgroundColor: '#2c681b' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>?????? ?????? ??????????</Text></View>}
          />
          <Scene key="deviceinfo" title="???????????? ????????" component={DeviceInfo} navigationBarStyle={{ backgroundColor: '#2c681b' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>???????????? ????????</Text></View>}
          />
          <Scene key="phoneprice" title="???????? ???????? ??????????" component={Mobile} navigationBarStyle={{ backgroundColor: '#2c681b' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>???????? ???????? ??????????</Text></View>}
          />
          <Scene key="taxi" title="?????????? ??????????" component={Taxi} navigationBarStyle={{ backgroundColor: '#2c681b' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>?????????? ??????????</Text></View>}
          />
          <Scene key="qabz" title="???????????? ??????" component={Qabz} navigationBarStyle={{ backgroundColor: '#ff695e' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>???????????? ??????</Text></View>}
          />
          <Scene key="charge" title="???????? ????????" component={Charge} navigationBarStyle={{ backgroundColor: '#c9373b' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>???????? ????????</Text></View>}
          />
          <Scene key="internetpackage" title="???????? ???????? ??????????????" component={InternetPackage} navigationBarStyle={{ backgroundColor: '#2c681b' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>???????? ???????? ??????????????</Text></View>}
          />
          <Scene key="login" component={Login} navigationBarStyle={{ backgroundColor: '#8786fc' }}
          hideNavBar={true}
          />
          <Scene key="profile" component={Profile} navigationBarStyle={{ backgroundColor: '#8786fc' }}
          hideNavBar={true}
          />
          <Scene key="splash" component={Splash} navigationBarStyle={{ backgroundColor: '#8786fc' }}
          hideNavBar={true}
          initial
          />

        </Stack>
      </Router>

  );
};

export default RouterComponent;
