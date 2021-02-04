import React from 'react';
import PropTypes from 'prop-types';
import {SevenColCupsStyle} from "./style"
import Avatar from "../Avatar"

const SevenColCups = ({ title, cups }) => {
  return (
    <SevenColCupsStyle className="w-100 mb-3">
      <h3 className="title-cups py-3">{title}</h3>
      <div className="row seven-cols">
        {
          cups.map((cup, index) => (
            <div className="col-md-1 px-2 pb-3" key={index.toString()}>
              <div className="p-3 border rounded text-center">
                <Avatar 
                  size={50}
                  src={cup.img}
                  alt={title+cup.years}
                  shape="square"
                  className="d-block mx-auto"
                />
                <span>{cup.years}</span>
              </div>
            </div>
          ))
        }
      </div>
    </SevenColCupsStyle>
  );
};


SevenColCups.propTypes = {
  title: PropTypes.string,
};
SevenColCups.defaultProps = {
  title: "FIFA Club World Cup winner ( X1 )"
}

export default SevenColCups;
