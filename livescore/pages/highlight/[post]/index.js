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
  let newslist = [];
  var urlvideo;

  if(Array.isArray(props.video.videos.item) === true){


     
      urlvideo = props.video.videos.item[0]["#cdata-section"];

  }else{
     
      urlvideo = props.video.videos.item["#cdata-section"];
  }
  
 console.log(props)
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
      <h1 className="mb-4">HIGHLIGHT! {/*props.video.title*/}</h1>
      {<PlyrComponent
        matchid={props.matchid}
        title={props.title}
        date={props.datee}
        view={"0"}
        shared={"0"}
        url={`/highlight/${props.video.title}`}
        urlvideo={urlvideo}
      />}
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
  var listview = []
  var chkstatus;
  var matchid;
  var datee;
  var title;
  const restoday = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccerhighlights/home?json=1`)
  const datatoday = await restoday.json()

  const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccerhighlights/d-1?json=1`)
  const data = await res.json()


 /*if(data.scores.category !== undefined){


    listview.push(data.scores.category);

 }*/

 if(Array.isArray(datatoday.scores.category) === true){


  for(var i= 0 ; i < datatoday.scores.category.length ; i++)
  {

      
         if(Array.isArray(datatoday.scores.category[i].matches.match) === true){


                for(var k = 0 ; k < datatoday.scores.category[i].matches.match.length ; k++){


                      if(datatoday.scores.category[i].matches.match[k]["@id"] === posts){

                        
                            list_vdo.push(datatoday.scores.category[i].matches.match[k]);
                            matchid = datatoday.scores.category[i].matches.match[k]["@id"];
                            datee = datatoday.scores.category[i].matches.match[k]["@date"];
                            title = datatoday.scores.category[i].matches.match[k].localteam["@name"] +" "+datatoday.scores.category[i].matches.match[k].localteam["@goals"]+" - " 
                            + " "+datatoday.scores.category[i].matches.match[k].visitorteam["@goals"]+" "+ datatoday.scores.category[i].matches.match[k].visitorteam["@name"];

                      }

                  
                }


            }
            else{

                    if(datatoday.scores.category[i].matches.match["@id"] === posts){

                              
                             list_vdo.push(datatoday.scores.category[i].matches.match);
                             matchid = datatoday.scores.category[i].matches.match["@id"];
                             datee = datatoday.scores.category[i].matches.match["@date"];
                             title = datatoday.scores.category[i].matches.match.localteam["@name"] +" "+datatoday.scores.category[i].matches.match.localteam["@goals"]+" - " 
                            + " "+datatoday.scores.category[i].matches.match.visitorteam["@goals"]+" "+ datatoday.scores.category[i].matches.match.visitorteam["@name"];

                    }


            }

            

         

    


        
  }

}





 if(Array.isArray(data.scores.category) === true){


    for(var i= 0 ; i < data.scores.category.length ; i++)
    {

          if(Array.isArray(data.scores.category[i].matches.match) === true){


                  for(var k = 0 ; k < data.scores.category[i].matches.match.length ; k++){


                        if(data.scores.category[i].matches.match[k]["@id"] === posts){

                          
                              list_vdo.push(data.scores.category[i].matches.match[k]);
                              matchid = data.scores.category[i].matches.match[k]["@id"];
                              datee = data.scores.category[i].matches.match[k]["@date"];
                              title = data.scores.category[i].matches.match[k].localteam["@name"] +" "+data.scores.category[i].matches.match[k].localteam["@goals"]+" - " 
                            + " "+data.scores.category[i].matches.match[k].visitorteam["@goals"]+" "+ data.scores.category[i].matches.match[k].visitorteam["@name"];

                        }

                    
                  }


              }
              else{

                      if(data.scores.category[i].matches.match["@id"] === posts){

                                
                               list_vdo.push(data.scores.category[i].matches.match);
                               matchid = data.scores.category[i].matches.match["@id"];
                               datee = data.scores.category[i].matches.match["@date"];
                               title = data.scores.category[i].matches.match.localteam["@name"] +" "+data.scores.category[i].matches.match.localteam["@goals"]+" - " 
                               + " "+data.scores.category[i].matches.match.visitorteam["@goals"]+" "+ data.scores.category[i].matches.match.visitorteam["@name"];

                      }


              }

              

           

      


          
    }

 }


  return { 
    video: list_vdo[0] , matchid:matchid ,datee:datee ,title:title
}
  

}



export default index;
