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
            <Route exact path='/my_projects/clone_bread_project' component={Main}/>
            <Route path='/my_projects/about' component={About}/>
            <Route path='/my_projects/home' component={Home}/>
            <Route path='/my_projects/help' component={Help}/>
            <Route path='/my_projects/news' component={News}/>
            <Route path='/my_projects/application' component={Application}/>
            <Route path='/my_projects/donation' component={Donation}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
