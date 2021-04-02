
import Layout from "../../../shared/container/Layout"
import axios from 'axios';
import NavDate from "../../../shared/commons/NavDate"
import HeaderSeo from "../../../shared/commons/HeaderSeo"
import dynamic from 'next/dynamic';

const TableBattle = dynamic(() => import('../../../shared/commons/TableBattle'));
const TableBattleMobile = dynamic(()=> import('../../../shared/commons/TableBattleMobile'));

import Link from 'next/link'
import { useRouter } from 'next/router'
import { Component } from 'react';
import React, { useState, useEffect ,useRef } from 'react';





const Homefilter = (props) => {

  
  const myRef = useRef(null)  
  const handdleClickAfterload = (e) => {


    e.preventDefault();

    setDatas(false);

    myRef.current.scrollIntoView()



  }
  const [sdata , setDatas] =  useState(false);

  useEffect(() => {

   if(props.list[0].sortdata.category.length > 0){

           setDatas(true);

    }
   
 
  },[setDatas]);

  function datee(nextday){

    const today = new Date()
    const tomorrow = new Date(today)

    tomorrow.setDate(tomorrow.getDate()+nextday)

    const neww = String(tomorrow);

    const newsdate = neww.split(" ");

    const newsformat = newsdate[1] + " " +newsdate[2];

    
    return newsformat;

  }

  let navDates = [
    { id: "1", date: datee(-3), route: "/soccer/programs/d-3", today: false },
    { id: "2", date: datee(-2), route: "/soccer/programs/d-2", today: false },
    { id: "3", date: datee(-1), route: "/soccer/programs/d-1", today: false },
    { id: "4", date: datee(0), route: "/", today: false },
    { id: "5", date: datee(1), route: "/soccer/programs/d1", today: false },
    { id: "6", date: datee(2), route: "/soccer/programs/d2", today: false },
    { id: "7", date: datee(3), route: "/soccer/programs/d3", today: false }
  ]
  let navDatemobile = [
    { id: "1", date: datee(-2), route: "/soccer/programs/d-2", today: false },
    { id: "2", date: datee(-1), route: "/soccer/programs/d-1", today: false },
    { id: "3", date: datee(0), route: "/", today: false },
    { id: "4", date: datee(1), route: "/soccer/programs/d1", today: false },
    { id: "5", date: datee(2), route: "/soccer/programs/d2", today: false },
   
  ]
 

  {
    ( props.id === "d-3" ) ? navDates[0] = { id: "1", date: datee(-3), route: "/soccer/programs/d-3", today: true } 
    :
    ( props.id === "d-2" ) ? navDates[1] = { id: "2", date: datee(-2), route: "/soccer/programs/d-2", today: true } 
    :
    ( props.id === "d-1" ) ? navDates[2] = { id: "3", date: datee(-1), route: "/soccer/programs/d-1", today: true } 
    :
    ( props.id === "d1" ) ? navDates[4] = { id: "5", date: datee(1), route: "/soccer/programs/d1", today: true } 
    : 
    ( props.id === "d2" ) ? navDates[5] = { id: "6", date: datee(2), route: "/soccer/programs/d2", today: true } 
    :
    ( props.id === "d3" ) ? navDates[6] = { id: "7", date: datee(3), route: "/soccer/programs/d3", today: true } 
    :(navDates[3] = { id: "4", date: datee(0), route: "/", today: true })
  }

  {
    ( props.id === "d-2" ) ? navDatemobile[0] = { id: "1", date: datee(-2), route: "/soccer/programs/d-2", today: true } 
    :
    ( props.id === "d-1" ) ? navDatemobile[1] = { id: "2", date: datee(-1), route: "/soccer/programs/d-1", today: true } 
    :
    ( props.id === "d1" ) ? navDatemobile[3] = { id: "4", date: datee(1), route: "/soccer/programs/d1", today: true } 
    :
    ( props.id === "d2" ) ? navDatemobile[4] = { id: "5", date: datee(2), route: "/soccer/programs/d2", today: true } 
    :( navDatemobile[2] = { id: "3", date: datee(0), route: "/", today: true })
  }


  return (

    <Layout className="px-0 px-md-3" standings={props.list}>
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
            DataDate={navDates}
            onClickLeft={() => console.log("left")}
            onClickRight={() => console.log("right")}
          />
         <div ref={myRef}></div>
         {
          (sdata !== false) ?
            props.list[0].sortdata.category.map((res,value) => (

                 <div key={value.toString()} onClick={handdleClickAfterload}> 
                      <TableBattle  
                      className="highlight bg-secondary text-white"
                      title={res['@name']}
                      data={res.matches.match}
                      highlight={true} 
                      exam = {res['@id']}
                      />
                      
                  </div>
                  
            ))
          :<center><h1>Loading .....</h1></center>
         }
        </div>

         {

          <div className="d-block d-md-none">
                  <div className="banner px-3">

                      <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
                      <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />

                  </div>
                  <NavDate 
                      DataDate={navDatemobile}
                      onClickLeft={() => console.log("left")}
                      onClickRight={() => console.log("right")}
                    />
                      
                      {
                      (sdata !== false) ?
                            props.list[0].sortdata.category.map((res,value) => (
                                  <div key={value.toString()} onClick={handdleClickAfterload}>
                                        <TableBattleMobile 
                                          title={res['@name']}
                                          data={res.matches.match}
                                          highlight={false}
                                          exam = {res['@id']}
                                        />
                                      
                                  </div>
                      ))
                     : <center><h1>Loading .....</h1></center>
                     }
             </div>


         }
        
      </Layout>

  )


  
}

