import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './components/pages/Profile';
import Destination from './components/pages/Destination'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/destination' component={Destination} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
