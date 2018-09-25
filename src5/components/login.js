import React, { Component } from 'react';
import {View, Text, TouchableOpacity,TextInput} from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';

export default class Login extends Component {
  constructor(props){
    super(props);
  }
  this.state={ email: '',password:''};

  render(){
    return(
      <View style={{flex: 1, backgroundColor: 'rgb(250,129,63)', justifyContent: 'space-around', alignItems: 'center' }}>
        <View style={{backgroundColor: 'white', width: 350, justifyContent: 'center',padding: 20, borderRadius: 10}}>
          <Text style ={{textAlign: 'center', color: 'rgb(250,129,63)'}}>
            Thông tin tài khoản
          </Text>
          <View style={{ height: 100, margin: 10 }}>
            <TextInput style={{ flex:1, margin: 5, padding: 10, borderColor: 'gray',  }}
              onChangeText={(text) => this.setState({ email: text})}

              placeholder='Email'
            />
            <TextInput style={{ flex:1, margin: 5, padding: 10, borderColor: 'rgb(204,204,204)',  }}
              onChangeText={(text) => this.setState({ password: text})}

              placeholder='Mật khẩu'
            />

          </View>
          <View style={{justifyContent: 'space-around', alignItems: 'center', marginTop: 10, marginBottom: 50}}>
            <TouchableOpacity style={{ padding: 10, margin: 10, width: 250, height: 45, borderRadius: 10, backgroundColor:'rgb(250,129,63)' }}>
              <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
                Đăng nhập
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    );
  }
}
