import styled from "styled-components";

export const TableBattleMobileStyle = styled.div`
  .block-title {
    letter-spacing: 1px;
    position: relative;
    padding: 10px 15px;
    text-transform: uppercase;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.primary_dark};
    display: flex;

  }
  &.league-matches {
    .league-matches-list {
      a {
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
        border-left: 1px solid ${({ theme }) => theme.colors.gray};
        border-right: 1px solid ${({ theme }) => theme.colors.gray};
      }
    }
  }
  .league-matches-list_name {
    p {
        font-size: 14px;
        @media (min-width: 376px) {
          font-size: 16px;
        }
      }
    }
  }
  &.highlight {
    .league-matches-list {
      .league-matches-item {
        &:first-child {
          background: ${({ theme }) => theme.colors.white};
        }
        &:nth-child(2) {
          background: #DBDBDB;
        }
        &:nth-child(3) {
          background: ${({ theme }) => theme.colors.light};
        }
      }
    }
  }
  @media (min-width: 768px) {
    
  }
`;