import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers/index"

import App from './App';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </Router>
</Provider>, document.getElementById('root'));
// 