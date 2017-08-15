import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import cameras from './cameras';
import cart from './cart';

const rootReducer = combineReducers({
  cameras: cameras,
  cart: cart
});

export default rootReducer;
