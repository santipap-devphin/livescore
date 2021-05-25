import React from 'react';
import PropTypes from 'prop-types';
import {NavMatchStyle} from "./style"

const NavMatch = ({className, route}) => {
  return (
    <NavMatchStyle className={`nav-match nav nav-pills nav-fill border-bottom ${className}`}>
      {
        /*route.map((item, index) => (
          <li className={`nav-item ${item.active === true ? "active" : ""}`} key={index}>
            <a className="nav-link rounded-0" href={item.paths}>
              {item.name}
            </a>
          </li>
        ))*/
      }
    </NavMatchStyle>
  );
};


NavMatch.propTypes = {

};


export default NavMatch;
