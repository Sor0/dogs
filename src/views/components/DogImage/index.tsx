import React from 'react';

export interface DogImageProps {
  image: string;
}

export function DogImage(props: DogImageProps) {
  const { image } = props;
  return (
    <div className="dog-image">
      <img src={image} className="img-fluid img-thumbnail" alt="..." />
    </div>
  );
}
