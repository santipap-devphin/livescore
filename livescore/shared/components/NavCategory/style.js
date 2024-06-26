import styled from "styled-components";

export const NavCategoryStyle = styled.div`
  background: #333333;
  
  &.category {
    ul {
      li {
        a {
          padding: 10px 15px;
          &.active {
            color: ${({ theme }) => theme.colors.primary_dark};
            background: ${({ theme }) => theme.colors.gray};
          }
        }
      }
    }
  }
`;