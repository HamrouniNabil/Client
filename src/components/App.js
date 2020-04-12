import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Dashboard from "../pages/dashboard";

import "../styles/theme.scss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" render={() => <Login />} />
        <Route exact path="/register" render={() => <Register />} />
        <Route exact path="/dashboard" render={() => <Dashboard />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
