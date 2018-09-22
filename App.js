  /**
   * Sample React Native App
   * https://github.com/facebook/react-native
   *
   * @format
   * @flow
   */

  import React, {Component} from 'react';
  import {Platform, StyleSheet, Text, View, Image} from 'react-native';
  class Blinks extends Component{
    constructor(props){
      super(props);
      this.state ={isshowing: true}
      setInterval(()=>{this.setState(previousState=>{
        return{isshowing: !previousState.isshowing};
        });
      } ,1000)
    }
    render(){
      let display =this.state.isshowing ? this.props.text : ' ';
      return(
        <Text>{display}</Text>
      );
    }
  }
  class Blinks2 extends Component{
    constructor(props){
      super(props);
      this.state ={isshowing: false }
      setInterval(()=>{this.setState(previousState=>{
        return{isshowing: !previousState.isshowing};
        });
      } ,1000)
    }
    render(){
      let display =this.state.isshowing ? this.props.text : ' ';
      return(
        <Text>{display}</Text>
      );
    }
  }
  class Greeting extends Component {
    render() {
      return (
        <Text>Hello {this.props.name1}! Xin chao {this.props.name}!</Text>

      );
    }
  }
  class SayHi extends Component {
    render(){
      var Hi = `Hi guys, this is ${ this.props.name }.
  ${this.props.name} wants to have fun!`;
      return(
        <Text>{ Hi } </Text>

      );
    }
  }
  class Item extends Component {
    render(){
      const url ={
        uri: `${this.props.src}`
      };
      return (
        <View style={styles.container}>
          <View style={styles.item1}><Image source={ url }style={styles.picture} /></View>
          <View style={styles.item2}><Text style={styles.description}>{this.props.desc}</Text></View>
        </View>
      );
    }
  }


  type Props = {};
  export default class App extends Component<Props> {
    render() {
      let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      };
      return (
        <View>
          <Item desc='ajinomoto' src='http://otakukart.com/animeblog/wp-content/uploads/2017/05/hqdefault.jpg'/>
          <Item desc='hello' src='http://static.game24h.vn/upload/2015/2015-3/game/2015-08-07/naruto-made-trials-icon.png'/>
          <Item desc='you gay'src='http://otakukart.com/animeblog/wp-content/uploads/2017/05/hqdefault.jpg'/>
          <Item desc='no you'src='http://static.game24h.vn/upload/2015/2015-3/game/2015-08-07/naruto-made-trials-icon.png'/>
          <View styles={styles.container}>
            <Blinks text='a'/>
            <Blinks2 text='b'/>
          </View>

        </View>

      );
    }
  }

  const styles = StyleSheet.create({

    container: {
      //flex: 1,
      //justifyContent: 'center',
      //alignItems: 'center',

      flexDirection: 'row',
      height: 100,
      marginBottom: 1,
    },
    picture:{
      margin: 5,
      height: 90,

    },
    description:{
      backgroundColor: 'white',
      flex: 1,
      margin: 10,
    },
    item1: {
      flex: 1,
      backgroundColor: 'powderblue',
    },
    item2: {
      flex: 2,
      backgroundColor: 'skyblue',
    },
    welcome: {
      flex: 1,
      fontSize: 20,
      textAlign: 'center',
      width:20,
      backgroundColor: 'powderblue',

    },
    instructions: {
      flex: 3,
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
      backgroundColor: 'skyblue',
    },
    menu: {

    }
  });
