import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  FlatList
   } from 'react-native';

  export default class Selective extends Component<props> {

    constructor(props) {
      super(props);
      this.state={
        show:false
      }

    }

    componentWillReceiveProps(nextProps) {
        this.setState({show: nextProps.show})
    }

    render() {

    return (
      <View>
      {this.state.show ?
        <View style={{ paddingVertical:20, zIndex: 1,position: 'absolute',width: Dimensions.get("window").width,height: Dimensions.get("window").height ,backgroundColor: 'rgba(0, 0, 0,0.5)'}}>
        <FlatList
              data={this.props.data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) =>
                      <View style={styles.currencyMotherBlockStyle}>
                        <TouchableOpacity onPress={()=>this.props.onChange(item)}>
                        {/*<TouchableOpacity onPress={()=>{this.setState({show: false});this.props.onChange}}>*/}
                        <View style={[styles.currencyChildBlockStyle,{backgroundColor:this.props.rowColor}]}>
                          <View style={{ flex:1 ,flexDirection: 'row'}}>
                            <View style={{ flex: 1, backgroundColor: 'transparent' , paddingLeft: 5}}>
                              <Text style={styles.buttonTextItem}  >{item.label}</Text>
                            </View>
                          </View>
                        </View>
                        </TouchableOpacity>
                    </View>
                  }
            />
        </View>
        : null}
      </View>

    )
  }
}

const styles = StyleSheet.create({
  currencyMotherBlockStyle: {
    flex: 1,
  },
  currencyChildBlockStyle: {
    backgroundColor: '#fab0b0',
    marginVertical: 7,
    marginLeft: 15,
    marginRight: 15,
    paddingVertical: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextItem: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'BYekan',
    alignSelf:'center',
  },
})
