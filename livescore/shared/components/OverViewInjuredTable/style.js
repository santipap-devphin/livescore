import styled from "styled-components";

export const OverViewInjuredTableStyle = styled.div`
    .table td, 
    .table th {
        vertical-align: middle !important;
        padding: 10px .75rem;
        word-break: break-all;
        white-space: nowrap;
        font-size: 14px;
    }
    .table {
        margin-bottom: 1.5rem;
        caption {
            background: #606060;
            caption-side: top;
            padding-left: .75rem;
            padding-right: .75rem;
            font-size: 16px;
        }
        th {
            background: ${({ theme }) => theme.colors.primary};
            color: #FFFFFF;
            &:nth-child(3),
            &:nth-child(4) {
                width: 55px;
            }
        }
        tbody {
            tr {
                padding: 10px 5px;
                td {
                    font-weight: 400;
                    &:nth-child(3),
                    &:nth-child(4) {
                        width: 55px;
                    }
                }
                &:nth-of-type(odd) {
                    background-color: ${({ theme }) => theme.colors.white};
                }
                &:nth-of-type(even) {
                    background-color: rgba(0,0,0,.05);
                }
            }
        }
    }
`;