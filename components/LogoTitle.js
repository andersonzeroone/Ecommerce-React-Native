import React from 'react';
import{ Image} from 'react-native'

export default class LogoTitle extends React.Component {
    render() {
      return (
        <Image
        source={require('../assets/imgs/ZAP-COMPRAS-LOGO-2.png')} 
        style={{ marginLeft: 10,width: 120, height: 40, marginTop: 1}}/>
      );
    }
  }