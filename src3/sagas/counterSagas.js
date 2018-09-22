import { INCREMENT, DECREMENT } from '../actions/ActionTypes';
import { takeEvery } from 'redux-saga/effects';
export function* sayHello(){
  console.log('HelloWorld');
}
function* increment(){
  console.log('This is increment saga');
}
export function* watchIncrement(){
  yield takeEvery(INCREMENT, increment);
}
function* decrement(){
  console.log('This is decrement saga');
}
export function* watchDecrement(){
  yield takeEvery(DECREMENT, decrement);
}
