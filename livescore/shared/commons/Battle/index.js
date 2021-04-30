import React from 'react';
import PropTypes from 'prop-types';
import {BattleStyle} from "./style"

const Battle = ({ className, type, imgTeamA, scoreTeamA, imgTeamB, scoreTeamB, imgTeamAName, imgTeamBName, versusText, vote, children ,list}) => {
  
  function addDefaultSrc(ev){
    ev.target.src = '/assets/default-team-logo.png';
    //ev.target.src = '';
   }

  var newstitle =  list.title.replace(/[^a-zA-Z ]/g, "");


  
   
  return (
    <BattleStyle className={`match-header ${className}`}>
      <div className="right row mx-0 align-items-center">
        <div className="home-team team col-4 text-center">
          <div className="logo" style={{padding:20}}>
            <a href={`/clubs/${newstitle.replace(/\s/g, '')}/${list.team.replace(/\s/g, '')}/overviews/${list.teamid}`} target="_blank">
            <img 
            src={imgTeamA}
            alt={imgTeamAName} 
            onError={addDefaultSrc} />
            </a>
          </div>
          <div className="name"><a href={`/clubs/${newstitle.replace(/\s/g, '')}/${list.team.replace(/\s/g, '')}/overviews/${list.teamid}`} target="_blank">{imgTeamAName}</a></div>
        </div>
        <div className="score-date col-4">
          <div className="match-type">{type}</div>
          <div className="score mb-3">
            <span className="versus font-weight-normal">{scoreTeamA}</span>
            <span className="versus px-3">{versusText}</span>
            <span className="versus font-weight-normal">{scoreTeamB}</span>
          </div>
          <div className="date-time">
            
            {/* December 8, 2018
            <span className="time">16:30</span> */}
          </div>
        </div>
        <div className="away-team team col-4 text-center">
          <div className="logo" style={{padding:20}}>
            <a href={`/clubs/${newstitle.replace(/\s/g, '')}/${list.teamB.replace(/\s/g, '')}/overviews/${list.teamBid}`} target="_blank">
              <img 
                src={imgTeamB} 
                alt={imgTeamBName} 
                onError={addDefaultSrc} />
            </a>
          </div>
          <div className="name"><a href={`/clubs/${newstitle.replace(/\s/g, '')}/${list.teamB.replace(/\s/g, '')}/overviews/${list.teamBid}`} target="_blank">{imgTeamBName}</a></div>
        </div>
      </div>
      {
        vote === true
          ? <div>{children}</div>
          : ""
      }
    </BattleStyle>
  );
};


Battle.propTypes = {
  versusText: PropTypes.string.isRequired,
  vote: PropTypes.bool,
  children: PropTypes.node,
  imgTeamA: PropTypes.string.isRequired,
  imgTeamB: PropTypes.string.isRequired,
  scoreTeamA: PropTypes.string.isRequired,
  scoreTeamB: PropTypes.string.isRequired,
  type: PropTypes.string,
};
Battle.defaultProps = {
  className: "",
  versusText: "-",
  vote: false
};

export default Battle;
