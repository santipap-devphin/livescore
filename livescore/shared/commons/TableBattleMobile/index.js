import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import {TableBattleMobileStyle} from "./style"
import Avatar from "../Avatar"

const TableBattleMobile = ({title, data, className }) => {
  return (
    <TableBattleMobileStyle className={`league-matches mb-4 ${className}`}>
      <div className="block-title
    align-items-center">
        <Avatar
          className="align-self-center mr-3"
          size={25}
          shape="square"
          src="/assets/icons/league/league_premier.png"
          alt={title}
        />
        <h4 className="mb-0">{title}</h4>
      </div>
      
      <div className="league-matches-list list-unstyled mb-0">
        {
          data.map((item, index) => {
            return (
              <div className="w-100 league-matches-item"  key={index.toString()}>
                <Link
                  href={{
                    pathname: `/football/[league]/[name]`,
                  }}
                  as={`/football/premier-league/${item.team}-vs-${item.teamB}`}
                >
                  <a className="row mx-0 text-decoration-none text-dark border-bottom">
                    <div className="col-3 px-0 py-2 text-center align-self-center">
                      <p className="small mb-2">{item.date}</p>
                      <p className="mb-0">{item.type}</p>
                    </div>
                    <div className="col-7 px-2 league-matches-list_name py-2 border-left border-right text-left">
                      <p className="mb-2">
                        <Avatar
                          className="align-self-center mr-2"
                          size={25}
                          shape="square"
                          src="/assets/icons/league/league_premier.png"
                          alt={title}
                        />
                        {item.team}
                      </p>
                      <p className="mb-0">
                        <Avatar
                          className="align-self-center mr-2"
                          size={25}
                          shape="square"
                          src="/assets/icons/league/league_premier.png"
                          alt={title}
                        />
                        {item.teamB}
                      </p>
                    </div>
                    <div className="col-2 py-2 px-0 text-center align-self-center">
                      <p className="mb-2">{item.scoreA}</p>
                      <p className="mb-0">{item.scoreB}</p>
                    </div>
                  </a>
                </Link>
              </div>
            )
          })
        }
      </div>
    </TableBattleMobileStyle>
  );
};


TableBattleMobile.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};
TableBattleMobile.defaultProps = {
  className: "",
  title: "title",
};

export default TableBattleMobile;
