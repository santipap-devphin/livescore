import React from 'react';
import PropTypes from 'prop-types';
import {ChampionsLeagueTableStyle } from "./style"

const ChampionsLeagueTable = ({ className, matches, title }) => {
  return (
    <ChampionsLeagueTableStyle className={`league-table-container ${className}`}>
      <div className="league-table mt-0 table-responsive">
        <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <span className="league-name">
                {title}
              </span>
            </th>
            <th className="text-center px-1 py-2">P</th>
            <th className="text-center px-1 py-2">GD</th>
            <th className="text-center px-1 py-2">PTS</th>
          </tr>
        </thead>
        <tbody>
        {
          matches.map((item, k) => (
            <tr key={k.toString()}>
              <td>
                <div className="d-flex align-items-center">
                  <div className="text-center px-1 w-35px">{item.key}</div>
                  <div className="px-2 py-1">{item.title}</div>
                </div>
              </td>
              <td className="px-0 py-1 text-center">{item.matches}</td>
              <td className="px-0 py-1 text-center">{item.gd}</td>
              <td className="px-0 py-1 text-center">{item.points}</td>
            </tr>
          ))
        }
        </tbody>
        </table>
      </div>
    </ChampionsLeagueTableStyle >
  );
};


ChampionsLeagueTable.propTypes = {
  className: PropTypes.string,
  arrow: PropTypes.bool.isRequired,
  matches: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};
ChampionsLeagueTable.defaultProps = {
  className: "",
  arrow: false
};

export default ChampionsLeagueTable;
