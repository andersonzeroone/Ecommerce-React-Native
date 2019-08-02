import React from 'react'
import { Image, ScrollView, StyleSheet,Text, View } from 'react-native'

export default class ScrollImgsHome extends React.Component {

    render() {
        return (
            <View>
                <ScrollView horizontal={true} >
                    <View style={styles.scrollImgs}>
                        <Image source={require('../assets/imgs/avatar.jpg')} style={styles.img} />
                        <Image source={require('../assets/imgs/avatar.jpg')} style={styles.img} />
                        <Image source={require('../assets/imgs/avatar.jpg')} style={styles.img} />
                        <Image source={require('../assets/imgs/avatar.jpg')} style={styles.img} />
                        <Image source={require('../assets/imgs/avatar.jpg')} style={styles.img} />
                        <Image source={require('../assets/imgs/avatar.jpg')} style={styles.img} />
                    </View>
                </ScrollView>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    scrollImgs:{
      flex:1,  
      flexDirection: 'row',
      marginTop:6,
         
  
    },
    img: {
      height: 75,
      width: 75,
      borderRadius: 50,
      margin:6,
      justifyContent: 'space-between',
      //paddingHorizontal: 15,
      alignItems: 'center',
    },
  });