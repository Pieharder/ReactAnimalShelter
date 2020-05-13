import React from 'react';
import { Row, Card, Col, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function AddAnimal(props) {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, breed, age, gender, animal } = e.target;

    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let raw = JSON.stringify({
      name: name.value,
      breed: breed.value,
      age: age.value,
      gender: gender.value
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`http://localhost:5000/api/${animal.value}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        props.onAnimalClick(animal.value);
        history.push(`/list/${animal.value}`);
      })
      .catch((error) => console.log('error', error));
  };

  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <Card>
          <Card.Header>
            <Card.Title className="text-center"> Add Animal </Card.Title>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label as="legend" column sm={2}>
                  Species:
                </Form.Label>
                <Col sm={10}>
                  <Form.Check type="radio" label="Cats" name="animal" id="animal1" value="cats" />
                  <Form.Check type="radio" label="Dogs" name="animal" id="animal2" value="dogs" />
                </Col>
              </Form.Group>

              <Form.Group>
                <Form.Control type="text" name="name" placeholder="Name" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" name="breed" placeholder="Breed" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="number" name="age" placeholder="Age" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" name="gender" placeholder="Gender" />
              </Form.Group>
              <Button type="submit" className="btn-block">
                Add Animal
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default AddAnimal;
