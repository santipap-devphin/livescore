import React from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import PropTypes from 'prop-types';
import {NavDateStyle} from "./style"

const NavDate = ({onClickLeft, onClickRight, className, DataDate ,onClicks}) => {

 
  return (

    <NavDateStyle className={`nav nav-pills row mx-0 bg-light flex-nowrap align-items-center text-center mb-md-4 px-0 ${className}`}>
      <div 
        onClick={onClickLeft} 
        className="pointer d-none d-md-flex py-2 px-2 col-1 justify-content-center"
      >
        <RiArrowLeftSLine />
      </div>
     
      {
        DataDate.map((item, index) => (
          <a className={`nav-link rounded-0 px-2 col text-ss text-nowrap ${item.today === true ? "active" : ""}`} href={item.route} key={index} onClick={onClicks}>
            {item.date}
           
          </a>
        ))
      }
      <div 
        onClick={onClickRight} 
        className="pointer d-none d-md-flex py-2 px-2 col-1 text-right justify-content-center"
      >
        <RiArrowRightSLine />
      </div>
    </NavDateStyle>
  );
};


NavDate.propTypes = {
  className: PropTypes.string,
  onClickLeft: PropTypes.func,
  onClickRight: PropTypes.func,
  onClicks:PropTypes.func
};


export default NavDate;
