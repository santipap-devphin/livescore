import React from 'react'
import { useRouter } from 'next/router'
import { useState,useEffect } from 'react'
import Link from 'next/link'
import Layout from "../../shared/container/Layout"
import HeaderSeo from "../../shared/commons/HeaderSeo"
import NavDate from "../../shared/commons/Navdates"
import TableBattle from "../../shared/commons/TableBattle"
import TableBattleMobile from "../../shared/commons/TableBattleMobile"

import Europe from "../../mock/uefaleague"


const Post = (props) => {

function datee(nextday){

        const today = new Date()
        const tomorrow = new Date(today)
   
        tomorrow.setDate(tomorrow.getDate()+nextday)
   
        const neww = String(tomorrow);
   
        const newsdate = neww.split(" ");
   
        const newsformat = newsdate[1] + " " +newsdate[2];
  
        
        return newsformat;
  
  }
  const router = useRouter()
  const [items, setItems] = useState();
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');
  let newdata = [];

  const { id } = router.query

  let navDate = [
    { id: "1",pathid:"d-3", date: datee(-3), route: `/league/${id}/d-3`, today: false },
    { id: "2",pathid:"d-2", date: datee(-2), route: `/league/${id}/d-2`, today: false },
    { id: "3",pathid:"d-1", date: datee(-1), route:`/league/${id}/d-1`, today: false },
    { id: "4",pathid:"today", date: datee(0), route: `/league/${id}/today`, today: false },
    { id: "5",pathid:"d1", date: datee(1), route: `/league/${id}/d1`, today: false },
    { id: "6",pathid:"d2", date: datee(2), route: `/league/${id}/d2`, today: false },
    { id: "7",pathid:"d3", date: datee(3), route: `/league/${id}/d3`, today: false }
  ]
 
    const handleClick = (e) =>  {
        console.log('Free pizza!');
        console.log(e);
        //alert();
       
        
      
    }

    //const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/${id}?json=1`)
    //const data  = await res.json()

    
    if(router.asPath.indexOf("#") >-1){
        
        let days = router.asPath.split("#");
    
        if(days[1] == navDate[i].pathid){

        }else{

             /*const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/home?json=1`)
             const data  = await res.json()

             setItems(data)
             setLoad(true)
             setError("end")*/

        }
    
        /*for(var i =0; i < navDate.length; i++)     
        {
            if(days[1] === navDate[i].pathid){
    
                navDate[i] = {id: navDate[i].id,pathid:navDate[i].pathid, date: navDate[i].date, route: navDate[i].route, today: true}
            
              }
              else{
                navDate[i] = { id: navDate[i].id,pathid:navDate[i].pathid, date: navDate[i].date, route: navDate[i].route, today: false}
              }
        }*/
    
        
     }

    
  return (
    <>
      <Layout className="px-0 px-md-3">
      <HeaderSeo
      siteName=""
      title="live score"
      desc=""
      imgSrc=""
      metaUrl=""
      keyWords=""
      author=""
    />
    <div className="d-none d-md-block">
      <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
      <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
      <NavDate 
        DataDate={navDate}
        onClickLeft={() => console.log("left")}
        onClickRight={() => console.log("right")}
        onClicks={handleClick}
      />

    {
          props.listdata.map((res,val) => (
            (res["@id"] === id) ? 
              <TableBattle  
              className="highlight bg-secondary text-white"
              title={res['@name']}
              data={res.matches.match}
              highlight={false} 
              exam = {""/*res.matches.match*/}
            />:
            null
          

          ))

      }
      
   </div>
  </Layout>
     
    </>
  )
}
Post.getInitialProps = async ({query}) => {

  

  //const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccerstats/team/${query.id}?json=1`)
  //const json = await res.json()

  const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/home?json=1`)
  const data  = await res.json()

  return { 
              listdata: data.scores.category
          }

}

export default Post
