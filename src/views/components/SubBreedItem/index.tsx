import React from 'react';
import { ListGroupItem, ListInlineItem } from 'reactstrap';
import { BreedAvatar } from '../BreedAvatar';

import './index.css';

export interface SubBreedItemProps {
  title: string;
  imageUrl: string;
  onSetFavorite(): void;
  onClick(): void;
  isFavorite?: boolean;
}

export function SubBreedItem(props: SubBreedItemProps) {
  const {
    title, imageUrl, onSetFavorite, isFavorite, onClick,
  } = props;

  const handleSetFavorie = (event: any) => {
    event.preventDefault();
    onSetFavorite();
  };

  return (
    <ListGroupItem
      id={title}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <ListInlineItem onClick={onClick} className="d-flex align-items-center w-100 custom-button">
        <BreedAvatar imageUrl={imageUrl} />
        <span>&nbsp;</span>
        <h4>{title}</h4>
      </ListInlineItem>
      <button type="button" className="btn" onClick={handleSetFavorie}>
        {isFavorite ? <i className="bx bxs-heart text-danger" /> : <i className="bx bx-heart" /> }
      </button>
    </ListGroupItem>
  );
}

SubBreedItem.defaultProps = {
  isFavorite: false,
};
