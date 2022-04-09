import React, { useState } from 'react';
import {
  Container, Row, Col,
} from 'reactstrap';
import { BreedListItem } from 'views/components';
import { Breed } from 'core/entities/breed';

import './index.css';

const dogs: Breed[] = [
  { name: 'Come cuando hay', count: 10 },
  { name: 'Come cuando hay 1', count: 10 },
];

export default function BreedPage() {
  const [selected, setSelected] = useState<any>(undefined);

  const handleClose = () => {
    setSelected(undefined);
  };

  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: selected ? 6 : 12 }}>
          <h2>Listado de razas</h2>
          <div className="mt-3">
            <ul className="list-group">
              {
                dogs.map((dog) => {
                  let className = '';
                  if (selected) {
                    if (dog.name === selected.name) {
                      className = 'active-breed';
                    }
                  }
                  return (
                    <BreedListItem
                      className={className}
                      onClick={() => setSelected(dog)}
                      key={dog.name}
                      name={dog.name}
                      imageUrl="https://townsquare.media/site/721/files/2016/03/puppy.jpg?w=980&q=75"
                      count={dog.count}
                    />
                  );
                })
              }
            </ul>
          </div>
        </Col>
        {
            selected ? (
              <Col sm="12" md={6}>
                <div className="d-flex justify-content-between align-items-center">
                  <h2>{selected.name}</h2>
                  <button type="button" className="btn btn-close" onClick={handleClose}> </button>
                </div>
                <div className="mt-3">
                  <ul className="list-group">
                    {/* {
                        dogs.map((dog) => (
                          <DogListItem
                            onClick={() => setSelected(dog)}
                            key={dog.name}
                            name={dog.name}
                            imageUrl="https://townsquare.media/site/721/files/2016/03/puppy.jpg?w=980&q=75"
                            count={dog.count}
                          />
                        ))
                    } */}
                  </ul>
                </div>
              </Col>
            ) : null
        }
      </Row>
    </Container>
  );
}
