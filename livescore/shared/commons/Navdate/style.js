import styled from "styled-components";

export const NavDateStyle = styled.div`
  &.nav-pills {
    .nav-link {
      text-align: center;
      position: relative;
      color: #aaaaaa !important;
      @media (min-width: 768px) {
        color: ${({ theme }) => theme.colors.primary_dark};
      }
      &.active {
        color: ${({ theme }) => theme.colors.primary_dark} !important;
        background: ${({ theme }) => theme.colors.gray}!important;
        font-weight: 500;
        @media (min-width: 768px) {
          /* color: #AAAAAA !important; */
          color: ${({ theme }) => theme.colors.white} !important;
          background-color: ${({ theme }) =>
            theme.colors.primary_dark} !important;
          font-weight: 400;
        }
        &:after {
          content: "";
          width: 100%;
          height: 2px;
          display: block;
          background-color: ${({ theme }) =>
            theme.colors.primary_dark} !important;
          bottom: 0;
          position: absolute;
          left: 0;
          @media (min-width: 768px) {
            display: none;
          }
        }
      }
    }
    .show {
      > .nav-link {
        color: ${({ theme }) => theme.colors.primary_dark} !important;
        background: ${({ theme }) => theme.colors.gray}!important;
        @media (min-width: 768px) {
          color: #aaaaaa !important;
          background-color: #606060 !important;
        }
      }
    }
    /* .nav-pills .nav-link.active, .nav-pills .show>.nav-link */
  }
`;
