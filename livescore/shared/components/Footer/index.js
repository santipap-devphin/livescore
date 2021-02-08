import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import {FooterStyle} from "./style"

const Footer = ({ className }) => {
  return (
    <FooterStyle className={className}>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-3 text-center text-md-left">
              <div className="footer-content">
                <h3>7SCORE.live!</h3>
                <p>อัพเดทข่าวสารวงการกีฬา ฟุตบอล ผลบอล ผลฟุตบอลทั่วโลก พรีเมียร์ลีก ไทยลีก ฟุตบอลโลก ยูฟ่าแชมเปี้ยนส์ลีก</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 offset-lg-1">
              <div className="row">
                <div className="col-md-6">
                  <div className="footer-content sitemaps text-center text-lg-left">
                  <h3 className="mb-3">Sitemaps</h3>
                  <ul className="list-unstyled text-small">
                    <li>
                      <Link href="/">
                        <a>Link #1</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Link #2</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Link #3</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Link #4</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Link #5</a>
                      </Link>
                    </li>
                  </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-center text-lg-left">
                  <h3 className="mb-3">ลิงก์แนะนำ</h3>
                  <ul className="list-unstyled text-small">
                    <li>
                      <Link href="/">
                        <a>Link #1</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Link #2</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Link #3</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Link #4</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Link #5</a>
                      </Link>
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 offset-lg-1 d-none d-md-block">
              <img className="mb-4 img-fluid w-100 h-200px" src="/assets/ads/ads200x200.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="d-flex align-items-md-center flex-column flex-lg-row">
            <div className="text-center text-lg-left">
              <p className="mb-3 mb-md-0">© Copyright 2017 www.livescore-beta.com All rights reserved. Live Beta</p>
            </div>
            <div className="text-center text-lg-right ml-lg-auto">
              <ul className="nav nav-sm nav-white nav-x-sm align-items-center justify-content-center">
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Partners</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Contact Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Help</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};


Footer.propTypes = {

};


export default Footer;
