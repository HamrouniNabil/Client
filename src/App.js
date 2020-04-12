import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SignupUser from '../src/components/SignupUser'
import SigninUser from '../src/components/SigninUser';
import Home from '../src/components/Home/Home';
import './App.css';



function App() {
  return (
    <div >
      <BrowserRouter>
        <Route exact path='/' render={() => <SigninUser />} />
        <Route exact path='/register' render={() => <SignupUser />} />
        <Route exact path='/home' render={() => <Home />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
