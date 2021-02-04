import React from 'react';
import PropTypes from 'prop-types';
import {ClubStatusStyle} from "./style"

const ClubStatus = ({className, title, squad, players, avgAge, market}) => {
  return (
    <ClubStatusStyle className={className}>
      <div className="team-title text-center py-2">
        {title}
      </div>
      <ul>
        <li>
          <span>Squad size</span>
          {squad}
        </li>
        <li>
          <span>Foreign players</span>
          {players}
        </li>
        <li>
          <span>Average age</span>
          {avgAge}
        </li>
        <li>
          <span>Market value</span>
          {market}
        </li>
      </ul>
    </ClubStatusStyle>
  );
};


ClubStatus.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  squad: PropTypes.string,
  players: PropTypes.string,
  avgAge: PropTypes.string,
  market: PropTypes.string,
};
ClubStatus.defaultProps = {
  className: "",
  title: "20-21 PREM STATS",
  squad: "41",
  players: "24",
  avgAge: "23.9",
  market: "€ 1.07B",
};

export default ClubStatus;
