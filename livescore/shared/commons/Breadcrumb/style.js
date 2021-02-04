import styled from "styled-components";

export const BreadcrumbStyle = styled.div`
  .breadcrumb-item + .breadcrumb-item {
    padding-left: 0rem;
    @media (min-width: 768px) {
      padding-left: .5rem;
    }
    &:first-child::before {
      display: inline-block;
      padding-right: .5rem;
      color: #6c757d;
      content: "";
    }
    &::before {
      display: inline-block;
      padding-right: .5rem;
      color: #6c757d;
      content: ">";
    }
  }
`;