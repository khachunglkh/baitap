import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { addWord, toggleIsAdding } from '../../redux/actionCreators';
class Form extends Component{
  constructor(props){
    super(props);
    this.state={
      en:'',
      vn:''
    };
    this.onAdd = this.onAdd.bind(this);
  }

  onAdd(){
    const {en, vn} =this.state;
    this.props.addWord(en,vn);
    this.props.toggleIsAdding();
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.state.en}
          onChangeText={text=> this.setState({en: text})}
          placeholder="Enligsh word"
        />
        <TextInput
          style={styles.textInput}
          value={this.state.vn}
          onChangeText={text=> this.setState({vn: text})}
          placeholder="Meaning"
        />
        <TouchableOpacity onPress={this.onAdd}>
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity>

        </TouchableOpacity>
      </View>
    );
  }
}
export default connect(null, { addWord, toggleIsAdding })(Form);

const styles = StyleSheet.create ({
  textInput: {
    height: 40,
    width: 300,
    backgroundColor: '#E4F6D4',
    margin: 10,
    paddingHorizontal: 10
  },
  container:{
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  }

});
