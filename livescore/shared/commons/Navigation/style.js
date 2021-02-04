import styled from "styled-components";

export const NavigationStyle = styled.nav`
    &.bd-links {
        overflow: hidden;
        &.collapse {
            display: block !important;
        }
    }
    .bd-toc-link {
        display: block;
        padding: .45rem 1.5rem;
        font-weight: 600;
    }
    .bd-sidenav {
        @media (min-width: 768px) {
            overflow-y: auto;
        }
        @media (min-width: 768px) {
            max-height: calc(100vh - 10rem);
        }
        li {
            background: #F5F5F5;
            border-bottom: 1px solid #E3E3E3;
            width: 100%;
            display: block;
            padding: 8px 15px;
            &:last-child {
                border-bottom: 0px solid #E3E3E3;
            }
            a {
                color: #707070;
                &:hover {
                    text-decoration: none;
                }
            }
        }
    }
`;