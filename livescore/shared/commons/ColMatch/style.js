import styled from "styled-components";

export const ColMatchStyle = styled.div`
  flex: 1 1 0%;
  .info {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    flex: 1 1 0%;
    .circle {
      display: flex;
      height: 2rem;
      width: 2rem;
      -webkit-box-pack: center;
      justify-content: center;
      font-weight: 700;
      -webkit-box-align: center;
      align-items: center;
      font-size: 0.75rem;
      position: relative;
      background-color: rgb(173, 89, 0);
      border-radius: 9999px;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(255, 255, 255);
      border-image: initial;
    }
  }
  .name {
    display: flex;
    font-size: 0.68rem;
    color: rgb(255,255,255);
    text-align: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 0.25rem;
    text-shadow: black 1px 1px;
  }
`;