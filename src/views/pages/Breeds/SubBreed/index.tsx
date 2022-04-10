import React, { useState } from 'react';
import {
  Button, Col, Container, Modal, ModalBody, ModalHeader, Row,
} from 'reactstrap';
import { Breed } from 'core/entities/breed';
import { SubBreedItem, DogImage } from 'views/components';
import { Favorite } from 'core/types/favorite';

export interface SubBreedProps {
  selected: Breed;
  onClose(): void;
  imageMap: {[key: string]: string[]};
  // eslint-disable-next-line no-unused-vars
  onSetFavorite(subBreed: string): void;
  favorite?: Favorite;
}

export function SubBreed(props: SubBreedProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [target, setTarget] = useState<string>('');
  const {
    selected, onClose, imageMap, onSetFavorite, favorite,
  } = props;

  const getImage = (subBreedItem: string): string => {
    const images = imageMap[subBreedItem];

    if (images) {
      return images[0];
    }
    return '';
  };

  const getImages = (subBreedItem: string) => {
    const images = imageMap[subBreedItem];

    if (images) {
      return images.slice(0, 3);
    }
    return [];
  };

  const handleSetFavorite = (subBreed: string) => {
    onSetFavorite(subBreed);
  };

  const showPopup = (subBreed: string) => {
    setShowModal(true);
    setTarget(subBreed);
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <h2>
              Razas de
              {' '}
              {selected?.name}
            </h2>
            <Button type="button" className="btn btn-close" onClick={onClose}> </Button>
          </div>
          <div className="mt-3">
            <Modal
              isOpen={showModal}
              size="lg"
            >
              <ModalHeader toggle={() => setShowModal(false)}>
                Imaganes de
                {' '}
                {target}
              </ModalHeader>
              <ModalBody className="w-100">
                <div className="d-flex justify-content-center">
                  {
                    getImages(target).map((image: string) => (
                      <div key={image} className="mx-2">
                        {' '}
                        <DogImage image={image} />
                      </div>
                    ))
                  }
                </div>

              </ModalBody>
            </Modal>
            <ul className="list-group">
              {selected?.childBreeds.map((childBreed: string) => (
                <SubBreedItem
                  key={childBreed}
                  imageUrl={getImage(childBreed)}
                  title={childBreed}
                  onClick={() => showPopup(childBreed)}
                  onSetFavorite={() => handleSetFavorite(childBreed)}
                  isFavorite={
                    childBreed === favorite?.subBreed && selected.name === favorite?.breed
                  }
                />
              ))}
              {
                selected?.childBreeds.length === 0 ? (
                  <div>
                    <h4 className="text-muted">🙁 No hay subrazas</h4>
                  </div>
                ) : null
              }
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
