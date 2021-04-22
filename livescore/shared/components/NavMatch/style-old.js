import styled from "styled-components";

export const NavMatchStyle = styled.ul`
  display: flex;
  flex-flow: row wrap;
  &.border-bottom {
    border-color: 1px solid ${({ theme }) => theme.colors.gray};
  }
  .nav-item {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    font-size: 14px;
    background: ${({ theme }) => theme.colors.white};
    @media (min-width: 768px) {
      font-size: 18px;
    }
    &.active {
      background: ${({ theme }) => theme.colors.light};
    }
    .nav-link {
      padding: .5rem .5rem;
      color: ${({ theme }) => theme.colors.primary_dark};
      @media (min-width: 768px) {
        padding: .5rem 1rem;
      }
    }
  }
`;