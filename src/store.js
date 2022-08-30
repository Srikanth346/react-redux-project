import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AppInfo from './rootReducer';

const store = createStore(AppInfo, applyMiddleware(thunk));

export default store;
