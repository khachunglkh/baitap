import React, { Component } from 'react';
import { Text, View, Image, Alert, TouchableOpacity  } from 'react-native';

export default class CounterComponent extends Component {
  render(){
    return (
        <View style={{ flex: 1 }}>
          <Text style={{margin: 20, fontWeight: 'bold', color: 'forestgreen', fontSize: 20}}>
            Redux Saga Tutorials
          </Text>
          <View style={{ height: 50, margin: 10, flexDirection: 'row'}}>
            <TouchableOpacity
              style={{padding: 10, height: 45, borderRadius: 10, backgroundColor: 'darkviolet'}}
              onPress={ () => {
                this.props.onDecrement(1);
              }}
            >
              <Text style={{fontSize: 18, color: 'white'}}>
                Decrement -
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{padding: 10, height: 45, borderRadius: 10, backgroundColor: 'darkviolet', marginLeft: 30}}
              onPress={ () => {
                this.props.onIncrement(1);
              }}
            >
              <Text style={{fontSize: 18, color: 'white'}}>
                Increment +
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={{ margin: 10, fontWeight: 'bold', color: 'darkblue',fontSize: 17}}>
            Count: {this.props.times}
          </Text>
        </View>
    );
  }
}
