import React from 'react';
import PropTypes from 'prop-types';


const OverView = ({ title }) => {
  return (
    <div className="w-100">
      <h3>{title}</h3>
      <div className="row seven-cols">
        <div className="col-md-1 px-2">
          <div className="border">
            <span>Col 1</span>
          </div>
        </div>
        <div className="col-md-1 px-2">
          <div className="border">
            <span>Col 2</span>
          </div>
        </div>
        <div className="col-md-1 px-2">
          <div className="border">
            <span>Col 3</span>
          </div>
        </div>
        <div className="col-md-1 px-2">
          <div className="border">
            <span>Col 4</span>
          </div>
        </div>
        <div className="col-md-1 px-2">
          <div className="border">
            <span>Col 5</span>
          </div>
        </div>
        <div className="col-md-1 px-2">
          <div className="border">
            <span>Col 6</span>
          </div>
        </div>
        <div className="col-md-1 px-2">
          <div className="border">
            <span className="small">Col 7</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .seven-cols .col-md-1,
        .seven-cols .col-sm-1,
        .seven-cols .col-lg-1  {
          flex: 0 0 100%;
          max-width: 100%;
        }
        @media (min-width: 540px) {
          .seven-cols .col-md-1,
          .seven-cols .col-sm-1,
          .seven-cols .col-lg-1 {
            flex: 0 0 calc(100% / 2);
            max-width: calc(100% / 2);
          }
        }
        @media (min-width: 768px) {
          .seven-cols .col-md-1,
          .seven-cols .col-sm-1,
          .seven-cols .col-lg-1 {
            flex: 0 0 calc(100% / 3);
            max-width: calc(100% / 3);
          }
        }
        @media (min-width: 992px) {
          .seven-cols .col-md-1,
          .seven-cols .col-sm-1,
          .seven-cols .col-lg-1 {
            flex: 0 0 calc(100% / 7);
            max-width: calc(100% / 7);
          }
        }
      `}</style>
    </div>
  );
};


OverView.propTypes = {
  title: PropTypes.string,
};
OverView.defaultProps = {
  title: "FIFA Club World Cup winner ( X1 )"
}

export default OverView;
