import styled from "styled-components";

export const ChampionsLeagueTableStyle = styled.div`
    position: relative;
    overflow: hidden;
    font-size: 14px;
    .table td, 
    .table th {
        vertical-align: middle !important;
        padding: 5px 10px;
        word-break: break-all;
        // white-space: nowrap;
        font-size: 12px;
        @media (min-width: 768px) {
           font-size: 11px; 
        }
        @media (min-width: 992px) {
           font-size: 12px; 
        }
    }
    .table {
        caption {
            background: #606060;
            caption-side: top;
            padding-left: .75rem;
            padding-right: .75rem;
        }
        th {
            background: ${({ theme }) => theme.colors.primary_dark};
            color: #FFFFFF;
            font-weight: 300;
            border: 1px solid #575757;
            &:nth-child(2),
            &:nth-child(3),
            &:nth-child(4) {
                width: 40px;
            }
        }
        tbody {
            tr {
                td {
                    &:nth-child(1) {
                        padding: 0px;
                        .w-35px {
                            padding: 5px 5px;
                            width: 35px;
                            border-right: 1px solid #dee2e6;
                        }
                    }
                }
                &:nth-child(1) {
                    td {
                        &:nth-child(1) {
                            border-left: 0px solid #dee2e6;
                            .w-35px {
                                background: ${({ theme }) => theme.colors.primary_dark};
                                color: ${({ theme }) => theme.colors.white};
                                border-right: 1px solid #575757;
                                border-bottom: 1px solid #575757;
                            }
                        }
                    }
                }
                &:nth-child(2) {
                    td {
                        &:nth-child(1) {
                            .w-35px {
                                background: ${({ theme }) => theme.colors.primary};
                                color: ${({ theme }) => theme.colors.secondary};
                            }
                        }
                    }
                }
                &:nth-child(3) {
                    td {
                        &:nth-child(1) {
                            .w-35px {
                                background: ${({ theme }) => theme.colors.gray};
                                color: ${({ theme }) => theme.colors.secondary};
                            }
                        }
                    }
                }
                &:nth-child(18),
                &:nth-child(19),
                &:nth-child(20) {
                    td {
                        &:nth-child(1) {
                            background: ${({ theme }) => theme.colors.gray};
                            color: ${({ theme }) => theme.colors.secondary};
                        }
                    }
                }
            }
        }
        .league-name {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            box-sizing: border-box;
            width: 100%;
            display: inline-block;
            line-height: 1;
            position: relative;
            vertical-align: middle;
        }
    }
`;