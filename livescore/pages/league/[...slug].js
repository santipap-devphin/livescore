import React from 'react'
import { useRouter } from 'next/router'
import { useState,useEffect } from 'react'
import Link from 'next/link'
import Layout from "../../shared/container/Layout"
import HeaderSeo from "../../shared/commons/HeaderSeo"
import NavDate from "../../shared/commons/NavDate"
import TableBattle from "../../shared/commons/TableBattle"
import TableBattleMobile from "../../shared/commons/TableBattleMobile"

import Europe from "../../mock/uefaleague"

const Post = (props) => {
  const router = useRouter()
  const slug = router.query.slug || []

 //console.log(slug)
  const [items, setItems] = useState();
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  function datee(nextday){

    const today = new Date()
    const tomorrow = new Date(today)

    tomorrow.setDate(tomorrow.getDate()+nextday)

    const neww = String(tomorrow);

    const newsdate = neww.split(" ");

    const newsformat = newsdate[1] + " " +newsdate[2];

    
    return newsformat;

    }

    let navDate = [
        { id: "1",pathid:"d-3", date: datee(-3), route: `/league/${slug[0]}/d-3`, today: false },
        { id: "2",pathid:"d-2", date: datee(-2), route: `/league/${slug[0]}/d-2`, today: false },
        { id: "3",pathid:"d-1", date: datee(-1), route:`/league/${slug[0]}/d-1`, today: false },
        { id: "4",pathid:"today", date: datee(0), route: `/league/${slug[0]}/today`, today: false },
        { id: "5",pathid:"d1", date: datee(1), route: `/league/${slug[0]}/d1`, today: false },
        { id: "6",pathid:"d2", date: datee(2), route: `/league/${slug[0]}/d2`, today: false },
        { id: "7",pathid:"d3", date: datee(3), route: `/league/${slug[0]}/d3`, today: false }
      ]

      // console.log(navDate)
 
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
       
      />
     

        {
          props.listdata.map((res,val) => (
            (res["@id"] === slug[0]) ? 
            
            <div key={val.toString()}>
                  <TableBattle  
                  className="highlight bg-secondary text-white"
                  title={res['@name']}
                  data={res.matches.match}
                  highlight={false} 
                  exam = {res['@id']}
                  />
              </div> 
                :
              null 
          

          ))

        }

        </div>

        <div className="d-block d-md-none">
                  <div className="banner px-3">

                      <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
                      <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />

                  </div>

                  {
                      props.listdata.map((res,val) => (
                        (res["@id"] === slug[0]) ? 
                        
                        <div key={val.toString()}>

                             <TableBattleMobile 
                              title={res['@name']}
                              data={res.matches.match}
                              highlight={false}
                              />
                              
                          </div> 
                            :
                          null
                      

                      ))

                    }


        </div>

       </Layout>
     
    
     
    </>
  )
}
Post.getInitialProps = async ({query}) => {

   let lslug =  query.slug;
   

   if(lslug[1] === "today" || lslug[1] === "undefined"){

    const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/home?json=1`)
    const data = await res.json()

    return { 
        listdata: data.scores.category
      }

   }else{

    const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/${lslug[1]}?json=1`)
    const data = await res.json()

    return { 
        listdata: data.scores.category
      }

   }

}

export default Post
