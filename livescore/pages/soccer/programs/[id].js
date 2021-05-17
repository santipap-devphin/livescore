
import React, { useState, useEffect ,useRef } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../../../shared/container/Layout'));
const NavDate = dynamic(() => import('../../../shared/commons/NavDate'));
const HeaderSeo = dynamic(() => import('../../../shared/commons/HeaderSeo'));
const TableBattle = dynamic(() => import('../../../shared/commons/TableBattle'));
const TableBattleMobile = dynamic(()=> import('../../../shared/commons/TableBattleMobile'));
const BannerInner = dynamic(()=> import('../../../shared/components/Banner/Inner'));

import Link from 'next/link'

import { Component } from 'react';

const Homefilter = (props) => {


  var routers = useRouter();
  var txtdate = null;
  const myRef = useRef(null)  

  const handdleClickAfterload = (e) => {


    e.preventDefault();

    setDatas(false);
    setSectiontwo(false);

    myRef.current.scrollIntoView()

  }
  const [sdata , setDatas] =  useState(false);
  const [defaults , setDefaults] = useState();
  const [sectiontwo , setSectiontwo] = useState(false);
  const [lang , setLang] = useState([]);
  let teamth  = [];

   useEffect(() => {

    const fetchItems = async () => {

      const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/teams_th?json=1`)
      const data = await res.json()
  
      
       for(var i=0 ;i < data.teams.team.length; i++){

        teamth[data.teams.team[i]["@id"]] = data.teams.team[i]["@name"];

      }
      setLang(teamth)
  
    }

    setTimeout(function(){

    
      fetchItems();
      setSectiontwo(true)

      
    
    }, 50);

  },[setLang])

  useEffect(() => {

    const Loaddatas = async () => {

      const id = routers.query.id
    
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
          
          var list_obj = {id:id,list:leage};

          setDefaults(list_obj);
          //return {id:id,list:leage}

              
          
    }

    Loaddatas();

  },[setDefaults])

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
 
  if(defaults !== undefined){


    {
      defaults.id === "d-3"  ? navDates[0] = { id: "1", date: datee(-3), route: "/soccer/programs/d-3", today: true } 
      :
      defaults.id === "d-2"  ? navDates[1] = { id: "2", date: datee(-2), route: "/soccer/programs/d-2", today: true } 
      :
      defaults.id === "d-1"  ? navDates[2] = { id: "3", date: datee(-1), route: "/soccer/programs/d-1", today: true } 
      :
      defaults.id === "d1"  ? navDates[4] = { id: "5", date: datee(1), route: "/soccer/programs/d1", today: true } 
      : 
      defaults.id === "d2"  ? navDates[5] = { id: "6", date: datee(2), route: "/soccer/programs/d2", today: true } 
      :
      defaults.id === "d3"  ? navDates[6] = { id: "7", date: datee(3), route: "/soccer/programs/d3", today: true } 
      :
      navDates[3] = { id: "4", date: datee(0), route: "/", today: true }
    }
  
    {
      defaults.id === "d-2" ? navDatemobile[0] = { id: "1", date: datee(-2), route: "/soccer/programs/d-2", today: true } 
      :
      defaults.id === "d-1" ? navDatemobile[1] = { id: "2", date: datee(-1), route: "/soccer/programs/d-1", today: true } 
      :
      defaults.id === "d1"  ? navDatemobile[3] = { id: "4", date: datee(1), route: "/soccer/programs/d1", today: true } 
      :
      defaults.id === "d2"  ? navDatemobile[4] = { id: "5", date: datee(2), route: "/soccer/programs/d2", today: true } 
      :
      navDatemobile[2] = { id: "3", date: datee(0), route: "/", today: true }
    }
  
  
    
  }

  
  return (

    <Layout className="px-0 px-md-3">

        <HeaderSeo
        siteName=""
        title={`คู่บอลเตะ ${props.text}`}
        desc={`คู่บอลเตะ พร้อมข้อมูลทีมแต่ละลีกทั่วโลก ${props.text}`}
        imgSrc=""
        metaUrl=""
        keyWords="ผลบอล, live score, ผลบอลสด, ไฮไลท์ฟุตบอล"
        author=""
        />
         <BannerInner />
        <div className="d-none d-md-block mainf-tab">
          {/*<img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
          <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />*/}
          <NavDate 
            DataDate={navDates}
            onClickLeft={() => console.log("left")}
            onClickRight={() => console.log("right")}
          />
         <div ref={myRef}></div>
        
         {
          (defaults !== undefined) ?
            defaults.list[0].sortdata.category.slice(0,7).map((res,value) => (

                 <div key={value.toString()}> 
                      <TableBattle  
                      className="highlight bg-secondary text-white"
                      title={res['@name']}
                      data={res.matches.match}
                      highlight={true} 
                      exam = {res['@id']}
                      after = {handdleClickAfterload}
                      th = {lang}
                      />
                      
                  </div>
                  
            ))
          :<center><h1>Loading .....</h1></center>
         }

        {
          (defaults !== undefined) ? 
              defaults.list[0].sortdata.category.slice(8).map((res,value) => (

                  <div key={value.toString()}> 
                        <TableBattle  
                        className="highlight bg-secondary text-white"
                        title={res['@name']}
                        data={res.matches.match}
                        highlight={true} 
                        exam = {res['@id']}
                        after = {handdleClickAfterload}
                        th = {lang}
                        />
                        
                    </div>
                    
              ))
          :null
          
         }
        </div>

         {

          <div className="d-block d-md-none">
                  <div className="banner px-3">

                      {/*<img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
                      <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />*/}

                  </div>
                  <NavDate 
                      DataDate={navDatemobile}
                      onClickLeft={() => console.log("left")}
                      onClickRight={() => console.log("right")}
                    />
                      
                      {
                        
                      (defaults !== undefined) ?
                          defaults.list[0].sortdata.category.map((res,value) => (
                                  <div key={value.toString()}>
                                        <TableBattleMobile 
                                          title={res['@name']}
                                          data={res.matches.match}
                                          highlight={false}
                                          exam = {res['@id']}
                                          after = {handdleClickAfterload}
                                          th = {lang}
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

   const {id} = query;
   var txtdate= null;
   
    id === "d-3"  ? txtdate = "ย้อนหลัง 3 วัน" 
    :
    id === "d-2"  ? txtdate = "ย้อนหลัง 2 วัน" 
    :
    id === "d-1"  ? txtdate = "ย้อนหลัง 1 วัน" 
    :
    id === "d1"  ? txtdate = "ล่วงหน้า 1 วัน" 
    : 
    id === "d2"  ? txtdate = "ล่วงหน้า 2 วัน" 
    :
    id === "d3"  ? txtdate = "ล่วงหน้า 3 วัน" 
    :
    txtdate = "วันนี้"
  
    return {text:txtdate}
  
}

export default Homefilter;

