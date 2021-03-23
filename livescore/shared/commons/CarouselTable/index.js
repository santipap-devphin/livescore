import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Slider from "react-slick";
import LeagueTableFull from "../LeagueTableFull"
import {SliderStyle} from "./style"

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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

const CarouselTable = ({slideValues, className}) => {

  return (
    <SliderStyle {...settings}>
        {slideValues.map((matches, k) => {
          return (
          <LeagueTableFull 
            title={matches.title} 
            arrow={true} 
            matches={matches.match} 
            className={className}
            key={k.toString()}
          />
        )})}
    </SliderStyle>
  )
}
CarouselTable.propTypes = {
  slideValues: PropTypes.array.isRequired,
  className: PropTypes.string,
};
CarouselTable.defaultProps = {
};




export default CarouselTable
