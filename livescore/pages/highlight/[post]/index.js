import React, { useState } from 'react';
import HeaderSeo from "../../../shared/commons/HeaderSeo"
import Layout from "../../../shared/container/Layout"
import PlyrComponent from "../../../shared/commons/Plyr"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Button from "../../../shared/commons/Button"
import ContentFooterPost from "../../../shared/components/ContentFooterPost"

const video = {
  key: "1",
  title: "แฮร์รี่ เจน! 'เจนรบ สำเภาดี' ซัลโวประตูแรก ได้ตั้งแต่นัดประเดิมสนามอีกครั้ง",
  date: "22 กันยายน 2563 , 12:15",
  view: "1,105",
  shared: "4",
  img: "https://www.livescore.com/newsapi/04/soccer/thumbdsk/saint-etienne-blame-arsenal-as-william-saliba-loan-collapses-7-jvib6zv05ufx1w64dbgkxfdf1.jpg"
}

const index = () => {
  return (
    <Layout >
      <HeaderSeo
        siteName=""
        title="live score"
        desc=""
        imgSrc=""
        metaUrl=""
        keyWords=""
        author=""
      />
      <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
      <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
      <h1 className="mb-4">HIGHLIGHT!</h1>
      <PlyrComponent
        title={video.title}
        date={video.date}
        view={video.view}
        shared={video.shared}
        url={`/highlight/${video.title}`}
      />
      <ContentFooterPost
        linkNext=""
        linkPrev="/highlight/andy%20robertson"
      />
    </Layout>
  );
}

export default index;
