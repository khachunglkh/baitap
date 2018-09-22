import React, {Component} from  'react';
import {Button, Platform, StyleSheet, Text, View, Image,FlatList,TouchableHighlight,Alert,TouchableNativeFeedback} from 'react-native';
import Details from './Details';
import { getPostFromServer } from '../Network/Server';
export default class Contact extends Component{
  constructor(props){
    super(props);
    this.state = {
      isshowing: true,
      data: null,
     }
  }
  componentDidMount(){
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }


  _onPress(item) {
   this.setState({
     data: item,
     isshowing: false
   })

  }
  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    const _render = this.state.isshowing ? (
      <View style={{backgroundColor: "#fff"}}>
      <FlatList
        /*data={[
        {key: 'Devin',phone: '01', address: 'A young woman who achieved a false sense of freedom by committing transgressions in the past. After much soul-searching and atonement, she has finally won true freedom for herself. No longer feeling crushed by the weight of the sky, the vast blue expanse offers limitless possibilities. She rides on the back of her noble, white primal beast into new frontiers.', job: 'Fighter',image: 'https://i.kym-cdn.com/entries/icons/facebook/000/024/062/jerry.jpg'},
        {key: 'Jackson',phone: '02', address: 'A delinquent from the Mysteria Academy of Magic who has following in his late father tire tracks by rolling through the world authentically. On the back of his beast, his baby, he is seeking the other side of the sky. His only weapons are two fists and a heart sincere.', job: 'Spider Man'},
        {key: 'James',phone: '03', address: 'tp Ho Chi Minh', job: 'BatMan'},
        {key: 'Joel',phone: '04', address: 'Tokyo', job: 'BadMan'},
        {key: 'John',phone: '05', address: 'Chicago', job: 'SuperMan'},
        {key: 'Jillian',phone: '06', address: 'Paris', job: 'Flash'},
        {key: 'Jimmy',phone: '07', address: 'Da Nang', job: 'Robin'},
        {key: 'Julie',phone: '08', address: 'Beijing', job: 'JK'},]}*/
        data={this.state.dataSource}
        keyExtractor = { (id, index) => index.toString() }

      renderItem={({item})=>
      <View style={styles.contact}>
        <View style={styles.image_wrapper}>
          <Image style={styles.image} source={{uri: 'https://i.kym-cdn.com/entries/icons/facebook/000/024/062/jerry.jpg'}} />
        </View>
        <View style={styles.name_wrapper}>
          <Text style={styles.item1}>{item.id}</Text>
          <Text style={styles.item}>{item.title}</Text>
        </View>
        <View style={styles.button_wrapper}>
          <TouchableHighlight  style={styles.button} onPress={() => this._onPress(item)} underlayColor="white">
            <View><Text style={styles.button_text}>Chi tiết
            </Text></View>
          </TouchableHighlight>

        </View>
      </View>

      }
      />
    </View>
  ) : (
    <View>
    <View style={styles.header}>
    <TouchableNativeFeedback onPress={() => this.setState({isshowing: true})}>
      <View><Text style={{color: '#fff', fontWeight:'bold', fontSize:20}}>Back to contact list</Text></View>
    </TouchableNativeFeedback>
    </View>
    <Details title={this.state.data.title} description={this.state.data.body}></Details></View>
    )
      return(
        <View style={{backgroundColor: "#fff", flex :1}}>
          {_render}</View>
      );

  }
}
const styles = StyleSheet.create({
  header:{
    padding: 5,
    height: 40,
    backgroundColor: 'skyblue',

  },
  item1:{
    fontWeight: 'bold',
    color: "#000",
  },
  image:{
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  button_text:{
    textAlign: 'center',
    color: 'skyblue',
    backgroundColor: "#fff"

  },
  button:{
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor:'skyblue',
    borderRadius: 5,
  },
  contact:{
    flexDirection: 'row',
    flex: 1,
    height: 80,
    paddingHorizontal: 10,
    borderBottomColor: '#bbb',
    borderBottomWidth: 0.5,
    justifyContent: 'center',

  },
  image_wrapper:{

    width: 50,
    height: 80,
      justifyContent: 'center',
  },
  name_wrapper:{

    flex: 3.5,
    height: 80,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  button_wrapper:{

    flex: 1,
    height: 80,
    justifyContent: 'center',
  }

})
