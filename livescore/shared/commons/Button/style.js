import styled from "styled-components";

export const ButtonStyle = styled.button`
    display: flex;
    align-items: center;
    font-weight: 500;
    &.btn-outline-secondary {
        color: ${({ theme }) => theme.colors.primary_dark} !important;
        border-color: ${({ theme }) => theme.colors.gray} !important;
        &:hover {
            color: ${({ theme }) => theme.colors.white} !important;
            &.disabled,
            &:disabled {
                color: ${({ theme }) => theme.colors.primary_dark} !important;
            }
        }
    }
    &.bg-gray-300 {
        color: ${({ theme }) => theme.colors.primary_dark} !important;
        border-color: ${({ theme }) => theme.colors.gray} !important;
        background: ${({ theme }) => theme.colors.gray_300} !important;
        font-weight: 500;
        &:hover {
            color: ${({ theme }) => theme.colors.white} !important;
            &.disabled,
            &:disabled {
                color: ${({ theme }) => theme.colors.primary_dark} !important;
            }
        }
    }
    &.bg-light-btn {
        color: ${({ theme }) => theme.colors.primary_dark} !important;
        border-color: ${({ theme }) => theme.colors.light} !important;
        background: ${({ theme }) => theme.colors.light} !important;
        font-weight: 500;
        &:hover {
            color: ${({ theme }) => theme.colors.white} !important;
            &.disabled,
            &:disabled {
                color: ${({ theme }) => theme.colors.primary_dark} !important;
            }
        }
    }
    &.focus,
    &:focus {
        outline: 0;
        box-shadow: none;
    }
`;