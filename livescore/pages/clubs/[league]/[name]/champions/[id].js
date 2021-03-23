import React from 'react';
import HeaderSeo from "../../../../../shared/commons/HeaderSeo"
import SevenColCups from "../../../../../shared/commons/SevenColCups"
import LayoutSidebarClub from "../../../../../shared/container/LayoutSidebarClub"

const Champions = (props) => {

  const League = [];
  const d1 = [];
  const Cup = [];

  props.trop.trophy.map((sq,index) => (
    (sq["@status"] === "Winner") ?

       League.push(sq) : 
      
      <div></div>
  ))
    
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
