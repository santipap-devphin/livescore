import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Slider from "react-slick";
import LeagueTable from "../LeagueTable"
import {SliderStyle} from "./style"
import Link from 'next/link'
import { AiOutlineCalendar, AiOutlineEye, AiOutlineShareAlt } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
        }
      }
    ]
};

const Carousel = ({slideValues, title, className}) => {
  return (
    <SliderStyle {...settings} className="d-none d-md-block">
        {slideValues.map((item, k) => (
          <figure className={className} key={k.toString()}>
            <img src={item.urlToImage} className="card-img-top" alt={item.title} />
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
        ))}
    </SliderStyle>
  )
}
Carousel.propTypes = {
  slideValues: PropTypes.array,
  className: PropTypes.string,
  title: PropTypes.string.isRequired
};
Carousel.defaultProps = {
};

export default Carousel
