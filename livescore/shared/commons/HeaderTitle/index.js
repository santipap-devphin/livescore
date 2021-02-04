import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from "../../components/Sidebar"

const HeaderTitle = ({ rightBar, imgSrc, title, flag,
  country }) => {
  return (
    <div className="container-fluid container-xl pt-4">
      <div className="row">
        <div className="col-md-9 col-xl-9">
          <img src={imgSrc} alt={title} />
          {title}
          <p className="mb-0">
            <img src={flag} alt="" /> {country}
          </p>
        </div>
        <div className="col-md-3 col-xl-3">
          <Sidebar>
            {rightBar}
          </Sidebar>
        </div>
      </div>
    </div>
  );
};


HeaderTitle.propTypes = {
  children: PropTypes.node,
  rightBar: PropTypes.node,
  title: PropTypes.string,
  flag: PropTypes.string,
  country: PropTypes.string
};


export default HeaderTitle;
