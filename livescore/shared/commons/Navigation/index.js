import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import {NavigationStyle} from "./style"

const Navigation = ({ className, routes, navTitle }) => {
  return (
    <NavigationStyle className={`collapse bd-links d-md-block mb-4 ${className}`}>
      <div className="bd-toc-item">
        <div className="bd-toc-link bg-secondary text-white">
          {navTitle}
        </div>
        <ul className="nav bd-sidenav">
          {routes.map((url, k) => (
            <li key={k.toString()}>
              <Link
                href={{
                  pathname: `/[league]`,
                  query: { slug: 'my-post' },
                }}
                as={`${url.links}`}
              >
                <a>
                  {url.img ? <span className="mr-2"><img src={url.img} alt={url.title}></img></span> : ""}
                  {url.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </NavigationStyle>
  );
};


Navigation.propTypes = {
  className: PropTypes.string,
  navTitle: PropTypes.string,
  routes: PropTypes.array.isRequired
};
Navigation.defaultProps = {
  className: "",
};

export default Navigation;
