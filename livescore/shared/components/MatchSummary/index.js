import React from 'react';
import PropTypes from 'prop-types';
import {MatchSummaryStyle} from "./style"

const MatchSummary = ({type, matchionfo}) => {

  //console.log(matchionfo)
  return (
    <MatchSummaryStyle className="card rounded-0 border-top-0 border-left-0 border-right-0 mb-5">
        <div className="card-header text-dark text-center text-uppercase border-top-0 border-bottom-0 font-weight-bold">
          {type}
        </div>
        <div className="card-body p-0">
        {
            matchionfo.map((item, index) => (
              <div className={`w-100 border-match row mx-0 align-items-center`} key={index}>
                <div className="time col-1 px-1 text-left">{item["@team"] === "localteam" ? <span>{item["@minute"]}</span> : "" }</div>
                <div className="home col-4 px-2">
                  {item["@team"] === "localteam" ? 
                  
                  <div> 
                  { 
                  item["@type"] === "goal" ?  <p className="mb-0 text-dark"><span>{}</span> { item["@name"]}   (goal)</p>
                  :item["@type"] === "yellowcard" ? <div className="card-match"><img src="/assets/cards/788px-Yellow_card.png" alt="Yellow Card"  style={{width: "20px"}}/>{ item["@name"]}</div>
                  :item["@type"] === "redcard" ? <div className="card-match"><img src="/assets/cards/591px-Red_card.png" alt="Red Card" style={{width: "20px"}} />{ item["@name"]}</div>
                  :item["@type"] === "subst" ? <><p className="mb-0 text-dark">In:{item["@on"]}</p><p className="mb-0 text-secondary">Out:{item["@off"]}</p></>
                  : "" 
                  }
                  </div> 
                  
                  : "" 
                  
                  }
                  
                    

                </div>
               
                <div className="col-2 px-0"></div>
                <div className="away col-1 px-0 text-left">{item["@team"] === "visitorteam" ? <span>{item["@minute"]}</span> : "" }</div>
                <div className="away col-4 px-2">
                  {item["@team"] === "visitorteam" ? 
                  
                  <div> 
                  { 
                  item["@type"] === "goal" ?  <p className="mb-0 text-dark"><span>{}</span> { item["@name"]}   (goal)</p>
                  :item["@type"] === "yellowcard" ? <div className="card-match"><img src="/assets/cards/788px-Yellow_card.png" alt="Yellow Card" style={{width: "20px"}} />  { item["@name"]}</div>
                  :item["@type"] === "redcard" ? <div className="card-match"><img src="/assets/cards/591px-Red_card.png" alt="Red Card" style={{width: "20px"}} />  { item["@name"]}</div>
                  :item["@type"] === "subst" ? <><p className="mb-0 text-dark">In:{item["@on"]}</p><p className="mb-0 text-secondary">Out:{item["@off"]}</p></>
                  : "" 
                  }
                  </div> 
                  
                  : "" 
                  
                  }
                  
                    

                </div>
               
               
              </div>
            ))
          }
        </div>
    </MatchSummaryStyle>
  );
};


MatchSummary.propTypes = {
  type: PropTypes.string,
  //matchionfo: PropTypes.array.isRequired
};


export default MatchSummary;
