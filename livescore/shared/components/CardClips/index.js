import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineCalendar, AiOutlineEye, AiOutlineShareAlt } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import Link from 'next/link'
import {CardClipsStyle} from "./style"

const CardClips = ({ className, grid, data }) => {
  return (
    <CardClipsStyle className={className}>
      {
        grid === true
          ?
          <div className="row mx-0">
            {
              data.map((item, index) => (
                <div className="col-6 mb-4" key={index.toString()}>
                  {/* <div className="single-blog-post bg-fffbf5">
                    <div className="post-image">
                      <a href="/blog-details">
                        <img src="/static/blog-img6-c4849c23f0f96fb9db3bb5a803625efa.jpg" alt="image" />
                      </a>
                    </div>
                    <div className="post-content">
                      <ul className="post-meta d-flex justify-content-between align-items-center">
                        <li>
                          <div className="post-author d-flex align-items-center">
                            <img src="/static/user3-d89e5759c382a5e0aae660cb3efcbd83.jpg" className="rounded-circle" alt="image" />
                            <span>David Warner</span>
                          </div>
                        </li>
                        <li>
                          <i className="flaticon-calendar" /> April7, 2020
                        </li>
                      </ul>
                      <h3>
                        <a href="/blog-details">
                          Business Data is changing the world’s Energy
                        </a>
                      </h3>
                    </div>
                  </div> */}

                  <div className="card">
                    {/* <a className="d-block" href="">
                      <span>
                        <img src={item.img} className="card-img-top" alt={item.title} />
                        <FaPlay />
                      </span>
                    </a> */}
                    <figure>
                      <img src={item.urlToImage} className="card-img-top" alt={item.titleurl} />
                      <figcaption>
                        <Link
                          href={{
                            pathname: `/highlight/[post]`,
                          }}
                          as={`/highlight/${item.title}`}
                        >
                          <a className="d-block">
                            <span className="play"><FaPlay /></span>
                          </a>
                        </Link>
                      </figcaption>
                    </figure>
                    <div className="card-body" style={{ background: "#F5F5F5" }}>
                      <Link
                          href={{
                            pathname: `/highlight/[post]`,
                          }}
                          as={`/highlight/${item.title}`}
                        >
                        <a className="d-block">
                            <h5 className="card-title h6">{item.titleurl}</h5>
                        </a>
                      </Link>
                      <p className="card-text small">
                        <AiOutlineCalendar className="h5" /> {item.publishedAt}
                        <AiOutlineEye className="h5" /> {item.view}
                        <AiOutlineShareAlt className="h5" /> {item.shared}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          : <>
            {
              data.map((item, index) => (
                <div className="card rounded-0 border-0 mb-3" style={{ background: "#F5F5F5" }} key={index.toString()}>
                  {/* <article className="item">
                    <a className="thumb" href="/blog-details/#">
                      <span className="fullimage cover bg1" role="img" />
                    </a>
                    <div className="info">
                      <span>June 10, 2020</span>
                      <h4 className="title usmall">
                        <a href="/blog-details/#">
                          The Data Surrounding Higher Education
                        </a>
                      </h4>
                    </div>
                    <div className="clear" />
                  </article> */}
                  {/* <div className="info-prev-link-wrapper">
                    <a href="/blog-details/#">
                      <span className="image-prev">
                        <img src="/static/blog-img11-c68f0a02520e8eec719089e360659e5e.jpg" alt="bb" />
                        <span className="post-nav-title">Prev</span>
                      </span>
                      <span className="prev-link-info-wrapper">
                        <span className="prev-title">What Is The MLB Summer Slugger Program?</span>
                        <span className="meta-wrapper">
                          <span className="date-post">January 21, 2020</span>
                        </span>
                      </span>
                    </a>
                  </div> */}

                  <div className="row no-gutters">
                    <div className="col-sm-4">
                      <figure>
                       
                        <iframe src={item.urlToImage} className="card-img-top" alt={item.titleurl}></iframe>
                        <figcaption>
                          <Link
                            href={{
                              pathname: `/highlight/[post]`,
                            }}
                            as={`/highlight/${item.title}`}
                          >
                            <a className="d-block">
                              <span className="play"><FaPlay /></span>
                            </a>
                          </Link>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-sm-8">
                      <div className="card-body video_content">
                        <Link
                          href={{
                            pathname: `/highlight/[post]`,
                          }}
                          as={`/highlight/${item.title}`}
                        >
                          <a className="d-block"><h2 className="title">{item.titleurl}</h2></a>
                        </Link>
                        <div className="video_content-editor d-flex align-items-center">
                          <AiOutlineCalendar className="mr-2" /> {item.publishedAt}
                          <AiOutlineEye className="mx-2" /> {item.view}
                          <AiOutlineShareAlt className="mx-2" /> {item.shared}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </>
      }
    </CardClipsStyle>
  );
};


CardClips.propTypes = {
  className: PropTypes.string,
};
CardClips.defaultProps = {
  className: "",
  grid: true
};

export default CardClips;
