import React from 'react';
import './App.css';
import Header from "./components/header/header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./pages/home";
import Profile from "./pages/profile";
import Signin from "./pages/login/signin";
import SignUp from "./pages/login/signup";


function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Header/>
              <div className="container">

                      <Switch>
                        <Route path={'/'} exact component={HomePage}/>
                        <Route path={'/profile'} component={Profile}/>
                        <Route path={'/signin'} component={Signin}/>
                        <Route path={'/signup'} component={SignUp}/>
                      </Switch>

              </div>
          </BrowserRouter>
      </div>
  );
}

export default App;
