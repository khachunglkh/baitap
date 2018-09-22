import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,FlatList, } from 'react-native';
export default class Details extends Component{
  render(){
    return(
      <View >
        <View style= {{flexDirection: 'row',borderBottomColor: '#bbb',
        borderBottomWidth: 0.5, }}>
          <View style={styles.image_detail_wrapper}>
            <Image style={styles.image} source={{uri: 'https://i.kym-cdn.com/entries/icons/facebook/000/024/062/jerry.jpg'}} />
          </View>
          <View style={styles.title_wrapper}><Text style={{fontWeight: 'bold', color: '#000', marginBottom: 10, fontSize: 20}} > {this.props.title}</Text></View>
        </View>
        <View style={styles.description_wrapper }>
          <Text style={{fontWeight: 'bold', color: '#000', marginBottom: 10}}>Description</Text>
          <Text>{this.props.description}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create ({
  image_detail_wrapper:{
    padding: 10,
  },
  title_wrapper: {
    padding: 10,
  },
  image:{
    height: 150,
    width: 150,
  },
  description_wrapper:{
    padding: 10,
  }
})
