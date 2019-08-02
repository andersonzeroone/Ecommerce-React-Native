import React from 'react';
import { Button, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import { Header, Icon, Left, Body, Right } from 'native-base';
import ImageHeader from './assets/imgs/ZAP-COMPRAS-LOGO-2.png'

class HomeScreen extends React.Component {
    render() {
        return (
            <Header style={styles.header} >
                <Left>
                    <TouchableOpacity style={{ marginLeft: 15 }}>
                        <Icon name='menu' onPress={this.props.navigation.openDrawer} />
                    </TouchableOpacity>
                </Left>
                <Body>
                    <View>
                        <Image source={ImageHeader} style={{ height: 42, width: 160 }} />
                    </View>
                    {/* <Title>SM testes</Title> */}
                </Body>
                <Right>
                    <TouchableOpacity >
                        <Icon name='search' />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Icon name='cart' />
                    </TouchableOpacity>
                </Right>
            </Header>

        );
    }
}