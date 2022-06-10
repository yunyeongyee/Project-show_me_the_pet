import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import post from './modules/post';
import user from './modules/user';
const rootReducer = combineReducers({
   post: post,
   user: user
});

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

const store = () => createStore(rootReducer, enhancer);

export default store();
