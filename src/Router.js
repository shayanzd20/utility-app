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
              <Scene key="tab1" title="خانه" iconName="home" showLabel={false} icon={TabIcon}>
                <Scene key="menu" title="Main" component={Main} hideNavBar={true}/>
              </Scene>
              <Scene key="tab3" title="پروفایل" iconName="user-o" showLabel={false} icon={TabIcon}>
                <Scene key="profile" title="Profile" component={Profile} hideNavBar={true} initial/>
              </Scene>
          </Scene>
          <Scene key="calories" title="کالری شمار" component={Calories} navigationBarStyle={{ backgroundColor: '#8786fc' }}     renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>کالری شمار</Text></View>}
          />
          <Scene key="medicalplants" title="خواص گیاهان" component={MedicalPlants} navigationBarStyle={{ backgroundColor: '#f88c8c' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>خواص گیاهان</Text></View>}
          />
          <Scene key="diseases" title="بیماری ها" component={Diseases} navigationBarStyle={{ backgroundColor: '#8786fc' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>بیماری ها</Text></View>}
          />
          <Scene key="fat" title="چربی شمار" component={Fat} navigationBarStyle={{ backgroundColor: '#f69ed7' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>چربی شمار</Text></View>}
          />
          <Scene key="carbohydrates" title="کربو هیدرات شمار" component={Carbohydrates} navigationBarStyle={{ backgroundColor: '#ffa977' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>کربو هیدرات شمار</Text></View>}
          />
          <Scene key="proteins" title="پروتئین شمار" component={Proteins} navigationBarStyle={{ backgroundColor: '#9ebef2' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>پروتئین شمار</Text></View>}
          />
          <Scene key="bmi" title="محاسبه قد و وزن" component={BMI} navigationBarStyle={{ backgroundColor: 'rgb(160, 214, 154)' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>محاسبه قد و وزن</Text></View>}
          />
          <Scene key="currency" title="نرخ ارز" component={Currency} navigationBarStyle={{ backgroundColor: '#f69ed7' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>نرخ ارز</Text></View>}
          />
          <Scene key="qrcode" title="کیوآرکد" component={QRCode} navigationBarStyle={{ backgroundColor: '#8786fc' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>کیوآرکد</Text></View>}
          />
          <Scene key="calendar" title="تقویم" component={Calendar} navigationBarStyle={{ backgroundColor: '#f88c8c' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>تقویم</Text></View>}
          />
          <Scene key="carprice" title="قیمت خودرو" component={CarsPrice} navigationBarStyle={{ backgroundColor: '#a0d699' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>قیمت خودرو</Text></View>}
          />
          <Scene key="metro" title="مترو" component={Metro} navigationBarStyle={{ backgroundColor: '#ffa977' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>مترو</Text></View>}
          />
          <Scene key="azantime" title="اوقات شرعی" component={AzanTime} navigationBarStyle={{ backgroundColor: '#8786fc' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>اوقات شرعی</Text></View>}
          />
          <Scene key="gold" title="قیمت فلزات گرانبها" component={Gold} navigationBarStyle={{ backgroundColor: '#8ddbf9' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>قیمت فلزات گرانبها</Text></View>}
          />
          <Scene key="coins" title="قیمت سکه" component={Coins} navigationBarStyle={{ backgroundColor: '#f88c8c' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>قیمت سکه</Text></View>}
          />
          <Scene key="storydownloader" title="دانلودر استوری اینستاگرام" component={StoryDownloader} navigationBarStyle={{ backgroundColor: '#8cd5ca' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>دانلودر استوری اینستاگرام</Text></View>}
          />
          <Scene key="corrector" title="غلط املایی" component={Corrector} navigationBarStyle={{ backgroundColor: '#8ddbf9' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>غلط املایی</Text></View>}
          />
          <Scene key="bmi" title="بی ام آی" component={BMI} navigationBarStyle={{ backgroundColor: '#8786fc' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>بی ام آی</Text></View>}
          />
          <Scene key="weather" title="آب و هوا" component={Weather} navigationBarStyle={{ backgroundColor: '#f69ed7' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>آب و هوا</Text></View>}
          />
          <Scene key="quote" title="سخن بزرگان" component={Quote} navigationBarStyle={{ backgroundColor: '#8ddbf9' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>سخن بزرگان</Text></View>}
          />
          <Scene key="instadownloader" title="دانلود اینستاگرام" component={InstaDownloader} navigationBarStyle={{ backgroundColor: '#8786fc' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>دانلود اینستاگرام</Text></View>}
          />
          <Scene key="translate" title="مترجم" component={Translate} navigationBarStyle={{ backgroundColor: '#86b0fd' }}  renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>مترجم</Text></View>}
          />
          <Scene key="banks" title="بانک ها" component={Banks} navigationBarStyle={{ backgroundColor: '#f88c8c' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>بانک ها</Text></View>}
          />
          <Scene key="pishkhan" title="پیشخوان" component={Pishkhan} navigationBarStyle={{ backgroundColor: '#f88c8c' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>پیشخوان</Text></View>}
          />
          <Scene key="news" title="مطبوعات" component={News} navigationBarStyle={{ backgroundColor: '#9ebef2' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>مطبوعات</Text></View>}
          />
          <Scene key="faal" title="فال حافظ" component={Faal} navigationBarStyle={{ backgroundColor: '#f88c8c' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>فال حافظ</Text></View>}
          />
          <Scene key="botri" title="بطری بازی" component={Botri} navigationBarStyle={{ backgroundColor: '#a0d699' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>بطری بازی</Text></View>}
          />
          <Scene key="distance" title="فاصله بین شهرها" component={Distance} navigationBarStyle={{ backgroundColor: '#8ddbf9' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>فاصله بین شهرها</Text></View>}
          />
          <Scene key="khalafi" title="خلافی خودرو" component={Khalafi} navigationBarStyle={{ backgroundColor: '#a0d699' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>خلافی خودرو</Text></View>}
          />
          <Scene key="salavat" title="صلوات شمار" component={Salavat} navigationBarStyle={{ backgroundColor: '#ffa977' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>صلوات شمار</Text></View>}
          />
          <Scene key="bankprofit" title="سود بانکی" component={BankProfit} navigationBarStyle={{ backgroundColor: '#a3e4d9' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>سود بانکی</Text></View>}
          />
          <Scene key="tabir" title="تعبیر خواب" component={Tabir} navigationBarStyle={{ backgroundColor: '#8ddbf9' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>تعبیر خواب</Text></View>}
          />
          <Scene key="game" title="بازی" component={Game} navigationBarStyle={{ backgroundColor: '#bca1f2' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>بازی</Text></View>}
          />
          <Scene key="post" title="پیگیری مرسوله" component={Post} navigationBarStyle={{ backgroundColor: '#ffa977' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>پیگیری مرسوله</Text></View>}
          />
          <Scene key="names" title="نام های ایرانی" component={Names} navigationBarStyle={{ backgroundColor: '#f69ed7' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>نام های ایرانی</Text></View>}
          />
          <Scene key="fingerfaal" title="فال اثر انگشت" component={FingerFaal} navigationBarStyle={{ backgroundColor: '#2c681b' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>فال اثر انگشت</Text></View>}
          />
          <Scene key="deviceinfo" title="مشخصات گوشی" component={DeviceInfo} navigationBarStyle={{ backgroundColor: '#2c681b' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>مشخصات گوشی</Text></View>}
          />
          <Scene key="phoneprice" title="قیمت تلفن همراه" component={Mobile} navigationBarStyle={{ backgroundColor: '#2c681b' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>قیمت تلفن همراه</Text></View>}
          />
          <Scene key="taxi" title="تاکسی ارزون" component={Taxi} navigationBarStyle={{ backgroundColor: '#2c681b' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>تاکسی ارزون</Text></View>}
          />
          <Scene key="qabz" title="پرداخت قبض" component={Qabz} navigationBarStyle={{ backgroundColor: '#ff695e' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>پرداخت قبض</Text></View>}
          />
          <Scene key="charge" title="خرید شارژ" component={Charge} navigationBarStyle={{ backgroundColor: '#c9373b' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>خرید شارژ</Text></View>}
          />
          <Scene key="internetpackage" title="خرید بسته اینترنت" component={InternetPackage} navigationBarStyle={{ backgroundColor: '#2c681b' }} renderBackButton={() => renderBackButton()}
          renderTitle={<View style={{flex: 1}} ><Text style={{ fontFamily: 'BYekan',fontSize: 17,marginRight: 10 }}>خرید بسته اینترنت</Text></View>}
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
