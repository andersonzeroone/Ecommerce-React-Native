import React from 'react';
import { createDrawerNavigator,createAppContainer,createStackNavigator} from 'react-navigation'; // 1.0.0-beta.27
import {HomeScreen, ProfileScreen,SettingsScreen}  from    '../src/screen' 
import Icon from 'react-native-vector-icons/Ionicons'
import LogoTitle from '../components/LogoTitle'
import Menudrawer from '../components/Menudrawer'
import MenuSearchCart from '../components/MenuSearchCart'
import commonStyles from '../src/commonStyles'

const HomeStackNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions:({navigation}) => ({
        headerLeft: <Menudrawer navigationProps={navigation}/>,
        headerTitle: <LogoTitle/>,
        headerRight:<MenuSearchCart/>,
          headerStyle:{
          backgroundColor: 'red',//#8b0000
        },
        headerTintColor: 'white',
      })
    }
  })

const ProfileStackNavigator = createStackNavigator({
    Home: {screen: ProfileScreen,
      navigationOptions:({navigation}) => ({
        title: 'Tela perfil',
        headerLeft: <Menudrawer navigationProps={navigation}/>,
        headerRight:<MenuSearchCart/>,
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
        headerLeft: <Menudrawer navigationProps={navigation}/>,
        headerRight:<MenuSearchCart/>,
        headerStyle:{
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
          fontFamily: 'SomeFont',

        },
      },
      defaultNavigationOptions: {
          
      }

    }
  )
  
export default createAppContainer(MyDrawernavigation)
  
  