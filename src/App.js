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
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar setClick={click=> this.closeNavbar = click}/>
          <div className="content" onClick={()=>this.closeNavbar()}>
            <Switch>
              <Route exact path='/clone_bread_project' component={Main}/>
              <Route path='/clone_bread_project/about' component={About}/>
              <Route path='/clone_bread_project/home' component={Home}/>
              <Route path='/clone_bread_project/help' component={Help}/>
              <Route path='/clone_bread_project/news' component={News}/>
              <Route path='/clone_bread_project/application' component={Application}/>
              <Route path='/clone_bread_project/donation' component={Donation}/>
              <Route component={Main}/>
            </Switch>
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
