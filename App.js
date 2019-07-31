import React from 'react';
import{View, StyleSheet, Button, Image, TouchableOpacity} from 'react-native'
import { createDrawerNavigator,createAppContainer,createStackNavigator} from 'react-navigation'; // 1.0.0-beta.27
import{HomeScreen, ProfileScreen,SettingsScreen}  from './src/screen'
import Icon from 'react-native-vector-icons/Ionicons'

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
      source={require('./assets/imgs/ZAP-COMPRAS-LOGO-2.png')} 
      style={{ marginLeft: 10,width: 120, height: 40, marginTop: 1}}/>
    );
  }
}
class NavigationDrawerStructure extends React.Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  }
  render() {
    return (
      <View style={{ flexDirection: 'row', marginLeft: 20}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            <Icon name='md-menu' size={30} color="#fff"/>
          {/* <Image source={require('./assets/imgs/menu.jpg')} 
            style={{width: 25, height: 25, margin: 20}}/> */}
        </TouchableOpacity>
        
      </View>
    )
  }
}
const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions:({navigation}) => ({
  
      headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
      headerTitle: <LogoTitle/>,
        headerStyle:{
        backgroundColor: 'red',
      },
      headerTintColor: 'white',
    })
  }
})

const ProfileStackNavigator = createStackNavigator({
  Home: {screen: ProfileScreen,
    navigationOptions:({navigation}) => ({
      title: 'Tela perfil',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyle:{
        backgroundColor: 'red',
      },
      headerTintColor: 'white',
    })
  }
})

const SettingsStackNavigator = createStackNavigator({
  Home: {screen: SettingsScreen,
    navigationOptions:({navigation}) => ({
      title: 'Tela config',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyleColor:{
        backgroundColor: 'red',
      },
      headerTintColor: 'white',
    })
  }
})
const MyDrawernavigation = createDrawerNavigator(
  {

    HomeMenu:{
      screen:HomeStackNavigator,
      navigationOptions:{
        drawerLabel: 'Home',
        drawerIcon: ({ focused, tintColor }) => (
        <Icon name='md-home' size={25}/> 
        ),
      },
    },
    HomeProfile:{
      screen:ProfileStackNavigator,
      navigationOptions:{
        drawerLabel: 'Profile',
        drawerIcon: ({ focused, tintColor }) => (
           <Icon name='md-person' size={25} />
        ),
      },
    },
    HomeSettings:{
      screen:SettingsStackNavigator,
      navigationOptions:{
        drawerLabel: 'Settings',
        drawerIcon: ({ focused, tintColor }) => (
            <Icon name='md-settings' size={25} />
        ),
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: 'red',
      labelStyle: {
        fontSize: 15,
        marginLeft:3,
        marginTop: 15,
        
      }
    }
  }
)

export default createAppContainer(MyDrawernavigation)

//https://www.youtube.com/watch?v=te9IWhXJvQo&list=RDoNPFbz4c3v4&index=27