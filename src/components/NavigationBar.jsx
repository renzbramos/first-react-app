import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavigationBar extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Link to={""} className="navbar-brand d-flex align-items-center">
          <img className="w-25 mr-2" src="./logo192.png" alt="image" />
          <h1 className="" href="#home">
            REACT
          </h1>
        </Link>

        <Nav className="mr-auto">
          <Link className="nav-link">Home</Link>
          <Link to={"persons"} className="nav-link">
            Persons
          </Link>
          <Link to={"pricing"} className="nav-link">
            Pricing
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default NavigationBar;
