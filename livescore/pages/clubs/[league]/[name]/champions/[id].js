import React from 'react';
import { useRouter } from 'next/router'
import HeaderSeo from "../../../../../shared/commons/HeaderSeo"
import SevenColCups from "../../../../../shared/commons/SevenColCups"
import LayoutSidebarClub from "../../../../../shared/container/LayoutSidebarClub"

const Champions = (props) => {

  const router = useRouter()
  const sppasth = router.asPath.split("/");

  const League = [];
  const d1 = [];
  const Cup = [];
  
  if(Array.isArray(props.trop.trophy) === true){

    props.trop.trophy.map((sq,index) => (
      (sq["@status"] === "Winner") ?
  
         League.push(sq) : 
        
        <div></div>
    ))

  }else{

    

  }
 
    
  return (
    <LayoutSidebarClub>
      <HeaderSeo
        siteName="clubsoverview"
        title={`จำนวนแชมป์ของ  ${sppasth[3]}` }
        desc={`แชมป์ทั้งหมดของทีม ${sppasth[3]}`}
        imgSrc=""
        metaUrl=""
        keyWords={`ข้อมูลรวมจำนวนถ้วยรางวัล ${sppasth[3]}`}
        author=""
      />

      <img src={`data:image/jpeg;base64,${props.img}`}  style={{display: "none"}} />
      <h1 className="text-uppercase border-bottom pb-3">Champions</h1>
      
      { 
          League.map((fifa, index) => (

           <SevenColCups cups={fifa} key={index} title= {fifa["@league"] + " " +"("+fifa["@count"]+")"} />

          ))
      
       }
    
    </LayoutSidebarClub>
  );
};

Champions.getInitialProps = async ({query}) => {

    const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccerstats/team/${query.id}?json=1`)
  
    const json = await res.json()

     return { 
                trop: json.teams.team.trophies,
                img : json.teams.team.image
            }

  }
export default Champions;
