import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer/Footer";

import Feed from "./components/Feed";
import Persons from "./components/FAQ/FAQ";

import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const marginTop = {
    marginTop: "20px"
  };

  return (
    <Router>
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Switch>
              <Route path="" exact component={Feed}></Route>
              <Route path="/persons" exact component={Persons}></Route>
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
