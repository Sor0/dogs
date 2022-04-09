/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { DogAvatar } from 'views/components';

export interface DogListItemProps {
  name: string;
  imageUrl: string;
  count: number;
  onClick(): void;
  className?: string;
}

export function DogListItem(props: DogListItemProps) {
  const {
    name, imageUrl, count, onClick, className,
  } = props;

  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${className}`}
      onClick={onClick}
    >
      <DogAvatar imageUrl={imageUrl} />
      {name}
      <span className="badge badge-primary badge-pill">{count}</span>
    </li>
  );
}

DogListItem.defaultProps = {
  className: '',
};
