import React from 'react';
import PropTypes from 'prop-types';
import {MatchLineUpStyle} from "./style"
import ColMatch from "../../commons/ColMatch"
import LineUpList from "../LineUpList"

const MatchLineUp = ({type, players}) => {
  return (
    <MatchLineUpStyle className="card rounded-0 border-top-0 border-left-0 border-right-0 mb-5 pt-4">
        <div className="card-header text-dark text-center text-uppercase border-top-0 border-bottom-0 font-weight-bold">
          {type}
        </div>
        <div className="card-body p-0">
          {
            players.map((item, index) => (
                <LineUpList 
                    key={index}
                    imgSrc={item.home !== "" || item.homeChange !== null ? item.imgHome : item.imgAway}
                    homeName={item.home !== "" ? <span>{item.home}</span> : ""}
                    homeChange={item.homeChange}
                    cardHome={item.score.cardHome}
                    score={item.score ? item.score.score : ""}
                    cardAway={item.score ? item.score.cardAway : ""}
                    awayName={item.away !== "" ? <span>{item.away}</span> : ""}
                    awayChange={item.awayChange}
                />
            ))
          }
          <div className="pitch-soccer-wrapper d-none">
            <span className="teamInfo">
                <span className="name">Bristol City</span>
                <span>3-5-2</span>
            </span>
            <div className="pitch-soccer">
                <div className="homeForm">
                    <span className="formRow">
                        <ColMatch 
                            className="goalkeeper"
                            name="Daniel Bentley"
                            num={1}
                        />
                    </span>
                    <span className="formRow">
                        <ColMatch
                            className="soccer-back"
                            num={5}
                            name="Alfie Mawson"
                            status={0}
                        />
                        <ColMatch 
                            className="soccer-back"
                            name="Taylor Moore"
                            num={23}
                        />
                        <ColMatch 
                            className="soccer-back"
                            name="Zak Vyner"
                            num={26}
                        />
                    </span>
                    <span className="formRow">
                        <ColMatch 
                            className="soccer-center"
                            name="Tyreeq Bakinson"
                            num={30}
                        />
                        <ColMatch 
                            className="soccer-center"
                            name="Jack Hunt"
                            num={2}
                        />
                        <ColMatch 
                            className="soccer-center"
                            name="Andreas Weimann"
                            num={14}
                        />
                        <ColMatch 
                            className="soccer-center"
                            name="Jamie Paterson"
                            num={10}
                        />
                        <ColMatch 
                            className="soccer-center"
                            name="Tommy Rowe"
                            num={25}
                        />
                    </span>
                    <span className="formRow">
                        <ColMatch
                            className="soccer-front"
                            num={7}
                            name="Chris Martin"
                            status={0}
                        />
                        <ColMatch
                            className="soccer-front"
                            num={21}
                            name="Nahki Wells"
                            status={0}
                        />
                    </span>
                </div>
                <div className="awayForm">
                    <span className="formRow">
                        <ColMatch
                            className="soccer-front"
                            num={19}
                            name="Patrick Roberts"
                        />
                        <ColMatch
                            className="soccer-front"
                            num={10}
                            name="Chuba Akpom"
                            status={0}
                        />
                    </span>
                    <span className="formRow">
                        <ColMatch
                            className="soccer-center"
                            num={29}
                            name="Djed Spence"
                            status={0}
                        />
                        <ColMatch
                            className="soccer-center"
                            num={22}
                            name="George Saville"
                            status={3}
                        />
                        <ColMatch
                            className="soccer-center"
                            num={16}
                            name="Jonathan Howson"
                        />
                        <ColMatch
                            className="soccer-center"
                            num={3}
                            name="Marvin Johnson"
                        />
                    </span>
                    <span className="formRow">
                        <ColMatch
                            className="soccer-center-b"
                            num={5}
                            name="Sam Morsy"
                        />
                    </span>
                    <span className="formRow">
                        <ColMatch
                            className="soccer-back"
                            num={2}
                            name="Anfernee Dijksteel"
                        />
                        <ColMatch
                            className="soccer-back"
                            num={17}
                            name="Patrick McNair"
                        />
                        <ColMatch
                            className="soccer-center"
                            num={6}
                            name="Dael Fry"
                            status={1}
                        />
                    </span>
                    <span className="formRow">
                        <ColMatch
                            className="goalkeeper"
                            num={1}
                            name="Marcus Bettinelli"
                            status={1}
                        />
                    </span>
                </div>
                <div className="corners">
                    <div className="tl" />
                    <div className="tr" />
                    <div className="br" />
                    <div className="bl" />
                </div>
                <div className="centerLine" />
                <div className="centerSpot" />
                <div className="centerCircle" />
                {/* goal top */}
                <div className="line-goal goal-top">
                    <div className="top goal" />
                </div>
                <div className="curve-top" />
                {/* goal bottom */}
                <div className="line-goal goal-bottom">
                    <div className="bottom goal" />
                </div>
                <div className="curve-bottom" />
            </div>
            <span className="teamInfo">
              <span className="name">Middlesbrough</span>
              <span>3-1-4-2</span>
            </span>
          </div>
        </div>
    </MatchLineUpStyle>
  );
};


MatchLineUp.propTypes = {
  type: PropTypes.string,
  players: PropTypes.array.isRequired
};


export default MatchLineUp;
