import styled from "styled-components";

export const SevenColCupsStyle = styled.div`
  .seven-cols .col-md-1,
  .seven-cols .col-sm-1,
  .seven-cols .col-lg-1  {
    flex: 0 0 50%;
    max-width: 50%;
    @media (min-width: 540px) {
      flex: 0 0 calc(100% / 2);
      max-width: calc(100% / 2);
    }
    @media (min-width: 768px) {
      flex: 0 0 calc(100% / 3);
      max-width: calc(100% / 3);
    }
    @media (min-width: 992px) {
      flex: 0 0 calc(100% / 4);
      max-width: calc(100% / 4);
    }
    @media (min-width: 1100px) {
      flex: 0 0 calc(100% / 7);
      max-width: calc(100% / 7);
    }
    span {
      font-size: 100%;
      @media (min-width: 768px) {
        font-size: 100%;
      }
      @media (min-width: 992px) {
        font-size: 80%;
      }
    }
  }
`;