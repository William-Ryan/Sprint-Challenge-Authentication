import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute"

import Register from "./components/Register"
import Login from "./components/Login";
import JokesPage from "./components/JokesPage"

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/jokes" component={JokesPage} />
      </div>
    </Router>
  );
}

export default App;
