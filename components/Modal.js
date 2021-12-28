import React, {Component} from 'react';
import {
  Modal,
  TouchableOpacity,
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView } from 'react-native';

  export default class DisplayModal extends Component<props> {

    constructor(props) {
      super(props);
      this.state={
        display: false
      }

    }

    componentWillReceiveProps(nextProps) {
        this.setState({display: nextProps.display})
    }

    componentWillUnmount() {
      this.setState({display: false})
   }

    render() {

    return (
    <Modal
    visible={ this.state.display } animationType = "fade"
          transparent={true}>
        <View style={{ backgroundColor:'rgba(0,0,0,0.5)', paddingHorizontal: 40, paddingVertical: 20, height:Dimensions.get('window').height}}>
          <View style={styles.ViewInner}>
            <TouchableOpacity style={{backgroundColor: 'pink'}} onPress={()=>this.setState({display: false})}>
              <Image style={{width: 40,height: 40}} source={require('./../assets/images/cancel.png')}/>
            </TouchableOpacity>
            <ScrollView>
            <Text style ={styles.text}>{this.props.data}</Text>
            </ScrollView>
          </View>
        </View>
    </Modal>
    )
  }
}

const styles = StyleSheet.create({
  ViewInner: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 60,
    backgroundColor: 'pink',
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    fontFamily: 'BYekan',
  }
})
