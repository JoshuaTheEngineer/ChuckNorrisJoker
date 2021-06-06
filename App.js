import React from 'react';
import { Provider } from 'react-redux'
import { store } from './redux/store'

import HomePage from './HomePage';

export default function App() {
  return (
    <Provider store={store}>
        <HomePage/>
    </Provider>
  );
}
