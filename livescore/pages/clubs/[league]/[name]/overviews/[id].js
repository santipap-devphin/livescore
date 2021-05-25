import React,{ Component ,useState, useEffect } from 'react';
import dynamic from 'next/dynamic'
import fetch from 'isomorphic-unfetch'
const HeaderSeo = dynamic(() => import('../../../../../shared/commons/HeaderSeo'));
const LayoutSidebarClub = dynamic(() => import('../../../../../shared/container/LayoutSidebarClub'));

import OverViewMatchesTable from "../../../../../shared/components/OverViewMatchesTable"
import OverViewStatsTable from "../../../../../shared/components/OverViewStatsTable"
import OverViewInjuredTable from "../../../../../shared/components/OverViewInjuredTable"
import { useRouter } from 'next/router'


import { AiOutlineSwapRight } from "react-icons/ai";

import liverpool from "../../../../../mock/liverpool"


const Apitest = (props) => {

  const [items, setItems] = useState();
  const [load, setLoad] = useState(false);
  const [loadSq, setSq] = useState(false);
  const [squad, setSquad] = useState();
  const router = useRouter()
  const sppasth = router.asPath.split("/");
 

  const loadData = async (idd) => {

    console.log(idd)

    const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccerfixtures/data/${idd}?json=1`)
    const data = await res.json()

    setItems(data);
    setLoad(true)
    //return {fixture:data}

  }
    
 useEffect(() => {
    
    if(props.home.teams.team.country === "England"){
        
              loadData("1204");
    }
   else if(props.home.teams.team.country === "Spain"){
              loadData("1399");
   }
   else if(props.home.teams.team.country === "Germany"){
              loadData("1229");
   }
   else if(props.home.teams.team.country === "Italy"){
              loadData("1269");
   }
   else if(props.home.teams.team.country === "France"){
              loadData("1221");
   }
   else if(props.home.teams.team.country === "Netherlands"){
              loadData("1322");
  }
  else if(props.home.teams.team.country === "Japan"){
              loadData("1271");
  }
  }, []);

  useEffect(() => {
    
    setSquad(props.home.teams.team.squad.player);
    setSq(true);


  });


  return (
    <LayoutSidebarClub>

      <HeaderSeo
        siteName="clubsoverview"
        title={`ข้อมูลภาพรวมทีม  ${sppasth[3]}` }
        desc={`ข้อมูลทีม ${sppasth[3]} รายชื่อนักเตะ ชื่อนักเตะบาดเจ็บ จำนวนยิงประตู`}
        imgSrc=""
        metaUrl=""
        keyWords={`ข้อมูลทั้งหมดของทีม ${sppasth[3]}`}
        author=""
      />
        <img src={`data:image/jpeg;base64,${props.home.teams.team.image}`}  style={{display: "none"}}  alt={`รูปภาพ ${sppasth[3]}`}/>
        <p style={{display: "none"}}>{props.home.teams.team.squad.player.length}</p>
      
        
        <h1>ผู้จัดการทีม {props.home.teams.team.coach["@name"]}</h1>
        <h2>อันดับตารางปัจจุบัน {props.home.teams.team.leagues["@league_rank"]}</h2>
        <p>ประเทศ {props.home.teams.team.country}</p>
        <p>ชื่อสนามฟุตบอล {props.home.teams.team.venue_name}</p>
        <p>ที่อยู่ {props.home.teams.team.venue_address["#cdata-section"]}</p>
        <p>เมือง {props.home.teams.team.venue_city["#cdata-section"] }</p>
        <p>ความจุสนาม {props.home.teams.team.venue_capacity}</p>
        <img src={`data:image/jpeg;base64,${props.home.teams.team.venue_image}`} style={{width: "100%"}} alt={`รูปภาพสนาม ${sppasth[3]}`}/>
        <p>{}</p>
        <br />
        <br />
        {/*<button className="text-read-more mt-3 mb-3">
          Readmore <AiOutlineSwapRight className="ml-2" />
          </button>*/}

        {(load !== false ? <OverViewMatchesTable plyers={liverpool[0].strikers} fixture={items}  /> :" Loading .....") }
        

        {(loadSq !== false ? <OverViewStatsTable title="ค่าเฉลี่ยรวม" players={squad} /> :" Loading .....")}
        

        {
          (props.home.teams.team.sidelined !== null) ? <OverViewInjuredTable title="นักเตะมีอาการบาดเจ็บ" plyers={props.home.teams.team.sidelined.player}/>
          :null
        }
        

    

    </LayoutSidebarClub>
  );


}
Apitest.getInitialProps = async ({ query }) => {

  const { id } = query

  const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccerstats/team/${id}?json=1`)
  const data = await res.json()

  return {home:data}

}

export default Apitest;
