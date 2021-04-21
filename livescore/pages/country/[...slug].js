import React from 'react'
import { useRouter } from 'next/router'
import { useState,useEffect ,useRef } from 'react'
import Link from 'next/link'
import Layout from "../../shared/container/Layout"
import HeaderSeo from "../../shared/commons/HeaderSeo"
import NavDate from "../../shared/commons/NavDate"
import TableBattle from "../../shared/commons/TableBattle"
import TableBattleMobile from "../../shared/commons/TableBattleMobile"

const Countrys = (props) => {
    const router = useRouter()
    const slug = router.query.slug || []
    const myRef = useRef(null)
   
    const [datas, setDatas] = useState(false);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');
    const [lang , setLang] = useState([]);
    const [sectiontwo , setSectiontwo] = useState(false);
    
    let teamth = [];
    console.log(props)
  
    function datee(nextday){
  
      const today = new Date()
      const tomorrow = new Date(today)
  
      tomorrow.setDate(tomorrow.getDate()+nextday)
  
      const neww = String(tomorrow);
  
      const newsdate = neww.split(" ");
  
      const newsformat = newsdate[1] + " " +newsdate[2];
  
      
      return newsformat;
  
      }
      const handdleClickAfterload = (e) => {
  
        e.preventDefault();
    
        setDatas(false);
    
        myRef.current.scrollIntoView()
    
        //window.scrollTo(3000, 20)
    
      }
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
          setDatas(true);
          
        
        }, 100);
    
      },[setLang])
      
      let navDate = [
          { id: "1",pathid:"d-3", date: datee(-3), route: `/country/${slug[0]}/d-3`, today: false },
          { id: "2",pathid:"d-2", date: datee(-2), route: `/country/${slug[0]}/d-2`, today: false },
          { id: "3",pathid:"d-1", date: datee(-1), route:`/country/${slug[0]}/d-1`, today: false },
          { id: "4",pathid:"today", date: datee(0), route: `/country/${slug[0]}/today`, today:false  },
          { id: "5",pathid:"d1", date: datee(1), route: `/country/${slug[0]}/d1`, today: false },
          { id: "6",pathid:"d2", date: datee(2), route: `/country/${slug[0]}/d2`, today: false },
          { id: "7",pathid:"d3", date: datee(3), route: `/country/${slug[0]}/d3`, today: false }
        ]
  
        // console.log(navDate)
        slug[1] === "d-3" ? navDate[0].today = true 
        :
        slug[1] === "d-2" ? navDate[1].today = true 
        :
        slug[1] === "d-1" ? navDate[2].today = true 
        :
        slug[1] === "d1" ? navDate[4].today = true 
        :
        slug[1] === "d2" ? navDate[5].today = true
        :
        slug[1] === "d3" ? navDate[6].today = true
        :
        navDate[3].today = true

        useEffect(() => {

            myRef.current.scrollIntoView()
            setTimeout(function(){
              setLoad(true)
            }, 1500)
            
          })
   
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
          <div className="d-none d-md-block mainf-tab">
            <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
            <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
         <NavDate 
          DataDate={navDate}
          onClickLeft={() => console.log("left")}
          onClickRight={() => console.log("right")}
         
        />
         <div ref={myRef}></div> 
  
          {
            load !== false ?
            props.listdata.length > 0 ?
            props.listdata.map((res,val) => (
           
              
                    <div key={val.toString()}>
                            <TableBattle  
                            className="highlight bg-secondary text-white"
                            title={res['@name']}
                            data={res.matches.match}
                            highlight={false} 
                            exam = {res['@id']}
                            after = {handdleClickAfterload}
                            th = {lang}
                            />
                        </div> 
                
            
  
            ))
          :<center><h1>ไม่มีข้อมูล</h1></center>
          :<center><h1>Loading ......</h1></center>  
          }
  
          </div>
  
          <div className="d-block d-md-none mainf-tab">
                    <div className="banner px-3">
  
                        <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
                        <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
  
                    </div>
  
                    {   
                        load !== false ?
                        props.listdata.length > 0 ?
                        props.listdata.map((res,val) => (
                         
                          
                          <div key={val.toString()}>
  
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
                        :<center><h1>ไม่มีข้อมูล</h1></center>
                        :<center><h1>Loading ......</h1></center>   
                      }
  
  
          </div>
  
         </Layout>
       
      
       
      </>
    )
  }
  Countrys.getInitialProps = async ({query}) => {
  
     let lslug =  query.slug;
     var objj = [];
  
     if(lslug[1] === "today" || lslug[1] === "undefined"){
  
      const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/home?json=1`)
      const data = await res.json()

      for(var i =0; i < data.scores.category.length; i++)
      {
            if(lslug[0] === data.scores.category[i]["@file_group"]){

                objj.push(data.scores.category[i]);

            }


      }
      return { 
          listdata: objj
        }
  
     }else{
  
      const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/${lslug[1]}?json=1`)
      const data = await res.json()

      for(var i =0; i < data.scores.category.length; i++)
      {
            if(lslug[0] === data.scores.category[i]["@file_group"]){

                objj.push(data.scores.category[i]);

            }


      }
  
      return { 
          listdata: objj
        }
  
     }
  
  }
  
  export default Countrys