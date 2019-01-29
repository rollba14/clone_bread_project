import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './components/navbar'
import Main from './components/main'
import About from './components/about'
import Home from './components/home'
import Help from './components/help'
import News from './components/news'
import Application from './components/application'
import Donation from './components/donation'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/about' component={About}/>
            <Route path='/home' component={Home}/>
            <Route path='/help' component={Help}/>
            <Route path='/news' component={News}/>
            <Route path='/application' component={Application}/>
            <Route path='/donation' component={Donation}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
