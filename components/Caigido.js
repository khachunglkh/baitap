import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,FlatList,TouchableHighlight,Alert} from 'react-native';
import Detail from './Detail';
import Contact from './Contact';
export default class Caigido extends Component{
  constructor(props){
    super(props);
    this.state ={isshowing: true }
  }
  render(){
    return(
      <Contact></Contact>
    );
  }

}
