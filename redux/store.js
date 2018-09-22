import { createStore }from 'redux';
import reducer from './reducer/reducer';

//tao ra store
const store = createStore(reducer);

export default  store;
