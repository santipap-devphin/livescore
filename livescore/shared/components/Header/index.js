import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import {HeaderStyle} from "./style"
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({className}) => {
  const [collapse, setCollapse] = useState(false);
  const router = useRouter()
  let path = router.asPath
  const host = path.split("/");
  let firstItem = host[1]
  // let lastItem = host[host.length - 1]
  // let pathNa = router.query 
  // console.log(firstItem)

  return (
    <HeaderStyle id="top" className="margin-bottom-small">
      <nav className={`navbar navbar-expand-md shadow-sm rounded-0`}>
        <div className="container">
          <a className="navbar-brand" href="./">WEBSITENAME!</a>
          <button className="navbar-toggler" onClick={() => setCollapse(!collapse)} type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
            <AiOutlineMenu />
          </button>
          <div className={`collapse navbar-collapse ${collapse === true ? "show" : ""}`} id="navbarsExample07">
            <ul className="navbar-nav mr-auto">
              <li className={`nav-item ${firstItem === "" ? "active" : ""}`}>
                <a className="nav-link" href="/">หน้าแรก <span className="sr-only">(current)</span></a>
              </li>
              <li className={`nav-item ${firstItem === "highlight" ? "active" : ""}`}>
                <a className="nav-link" href="/highlight">ไฮไลท์ฟุตบอล</a>
              </li>
              <li className={`nav-item ${firstItem === "plugins" ? "active" : ""}`}>
                <a className="nav-link" href="/plugins/table-score">แจกตารางผลคะแนน</a>
              </li>
              <li className={`nav-item ${firstItem === "clubs" ? "active" : ""}`}>
                <a className="nav-link" href="/clubs">ข้อมูลสโมสร</a>
              </li>
              <li className={`nav-item ${firstItem === "contact" ? "active" : ""}`}>
                <a className="nav-link" href="/contact">ติดต่อเรา</a>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu" aria-labelledby="dropdown07">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </HeaderStyle>
  );
};


Header.propTypes = {
  className: PropTypes.string
};
Header.defaultProps = {
  className: ""
};

export default Header;
