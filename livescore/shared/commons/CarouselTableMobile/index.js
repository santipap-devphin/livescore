import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import ChampionsLeagueTableMobile from "../ChampionsLeagueTableMobile"
import {CarouselTableMobileStyle} from "./style"
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <IoMdArrowDropright />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <IoMdArrowDropleft />
    </div>
  );
}

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

const CarouselTableMobile = ({slideValues, className}) => {
  return (
    <CarouselTableMobileStyle {...settings}>
        {slideValues.map((matches, k) => {
         
          return (
          <ChampionsLeagueTableMobile 
            title={matches.title} 
            arrow={true} 
            matches={matches.match} 
            className={className}
            key={k.toString()}
          />
          )})}
    </CarouselTableMobileStyle>
  )
}
CarouselTableMobile.propTypes = {
  slideValues: PropTypes.array.isRequired,
  className: PropTypes.string,
};
CarouselTableMobile.defaultProps = {
};

export default CarouselTableMobile
