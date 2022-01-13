import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'sight-words',
  storage,
  blacklist: ['loading']
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = process.env.NODE_ENV === 'production' ?
  createStore(persistedReducer, applyMiddleware(thunk)) :
  createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);
