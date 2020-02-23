import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";

class Feed extends Component {
  state = {};

  changeColor = () => {
    this.setState({ color: 1 + 1 });
  };
  render() {
    return (
      <Jumbotron className="bg-dark text-white">
        <h1>Hello, {this.state.color} Malon!</h1>

        <blockquote className="bloackqoute mb-0">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            incidunt voluptatum odit mollitia hic praesentium dicta voluptas
            earum iste, facere dolores sed sint excepturi voluptatem dolorem, a
            suscipit! Nihil, cumque!
          </p>
          <footer className="blockqoute-footer">Lorem Ipsum</footer>
        </blockquote>
        <p>
          <Button onClick={this.changeColor} variant="primary">
            Learn more
          </Button>
        </p>
      </Jumbotron>
    );
  }
}

export default Feed;
