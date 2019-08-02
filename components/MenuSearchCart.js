import React from 'react';
import{View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default  class MenuSearchCart extends React.Component {
    toggleDrawer = () => {
      this.props.navigationProps.toggleDrawer();
    }
    render() {
      return (
        <View style={{ flexDirection: 'row', marginRight: 20}}>
          <TouchableOpacity onPress={() => {alert.apply('oi')}}>
              <Icon name='md-search' size={25} color="#fff"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {alert.apply('oi')}}>
              <Icon name='md-cart' size={25} color="#fff"/>
          </TouchableOpacity>         
        </View>
      )
    }
  }