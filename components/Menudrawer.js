import React from 'react';
import{View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


 export default  class Menudrawer extends React.Component {
    toggleDrawer = () => {
      this.props.navigationProps.toggleDrawer();
    }
    render() {
      return (
        <View style={{ flexDirection: 'row', marginLeft: 22}}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
              <Icon name='md-menu' size={30} color="#fff"/>
          </TouchableOpacity>
          
        </View>
      )
    }
  }