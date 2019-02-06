import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


class MyNavbar extends Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }
  toggleNavbar=()=>{
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(){
    return(
        <div>
          <Navbar light expand="lg" className="fixed-top">
            <Link to='/clone_bread_project' className="navbar-brand mr-auto">
              Logo Here
            </Link>
            <NavbarToggler className="text-primary" onClick={this.toggleNavbar}>
              <span className="navbar-toggler-icon"></span>
            </NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto text-muted" navbar>
                  <NavItem className="navbar-text">
                    <Link to="/clone_bread_project/home">What We Do</Link>
                  </NavItem>
                  <NavItem className="navbar-text">
                    <Link to="/clone_bread_project/about" >Who We Are</Link>
                  </NavItem>
                  <NavItem className="navbar-text">
                    <Link to="/clone_bread_project/help" >Get Involved</Link>
                  </NavItem>
                  <NavItem className="navbar-text">
                    <Link to="/clone_bread_project/news" >News & Events</Link>
                  </NavItem>
                  <NavItem className="navbar-text">
                    <Link to="/clone_bread_project/application" >Apply to Program</Link>
                  </NavItem>
                  <NavItem className="navbar-text">
                    <Link to="/clone_bread_project/donation" >Donate!</Link>
                  </NavItem>
                </Nav>
            </Collapse>
          </Navbar>
        </div>
    )
  }
}

export default withRouter(MyNavbar);
