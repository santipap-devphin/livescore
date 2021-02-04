import styled from "styled-components";

export const MatchLineUpStyle = styled.div`
  border-bottom: 0px solid ${({ theme }) => theme.colors.light};

  .pitch-soccer-wrapper {
    background-color: rgb(72, 107, 61);
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    .teamInfo {
      display: flex;
      color: rgb(255, 255, 255);
      -webkit-box-pack: justify;
      justify-content: space-between;
      text-shadow: black 1px 1px;
      .name {
        font-weight: 900;
      }
    }
  }
  .pitch-soccer {
    position: relative;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    height: 708px;
    overflow: hidden;
    border-width: 4px;
    border-style: solid;
    border-color: rgb(136, 179, 122);
    border-image: initial;
    background: repeating-linear-gradient(rgb(88, 150, 68), rgb(88, 150, 68) 10%, rgb(82, 139, 64) 10%, rgb(82, 139, 64) 20%);
    .homeForm,
    .awayForm {
      display: flex;
      position: absolute;
      z-index: 20;
      flex-direction: column;
      justify-content: space-around;
      width: 100%;
      height: 50%;
      padding: 0.5rem;
    }
    .awayForm {
      top: 50%;
    }
  }
  .homeForm {
    .goalkeeper {
      .info {
        .circle {
          background-color: rgb(0, 0, 89);
        }
      }
    }
  }
  .awayForm {
    .goalkeeper {
      .info {
        .circle {
          background-color: rgb(89, 0, 0);
        }
      }
    }
    .info {
      .circle {
        background-color: rgb(33,33,33);
      }
    }
  }
  
  .formRow {
    display: flex;
    align-items: flex-start;
    color: rgb(255,255,255);
  }

  .soccer-front,
  .soccer-center-b,
  .soccer-back {
    flex: 1 1 0%;
  }
  .back {
    .info {
      .circle {
        background-color: rgb(33,33,33);
      }
    }
  }
  
  .circle {
    .sub {
      position: absolute;
      bottom: -5px;
      right: -3px;
      .soccer-sub-out {
        width: 12px;
        height: 12px;
        background-image: url("/assets/red-arrow-transparent-png-20.png");
        background-size: cover;
      }
    }
    span.goal {
      top: -5px;
      left: -5px;
      position: absolute;
    }
    .card {
      position: absolute;
      background: transparent;
      border: none;
      right: -5px;
      top: -5px;
      .soccer-yellow-cards,
      .soccer-red-cards {
        width: 12px;
        height: 16px;
      }
      .soccer-yellow-cards {
        background-image: url("/assets/cards/788px-Yellow_card.png");
        background-size: cover;
      }
      .soccer-red-cards {
        background-image: url("/assets/cards/591px-Red_card.png");
        background-size: cover;
      }
    }
  }
  .goalkeeper {
    flex: 1 1 0%;
  }
  .soccer-goal {
    width: 12px;
    height: 12px;
    background-image: url("/assets/football.png");
    background-size: contain;
    position: absolute;
    background-color: #FFF;
    border-radius: 50%;
  }
  .corners {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    div {
      position: absolute;
      width: 2.5rem;
      height: 2.5rem;
      border-width: 4px;
      border-style: solid;
      border-color: rgb(136, 179, 122);
      border-image: initial;
      border-radius: 9999px;
    }
    .tl {
      top: -20px;
      left: -20px;
    }
    .tr {
      top: -20px;
      left: calc(100% + -20px);
    }
    .br {
      bottom: -20px;
      left: calc(100% + -20px);
    }
    .bl {
      bottom: -20px;
      left: -20px;
    }
  }
  .centerLine {
    position: absolute;
    width: 100%;
    top: calc(50% - 2px);
    border-width: 2px;
    border-style: solid;
    border-color: rgb(136, 179, 122);
    border-image: initial;
  }
  .centerSpot {
    position: absolute;
    width: 0.75rem;
    height: 0.75rem;
    background-color: rgb(136, 179, 122);
    left: calc(50% - 0.375rem);
    top: calc(50% - 0.375rem);
    border-radius: 9999px;
  }
  .centerCircle {
    position: absolute;
    width: 6rem;
    height: 6rem;
    left: calc(50% - 3rem);
    top: calc(50% - 3rem);
    border-radius: 9999px;
    border-width: 4px;
    border-style: solid;
    border-color: rgb(136, 179, 122);
    border-image: initial;
  }
  .line-goal {
    position: absolute;
    z-index: 19;
    width: 50%;
    background-color: rgb(82, 139, 64);
    left: calc(25%);
    height: 10%;
    border-style: solid solid solid;
    border-color: rgb(136, 179, 122) rgb(136, 179, 122) rgb(136, 179, 122);
    border-image: initial;
    &.goal-top {
      top: 0px;
      border-width: 0px 4px 4px;
      border-top: 0px;
    }
    &.goal-bottom {
      bottom: 0px;
      border-width: 4px 4px 0px;
      border-bottom: 0px;
    }
    .goal {
      position: absolute;
      height: 1.5rem;
      width: 50%;
      left: calc(25%);
      border-width: 4px;
      border-style: solid;
      border-color: rgb(136, 179, 122);
      border-image: initial;
    }
    .bottom.goal {
      bottom: 0;
      border-bottom: 0px;
    }
    .top.goal {
      top: 0px;
      border-top: 0px;
    }
  }
  .curve-top {
    position: absolute;
    left: 37.5%;
    width: 25%;
    height: 3rem;
    top: 2.5rem;
    border-width: 0px 4px 4px;
    border-style: solid;
    border-color: rgb(136, 179, 122);
    border-image: initial;
    border-radius: 0px 0px 50% 50%;
  }
  .curve-bottom {
    position: absolute;
    left: 37.5%;
    width: 25%;
    height: 3rem;
    bottom: 2.5rem;
    border-width: 4px 4px 0px;
    border-style: solid;
    border-color: rgb(136, 179, 122);
    border-image: initial;
    border-radius: 50% 50% 0px 0px;
  }
`;