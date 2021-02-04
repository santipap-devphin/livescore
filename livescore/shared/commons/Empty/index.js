import React from 'react';
import PropTypes from 'prop-types';


const Empty = ({ className, txt }) => {
  return (
    <div className={`w-100 text-center ${className}`}>
      <img src="/assets/empty.png" alt="empty" />
      <p className="text-black-50 mt-3 mb-0">{txt}</p>
    </div>
  );
};


Empty.propTypes = {
  className: PropTypes.string,
  txt: PropTypes.string,
};
Empty.defaultProps = {
  className: "",
  txt: "ต้องเลือกลีคก่อนการแสดงผล",
}

export default Empty;
