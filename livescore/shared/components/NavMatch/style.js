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
    border-right: 1px solid #cccccc;
    background: ${({ theme }) => theme.colors.white};
    @media (min-width: 768px) {
      font-size: 18px;
    }
    
    .nav-link {
      padding: .5rem .5rem;
      color: ${({ theme }) => theme.colors.primary_dark};
      @media (min-width: 768px) {
        padding: .5rem 1rem;
      }
    }
    &.active {
      background: #710000;
      background: -moz-linear-gradient(0deg, #710000 0%, #af0000 100%);
      background: -webkit-linear-gradient(0deg, #710000 0%, #af0000 100%);
      background: linear-gradient(0deg, #710000 0%, #af0000 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#710000",endColorstr="#af0000",GradientType=1);
      .nav-link {
        color: #ffffff;
      }
    }
  }
`;