Homefilter.getInitialProps = async ({ query }) => {

  const { id } = query

  const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/${id}?json=1`)
  const data  = await res.json()

  let ndata = [];

  for(var i = 0 ; i < data.scores.category.length; i++)
  {
    
    if(data.scores.category[i]["@id"] === "1204"){

      ndata.push(
        {
          "@name":data.scores.category[i]["@name"] ,
          "@gid": data.scores.category[i]["@gid"] ,
          "@id": data.scores.category[i]["@id"] ,
          "@file_group": data.scores.category[i]["@file_group"],
          "@iscup": data.scores.category[i]["@iscup"],
          "@priority": "1",
          "matches": data.scores.category[i]["matches"],
        }

      )

    }
    else if(data.scores.category[i]["@id"] === "1005"){

      ndata.push(
        {
          "@name":data.scores.category[i]["@name"] ,
          "@gid": data.scores.category[i]["@gid"] ,
          "@id": data.scores.category[i]["@id"] ,
          "@file_group": data.scores.category[i]["@file_group"],
          "@iscup": data.scores.category[i]["@iscup"],
          "@priority": "2",
          "matches": data.scores.category[i]["matches"],
        }

      )

    }
    else if(data.scores.category[i]["@id"] === "1007"){

      ndata.push(
        {
          "@name":data.scores.category[i]["@name"] ,
          "@gid": data.scores.category[i]["@gid"] ,
          "@id": data.scores.category[i]["@id"] ,
          "@file_group": data.scores.category[i]["@file_group"],
          "@iscup": data.scores.category[i]["@iscup"],
          "@priority": "3",
          "matches": data.scores.category[i]["matches"],
        }

      )

    }
    else if(data.scores.category[i]["@id"] === "1198"){

      ndata.push(
        {
          "@name":data.scores.category[i]["@name"] ,
          "@gid": data.scores.category[i]["@gid"] ,
          "@id": data.scores.category[i]["@id"] ,
          "@file_group": data.scores.category[i]["@file_group"],
          "@iscup": data.scores.category[i]["@iscup"],
          "@priority": "4",
          "matches": data.scores.category[i]["matches"],
        }

      )

    }
    else if(data.scores.category[i]["@id"] === "1399"){

      ndata.push(
        {
          "@name":data.scores.category[i]["@name"] ,
          "@gid": data.scores.category[i]["@gid"] ,
          "@id": data.scores.category[i]["@id"] ,
          "@file_group": data.scores.category[i]["@file_group"],
          "@iscup": data.scores.category[i]["@iscup"],
          "@priority": "5",
          "matches": data.scores.category[i]["matches"],
        }

      )

    }
    else if(data.scores.category[i]["@id"] === "1269"){

      ndata.push(
        {
          "@name":data.scores.category[i]["@name"] ,
          "@gid": data.scores.category[i]["@gid"] ,
          "@id": data.scores.category[i]["@id"] ,
          "@file_group": data.scores.category[i]["@file_group"],
          "@iscup": data.scores.category[i]["@iscup"],
          "@priority": "6",
          "matches": data.scores.category[i]["matches"],
        }

      )

    }
    else if(data.scores.category[i]["@id"] === "1229"){

      ndata.push(
        {
          "@name":data.scores.category[i]["@name"] ,
          "@gid": data.scores.category[i]["@gid"] ,
          "@id": data.scores.category[i]["@id"] ,
          "@file_group": data.scores.category[i]["@file_group"],
          "@iscup": data.scores.category[i]["@iscup"],
          "@priority": "7",
          "matches": data.scores.category[i]["matches"],
        }

      )

    }
    else if(data.scores.category[i]["@id"] === "1322"){

      ndata.push(
        {
          "@name":data.scores.category[i]["@name"] ,
          "@gid": data.scores.category[i]["@gid"] ,
          "@id": data.scores.category[i]["@id"] ,
          "@file_group": data.scores.category[i]["@file_group"],
          "@iscup": data.scores.category[i]["@iscup"],
          "@priority": "8",
          "matches": data.scores.category[i]["matches"],
        }

      )

    }
    else if(data.scores.category[i]["@id"] === "1221"){

      ndata.push(
        {
          "@name":data.scores.category[i]["@name"] ,
          "@gid": data.scores.category[i]["@gid"] ,
          "@id": data.scores.category[i]["@id"] ,
          "@file_group": data.scores.category[i]["@file_group"],
          "@iscup": data.scores.category[i]["@iscup"],
          "@priority": "9",
          "matches": data.scores.category[i]["matches"],
        }

      )

    }
    else if(data.scores.category[i]["@id"] === "1271"){

      ndata.push(
        {
          "@name":data.scores.category[i]["@name"] ,
          "@gid": data.scores.category[i]["@gid"] ,
          "@id": data.scores.category[i]["@id"] ,
          "@file_group": data.scores.category[i]["@file_group"],
          "@iscup": data.scores.category[i]["@iscup"],
          "@priority": "10",
          "matches": data.scores.category[i]["matches"],
        }

      )

    }else{

      ndata.push(
        {
          "@name":data.scores.category[i]["@name"] ,
          "@gid": data.scores.category[i]["@gid"] ,
          "@id": data.scores.category[i]["@id"] ,
          "@file_group": data.scores.category[i]["@file_group"],
          "@iscup": data.scores.category[i]["@iscup"],
          "@priority": "11",
          "matches": data.scores.category[i]["matches"],
        }

      )


    }
    

  }

  ndata.sort(function(a, b) {
  
      return a["@priority"] - b["@priority"];

  });

  let leage = [];

  let scores = {
                  "@sport":data.scores["@sport"],
                  "@updated":data.scores["@updated"],
                  "category":ndata
                   
              }

  leage.push({sortdata:scores})
    
  return {id:id,list:leage}
}

export default Homefilter;

