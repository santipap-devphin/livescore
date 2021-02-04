import styled from "styled-components";

export const ContentFooterPostStyle = styled.div`
  .post-next-prev-content {
    color: ${({ theme }) => theme.colors.primary_dark};
    border: 1px solid ${({ theme }) => theme.colors.gray};
    padding: .5rem 1rem;
    &.disabled {
      a {
        opacity: .65;
        cursor: default;
        &:hover {
          color: ${({ theme }) => theme.colors.primary_dark};
        }
      }
    }
  }
`;