import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots})

//conect function makes component reduc aware (alternative to ,subscribe)

//from reducers file-- create store 
//store can be accessed and passed down in app
//creates object tree of the state
const store = 
	createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

//provider controls which components store is passed down to over and over
ReactDOM.render(
				<Provider store={store}>
					<App />, 
				</Provider>, document.getElementById('root'));
registerServiceWorker();
