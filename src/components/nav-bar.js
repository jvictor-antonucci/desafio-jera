import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Nav, ButtonGroup } from "react-bootstrap";
import AuthNav from "./auth-nav";
import SignupButton from "./signup-button";
import { useAuth0 } from "@auth0/auth0-react";

const MainNav = () => (
  <Nav className="mr-auto">
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
    >
      Home
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/profile"
      exact
      activeClassName="router-link-exact-active"
    >
      Profile
    </Nav.Link>
  </Nav>
);

const NavBar = () => {

  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <MainNav />
          <ButtonGroup>
            <AuthNav />
            { isAuthenticated ? '' : <SignupButton /> }
          </ButtonGroup>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
