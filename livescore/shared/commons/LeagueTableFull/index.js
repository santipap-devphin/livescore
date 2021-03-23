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
            <th></th>
            <th colSpan="2">{title}</th>
            <th className="text-center px-1 py-2">MP</th>
            <th className="text-center px-1 py-2">W</th>
            <th className="text-center px-1 py-2">D</th>
            <th className="text-center px-1 py-2">L</th>
            <th className="text-center px-1 py-2">F</th>
            <th className="text-center px-1 py-2">A</th>
            <th className="text-center px-1 py-2">D</th>
            <th className="text-center px-1 py-2">P</th>
            <th className="text-center px-1 py-2">FORM</th>
          </tr>
        </thead>
        <tbody>
        {
          matches.map((item, k) => (
            <tr key={k.toString()}>
              <td className="text-center px-0 py-1">{item["@position"]}</td>
              <td colSpan="2">{item["@name"]}</td>
              <td className="px-0 py-1 text-center">{item.overall["@gp"]}</td>
              <td className="px-0 py-1 text-center">{item.overall["@w"]}</td>
              <td className="px-0 py-1 text-center">{item.overall["@d"]}</td>
              <td className="px-0 py-1 text-center">{item.overall["@l"]}</td>
              <td className="px-0 py-1 text-center">{item.overall["@gs"]}</td>
              <td className="px-0 py-1 text-center">{item.overall["@ga"]}</td>
              <td className="px-0 py-1 text-center">{item.total["@gd"]}</td>
              <td className="px-0 py-1 text-center">{item.total["@p"]}</td>
              <td className="px-0 py-1 text-center">{item["@recent_form"]}</td>
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
