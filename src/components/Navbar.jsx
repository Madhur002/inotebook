import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

const NavbarComponent = () => {
  let location = useLocation();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link className="navbar-brand" to="/">
            iNotebook
          </Link>
          <Nav className="me-auto">
            <Link className={`nav-link ${location.pathname=== "/" ? "active" : ""}`} to="/">
              Home
            </Link>
            <Link className={`nav-link ${location.pathname=== "/notes" ? "active" : ""}`} to="/notes">
              Notes
            </Link>
            <Link className={`nav-link ${location.pathname=== "/about" ? "active" : ""}`} to="/about">
              About
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
