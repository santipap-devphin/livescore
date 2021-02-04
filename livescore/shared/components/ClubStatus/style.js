import styled from 'styled-components'

export const ClubStatusStyle = styled.div`
  color: #81878b;
  .team-title {
    background: #6F6F6F;
    color: ${({ theme }) => theme.colors.white};
  }
  ul {
    padding-left: 0;
    display: flex;
  }
  li {
    width: calc(100% / 4);
    text-align: center;
    display: inline-block;
    font-size: 18px;
    border-right: solid 1px #9D9D9D;
    background: #939393;
    color: ${({ theme }) => theme.colors.white};
    padding: 6px 6px;
    font-weight : 300;
    @media (min-width: 768px) {
      font-size: 13px;
    }
    @media (min-width: 992px) {
      font-size: 18px;
    }
    &:last-child {
      border: none; 
    }
    span {
      display: block;
      text-transform: capitalize;
      font-size: 12px;
      font-weight: 300;
      height: 36px;
      vertical-align: middle;
    }
  }
`;