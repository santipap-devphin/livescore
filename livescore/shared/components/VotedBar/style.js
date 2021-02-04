import styled from "styled-components";

export const VotedBarStyle = styled.div`
    .attendance {
        width: 100%;
        height: 260px;
        @media (min-width: 768px) {
            width: 100px;
        }
    }
    
    .attendance-bar {
        float: left;
        width: 100%;
        margin: 0px;
        height: 260px;
        // background-color: #2f2f2f;
        position: relative;
    }
    .attendance-cage-css {
        width: 100%;
        float: left;
        background-color: ${({ theme }) => theme.colors.gray};
        // height: 0;
        position: absolute;
        bottom: 0px;
        z-index: 1;
        left: 0;
        @media (min-width: 768px) {
            width: 100px;
        }
    }
    .attendance-percent {
        margin-top: -35px;
        color: ${({ theme }) => theme.colors.primary_dark};
    }
    .title {
        width: 100%;
        background: #F5F5F5;
        margin: 0 auto;
        padding: 10px;
        white-space: pre-line;
        text-align: center;
        font-size: 12px;
        @media (min-width: 768px) {
            width: 100px;
            font-size: 16px;
        }
    }
`;