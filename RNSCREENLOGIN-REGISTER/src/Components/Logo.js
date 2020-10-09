import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {ImgData} from '../constants/IngData';

class Logo extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Image style={{width: 100, height: 100}} source={ImgData.logoIcon} />
        <Text style={Styles.logoText}> Welcome to Mojek Apps</Text>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoText: {
    marginVertical: 1,
    fontSize: 20,
    color: 'rgba(255,255,255,0.7)',
  },
});

export default Logo;
