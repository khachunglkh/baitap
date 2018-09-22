import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,FlatList, } from 'react-native';
import Contact from './Contact';

export default class Detail extends Component{
  render(){

    return(
      <View style={styles.detail}>

        <Image style={styles.image} source={{uri: 'https://i.kym-cdn.com/entries/icons/facebook/000/024/062/jerry.jpg'}} ></Image>
        <View style={styles.meta}><Text style={{color: '#fff'}}>Name</Text></View>
        <Text style={styles.name} >{this.props.name}</Text>
        <View style={styles.meta}><Text style={{color: '#fff'}}>Phone number</Text></View>
        <Text style={styles.number} >{this.props.phone}</Text>
        <View style={styles.meta}><Text style={{color: '#fff'}}>Address</Text></View>
        <Text style={styles.address} >{this.props.address}</Text>
      </View>
    );
  }

}
const styles= StyleSheet.create({
  image:{
    width: 100,
    height: 100
  },
  meta:{
    backgroundColor:'powderblue',
    height: 25,
    padding: 5
  },
  name: {
    padding: 3,
    color: "#000",
    height: 30,
    fontSize: 18
  },
  number:{
    padding: 3,
    color: "#000",
    height: 30,
    fontSize: 18
  },
  address:{
    padding: 3,
    color: "#000",
    height: 30,
    fontSize: 18
  },
  detail:{

  }
});
