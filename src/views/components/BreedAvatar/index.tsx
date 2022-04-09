import React from 'react';

import './index.css';

export interface BreedAvatarProps {
    imageUrl: string;
    size?: number;
}

export function BreedAvatar({ imageUrl, size }: BreedAvatarProps) {
  const pxSzie = `${size}px`;
  return (
    <div>
      <img src={imageUrl} alt="" style={{ height: pxSzie, width: pxSzie }} className="img-fluid dog-avatar" />
    </div>
  );
}

BreedAvatar.defaultProps = {
  size: 80,
};
