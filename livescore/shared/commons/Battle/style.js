import styled from "styled-components";

export const BattleStyle = styled.div`
    border: 0px solid #dee2e6 !important;
    @media (min-width: 768px) {
        border: 1px solid #dee2e6!important;
    }
    &.match-header {
        .team {
            /* font-size: 1.231rem; */
            > div {
                display: block;
                word-wrap: break-word;
                text-align: center;
            }
            .logo {
                margin-bottom: 0.3846rem;
                img {
                    width: 100%;
                }
            }
            .name {
                font-size: 16px;
                @media (min-width: 768px) {
                    font-size: 18px;
                    text-transform: uppercase;
                    line-height: 1.231rem;
                    font-weight: 800;
                }
            }
        }
        .col-4 {
            h1 {
                text-transform: uppercase;
                font-size: 16px;
                font-weight: 600;
                margin-top: 20px;
                margin-bottom: 30px;
                letter-spacing: 0.5px;
            }
        }
        .mscore {
            font-size: 48px;
            line-height: 48px;
            font-weight: 600;
            span {
                font-weight: 600;
                font-size: 30px;
                display: inline-block;
                vertical-align: top;
                margin: 0px 45px;
            }
        }
        .mtime {
            margin-top: 25px;
            display: block;
            font-size: 13px;
            opacity: 0.7;
        }
    }
    .score-date {
        color: #c4c4c4;
        text-align: center;
        padding: 0 0.3846rem;
        .score {
            font-weight: 800;
            margin-bottom: 0.3077rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .date-time {
            font-size: 0.7692rem;
            line-height: 0.9rem;
            font-weight: 400;
            text-transform: uppercase;
            @media (max-width: 1199px) {

            }
        }
        .versus {
            font-size: 2rem;
            color: ${({ theme }) => theme.colors.primary_dark};
            @media (min-width: 768px) {
                font-size: 2.6rem;
                line-height: 2.6rem;
            }
            @media (min-width: 992px) {
                font-size: 3.2rem;
                line-height: 3.2rem;
            }
            &:nth-child(1),
            &:nth-child(3) {
                color: ${({ theme }) => theme.colors.primary_dark};
                @media (min-width: 768px) {
                    color: ${({ theme }) => theme.colors.primary};
                }
            }
        }
    }
`;