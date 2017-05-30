import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import config from './config/store';
import App from './components/app/App';


ReactDOM.render(
  <Provider store={config}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
    document.getElementById('root'));

if (module && module.hot) {
  module.hot.accept();
}

