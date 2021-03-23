import React from 'react';
import PropTypes from 'prop-types';
import {MatchLineUpStyle} from "./style"
import ColMatch from "../../commons/ColMatch"
import LineUpList from "../LineUpList"

const MatchLineUp = ({teams,list,type, players}) => {
  return (
    <MatchLineUpStyle className="card rounded-0 border-top-0 border-left-0 border-right-0 mb-5 pt-4">
        <div className="card-header text-dark text-center text-uppercase border-top-0 border-bottom-0 font-weight-bold">
          {type}
        </div>
        <div className="card-body p-0">
          {
            /*players.map((item, index) => (
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
            ))*/
          }

          
          <div className="pitch-soccer-wrapper">
            <span className="teamInfo">
                <span className="name">{teams.localteam}</span>
                <span>{list.localteam["@formation"]}</span>
            </span>
            <div className="pitch-soccer">
                <div className="homeForm">
                    <span className="formRow">
                        {
                            (Array.isArray(list.localteam.player) ?  
                            
                              list.localteam.player.map((item, index) => (

                                item["@pos"] === "G" ?
                                
                                <ColMatch 
                                    key={parseInt(item["@number"])}
                                    className="goalkeeper"
                                    name={item["@name"]}
                                    num={parseInt(item["@number"])}
                                />
                               
                                :
                                ""
                              ))
                              :""
                            )
                        
                        }
                        
                    </span>
                    <span className="formRow">
                    {
                            (Array.isArray(list.localteam.player) ?  
                            
                              list.localteam.player.map((item, index) => (

                                item["@pos"] === "D" ?
                                
                                <ColMatch 
                                    key={parseInt(item["@number"])}
                                    className="soccer-center"
                                    name={item["@name"]}
                                    num={parseInt(item["@number"])}
                                />
                               
                                :
                                ""
                              ))
                              :""
                            )
                        
                     }
                    </span>
                    <span className="formRow">
                    {
                            (Array.isArray(list.localteam.player) ?  
                            
                              list.localteam.player.map((item, index) => (

                                item["@pos"] === "M" ?
                                
                                <ColMatch 
                                    key={parseInt(item["@number"])}
                                    className="soccer-center"
                                    name={item["@name"]}
                                    num={parseInt(item["@number"])}
                                />
                               
                                :
                                ""
                              ))
                              :""
                            )
                        
                     }
                    </span>
                    <span className="formRow">
                    {
                            (Array.isArray(list.localteam.player) ?  
                            
                              list.localteam.player.map((item, index) => (

                                item["@pos"] === "F" ?
                                
                                <ColMatch 
                                    key={parseInt(item["@number"])}
                                    className="soccer-center"
                                    name={item["@name"]}
                                    num={parseInt(item["@number"])}
                                />
                               
                                :
                                ""
                              ))
                              :""
                            )
                        
                     }
                    </span>
                </div>
                <div className="awayForm">
                <span className="formRow">
                {
                            (Array.isArray(list.visitorteam.player) ?  
                            
                              list.visitorteam.player.map((item, index) => (

                                item["@pos"] === "F" ?
                                
                                <ColMatch 
                                    key={parseInt(item["@number"])}
                                    className="soccer-front"
                                    name={item["@name"]}
                                    num={parseInt(item["@number"])}
                                />
                               
                                :
                                ""
                              ))
                              :""
                            )
                        
                        }
                   </span>
                    <span className="formRow">
                     {
                            (Array.isArray(list.visitorteam.player) ?  
                            
                              list.visitorteam.player.map((item, index) => (

                                item["@pos"] === "M" ?
                                
                                <ColMatch 
                                    key={parseInt(item["@number"])}
                                    className="soccer-center"
                                    name={item["@name"]}
                                    num={parseInt(item["@number"])}
                                />
                               
                                :
                                ""
                              ))
                              :""
                            )
                        
                        }
                    </span>
                    {/*<span className="formRow">
                        <ColMatch
                            className="soccer-center-b"
                            num={5}
                            name="Sam Morsy"
                        />
                    </span>*/}
                    <span className="formRow">
                        
                        {
                            (Array.isArray(list.visitorteam.player) ?  
                            
                              list.visitorteam.player.map((item, index) => (

                                item["@pos"] === "D" ?
                                
                                <ColMatch 
                                    key={parseInt(item["@number"])}
                                    className="soccer-center"
                                    name={item["@name"]}
                                    num={parseInt(item["@number"])}
                                />
                               
                                :
                                ""
                              ))
                              :""
                            )
                        
                        }
                    </span>
                    <span className="formRow">
                    {
                            (Array.isArray(list.visitorteam.player) ?  
                            
                              list.visitorteam.player.map((item, index) => (

                                item["@pos"] === "G" ?
                                
                                <ColMatch 
                                    key={parseInt(item["@number"])}
                                    className="goalkeeper"
                                    name={item["@name"]}
                                    num={parseInt(item["@number"])}
                                />
                               
                                :
                                ""
                              ))
                              :""
                            )
                        
                        }
                       
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
              <span className="name">{teams.visitorteam}</span>
              <span>{list.visitorteam["@formation"]}</span>
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
