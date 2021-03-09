import React, { useState } from 'react';
import HeaderSeo from "../../../shared/commons/HeaderSeo"
import Layout from "../../../shared/container/Layout"
import PlyrComponent from "../../../shared/commons/Plyr"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Button from "../../../shared/commons/Button"
import ContentFooterPost from "../../../shared/components/ContentFooterPost"
import { useRouter } from 'next/router'

const video = {
  key: "1",
  title: "แฮร์รี่ เจน! 'เจนรบ สำเภาดี' ซัลโวประตูแรก ได้ตั้งแต่นัดประเดิมสนามอีกครั้ง",
  date: "22 กันยายน 2563 , 12:15",
  view: "1,105",
  shared: "4",
  img: "https://www.livescore.com/newsapi/04/soccer/thumbdsk/saint-etienne-blame-arsenal-as-william-saliba-loan-collapses-7-jvib6zv05ufx1w64dbgkxfdf1.jpg"
}

const index = (props) => {

  const router = useRouter()
  
 //console.log(props.video)
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
      <h1 className="mb-4">HIGHLIGHT! {props.video.title}</h1>
      <PlyrComponent
        matchid={props.video.matchid}
        title={props.video.title}
        date={props.video.date}
        view={props.video.view}
        shared={props.video.shared}
        url={`/highlight/${props.video.title}`}
        urlvideo={props.video.urlvideo}
      />
      <ContentFooterPost
        linkNext=""
        linkPrev="/highlight/andy%20robertson"
      />
    </Layout>
  );
}

index.getInitialProps = async ({query}) => {

  let posts =  query.post;
  var list_vdo  = []
  
  const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccerhighlights/home?json=1`)
  const data = await res.json()

  for(var i = 0; i <data.scores.category.length;i++)
  {

    if(data.scores.category[i].matches.match["@id"] === posts){


      if(Array.isArray(data.scores.category[i].matches.match.videos.item)){


        list_vdo.push(
          {
           matchid: data.scores.category[i].matches.match["@id"],
           key: i,
           title:data.scores.category[i].matches.match.localteam["@name"] + "( "+data.scores.category[i].matches.match.localteam["@goals"] +" )"
           +" VS ( "+data.scores.category[i].matches.match.visitorteam["@goals"]+" )" +data.scores.category[i].matches.match.visitorteam["@name"],
           date:data.scores.category[i].matches["@date"],
           view:data.scores.category[i]["@id"],
           shared:"0",
           urlvideo:data.scores.category[i].matches.match.videos.item[0]["#cdata-section"],
           img:""
          }
        );
        

      }

      else{
        list_vdo.push(
          {
           matchid: data.scores.category[i].matches.match["@id"],
           key: i,
           title:data.scores.category[i].matches.match.localteam["@name"] + "( "+data.scores.category[i].matches.match.localteam["@goals"] +" )"
           +" VS ( "+data.scores.category[i].matches.match.visitorteam["@goals"]+" )" +data.scores.category[i].matches.match.visitorteam["@name"],
           date:data.scores.category[i].matches["@date"],
           view:data.scores.category[i]["@id"],
           shared:"0",
           urlvideo:data.scores.category[i].matches.match.videos.item["#cdata-section"],
           img:""
          }
);
      }
     
      

       
     }


  }


  return { 
    video: list_vdo[0]
}
  

}



export default index;
