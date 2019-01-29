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
          <NavbarBrand href="" className="mr-auto">
            <Link to="/">Logo Here</Link>
          </NavbarBrand>
          <NavbarToggler className="text-primary" onClick={this.toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/about" onClick={this.toggleNavbar}>What We Do</Link>
              </NavItem>
              <NavItem>
                <Link to="/home" onClick={this.toggleNavbar}>Who We Are</Link>
              </NavItem>
              <NavItem>
                <Link to="/help" onClick={this.toggleNavbar}>Get Involved</Link>
              </NavItem>
              <NavItem>
                <Link to="/news" onClick={this.toggleNavbar}>News & Events</Link>
              </NavItem>
              <NavItem>
                <Link to="/application" onClick={this.toggleNavbar}>Apply to Program</Link>
              </NavItem>
              <NavItem>
                <Link to="/donation" onClick={this.toggleNavbar}>Donate!</Link>
              </NavItem>
            </Nav>
          </Collapse>

        </Navbar>
      </div>
    )
  }
}

export default withRouter(MyNavbar);
