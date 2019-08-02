import React from 'react';
import{View,StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default  class MenuSearchCart extends React.Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  }
  render() {
    return (
      <View style={{flex:1, flexDirection:'row', marginRight:10}}>
        <TouchableOpacity onPress={() => {alert.apply('oi')}}>
            <Icon name='md-search' size={25} color="#fff" style={styles.icons}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {alert.apply('oi')}}>
            <Icon name='md-cart' size={25} color="#fff" style={styles.icons}/>
        </TouchableOpacity>         
      </View>
    )
  }
}

const styles = StyleSheet.create({

  icons: {
    margin:10,
    justifyContent: 'space-between',
    //paddingHorizontal: 15,
    alignItems: 'center',
  
  },
});
