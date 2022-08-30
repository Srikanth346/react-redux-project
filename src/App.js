import React from 'react';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';
import store from './store';
import './style.css';

import MainApp from './MainApp';

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
