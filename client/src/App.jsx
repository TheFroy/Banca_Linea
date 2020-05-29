import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from './Components/Profile'
import Inicio from './Components/Inicio'
import UpdPwd from './Components/UpdPwd'

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path="/" component={Inicio} />
        <div className="container">
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/profile" component={Profile} />          
          <Route exact path="/profile/updpwd" component={UpdPwd} />          
        </div>
      </div>
    </Router>
  );
}

export default App;
