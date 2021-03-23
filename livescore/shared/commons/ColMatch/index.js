import React from 'react';
import PropTypes from 'prop-types';
import {ColMatchStyle} from "./style"

const ColMatch = ({num, className, status, name}) => {
  return (
    <ColMatchStyle className={className}>
        <div className="info" key={num}>
            <span className="circle">
                {
                  status === 0
                  ? <span className="sub">
                      <div className="soccer-sub-out" />
                    </span>
                  : status === 1
                  ? <span className="card">
                      <span className="soccer-yellow-cards" />
                    </span>
                  : status === 2
                  ? <span className="card">
                      <span className="soccer-red-cards" />
                    </span>
                  : status === 3
                  ? <span className="goal">
                      <span className="soccer-goal" />
                    </span>
                  : ""
                }
                {num}
            </span>
        </div>
        <span className="name">{name}</span>
    </ColMatchStyle>
  );
};


ColMatch.propTypes = {
  className: PropTypes.string,
  num: PropTypes.number.isRequired,
  status: PropTypes.number,
  name: PropTypes.string
};
ColMatch.defaultProps = {
  name: "",
  className: ""
}

export default ColMatch;
