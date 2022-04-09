import React from 'react';

import './index.css';

export interface DogAvatarProps {
    imageUrl: string;
    size?: number;
}

export function DogAvatar({ imageUrl, size }: DogAvatarProps) {
  const pxSzie = `${size}px`;
  return (
    <div>
      <img src={imageUrl} alt="" style={{ height: pxSzie, width: pxSzie }} className="img-fluid dog-avatar" />
    </div>
  );
}

DogAvatar.defaultProps = {
  size: 80,
};
