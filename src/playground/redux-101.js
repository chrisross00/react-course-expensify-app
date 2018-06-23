import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ setTo = 1 } = {}) => ({
  type: 'SET',
  setTo
});

const resetCount = ({ resetTo = 0 } = {}) => ({
  type: 'RESET',
  resetTo
})

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.setTo
      }
    case 'RESET':
      return {
        count: action.resetTo
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// I'd like to increment the count
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });


store.dispatch(incrementCount({ incrementBy: 77 }));

store.dispatch(decrementCount({ decrementBy: 76 }));

store.dispatch(setCount({ setTo: 111 }));

store.dispatch(resetCount({}));


// store.dispatch({
//   type: 'INCREMENT'
// });

// I'd like to set the count to zero
// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// });

// store.dispatch({
//   type: 'RESET'
// });

// store.dispatch({
//   type: 'SET',
//   count: 101
// });
