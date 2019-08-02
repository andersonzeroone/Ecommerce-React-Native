import React from 'react'
import { Image, View, Text } from 'react-native'

export default class SettingsScreen extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ margin: 80 }}>
                    <Image source={require('../../assets/imgs/config.png')} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 50 }}>Tela confi</Text>
                </View>
            </View>
        )
    }
}