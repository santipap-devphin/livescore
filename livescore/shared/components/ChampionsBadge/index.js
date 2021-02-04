import React from 'react';
import PropTypes from 'prop-types';
import Avatar from "../../commons/Avatar"

const ChampionsBadge = ({ title, data }) => {
  return (
    <div className="w-100">
      <h3 className='mb-4'>{title}</h3>
      <div className="row seven-cols">
        <div className="col-md-2">
          <div className="border rounded pl-2 pr-2 pt-3 pb-3">
              <Avatar
                size={50}
                shape="rounded-0"
                src='https://www.thesportsdb.com/images/media/league/trophy/i7zbag1551009875.png'
                alt='img'
                className="mb-3" 
              />

            <p className="text-center">2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};


ChampionsBadge.propTypes = {
  title: PropTypes.string,
};
ChampionsBadge.defaultProps = {
  title: "FIFA Club World Cup winner ( X1 )"
}

export default ChampionsBadge;
