import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

function home() {
  return (
    <Container>
      <Jumbotron>
        <h1 className="text-center"> ShelterWoW! </h1>
        <h2 className="text-center"> This is the home page </h2>
      </Jumbotron>
    </Container>
  );
}

export default home;
