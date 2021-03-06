import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'


function App() {
  return (
    <div className="App">
     
      <Navbar />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
      </Switch>

    </div>
  );
}

export default App;
