import styled from "styled-components";

export const OverViewStatsTableStyle = styled.div`
    .table td, 
    .table th {
        vertical-align: middle !important;
        padding: 10px .75rem;
        word-break: break-all;
        white-space: nowrap;
        font-size: 14px;
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
                    &:nth-child(3),
                &:nth-child(4) {
                    width: 55px;
                }
                }
            }
        }
    }
    .discipline {
        .span-left {
            background-color: #FEB82D;
            color: #FFFFFF;
            padding-left: 8px;
            padding-right: 8px;
        }
        .span-right {
            background-color: #E74C5B;
            color: #FFFFFF;
            padding-left: 8px;
            padding-right: 8px;
        }
    }
`;