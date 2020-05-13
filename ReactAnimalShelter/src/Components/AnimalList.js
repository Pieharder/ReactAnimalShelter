import React, { useEffect, useState } from 'react';
import SingleAnimal from './SingleAnimal';
import PropTypes from 'prop-types';
import { Row, Col, Form, Button, Card, Spinner } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';

function AnimalList(props) {
  const [ animalListState, setAnimalListState ] = useState([]);
  const [ loadState, setLoadState ] = useState(false);
  const [ animalType, setAnimalType ] = useState('/list/cats');

  const location = useLocation();

  const history = useHistory();
  const currentPath = location.pathname;

  useEffect(() => {
    if (!loadState) {
      fetch(`http://localhost:5000/api/${props.showAnimal}`)
        .then((response) => {
          return response.json();
        })
        .then((jsonifiedResponse) => {
          setAnimalListState(jsonifiedResponse);
          setLoadState(true);
        })
        .catch((error) => {
          console.log('Animal Shelter Error => ', error);
        });
    }
  });

  const handleAnimalAdoption = (id) => {
    fetch(`http://localhost:5000/api/${props.showAnimal}/${id}`, { method: 'DELETE' })
      .then((response) => console.log('DELETE', response))
      .then((jsonifiedResponse) => {
        setLoadState(false);
      });
  };

  const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  };

  if (loadState) {
    return (
      <React.Fragment>
        <h1 className="text-center"> Animal List </h1>
        <div style={listStyle}>
          {animalListState.map((animal) => {
            // return <p key={v4()}>{animal.name}</p>;
            return (
              <SingleAnimal
                name={animal.name}
                type={animal.catId ? 'cats' : 'dogs'}
                breed={animal.breed}
                age={animal.age}
                gender={animal.gender}
                id={animal.catId ? animal.catId : animal.dogId}
                link={`https://source.unsplash.com/200x200/?${animal.catId ? 'cat' : 'dog'} ${animal.breed}`}
                onAnimalAdoption={handleAnimalAdoption}
                key={animal.catId ? animal.catId : animal.dogId}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  } else {
    return <div>Loading...</div>;
  }
}

AnimalList.propTypes = {
  showAnimal: PropTypes.string
};

export default AnimalList;
