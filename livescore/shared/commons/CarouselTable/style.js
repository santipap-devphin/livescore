import styled from "styled-components";
import Slider from "react-slick";

export const SliderStyle = styled(Slider)`
  .slick-prev, 
  .slick-next {
    position: absolute;
    top: 16px;
    width: 30px;
    height: 30px;
    z-index: 1;
    &:before {
      content: "";
    }
    @media (min-width: 768px) {
      height: 70px;
      top: 35px;
      left: 0;
    }
    @media (min-width: 992px) {
      top: 16px;
      height: 40px;
    }
  }
  .slick-prev {
    left: 0;
    @media (min-width: 768px) {
      height: 40px;
      top: 15px;
    }
  }
  .slick-next {
    left: 195px;
    @media (max-width: 320px) {
      left: 145px;
    }
    @media (min-width: 414px) {
      left: 235px;
    }
    @media (min-width: 768px) {
      height: 50px;
      top: 22px;
      left: auto;
      right: 70px;
    }
    @media (min-width: 1024px) {
      height: 40px;
      left: auto;
      right: 95px;
    }
  }
`;