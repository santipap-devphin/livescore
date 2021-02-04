import React from 'react';
import PropTypes from 'prop-types';
import {CardSoccerStyle} from "./style"

const CardSoccer = ({className}) => {
  return (
    <CardSoccerStyle className={`pt-4 ${className}`}>
      <div className="pitch-soccer__container">
        <div>
          <div className="pitch-soccer__spotlight soccer-corner corner-top corner-left" />
          <div className="pitch-soccer__spotlight soccer-corner corner-top corner-right" />
          <div className="pitch-soccer__spotlight soccer-corner corner-bottom corner-left" />
          <div className="pitch-soccer__spotlight soccer-corner corner-bottom corner-right" />
          <div className="pitch-soccer__spotlight soccer-center" />
          <div className="pitch-soccer__spotlight soccer-goal soccer-goal-left" />
          <div className="pitch-soccer__spotlight soccer-goal soccer-goal-right" />
        </div>
        <div className="pitch-soccer__stripes"></div>
        <div className="pitch-soccer__noise" />
        <div className="pitch-soccer__svg-container--">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 568 352" className="pitch-soccer__svg" style={{stroke: 'rgb(255, 255, 255)'}}>
            <path vectorEffect="non-scaling-stroke" strokeWidth={2} fill="none" d="M10,10h548v332H10V10z" />
            <path vectorEffect="non-scaling-stroke" strokeWidth={2} fill="none" d="M83.5,211c12-7.2,20-20.2,20-35s-8-27.8-20-35 M10.5,87h73v178h-73 M557.5,87h-73v178h73 M484.5,211c-12-7.2-20-20.2-20-35s8-27.8,20-35" />
            <path vectorEffect="non-scaling-stroke" strokeWidth={2} fill="none" d="M10.5,139h29v74h-29 M557.5,139h-29v74h29 M284,10v332" />
            <circle vectorEffect="non-scaling-stroke" strokeWidth={2} fill="none" cx={284} cy={176} r={44} />
            <path vectorEffect="non-scaling-stroke" strokeWidth={2} fill="none" d="M10,156H4v40h6" />
            <path vectorEffect="non-scaling-stroke" strokeWidth={2} fill="none" d="M558,156h6v40h-6" />
            <line vectorEffect="non-scaling-stroke" strokeWidth={6} fill="none" strokeLinecap="round" x1={284} y1={176} x2={284} y2={176} />
            <line vectorEffect="non-scaling-stroke" strokeWidth={4} fill="none" strokeLinecap="round" x1={59} y1={176} x2={59} y2={176} />
            <line vectorEffect="non-scaling-stroke" strokeWidth={4} fill="none" strokeLinecap="round" x1={509} y1={176} x2={509} y2={176} />
            <path vectorEffect="non-scaling-stroke" strokeWidth={2} fill="none" d="M10,18c4.4,0,8-3.6,8-8 M18,342c0-4.4-3.6-8-8-8 M550,342c0-4.4,3.6-8,8-8 M558,18c-4.4,0-8-3.6-8-8" />
          </svg>
        </div>
      </div>
    </CardSoccerStyle>
  );
};


CardSoccer.propTypes = {
  className: PropTypes.string
};
CardSoccer.defaultProps = {
  className: "",
};

export default CardSoccer;
