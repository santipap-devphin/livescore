import styled from "styled-components";

export const ChampionsLeagueTableMobileStyle = styled.div`
    position: relative;
    overflow: hidden;
    font-size: 14px;
    .table td, 
    .table th {
        vertical-align: middle !important;
        padding: 5px 10px;
        word-break: break-all;
        // white-space: nowrap;
        font-size: 14px;
    }
    .table {
        margin-bottom: 0;
        caption {
            background: ${({ theme }) => theme.colors.gray};
            caption-side: top;
            padding-left: .75rem;
            padding-right: .75rem;
            text-align: center;
            font-size: 16px;
            color: ${({ theme }) => theme.colors.primary_dark};
        }
        thead {
            tr {
                
            }
        }
        th {
            background: ${({ theme }) => theme.colors.primary_dark};
            color: ${({ theme }) => theme.colors.white};
            font-weight: 300;
            border: 1px solid #575757;
            &:nth-child(2) {

            }
            &:nth-child(1) {
                width: 40px;
            }
            &:nth-child(3),
            &:nth-child(4),
            &:last-child {
                width: 45px;
                max-width: 45px;
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
                            border-left: 1px solid ${({ theme }) => theme.colors.primary_dark};
                            border-right: 1px solid ${({ theme }) => theme.colors.primary_dark};
                            border-bottom: 1px solid ${({ theme }) => theme.colors.primary_dark};
                            background: ${({ theme }) => theme.colors.primary_dark};
                            color: ${({ theme }) => theme.colors.white};
                        }
                    }
                }
                &:nth-child(2) {
                    td {
                        &:nth-child(1) {
                            background: ${({ theme }) => theme.colors.primary};
                            color: ${({ theme }) => theme.colors.secondary};
                            border-left: 1px solid ${({ theme }) => theme.colors.primary};
                            border-right: 1px solid ${({ theme }) => theme.colors.primary};
                            border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
                        }
                    }
                }
                &:nth-child(3) {
                    td {
                        &:nth-child(1) {
                            background: ${({ theme }) => theme.colors.gray};
                            color: ${({ theme }) => theme.colors.secondary};
                            border-left: 1px solid ${({ theme }) => theme.colors.gray};
                            border-right: 1px solid ${({ theme }) => theme.colors.gray};
                            border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
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
        .league-lower{
            background: ${({ theme }) => theme.colors.gray};
            color: ${({ theme }) => theme.colors.secondary};
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