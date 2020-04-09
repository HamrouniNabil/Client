import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './JS/store/index'
import "./assets/css/bootstrap.min.css";
import "./assets/css/paper-kit.css";
 import "./assets/css/paper-kit.min.css";
 import "./assets/css/paper-kit.css.map";
import "./assets/demo/demo.css";

ReactDOM.render(

    <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
