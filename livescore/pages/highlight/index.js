import React, { useState, useEffect } from 'react';
import HeaderSeo from "../../shared/commons/HeaderSeo"
import Layout from "../../shared/container/Layout"
import CardClips from "../../shared/components/CardClips"
import posts from "../../mock/Blog"
import Carousel from "../../shared/commons/Carousel"
import Button from "../../shared/commons/Button"

const limit = 4;
let arrayForHoldingPosts = [];
let category = []
const HighLight = (props) => {
  const [clips, setClips] = useState([]);
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(0);


  // const [limit, setLimit] = useState(4);
  // const [loadMore, setLoadMore] = useState(false);

 //console.log(props.highLight_slide)
 //console.log(props.highLight)
 
  if(props.highLight.scores.category !== null){


    if(Array.isArray(props.highLight.scores.category) === true){

     for(var i = 0 ; i < props.highLight.scores.category.length;i++)
      {

           if(props.highLight.scores.category[i].matches.match !== null){


              if(Array.isArray(props.highLight.scores.category[i].matches.match) === true){ 


                    for(var j = 0; j < props.highLight.scores.category[i].matches.match.length; j++){


                          if(props.highLight.scores.category[i].matches.match[j].videos !== null){


                            if(Array.isArray(props.highLight.scores.category[i].matches.match[j].videos.item) === true){

                              category.push({
                                    id:props.highLight.scores.category[i].matches.match[j]["@id"]
                                    ,url:props.highLight.scores.category[i].matches.match[j].localteam["@name"]+" vs "+props.highLight.scores.category[i].matches.match[j].visitorteam["@name"]
                                    ,title:props.highLight.scores.category[i].matches.match[j]["@id"]
                                    ,titleurl:"Highlights " + props.highLight.scores.category[i]["@name"] + " " +props.highLight.scores.category[i].matches.match[j].localteam["@name"]+" vs "+props.highLight.scores.category[i].matches.match[j].visitorteam["@name"]
                                    ,img:props.highLight.scores.category[i].matches.match[j].videos.item[0]["#cdata-section"]
                                    ,urlToImage:props.highLight.scores.category[i].matches.match[j].videos.item[0]["#cdata-section"]
                                    ,publishedAt: props.highLight.scores.category[i].matches.match[j]["@date"] +"  "+props.highLight.scores.category[i].matches.match[j]["@time"]
                                    ,view:"0"
                                    ,shared:"0"
                                    })

                            }else{
    
                              category.push({
                                    id:props.highLight.scores.category[i].matches.match[j]["@id"]
                                    ,url:props.highLight.scores.category[i].matches.match[j].localteam["@name"]+" vs "+props.highLight.scores.category[i].matches.match[j].visitorteam["@name"]
                                    ,title:props.highLight.scores.category[i].matches.match[j]["@id"]
                                    ,titleurl:"Highlights " + props.highLight.scores.category[i]["@name"] + " " +props.highLight.scores.category[i].matches.match[j].localteam["@name"]+" vs "+props.highLight.scores.category[i].matches.match[j].visitorteam["@name"]
                                    ,img:props.highLight.scores.category[i].matches.match[j].videos.item["#cdata-section"]
                                    ,urlToImage:props.highLight.scores.category[i].matches.match[j].videos.item["#cdata-section"]
                                    ,publishedAt: props.highLight.scores.category[i].matches.match[j]["@date"] +"  "+props.highLight.scores.category[i].matches.match[j]["@time"]
                                    ,view:"0"
                                    ,shared:"0"
                                    })
                                  
                            }


                          }


                    }


              }else{


                   if(props.highLight.scores.category[i].matches.match.videos !== null){

                      
                      if(Array.isArray(props.highLight.scores.category[i].matches.match.videos.item) === true){

                        // วีดีโอ ไม่ใช่ youtube มีโอกาสเกิด error
                        category.push({
                             id:props.highLight.scores.category[i].matches.match["@id"]
                            ,url:props.highLight.scores.category[i].matches.match.localteam["@name"]+" vs "+props.highLight.scores.category[i].matches.match.visitorteam["@name"]
                            ,title:props.highLight.scores.category[i].matches.match["@id"]
                            ,titleurl:"Highlights " + props.highLight.scores.category[i]["@name"] + " " +props.highLight.scores.category[i].matches.match.localteam["@name"]+" vs "+props.highLight.scores.category[i].matches.match.visitorteam["@name"]
                            ,img:props.highLight.scores.category[i].matches.match.videos.item[0]["#cdata-section"]
                            ,urlToImage:props.highLight.scores.category[i].matches.match.videos.item[0]["#cdata-section"]
                            ,publishedAt: props.highLight.scores.category[i].matches.match["@date"] +"  "+props.highLight.scores.category[i].matches.match["@time"]
                            ,view:"0"
                            ,shared:"0"
                            })

                              

                     }else{

                      category.push({
                             id:props.highLight.scores.category[i].matches.match["@id"]
                            ,url:props.highLight.scores.category[i].matches.match.localteam["@name"]+" vs "+props.highLight.scores.category[i].matches.match.visitorteam["@name"]
                            ,title:props.highLight.scores.category[i].matches.match["@id"]
                            ,titleurl:"Highlights " + props.highLight.scores.category[i]["@name"] + " " +props.highLight.scores.category[i].matches.match.localteam["@name"]+" vs "+props.highLight.scores.category[i].matches.match.visitorteam["@name"]
                            ,img:props.highLight.scores.category[i].matches.match.videos.item["#cdata-section"]
                            ,urlToImage:props.highLight.scores.category[i].matches.match.videos.item["#cdata-section"]
                            ,publishedAt: props.highLight.scores.category[i].matches.match["@date"] +"  "+props.highLight.scores.category[i].matches.match["@time"]
                            ,view:"0"
                            ,shared:"0"
                          })


                     }



                   }



              }


           }
          

      }


    }

  }



  const loopThroughPosts = (count) => {
    
    for (let i = count * limit - limit; i < limit * count; i++) {
      if (category[i] !== undefined) {
        //console.log(posts.data[i])
        arrayForHoldingPosts.push(category[i]);
      }
    }
    setTotal(props.total)
    setClips(arrayForHoldingPosts);
  }

   
  
  // useEffect(() => {
  //   loopWithSlice(0, limit);
  // }, []);
  useEffect(() => {
    // setItem(clips.length)
    setCount((prevCount) => prevCount + 1);
    loopThroughPosts(count);
  }, []);

  const onClickLoadMore = () => {
    setCount((prevCount) => prevCount + 1);
    loopThroughPosts(count);
  };

  //console.log(props)
 

  // const onClickLoadMore = (e) => {
  //   e.preventDefault();
  //   setLimit(item + 2)
  // setLoading(true);
  // let dataLoadmore = await campaignApi.getCampaign(item, limit);
  // if (dataLoadmore.length !== 0) {
  //   if (dataLoadmore.length < limit) {
  //     setLoading(false);
  //     setLoadMore(false);
  //     setItem(item + dataLoadmore.length);
  //     setCampaignAll((campaignContent) => [
  //       ...campaignContent,
  //       ...dataLoadmore,
  //     ]);
  //   } else {
  //     setLoading(false);
  //     setLoadMore(true);
  //     setItem(item + dataLoadmore.length);
  //     setCampaignAll((campaignContent) => [
  //       ...campaignContent,
  //       ...dataLoadmore,
  //     ]);
  //   }
  // } else {
  //   setLoadMore(false);
  // }
  // };


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
      <Carousel 
        slideValues={props.highLight_slide} 
        title="LaLiga Santander"
        className="mb-4"
      />

      {<CardClips className="d-block d-md-none mb-5" data={clips} grid={false} />/* case check mobile */}
      <h2 className="mb-4">SPORTS CLIPS</h2>
      <div className="row mx-0">
        {/* {
          clips.length > 0
            ? <CardClips data={clips} grid={true} />
            : "loading..."
        } */}
        {<CardClips data={clips} grid={false} /> /*case clip desktop*/}

        {
          total !== clips.length
          ? <div className="col-12 text-center px-0">
          <Button type="button" className="btn-outline-secondary mx-auto mt-5 mb-5 mb-md-0" onClick={onClickLoadMore}>Load more</Button>
        </div>
         : ""
        }
        
        {/* {
          clips.length !== 0 &&
            loadMore === true ? (
              <button onClick={(e) => onClickLoadMore(e)}>
                Load More
              </button>
            ) : ""
        } */}
      </div>
    </Layout>
  );
}

