import React from 'react';
import {
  Container, Row, Col,
} from 'reactstrap';
import { BreedListItem } from 'views/components';

import { Breed } from 'core/entities/breed';
import './index.css';

export interface BreedProps {
  breeds: Breed[];
  // eslint-disable-next-line no-unused-vars
  onSelect(selected: Breed | undefined): void;
}

export default function BreedList(props: BreedProps) {
  const { breeds, onSelect } = props;

  return (
    <Container>
      <Row>
        <Col>
          <h2>Listado de razas</h2>
          <div className="mt-3 main-content">
            <ul className="list-group">
              {
                breeds.map((breed: Breed) => (
                  <BreedListItem
                    onClick={() => onSelect(breed)}
                    key={breed.name}
                    name={breed.name}
                    count={breed.childBreeds.length}
                  />
                ))
              }
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
