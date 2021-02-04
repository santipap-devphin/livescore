import React from 'react';
import PropTypes from 'prop-types';
import {MatchIonfoStyle} from "./style"

const MatchIonfo = ({type, matchionfo}) => {
  return (
    <MatchIonfoStyle className="card rounded-0 border-top-0 border-left-0 border-right-0 mb-5">
        <div className="card-header text-dark text-center text-uppercase border-top-0 border-bottom-0 font-weight-bold">
          {type}
        </div>
        <div className="card-body p-0">
          {
            matchionfo.map((item, index) => (
              <div className={`w-100 border-match row mx-0 align-items-center`} key={index}>
                <div className="time col-1 px-0 text-left">{item.time}</div>
                <div className="home col-4 px-2">
                  {item.home !== "" ? <span>{item.home}</span> : "" }
                  {
                    item.homeChange !== null
                    ? <>
                    <p className="mb-0 text-dark">In:{item.homeChange.in}</p>
                    <p className="mb-0 text-secondary">Out:{item.homeChange.out}</p>
                    </>
                    : ""
                  }
                </div>
                <div className="center col-3 px-0">
                  <div className="top">
                    <div className="card-match">
                      {
                        item.score.cardHome === "y" 
                        ? <img src="/assets/cards/788px-Yellow_card.png" alt="Yellow Card" />
                        : item.score.cardHome === "r"
                        ? <img src="/assets/cards/591px-Red_card.png" alt="Red Card" />
                        : ""
                      }
                    </div>
                    <div className="score">{item.score.score}</div>
                    <div className="card-match">
                      {
                        item.score.cardAway === "y" 
                        ? <img src="/assets/cards/788px-Yellow_card.png" alt="Yellow Card" />
                        : item.score.cardAway === "r"
                        ? <img src="/assets/cards/591px-Red_card.png" alt="Red Card" />
                        : ""
                      }
                    </div>
                  </div>
                </div>
                <div className={`away col-4 px-2 ${item.away !== "" ? "text-right" : "text-left"}`}>
                  {item.away !== "" ? <span>{item.away}</span> : "" }
                  {
                    item.awayChange !== null
                    ? <>
                    <p className="mb-0 text-dark">In:{item.awayChange.in}</p>
                    <p className="mb-0 text-secondary">Out:{item.awayChange.out}</p>
                    </>
                    : ""
                  }
                </div>
              </div>
            ))
          }
        </div>
    </MatchIonfoStyle>
  );
};


MatchIonfo.propTypes = {
  type: PropTypes.string,
  matchionfo: PropTypes.array.isRequired
};


export default MatchIonfo;
