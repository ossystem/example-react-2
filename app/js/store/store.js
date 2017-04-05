import { createStore, applyMiddleware, compose } from 'redux';
import weatherReducer from '../reducers/weather_reducer';
import thunk from 'redux-thunk';

//enable redux dev tools only in development env
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    name: 'MyApp',
    actionsBlacklist: ['REDUX_STORAGE_SAVE']
  }) : compose;


const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);


const store = createStore(weatherReducer, enhancer);



export default store;