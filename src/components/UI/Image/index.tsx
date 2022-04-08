import React, { useState } from 'react';

import imageStyles from './Image.module.scss';

type ImageProps = {
  imageSrc: string;
  imageAlt: string;
};

export const Image: React.FC<ImageProps> = ({ imageSrc, imageAlt }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const handleOnLoad = () => setIsImageLoaded(true);

  return (
    <div className={imageStyles.image}>
      {!isImageLoaded && <div className={imageStyles['image--loader']}></div>}
      <img src={imageSrc} alt={imageAlt} onLoad={handleOnLoad} />
    </div>
  );
};

export default Image;
