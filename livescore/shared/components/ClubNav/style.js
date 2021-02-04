import styled from 'styled-components'

export const ClubNavStyle = styled.div`
    .text-title {
        text-transform: uppercase;
    }
    hr {
        border-top : 1px solid ${({ theme }) => theme.colors.gray}; ;
    }
    .h-100px {
        height: 100px;
    }
    .breadcrumb-nav {
        .breadcrumb {
            font-size : 0.8rem;
            padding:0;
            background-color: transparent;
            .breadcrumb-item {
                a {
                    color: ${({ theme }) => theme.colors.primary};
                    text-decoration: underline;
                }
            }
            .breadcrumb-item+.breadcrumb-item::before {
                content: ">";
            }
        }
    }
    .nav-overview {
        .nav {
            .nav-item {
                .active {
                    font-weight: 800;
                        border-bottom : 3px solid ${({ theme }) => theme.colors.primary};
                    }
            }
            .nav-link {
                    padding: .5rem 0.9rem;
                    color: ${({ theme }) => theme.colors.primary_dark};
                    @media (min-width: 768px) {
                        padding: .5rem 1rem;
                    }
                }
            }
    }
`;