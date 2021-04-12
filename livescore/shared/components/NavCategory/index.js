import React from 'react';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types';
import {NavCategoryStyle} from "./style"

const NavCategory = ({route}) => {
  /*console.log(route)*/
  const router = useRouter()
  let path = router.asPath
  return (
    <NavCategoryStyle className="category d-block d-md-none px-3">
      <ul className="nav nav-pills">
        {
          route.map((url, index) => (
            <li className="nav-item" key={index}>
              <a className={`nav-link rounded-0 ${path === url.url ? "active" : ""}`} href={url.url}>{url.title}</a>
            </li>
          ))
        }
      </ul>
    </NavCategoryStyle>
  );
};


NavCategory.propTypes = {
  route: PropTypes.array
};


export default NavCategory;
