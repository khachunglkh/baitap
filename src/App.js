import React,{ Component } from 'react';
import {View} from 'react-native';
import { Provider } from 'react-redux';
import Main from './components/Main';
import store from '../redux/store'
export default class App extends Component{
  render(){
    return(
        <Provider store={store}>
            <Main />
        </Provider>
    );
  }
}


//ddfaultState


//tich hop vao trong ung dung react -Provider -> 1 component - 1 props -> store
