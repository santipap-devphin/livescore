import React from 'react';
import PropTypes from 'prop-types';
import {LineUpListStyle} from "./style"
import Avatar from "../../commons/Avatar"

const LineUpList = ({
  imgSrc, 
  homeName, 
  homeChange, 
  cardHome, 
  score, 
  cardAway, 
  awayName, 
  awayChange
}) => {
  return (
    <LineUpListStyle className="w-100 border-match row mx-0 align-items-center">
      <div className="time col-1 px-0 text-left">
        {/* {item.time} */}
        <Avatar
          className="align-self-center"
          size={30}
          shape="circle"
          src={imgSrc}
          alt={awayName !== "" ? homeName : awayName}
        />
      </div>
      <div className="home col-4 px-2">
        {homeName !== "" ? <span>{homeName}</span> : "" }
        {
          homeChange !== null
          ? <>
          <p className="mb-0 text-dark">In:{homeChange.in}</p>
          <p className="mb-0 text-secondary">Out:{homeChange.out}</p>
          </>
          : ""
        }
      </div>
      <div className="center col-3 px-0">
        <div className="top">
          <div className="card-match">
            {
              cardHome === "y" 
              ? <img src="/assets/cards/788px-Yellow_card.png" alt="Yellow Card" />
              : cardHome === "r"
              ? <img src="/assets/cards/591px-Red_card.png" alt="Red Card" />
              : ""
            }
          </div>
          <div className="score">{score}</div>
          <div className="card-match">
            {
              cardAway === "y" 
              ? <img src="/assets/cards/788px-Yellow_card.png" alt="Yellow Card" />
              : cardAway === "r"
              ? <img src="/assets/cards/591px-Red_card.png" alt="Red Card" />
              : ""
            }
          </div>
        </div>
      </div>
      <div className={`away col-4 px-2 ${awayName !== "" ? "text-right" : "text-left"}`}>
        {awayName !== "" ? <span>{awayName}</span> : "" }
        {
          awayChange !== null
          ? <>
          <p className="mb-0 text-dark">In:{awayChange.in}</p>
          <p className="mb-0 text-secondary">Out:{awayChange.out}</p>
          </>
          : ""
        }
      </div>
    </LineUpListStyle>
  );
};


LineUpList.propTypes = {

};


export default LineUpList;
