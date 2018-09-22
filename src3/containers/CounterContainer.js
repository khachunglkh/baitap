import {connect} from 'react-redux';
import CounterComponent from '../components/CounterComponent';
import {increaseAction,decreaseAction} from '../actions';
const mapStatetoProps = (state) => {
  alert(`state after changed : ${JSON.stringify(state.counterReducers)}`)
  return {
    times: state.counterReducers ? state.counterReducers : 0
  }
};

const mapDispatchtoProps = (dispatch) => {
  return{
    onDecrement: (step) => {
      dispatch(decreaseAction(step));
    },
    onIncrement: (step) => {
      dispatch(increaseAction(step));
    }
  }
};
const CounterContainer = connect(mapStatetoProps, mapDispatchtoProps)(CounterComponent);
export default CounterContainer;
