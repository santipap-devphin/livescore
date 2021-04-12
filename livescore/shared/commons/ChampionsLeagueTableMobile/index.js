import React from 'react';
import PropTypes from 'prop-types';
import {ChampionsLeagueTableMobileStyle } from "./style"

const ChampionsLeagueTableMobile = ({ className, matches, title }) => {
  
  return (
    <ChampionsLeagueTableMobileStyle className={`league-table-container ${className}`}>
      
      <div className="league-table mt-0 table-responsive">
        <table className="table table-bordered">
          <caption>{title}</caption>
          <thead>
            <tr>
              <th className="text-center px-1">#</th>
              <th className="text-left">Teams</th>
              <th className="text-center px-1">P</th>
              <th className="text-center px-1">GD</th>
              <th className="text-center px-1">PTS</th>
            </tr>
          </thead>
          <tbody>
          {
            matches.map((item, k) => (
            
              <tr key={k.toString()}>
               
                <td className="px-0 py-1 text-center">{item.key}</td>
                <td className="px-2 py-1 text-left">
                  {item.title}
                </td>
                <td className="px-0 py-1 text-center">{item.gp}</td>
                <td className="px-0 py-1 text-center">{item.gd}</td>
                <td className="px-0 py-1 text-center">{item.points}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </ChampionsLeagueTableMobileStyle >
  );
};


ChampionsLeagueTableMobile.propTypes = {
  className: PropTypes.string,
  arrow: PropTypes.bool.isRequired,
  matches: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};
ChampionsLeagueTableMobile.defaultProps = {
  className: "",
  arrow: false
};

export default ChampionsLeagueTableMobile;
