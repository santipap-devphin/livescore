import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import {BreadcrumbStyle} from "./style"

const breadcrumb = ({ title, path }) => {
  const router = useRouter()
  return (
    <BreadcrumbStyle className="border d-none d-md-block">
      <h4 className="mb-0 px-3 py-2 bg-secondary text-white text-uppercase h6 breadcrumb-head">{title}</h4>
      <nav aria-label="breadcrumb" className="breadcrumb-box">
        <ol className="breadcrumb mb-0 rounded-0 flex-column flex-md-row">
          {/* {
            console.log(path.pop())
          } */}
          {
            path.map((paths, index) => (
              <li key={index.toString()} className={`breadcrumb-item`}>
                <a href="#">{paths}</a>
              </li>
            ))
          }
        </ol>
      </nav>
    </BreadcrumbStyle>
  );
};


breadcrumb.propTypes = {
  title: PropTypes.string,
};


export default breadcrumb;
