import styled from "styled-components";

export const CardClipsStyle = styled.div`
  .thumb, figure {
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  figure {
    position: relative;
    z-index: 999;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    line-height: unset;
    overflow: hidden;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    height: 100%;
    width: 100%;
    /* height: 220px; */
    /* @media (min-width: 768px) {
      height: 150px;
    } */
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  figcaption {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    a {
      font-size: 24px;
      line-height: 20px;
      margin: auto;
      text-align: center;
      color: #fff;
      z-index: 9999;
      opacity: 1;
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
  .play {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  h5 {
    font-size: 18px;
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
  // new 
  img {
    max-width: 100%;
    height: auto;
  }
  .bg-fffbf5 {
    background-color: #fffbf5;
  }
  .single-blog-post {
    margin-bottom: 30px;
    background-color: #fff;
    transition: .5s;
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 2px 28px 0 rgba(0,0,0,.09);
    }  
    &.bg-fffbf5 {
      background-color: #fffbf5;
    }
    .post-image {
      border-radius: 5px 5px 0 0;
      a {
        display: block;
        border-radius: 5px 5px 0 0;
        img {
          border-radius: 5px 5px 0 0;
          width: 100%;
        }
      }
    }
    .post-content {
      padding: 25px;
      @media only screen and (max-width: 767px) {
        padding: 20px;
      }
      @media only screen and (max-width: 1199px) and (min-width: 992px) {
        padding: 20px;
      }
      .post-meta {
        list-style-type: none;
        padding-left: 0;
        margin-bottom: 18px;
        margin-left: -7px;
        margin-right: -7px;
        li {
          color: #6b6b84;
          font-size: 15px;
          position: relative;
          padding-left: 29px;
          padding-right: 7px;
          @media only screen and (max-width: 767px) {
            font-size: 14px;
            padding-left: 28px;
            padding-right: 0;
          }
          @media only screen and (max-width: 1199px) and (min-width: 992px) {
            font-size: 11px;
          }
          &:first-child {
            padding-left: 7px;
          }
          .single-blog-post .post-content .post-meta li i {
            color: #ff5d22;
            position: absolute;
            left: 7px;
            top: 0;
          }
        }
      }
    }
  }
  // new holizon
  article {
    display: block;
  }
  .item {
    overflow: hidden;
    margin-bottom: 15px;
    .thumb {
      float: left;
      height: 80px;
      overflow: hidden;
      display: block;
      position: relative;
      width: 80px;
      margin-right: 15px;
      z-index: 1;
      &:before {
        width: 40px;
        height: 1px;
        left: 100%;
      }
      &:after {
        height: 40px;
        width: 1px;
        top: 0;
      }
      .fullimage {
        width: 80px;
        height: 80px;
        display: inline-block;
        border-radius: 5px;
        background-size: cover!important;
        background-repeat: no-repeat;
        background-position: 50%!important;
        &.bg1 {
          background-image: url('/static/blog-img9-6c1bc8b.jpg');
        }
      }
    }
    .info {
      overflow: hidden;
      margin-top: 5px;
      span {
        display: block;
        color: #6b6b84;
        text-transform: uppercase;
        margin-top: -2px;
        margin-bottom: 5px;
        font-size: 13px;
      }
      .title {
        margin-bottom: 0;
        line-height: 1.4;
        font-size: 17px;
        font-weight: 800;
        a {
          display: inline-block;
        }
      }
    }
  }
  // new a info-prev-link-wrapper
  .info-prev-link-wrapper {
    a {
      display: flex;
      align-items: center;
    }
    .image-prev {
      display: inline-block;
      min-width: 100px;
      width: 100px;
      border-radius: 5px;
      overflow: hidden;
      vertical-align: top;
      margin-right: 20px;
      position: relative;
      transition: .5s;
      img {
        border-radius: 5px;
      }
      .post-nav-title {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        margin: 0 auto;
        text-align: center;
        text-transform: uppercase;
        z-index: 2;
        color: #fff;
        opacity: 0;
        visibility: hidden;
        transition: .5s;
        font-size: 17px;
        font-weight: 700;
      }
      &:after {
        display: block;
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 5px;
        opacity: 0;
        background-color: #ff5d22;
        visibility: hidden;
        transition: .5s;
      }
    }
    .prev-link-info-wrapper {
      color: #221638;
      transition: .5s;
    }
    .prev-title {
      display: inline-block;
      font-weight: 800;
      font-size: 17px;
    }
    .meta-wrapper {
      display: block;
      color: #6b6b84;
      text-transform: capitalize;
      margin-top: 7px;
      font-weight: 600;
      font-size: 16px;
    }
  }
`;