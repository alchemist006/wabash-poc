import React from 'react';
import { Image as MuiImage } from 'mui-image';

export interface IconProps {
  src: string;
  iconAlt: string;
  height?: string;
  width?: string;
  onClick?: () => void;
  className?: string;
}

const IconComponent = ({
  src,
  iconAlt,
  width,
  height,
  className,
}: IconProps) => {
  return (
    <MuiImage
      src={src}
      alt={iconAlt}
      width={width}
      height={height}
      duration={0}
      className={className}
    />
  );
};

export default IconComponent;
