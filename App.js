import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DrawerNagation from './navigation/DrawerNavigator'

export default  class App extends React.Component {
  render() {
    return (
       <View style={styles.container}>
        <DrawerNagation/>
       </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',

  }
});