import styled from 'styled-components'

export const HeaderStyle = styled.header`
    .navbar {
        background-color: ${({ theme }) => theme.colors.black};
        @media (min-width: 768px) {
            background-color: ${({ theme }) => theme.colors.white};
        }
    }
    .navbar-nav {
        .nav-item {
            &.active {
                .nav-link {
                    font-weight: 400;
                    @media (min-width: 768px) {
                        font-weight: 500;
                        color: ${({ theme }) => theme.colors.black};
                    }
                }
            }
            a {
                color: ${({ theme }) => theme.colors.white}; 
                @media (min-width: 768px) {
                    color: ${({ theme }) => theme.colors.primary_dark};
                } 
                &:hover {
                    @media (min-width: 768px) {
                        color: ${({ theme }) => theme.colors.black} !important;
                    }
                }
            }
            .nav-link {
                font-weight: 300;
                @media (min-width: 768px) {
                    font-weight: 400;
                }
                &:hover {
                    @media (min-width: 768px) {
                        color: ${({ theme }) => theme.colors.black} !important;
                    }
                }
            }
        }
    }
    .navbar-toggler {
        border: 0;
        color: ${({ theme }) => theme.colors.white};
        .navbar-toggler-icon {
            color: ${({ theme }) => theme.colors.white}; 
        }
        &:focus {
            outline: none;
            box-shadow: none;
        }
    }
    .navbar-brand {
        color: ${({ theme }) => theme.colors.white};
        @media (min-width: 768px) {
            color: ${({ theme }) => theme.colors.primary_dark}; 
        }
    }
    li.nav-item.active a {
        @media (min-width: 768px) {
            color: ${({ theme }) => theme.colors.black};
        }
    }
    .navbar-collapse {
        &.show {
            position: absolute;
            display: block;
            width: 100%;
            z-index: 2;
            background: #363636;
            top: 56px;
            left: 0;
            padding: 15px;
        }
    }
`;