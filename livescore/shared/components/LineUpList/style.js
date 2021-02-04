import styled from "styled-components";

export const LineUpListStyle = styled.div`
  padding: 5px;
  border-left: 1px solid ${({ theme }) => theme.colors.light};
  border-right: 1px solid ${({ theme }) => theme.colors.light};
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  &:last-child {
    
  }
  .time {
    font-size: 11px;
    @media (min-width: 375px) {
      font-size: 14px;
    }
    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
  .home {
    font-size: 11px;
    @media (min-width: 375px) {
      font-size: 14px;
    }
    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
  .center {
    font-size: 11px;
    @media (min-width: 375px) {
      font-size: 14px;
    }
    @media (min-width: 768px) {
      font-size: 16px;
    }
    .top {
      width: 100%;
      display: flex;
      .score {
        width: calc(100% / 2);
        text-align: center;
      }
      .card-match {
        width: 25%;
        img {
          width: 24px;
          max-width: 100%;
        }
      }
    }
  }
  .away {
    font-size: 11px;
    @media (min-width: 375px) {
      font-size: 14px;
    }
    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
`;