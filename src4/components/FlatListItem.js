import React, { Component } from 'react';
import Swipeout from 'react-native-swipeout';
import { Text, View, Alert, TextInput, TouchableOpacity } from 'react-native';

export default class FlatListItem extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    const swipeSetting ={
      autoClose: true,
      right: [
        {
          onPress: () => {

          },
          text: 'Edit', type: 'primary'
        },
        {
          onPress: () => {

          },
          text: 'Delete', type: 'delete'
        }
      ],
      rowId: this.props.id,
      sectionId: 1
    };
    return (
      <Swipeout  {...swipeSetting}>
        <View style={{
          flex: 1,
        }}>
          <Text style={{
            padding: 10,
            fontWeight: 'bold',
            fontSize: 17,
            color: 'white',
            backgroundColor: (this.props,itenIndex % 2 === 0) ? 'dodgerblue' : 'mediumseagreen'
          }}>
            {`${this.props.title}, releaseYear=${this.props.email}`}
          </Text>
        </View>
      </Swipeout>
    );
  }
}
