import styled from "styled-components";
import Slider from "react-slick";

export const CarouselTableMobileStyle = styled(Slider)`
  // display: block;
  // @media (min-width: 768px) {
  //   display: none;
  // }
  .slick-prev, 
  .slick-next {
    position: absolute;
    top: 0;
    width: 30px;
    height: 48px;
    z-index: 1;
    color: #000000;
    font-size: 20px;
    line-height: normal;
    transform: translate(0, 0);
    &:before {
      color: #000000;
      font-size: 30px;
      content: "";
    }
    @media (min-width: 768px) {
      height: 48px;
      top: 0;
      left: 0;
    }
    @media (min-width: 992px) {
      top: 0px;
      height: 48px;
    }
  }
  .slick-prev {
    left: 0;
    padding: 0 10px;
  }
  .slick-next {
    right: 0;
    left: auto;
  }
`;