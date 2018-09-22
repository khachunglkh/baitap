import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,FlatList,TouchableHighlight,Alert,TouchableNativeFeedback} from 'react-native';
import Detail from './Detail';
export default class Contact extends Component{
  constructor(props){
    super(props);
    this.state = {
      isshowing: true,
      data: null
     }
  }
  _onPress(item) {
   this.setState({
     data: item,
     isshowing: false
   })

  }

  render(){
    const _render = this.state.isshowing ? (


        <FlatList data={[
          {key: 'Devin',phone: '01', address: 'Ha Noi'},
          {key: 'Jackson',phone: '02', address: 'Hai Phong'},
          {key: 'James',phone: '03', address: 'tp Ho Chi Minh'},
          {key: 'Joel',phone: '04', address: 'Tokyo'},
          {key: 'John',phone: '05', address: 'Chicago'},
          {key: 'Jillian',phone: '06', address: 'Paris'},
          {key: 'Jimmy',phone: '07', address: 'Da Nang'},
          {key: 'Julie',phone: '08', address: 'Beijing'},
        ]} renderItem={({item})=>
        <TouchableHighlight  onPress={() => this._onPress(item)} underlayColor="white">
          <Text style={styles.item}>{item.key}
          </Text>
        </TouchableHighlight>
        }
      />

  ) : (  <View style={styles.container}><View style={styles.header}>
  <TouchableNativeFeedback onPress={() => this.setState({isshowing: true})}>
    <Text style={{color: '#fff', fontWeight:'bold', fontSize:20}}>Back to contact list</Text>
  </TouchableNativeFeedback>
</View><Detail  name={this.state.data.key} phone={this.state.data.phone} address={this.state.data.address} ></Detail></View>)
    return(
      <View style={styles.container}>
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
  container:{

    flex: 1,

    backgroundColor:"#fff",

  },
  item: {
    margin: 10,
    padding: 10,
    fontSize: 18,
    height: 44,
    color: "#000",
    borderRadius: 4,
    borderWidth: 0.3,
    borderColor: '#fff',


  },
  name:{
    flex: 1,
    paddingTop: 22
  },
  number:{
    flex: 1,
    paddingTop: 22
  },
  address:{
    flex: 1,
    paddingTop: 22
  },
  detail:{
    flex: 1,
    paddingTop: 22
  }

});
