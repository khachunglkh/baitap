import React,{ Component } from 'react';
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { toggleMemorized, toggleShowWord } from '../../redux/actionCreators';

class Word extends Component {

  render(){
    const { en, vn, memorized, isShow, id }= this.props.myWord;
    const textDecorationLine = memorized ? 'line-through' : 'none';
    const memoreizedButtonText =  memorized ? 'forget' : 'memorized';
    const meaning = isShow ? vn : '-----'
    return(
      <View style={styles.container}>
        <Text style = {{ textDecorationLine }}>{en}</Text>
        <Text>{meaning}</Text>
        <View style={styles.controller}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.toggleMemorized(id)}
          >
            <Text>{memoreizedButtonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.toggleShowWord(id)}
          >
            <Text>show</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#D2DEF6',
    padding: 10,
    margin: 10,
  },
  controller:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button:{
    backgroundColor: '#f5f5f5',
    padding: 10,
    margin: 10
  }
});

export default connect(null, { toggleMemorized, toggleShowWord })(Word);
