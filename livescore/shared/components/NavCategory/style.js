import styled from "styled-components";

export const NavCategoryStyle = styled.div`
  background: ${({ theme }) => theme.colors.light};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
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