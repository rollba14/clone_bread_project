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
        <Navbar color="light" light expand="md">
          <Link to='/' className="navbar-brand mr-auto">
            Logo Here
          </Link>
          <NavbarToggler className="text-primary" onClick={this.toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto text-muted" navbar>
              <NavItem className="text-muted">
                <Link to="/about">What We Do</Link>
              </NavItem>
              <NavItem>
                <Link to="/home" >Who We Are</Link>
              </NavItem>
              <NavItem>
                <Link to="/help" >Get Involved</Link>
              </NavItem>
              <NavItem>
                <Link to="/news" >News & Events</Link>
              </NavItem>
              <NavItem>
                <Link to="/application" >Apply to Program</Link>
              </NavItem>
              <NavItem>
                <Link to="/donation" >Donate!</Link>
              </NavItem>
            </Nav>
          </Collapse>

        </Navbar>
      </div>
    )
  }
}

export default withRouter(MyNavbar);
