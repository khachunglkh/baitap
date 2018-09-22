import React,{ Component } from 'react';
import Main from './components/Main';
import {Provider} from 'react-redux';
import store from './redux/store'
export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <Main/>
      </Provider>
    );


  }
}


//ddfaultState


//tich hop vao trong ung dung react -Provider -> 1 component - 1 props -> store