HighLight.getInitialProps = async (ctx) => {

  const res_today = await fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccerhighlights/home?json=1')

  const json = await res_today.json()

  const res_yesterday = await fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccerhighlights/d-1?json=1')

  const json_yes = await res_yesterday.json()

  let category = []
  
  let highLight_slide = []

  if(json.scores.category !== null){

      if(Array.isArray(json.scores.category) === true){

        for(var i = 0 ; i < json.scores.category.length;i++)
        {

             if(json.scores.category[i].matches.match !== null){


                if(Array.isArray(json.scores.category[i].matches.match) === true){ 


                      for(var j = 0; j < json.scores.category[i].matches.match.length; j++){


                            if(json.scores.category[i].matches.match[j].videos !== null){


                              if(Array.isArray(json.scores.category[i].matches.match[j].videos.item) === true){

                                      highLight_slide.push({
                                      id:json.scores.category[i].matches.match[j]["@id"]
                                      ,url:json.scores.category[i].matches.match[j].localteam["@name"]+" vs "+json.scores.category[i].matches.match[j].visitorteam["@name"]
                                      ,title:json.scores.category[i].matches.match[j]["@id"]
                                      ,titleurl:"Highlights " + json.scores.category[i]["@name"] + " " +json.scores.category[i].matches.match[j].localteam["@name"]+" vs "+json.scores.category[i].matches.match[j].visitorteam["@name"]
                                      ,img:json.scores.category[i].matches.match[j].videos.item[0]["#cdata-section"]
                                      ,urlToImage:json.scores.category[i].matches.match[j].videos.item[0]["#cdata-section"]
                                      ,publishedAt: json.scores.category[i].matches.match[j]["@date"] +"  "+json.scores.category[i].matches.match[j]["@time"]
                                      ,view:"0"
                                      ,shared:"0"
                                      })

                              }else{
      
                                highLight_slide.push({
                                      id:json.scores.category[i].matches.match[j]["@id"]
                                      ,url:json.scores.category[i].matches.match[j].localteam["@name"]+" vs "+json.scores.category[i].matches.match[j].visitorteam["@name"]
                                      ,title:json.scores.category[i].matches.match[j]["@id"]
                                      ,titleurl:"Highlights " + json.scores.category[i]["@name"] + " " +json.scores.category[i].matches.match[j].localteam["@name"]+" vs "+json.scores.category[i].matches.match[j].visitorteam["@name"]
                                      ,img:json.scores.category[i].matches.match[j].videos.item["#cdata-section"]
                                      ,urlToImage:json.scores.category[i].matches.match[j].videos.item["#cdata-section"]
                                      ,publishedAt: json.scores.category[i].matches.match[j]["@date"] +"  "+json.scores.category[i].matches.match[j]["@time"]
                                      ,view:"0"
                                      ,shared:"0"
                                      })
                                    
                              }


                            }


                      }


                }else{


                     if(json.scores.category[i].matches.match.videos !== null){

                        
                        if(Array.isArray(json.scores.category[i].matches.match.videos.item) === true){

                          // วีดีโอ ไม่ใช่ youtube มีโอกาสเกิด error
                            highLight_slide.push({
                               id:json.scores.category[i].matches.match["@id"]
                              ,url:json.scores.category[i].matches.match.localteam["@name"]+" vs "+json.scores.category[i].matches.match.visitorteam["@name"]
                              ,title:json.scores.category[i].matches.match["@id"]
                              ,titleurl:"Highlights " + json.scores.category[i]["@name"] + " " +json.scores.category[i].matches.match.localteam["@name"]+" vs "+json.scores.category[i].matches.match.visitorteam["@name"]
                              ,img:json.scores.category[i].matches.match.videos.item[0]["#cdata-section"]
                              ,urlToImage:json.scores.category[i].matches.match.videos.item[0]["#cdata-section"]
                              ,publishedAt: json.scores.category[i].matches.match["@date"] +"  "+json.scores.category[i].matches.match["@time"]
                              ,view:"0"
                              ,shared:"0"
                              })

                                

                       }else{

                            highLight_slide.push({
                               id:json.scores.category[i].matches.match["@id"]
                              ,url:json.scores.category[i].matches.match.localteam["@name"]+" vs "+json.scores.category[i].matches.match.visitorteam["@name"]
                              ,title:json.scores.category[i].matches.match["@id"]
                              ,titleurl:"Highlights " + json.scores.category[i]["@name"] + " " +json.scores.category[i].matches.match.localteam["@name"]+" vs "+json.scores.category[i].matches.match.visitorteam["@name"]
                              ,img:json.scores.category[i].matches.match.videos.item["#cdata-section"]
                              ,urlToImage:json.scores.category[i].matches.match.videos.item["#cdata-section"]
                              ,publishedAt: json.scores.category[i].matches.match["@date"] +"  "+json.scores.category[i].matches.match["@time"]
                              ,view:"0"
                              ,shared:"0"
                            })


                       }



                     }



                }


             }
            

        }


      }
    
  } //casetoday

  return { highLight: json_yes ,highLight_slide :highLight_slide,total:category.length }

}

export default HighLight;
