import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import {TableBattleStyle} from "./style"

const TableBattle = ({ className, title, data, highlight }) => {
  return (
    <TableBattleStyle className={`league-matches ${highlight === true ? "highlight" : ""} mb-4`}>
      <h4 className={`block-title ${className} mb-0`}>{title}</h4>
      <div className="league-matches-list list-unstyled mb-0">
        {
          data.map((item, index) => {
            return (
              <div className="w-100 league-matches-item" key={index.toString()}>
              <Link
                href={{
                  pathname: `/football/[league]/[name]`,
                }}
                as={`/football/premier-league/${item.team}-vs-${item.teamB}`}
                
              >
                <a className="row flex-column flex-md-row mx-0 py-2 text-decoration-none text-dark">
                  <div className="col-md-6 pl-md-2 pr-md-0">
                    <div className="d-flex row mx-0">
                      <div className="col-md-1 px-0 px-md-2 flex-fill text-center text-md-left">{item.type}</div>
                      <div className="col-md-9 px-0 pl-md-2 pr-md-2 flex-fill text-center text-md-right">
                        {item.team}
                      </div>
                      <div className="col-md-2 px-0 pl-md-0 pr-md-0 flex-fill text-center">  
                        {item.score}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 px-0 px-md-2">
                    <div className="play text-center text-md-left">
                      {item.teamB}
                    </div>
                  </div>
                </a>
              </Link>
              </div>
            )
          })
        }
      </div>
    </TableBattleStyle>
  );
};


TableBattle.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  highlight: PropTypes.bool
};
TableBattle.defaultProps = {
  className: "bg-secondary text-white",
  title: "title",
  highlight: false
};

export default TableBattle;
