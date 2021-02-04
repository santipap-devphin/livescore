import styled from "styled-components";
import Slider from "react-slick";

export const SliderStyle = styled(Slider)`
  margin-bottom: 30px;
  margin-top: 20px;
  .thumb, figure {
    // float: left;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  figure {
    position: relative;
    z-index: 999;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    line-height: unset;
    overflow: hidden;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    height: 100%;
    width: 100%;
    /* height: 400px; */
    /* &.h-400 {
      height: 400px;
    } */
    img {
      display: block;
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }
  } 
  figcaption {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    a {
      font-size: 60px;
      line-height: 20px;
      margin: auto;
      text-align: center;
      color: #fff;
      z-index: 9999;
      opacity: 1;
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
  .play {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  h5 {
    font-size: 18px;
  }
  .slick-dots {
    bottom: -5px;
    li {
      button {
        &:before {
          font-size: 10px;
        }
      }
    }
  }
  .slick-prev, 
  .slick-next {
    position: absolute;
    top: 50%;
    z-index: 1;
    width: 30px;
    height: 30px;
    transform: translateY(-50%);
    @media (min-width: 992px) {
      top: 16px;
    }
    @media (min-width: 768px) {
      height: 70px;
      top: 35px;
    }
    &:before {
      font-size: 30px;
    }
  }
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 0;
  }
`;