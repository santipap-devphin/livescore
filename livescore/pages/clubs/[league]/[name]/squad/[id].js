import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/router'
import HeaderSeo from "../../../../../shared/commons/HeaderSeo"
import Avatar from "../../../../../shared/commons/Avatar"
import LayoutSidebarClub from "../../../../../shared/container/LayoutSidebarClub"
import SquadPlayerTable from "../../../../../shared/components/SquadPlayerTable"

import liverpool from "../../../../../mock/liverpool"

const Squad = (props) => {

 const router = useRouter()
 const gk = [];
 const md = [];
 const sk = [];
 const def = [];

 let idd = router.query && router.query.id

 const [ldata, setData] = useState();
 const [load, setLoad] = useState(false);

 useEffect(()=>{
    
    setData(props.listdata);
    setLoad(true);
 })


 props.players.player.map((sq,index) => (
    (sq["@position"] === "G") ?  gk.push(sq) : (sq["@position"] === "M") ? md.push(sq) : (sq["@position"] === "A") ? sk.push(sq) : def.push(sq)
))


 //setData(props.listdata)
 //setLoad(true)
 /*const loaddata = async (ctx) => {

    const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccerstats/team/${idd}?json=1`)
    const data = await res.json()

    setLoad(true)
    setData(data)
    
  }*/

 // loaddata() 
  //console.log(ldata)
  


  return (
    <LayoutSidebarClub>
      <HeaderSeo
        siteName=""
        title="live score"
        desc=""
        imgSrc=""
        metaUrl=""
        keyWords=""
        author=""
      />
      
      <h1 className="text-uppercase border-bottom pb-3">SQUAD</h1>
      { 
       
      (load !== false) ? 
      <div>
      <div className="mb-5">
        
        <h2 className="text-dark pt-4 pb-3">Coach</h2>
        <div className="media align-items-center">
              <img 
                width={30}
                height={30}
                src={""}
                alt={ldata["@name"]}
                className="rounded-circle mx-2"
              />
              <div className="media-body">
                  {ldata["@name"]}
              </div>
            </div>
      </div>
      
        <SquadPlayerTable title="Goalkeeper" plyers={gk} />  
        <SquadPlayerTable title="Defender" plyers={def} />
        <SquadPlayerTable title="Midfielders" plyers={md} />
        <SquadPlayerTable title="Strikers" plyers={sk} />
    
     
      </div>
       : 
       <div>load......</div>

      }
      
    </LayoutSidebarClub>
  );
};

Squad.getInitialProps = async ({query}) => {

 

    const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccerstats/team/${query.id}?json=1`)
  
    const json = await res.json()

     return { 
                listdata: json.teams.team.coach ,
                players : json.teams.team.squad, 
             }

  }

export default Squad;
