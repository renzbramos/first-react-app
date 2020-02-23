import React, { Component } from "react";

import { Navbar, Container, Col } from "react-bootstrap";

class Footer extends Component {
  state = {};
  render() {
    let fullYear = new Date().getFullYear();

    return (
      <Navbar fixed="bottom" bg="dark" variant="dark">
        <Container>
          <Col className="text-center text-muted">
            <div>
              {fullYear} - {fullYear + 1}, All Right Reseved by Renz Ramos
            </div>
          </Col>
        </Container>
      </Navbar>
    );
  }
}

export default Footer;
