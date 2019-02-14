import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


// import { applyMiddleware, combineReducers, createStore } from "redux";

// const userReducer = (state={}, action) => {
// 	switch(action.type) {
// 		case "CHANGE_NAME": {
// 			state = {...state, name: action.payload};
// 			break;
// 		}
// 		case "CHANGE_AGE": {
// 			state = {...state, age: action.payload};
// 			break;
// 		}
// 		case "ERROR": {
// 			throw new Error('Ooops');
// 		}
// 	}
// 	return state;
// }

// const tweetsReducer = (state={}, action) => {
// 	return state;
// }

// const reducers = combineReducers({
// 	user: userReducer,
// 	tweets: tweetsReducer,
// });

// const logger = (store) => (next) => (action) => {
// 	console.log('action fired!', action);
// 	next(action);
// }

// const error = (store) => (next) => (action) => {
// 	try{
// 		next(action);
// 	} catch(e) {
// 		console.log("Awwwwwwwww!", e);
// 	}
// }

// const middleware = applyMiddleware(logger, error);

// const store = createStore(reducers, middleware);

// store.subscribe(() => {
// 	console.log('store changed');
// 	console.log(store.getState());
// });

// store.dispatch({type: "CHANGE_NAME", payload: "Mariam"});
// store.dispatch({type: "CHANGE_AGE", payload: 27});
// store.dispatch({type: "ERROR", payload: 5});
