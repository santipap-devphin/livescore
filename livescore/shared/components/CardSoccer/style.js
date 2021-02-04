import styled from "styled-components";

export const CardSoccerStyle = styled.div`
  .soccer__content {
    position: relative;
    overflow: hidden;
    z-index: 1;
    background: none!important;
  }
  .sr-bb .srt-base-1 {
    background-color: #fff;
    color: rgba(0,0,0,.82);
    border-color: rgba(0,0,0,.12);
    color: ${({ theme }) => theme.colors.light};
  }
  .pitch-soccer__container {
    /* padding-bottom: 61.97183%; */
    background-color: #5c8301;
    position: relative;
    overflow: hidden;
    z-index: 0;
    .pitch-soccer__spotlight {
      position: absolute;
      &.soccer-corner {
        background: -webkit-radial-gradient(ellipse closest-corner at 50% 50%,hsla(0,0%,100%,.12) 0 transparent 75%);
        background: radial-gradient(ellipse closest-corner at 50% 50%,hsla(0,0%,100%,.12) 0,transparent 75%);
        width: 15%;
        height: 15%;
      }
      &.soccer-center {
        left: 50%;
        top: 50%;
        width: 33%;
        height: 66%;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        background: -webkit-radial-gradient(ellipse closest-corner at 50% 50%,hsla(0,0%,100%,.1) 0,transparent 75%);
        background: radial-gradient(ellipse closest-corner at 50% 50%,hsla(0,0%,100%,.1) 0,transparent 75%);
      }
      &.corner-top {
        top: -5%;
      }
      &.corner-left {
        left: -5%;
      }
      &.corner-right {
        right: -5%;
      }
      &.corner-bottom {
        bottom: -5%;
        &.corner-right {
          transform: rotate(45deg);
        }
      }
      &.corner-top {
        &.corner-left {
          transform: rotate(45deg);
        }
      }
    }
    .pitch-soccer__stripes {
      position: absolute;
      left: 6.7%;
      right: 1.7%;
      top: 3%;
      bottom: 3%;
      background-image: -webkit-linear-gradient(left,hsla(0,0%,100%,.08) 50%,transparent 0);
      background-image: linear-gradient(90deg,hsla(0,0%,100%,.08) 50%,transparent 0);
      background-size: 14.575% 1%;
    }
    .pitch-soccer__noise {
      background-image: url("/assets/bg/pattern_soccer.png");
      color: 'orange';
      font-size: 22px;
    }
    .pitch-soccer__svg-container {
      background-image: url("/assets/bg/Soccer_field_-_empty.svg");
    }
  }
  @media (min-width: 768px) {
    white-space: pre-wrap;
  }
`;