import React from 'react'
import {Image,View,} from 'react-native'
import {Drawer, Title,Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import ImageSlide from '../../assets/imgs/slide1.jpeg'

export default class HomeScreen extends React.Component{

    render(){
        return(
            <View style={{flex:1, justifyContent: 'center'}}>
<Content>
        <Card >
          <CardItem>
            <Left>
              
              <Body>
                <Text>NativeBase</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={ ImageSlide} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4Comments</Text>
              </Button>
            </Body>
            <Right>
              <Icon name="cart"  size={20}/>
            </Right>
          </CardItem>
        </Card>
    </Content>
            </View>
        )
    }
}