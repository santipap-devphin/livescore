import styled from "styled-components";

export const PlyrStyle = styled.div`
  .plyr__control {
    padding: calc(var(--plyr-control-spacing,10px) * .7);
    @media (min-width: 400px) {
      padding: calc(var(--plyr-control-spacing,10px) * .7);
    }
  }
  .plyr__controls {
    .plyr__controls__item {
      &.plyr__time {
        display: none;
        @media (min-width: 400px) {
          display: block;
        }
      }
      &.plyr__time--duration {
        &.plyr__time {
          display: none;
          @media (min-width: 400px) {
            display: block;
          }
        }
      }
      &.plyr--full-ui.plyr--video {
        &.plyr__control--overlaid {
          @media (min-width: 400px) {
            padding: calc(var(--plyr-control-spacing,20px) * .7);
          }
        }
      }
    }  
  }
  .video_content {
    background: ${({ theme }) => theme.colors.light};
    h2 {
      font-size: 14px;
      @media (min-width: 375px) {
        font-size: 16px;
      }
      @media (min-width: 400px) {
        font-size: 18px;
      }
      @media (min-width: 768px) {
        font-size: 1.25rem;
      }
    }
    &-editor {
      font-size: 12px;
      font-weight: 400;
      @media (min-width: 375px) {
        font-size: 16px;
      }
    }
  }
`;