import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import getTemp from '../api/getTemp';
import {connect} from 'react-redux';
import { fetchDataThunk, fetchError, fetchSuccess, startFetchData } from '../redux/actionCreator'
class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      cityName: ''
    };
  }
  getWeatherMessage() {
    const { error, isLoading, temp, cityName } = this.props;
    if (isLoading) return '...Loading';
    if (error) return 'Vui long thu lai';
    if (!cityName) return 'Nhap ten thanh pho cua ban!';
    return `${cityName} hiện tại là ${temp}oC`
  }
  getTempbyCityName(){
    const { cityName } = this.state;
    // this.props.startFetchData();
    // getTemp(cityName)
    // .then(temp => this.props.fetchSuccess(cityName, temp))
    // .catch(() => this.props.fetchError());
    this.props.fetchDataThunk(cityName);
  }
  render(){
    return(
      <View style={styles.container}>
          <Text style={styles.message}>{this.getWeatherMessage()}</Text>
          <TextInput
            style={styles.textInput}
            value={this.state.cityName}
            onChangeText={text => this.setState({cityName: text})}
          />
          <TouchableOpacity style={styles.button} onPress={this.getTempbyCityName.bind(this)}>
              <Text style={styles.buttonText}>Lay nhiet do</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: 'lightblue',
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  message:{
    color: 'white',
    fontSize: 30,
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    margin: 50,
  },
  buttonText:{
    color: 'white',

  },
  textInput:{
    margin: 10,
    backgroundColor: 'blue',
    height: 40,
    paddingHorizontal: 10,
    color: 'white',
    width: 300,
  }

}
)
function mapStatetoProps(state){
  return{
    cityName: state.cityName,
    temp: state.temp,
    error: state.error,
    isLoading: state.isLoading
  };

}

export default connect(mapStatetoProps, { fetchDataThunk ,startFetchData,fetchError,fetchSuccess })(Main);
