import React from 'react'
import { Image, View, Text } from 'react-native'

export default class ProfileScreen extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ margin: 50 }}>
                    <Image source={require('../../assets/imgs/usuario.png')} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 50 }}>Tela Per</Text>
                </View>
            </View>
        )
    }
}