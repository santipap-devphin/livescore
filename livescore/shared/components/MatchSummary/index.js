import React from 'react';
import PropTypes from 'prop-types';
import {MatchSummaryStyle} from "./style"

const MatchSummary = ({type, matchionfo}) => {

  console.log(matchionfo)
  return (
    <MatchSummaryStyle className="card rounded-0 border-top-0 border-left-0 border-right-0 mb-5">
        <div className="card-header text-dark text-center text-uppercase border-top-0 border-bottom-0 font-weight-bold">
          {type}
        </div>
        <div className="card-body p-0">
                <div className={`w-100 border-match row mx-0 align-items-center`}>
                 {
                    (matchionfo.localteam.goals === null) ? ""

                    : Array.isArray(matchionfo.localteam.goals.player) ?  
                    
                    <div className="home col-4 px-2"> 
                    {matchionfo.localteam.goals.player.map((item, index) => (

                            <p className="mb-0 text-dark"><span>{ item["@minute"]}</span> { item["@player"]}   (goal)</p>
                    ))}
                    </div>
                    : <><div className="time col-1 px-2 text-left">{<span>{matchionfo.localteam.goals.player["@minute"]}</span>}</div>
                        <div className="home col-4 px-2">
                        <p className="mb-0 text-dark"> { matchionfo.localteam.goals.player["@name"]}   (goal)</p>
                        </div>
                      </>
                 }
                 {
                    (matchionfo.localteam.yellowcards === null) ? ""

                    : Array.isArray(matchionfo.localteam.yellowcards.player) ?  
                    
                    <div className="home col-4 px-2"> 
                    {matchionfo.localteam.yellowcards.player.map((item, index) => (

                            <p className="mb-0 text-dark"><span>{ item["@minute"]}</span> { item["@player"]}   (goal)</p>
                    ))}
                    </div>
                    : <><div className="time col-1 px-2 text-left">{<span>{matchionfo.localteam.yellowcards.player["@minute"]}</span>}</div>
                        <div className="home col-4 px-2">
                        <div className="card-match"><img src="/assets/cards/788px-Yellow_card.png" alt="Yellow Card"  style={{width: "20px"}}/>{ matchionfo.localteam.yellowcards.player["@name"]}</div>
                        </div>
                      </>
                 }
                 {
                    (matchionfo.localteam.redcards === null) ? ""

                    : Array.isArray(matchionfo.localteam.redcards.player) ?  
                    
                    <div className="home col-4 px-2"> 
                    {matchionfo.localteam.redcards.player.map((item, index) => (

                            <p className="mb-0 text-dark"><span>{ item["@minute"]}</span> { item["@player"]}   (goal)</p>
                    ))}
                    </div>
                    : <><div className="time col-1 px-2 text-left">{<span>{matchionfo.localteam.redcards.player["@minute"]}</span>}</div>
                        <div className="home col-4 px-2">
                        <div className="card-match"><img src="/assets/cards/591px-Red_card.png" alt="Red Card" style={{width: "20px"}} />{ matchionfo.localteam.redcards.player["@name"]}</div>
                        </div>
                      </>
                 }


                {   
                    (matchionfo.visitorteam.goals === null) ? ""

                    : Array.isArray(matchionfo.visitorteam.goals.player) ?  
                    
                    <div className="away col-4 px-2 text-left"> 
                    {matchionfo.visitorteam.goals.player.map((item, index) => (

                            <p className="mb-0 text-dark"><span>{ item["@minute"]}</span> { item["@player"]}   (goal)</p>
                    ))}
                    </div>
                    : <><div className="time col-1 px-2 text-left">{<span>{matchionfo.visitorteam.goals.player["@minute"]}</span>}</div>
                        <div className="away col-4 px-2 text-left">
                        <p className="mb-0 text-dark"> { matchionfo.visitorteam.goals.player["@name"]}   (goal)</p>
                        </div>
                      </>
                 }
                 
                 {
                    (matchionfo.visitorteam.yellowcards === null) ? ""

                    : Array.isArray(matchionfo.visitorteam.yellowcards.player) ?  
                    
                    <div className="away col-4 px-2 text-left"> 
                    {matchionfo.visitorteam.yellowcards.player.map((item, index) => (

                            <p className="mb-0 text-dark"><span>{ item["@minute"]}</span> { item["@player"]}   (goal)</p>
                    ))}
                    </div>
                    : <><div className="time col-1 px-2 text-left">{<span>{matchionfo.visitorteam.yellowcards.player["@minute"]}</span>}</div>
                        <div className="away col-4 px-2 text-left">
                        <div className="card-match"><img src="/assets/cards/788px-Yellow_card.png" alt="Yellow Card"  style={{width: "20px"}}/>{ matchionfo.visitorteam.yellowcards.player["@name"]}</div>
                        </div>
                      </>
                 }
                 {
                    (matchionfo.visitorteam.redcards === null) ? ""

                    : Array.isArray(matchionfo.visitorteam.redcards.player) ?  
                    
                    <div className="away col-4 px-2 text-left"> 
                    {matchionfo.visitorteam.redcards.player.map((item, index) => (

                            <p className="mb-0 text-dark"><span>{ item["@minute"]}</span> { item["@player"]}   (goal)</p>
                    ))}
                    </div>
                    : <><div className="time col-1 px-2 text-left">{<span>{matchionfo.visitorteam.redcards.player["@minute"]}</span>}</div>
                        <div className="away col-4 px-2 text-left">
                        <div className="card-match"><img src="/assets/cards/591px-Red_card.png" alt="Red Card" style={{width: "20px"}} />{ matchionfo.visitorteam.redcards.player["@name"]}</div>
                        </div>
                      </>
                 }

                </div>
        </div>
    </MatchSummaryStyle>
  );
};


MatchSummary.propTypes = {
  type: PropTypes.string,
  matchionfo: PropTypes.array.isRequired
};


export default MatchSummary;
