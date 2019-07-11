import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { Route, NavLink, HashRouter , BrowserRouter as Router  } from "react-router-dom";
import Home from "./grafik";
import About from "./Table";

class FixedNavbarExample extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }
  render() {
    const bgPink = {backgroundColor: '#e91e63'}
    const container = {height: 1300}
    const marginnya = {margin:100}
    return(
      <div>
        <Router>
          <header style={marginnya}>
            <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top" >
              <MDBNavbarBrand href="/">
                  <strong>SI Inventory </strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav left>
                  <MDBNavItem>
                      <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="#">Transaction</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="/Table">Stock Product</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
          <Route exact path="/" component={Home}/>
          <Route path="/Table" component={About}/>
        </Router>
      </div>
    );
  }
}

export default FixedNavbarExample;