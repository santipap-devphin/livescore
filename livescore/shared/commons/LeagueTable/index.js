import React from 'react';
import PropTypes from 'prop-types';
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import {LeagueTableStyle } from "./style"

const LeagueTable = ({ className, arrow, matches, title }) => {
  return (
    <LeagueTableStyle className={`league-table-container ${className}`}>
      <div className="league-table mt-0 table-responsive">
        <table className="table table-bordered">
        <thead>
          <tr>
            {
              arrow === true
              ? <th className="px-2 py-2"><div onClick={() => console.log("left")} className=""><RiArrowLeftSFill /></div></th>
              : ""
            }
            <th colSpan={arrow === false ? "2" : "1"}>
              <a className="league-name" href="/soccer/spain/laliga-santander/" data-type="league-name" title="Spain - LaLiga Santander">
                {title}
              </a>
            </th>
            {
              arrow === true
              ? <th className="px-2 py-2"><div onClick={() => console.log("right")} className=""><RiArrowRightSFill /></div></th>
              : ""
            }
            <th className="text-center px-1 py-2">P</th>
            <th className="text-center px-1 py-2">GD</th>
            <th className="text-center px-1 py-2">PTS</th>
          </tr>
        </thead>
        <tbody>
        {
          matches.map((item, k) => (
            <tr key={k.toString()}>
              <td className="text-center px-0 py-1">{item.key}</td>
              <td colSpan="2">{item.title}</td>
              <td className="px-0 py-1 text-center">{item.matches}</td>
              <td className="px-0 py-1 text-center">{item.gd}</td>
              <td className="px-0 py-1 text-center">{item.points}</td>
            </tr>
          ))
        }
        </tbody>
        </table>
      </div>
    </LeagueTableStyle >
  );
};


LeagueTable.propTypes = {
  className: PropTypes.string,
  arrow: PropTypes.bool.isRequired,
  matches: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};
LeagueTable.defaultProps = {
  className: "",
  arrow: false
};

export default LeagueTable;
