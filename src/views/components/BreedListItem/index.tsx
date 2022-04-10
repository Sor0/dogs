import React from 'react';
import { ListGroupItem } from 'reactstrap';

export interface BreedListItemProps {
  name: string;
  count?: number;
  onClick?(): void;
  className?: string;
}

export function BreedListItem(props: BreedListItemProps) {
  const {
    name, count, onClick, className,
  } = props;

  return (
    <ListGroupItem
      className={`list-group-item d-flex justify-content-between align-items-center ${className}`}
      onClick={onClick}
    >
      {name}
      {
        count ? (<span className="bg-primary badge badge-primary badge-pill">{count}</span>) : null
      }
    </ListGroupItem>
  );
}

BreedListItem.defaultProps = {
  className: '',
  onClick: undefined,
  count: undefined,
};
