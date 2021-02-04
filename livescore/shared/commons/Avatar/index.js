import React from 'react';
import PropTypes from 'prop-types';
import {AvatarStyle} from "./style"

const Avatar = ({shape, size, src, srcSet, alt, icon, className}) => {
  return (
    <AvatarStyle style={{width: size, height: size, lineHeight: size}} className={shape === "circle" ? `rounded-circle ${className}` : `rounded-0 ${className}`}>
      {
        icon ? {icon}
        : <img 
        className={shape === "circle" ? "rounded-circle" : "rounded-0"} 
        width={size} 
        height={size} 
        src={src} 
        srcSet={srcSet} 
        alt={alt} 
      /> 
      }
    </AvatarStyle>
  );
};


Avatar.propTypes = {
  className: PropTypes.string,
  shape: PropTypes.oneOf(['circle', 'square']),
  size: PropTypes.number,
  src: PropTypes.string,
  srcSet: PropTypes.string,
  icon: PropTypes.node,
  alt: PropTypes.string.isRequired,
};
Avatar.defaultProps = {
  shape: 'circle',
};

export default Avatar;
