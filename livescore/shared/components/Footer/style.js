import styled from 'styled-components'

export const FooterStyle = styled.footer`
  .footer-top {
    padding: 60px 0 20px 0;
    text-align: left;
 /*    box-shadow: 0 0.5rem 1.3rem #afafaf, inset 0 0px 0 #afafaf; */
    margin-top: 10px;
    border-top: 1px solid #222222;
    // color: #fff;
    // color: rgba(255, 255, 255, 0.8);
    @media (min-width: 768px) {
      padding: 60px 0;
      margin-top: 40px;
    }
  }
  .footer-bottom {
    padding: 25px 0 15px 0;
    background: #222222;
    text-align: left;
    // color: #aaa;
    font-size: 15px;
    @media (min-width: 768px) {
      font-size: 16px;
      padding: 15px 0 17px 0;
    }
  }
  .footer-content {
    padding-bottom: 30px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
    margin-bottom: 30px;
    @media (min-width: 768px) {
      padding-bottom: 0px;
      border-bottom: 0;
      margin-bottom: 0px;
    }
    &.sitemaps {
      ul {
        display: inline-block;
        li {
          position: relative;
          display: inline-block;
          padding: 0 10px;
          margin-bottom: 10px;
          @media (min-width: 768px) {
            margin-bottom: 0;
            display: block;
          }
          &:after {
            content: "";
            display: block;
            position: absolute;
            width: 1px;
            height: 100%;
            background: ${({ theme }) => theme.colors.primary_dark};
            top: 0;
            right: 0;
            @media (min-width: 768px) {
              display: none;
            }
          }
          &:last-child {
            &:after {
              display: none;
            }
          }
        }
      }
    }
  }
`;