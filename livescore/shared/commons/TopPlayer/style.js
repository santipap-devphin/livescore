import styled from "styled-components";

export const TopPlayerStyle = styled.div`
    .table td, 
    .table th {
        vertical-align: middle !important;
        padding: 5px 5px;
        word-break: break-all;
        white-space: nowrap;
        font-size: 12px;
        @media (min-width: 768px) {
            white-space: pre-wrap;
        }
    }
    .table {
        caption {
            background: #606060;
            caption-side: top;
            padding-left: .75rem;
            padding-right: .75rem;
            font-size: 16px;
        }
        th {
            background: #C3C3C3;
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
                    &:nth-child(1) {
                        width: 55px;
                    }
                    &:nth-child(3),
                    &:nth-child(4) {
                        width: 55px;
                    }
                }
            }
        }
    }
`;