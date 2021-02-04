import styled from "styled-components";

export const OverViewMatchesTableStyle = styled.div`
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
        th {
            background: ${({ theme }) => theme.colors.primary_dark};
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
    .btn-click {
        &:focus {
            outline: none;
            box-shadow: none;
        }
    }
    .react-datepicker-wrapper{
        .react-datepicker__input-container{
            input {
                background: ${({ theme }) => theme.colors.primary_dark};
                color: #FFFFFF;
                border-width: 0;
                cursor: pointer;
            }
        }
    }
    .btn-click {
        background: ${({ theme }) => theme.colors.primary_dark};
        color: #FFFFFF;
        border-width: 0;
    }
`;