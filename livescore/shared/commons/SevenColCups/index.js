import React from 'react';
import PropTypes from 'prop-types';
import {SevenColCupsStyle} from "./style"
import Avatar from "../Avatar"


const SevenColCups = ({ title, cups }) => {
 
  let neww = []

  function check_for_img(titlee){

    var imgg;

     if(titlee.indexOf("Premier League") > -1){

      imgg = "/assets/cups/Premier League.png";

     }
     else if(titlee.indexOf("League Cup") > -1){
      imgg = "/assets/cups/League Cup.png";
    }
    else if(titlee.indexOf("Emirates Cup") > -1){
      imgg = "/assets/cups/facup.png";
    }
    else if(titlee.indexOf("UEFA Cup") > -1){
      imgg = "/assets/cups/003_uffa_supercup_winner@2x.png";
    }
    else if(titlee.indexOf("FA Cup") > -1){
      imgg = "/assets/cups/facup.png";
    }
    else if(titlee.indexOf("Community Shield") > -1){
      imgg = "/assets/cups/Community Shield.png";
    }
    else if(titlee.indexOf("Championship") > -1){
      imgg = "/assets/cups/Championship.png";
    }else if(titlee.indexOf("UEFA Champions League") > -1){
      imgg = "/assets/cups/004_champoins_leaguge_winner@2x.png";
    }
    else if(titlee.indexOf("UEFA Europa League") > -1){
      imgg = "/assets/cups/008_uffa_cup_winner@2x.png";
    }
    else if(titlee.indexOf("UEFA Super Cup") > -1){
      imgg = "/assets/cups/003_uffa_supercup_winner@2x.png";
    }
    else if(titlee.indexOf("FIFA Club World Cup") > -1){
      imgg = "/assets/cups/001_fifa_club_world_cup_winner@2x.png";
    }
    else if(titlee.indexOf("League One") > -1){
      imgg = "/assets/cups/League-One.png";
    }
    else if(titlee.indexOf("League Two") > -1){
      imgg = "/assets/cups/League-Two.png";
    }
    else if(titlee.indexOf("Inter Continental Cup") > -1){
      imgg = "/assets/cups/Intercontinental_cup.png";
    }
    else if(titlee.indexOf("International Champions Cup") > -1){
      imgg = "/assets/cups/International-Champions-Cup.png";
    }
    else if(titlee.indexOf("EFL Trophy") > -1){
      imgg = "/assets/cups/EFL-Trophy.png";
    }
    else if(titlee.indexOf("Audi Cup") > -1){
      imgg = "/assets/cups/Audi-Cup.png";
    }
    else if(titlee.indexOf("La Liga") > -1){
      imgg = "/assets/cups/La-Liga.png";
    }
    else if(titlee.indexOf("Copa del Rey") > -1){
      imgg = "/assets/cups/Copa-del-Rey.png";
    }
    else if(titlee.indexOf("Super Cup") > -1){
      imgg = "/assets/cups/spanish-super-cup.png";
    }
    else if(titlee.indexOf("Segunda División") > -1){
      imgg = "/assets/cups/Segunda-Div.png";
    }
    else if(titlee.indexOf("Copa Catalunya") > -1){
      imgg = "/assets/cups/Copa-Catalunya.png";
    }
    else if(titlee.indexOf("Segunda B") > -1){
      imgg = "/assets/cups/Copa-Catalunya.png";
    }
    else if(titlee.indexOf("Supercopa Euroamericana") > -1){
      imgg = "/assets/cups/SupercopaEuroamericana.png";
    }
    else if(titlee.indexOf("Bundesliga") > -1){
      imgg = "/assets/cups/bundesliga.png";
    }
    else if(titlee.indexOf("Liga") > -1){
      imgg = "/assets/cups/liga.png";
    }
    else if(titlee.indexOf("DFB Pokal") > -1){
      imgg = "/assets/cups/DFB-Pokal.png";
    }
    else if(titlee.indexOf("Serie B") > -1){
      imgg = "/assets/cups/Serie-B.png";
    }
    else if(titlee.indexOf("Coppa Italia") > -1){
      imgg = "/assets/cups/Coppa-Italia.png";
    }
    else if(titlee.indexOf("Serie A") > -1){
      imgg = "/assets/cups/seriea.png";
    }
    else if(titlee.indexOf("Ligue 1") > -1){
      imgg = "/assets/cups/Ligue-1.png";
    }
    else if(titlee.indexOf("Ligue 2") > -1){
      imgg = "/assets/cups/Ligue-2.png";
    }
    else if(titlee.indexOf("Coupe de France") > -1){
      imgg = "/assets/cups/Coupe_de_France_trophy.png";
    }
    else if(titlee.indexOf("Coupe de la Ligue") > -1){
      imgg = "/assets/cups/Coupe-de-la-Ligue.png";
    }
    else if(titlee.indexOf("Trophée des Champions") > -1){
      imgg = "/assets/cups/Troph-des-Champions.png";
    }
    else if(titlee.indexOf("Eredivisie") > -1){
      imgg = "/assets/cups/eredivisie.png";
    }
    else if(titlee.indexOf("Eerste Divisie") > -1){
      imgg = "/assets/cups/eerstedivisie.png";
    }
    else if(titlee.indexOf("J1 League") > -1){
      imgg = "/assets/cups/j1league.png";
    }
    else if(titlee.indexOf("Emperor Cup") > -1){
      imgg = "/assets/cups/emperorcup.png";
    }
    else if(titlee.indexOf("J2 League") > -1){
      imgg = "/assets/cups/j2league.png";
    }
    else if(titlee.indexOf("Thai League 1") > -1){
      imgg = "/assets/cups/Thai_premier_league_trophy.png";
    }
    
    else{
      imgg = "/assets/cups/default.png";
    }
     
     return imgg;

  }

  //console.log(cups["@league"])
  
  if(cups["@seasons"].indexOf(",") >-1){

    let newsstr = cups["@seasons"].split(",")
    
    for(var i = 0; i < newsstr.length; i++) {
      // Trim the excess whitespace.
      newsstr[i] = newsstr[i].replace(/^\s*/, "").replace(/\s*$/, "");
      // Add additional code here, such as:
      
      //neww = {title:newsstr[i]}
      neww.push(newsstr[i])
      
     
   }
   


  }else{

    neww.push(cups["@seasons"])

  }

  
 

  return (
    <SevenColCupsStyle className="w-100 mb-3">
      <h3 className="title-cups py-3">{title}</h3>
      <div className="row seven-cols">
        {console.log(title)}
       {console.log(check_for_img(title))}
        {
           /*<div className="col-md-1 px-2 pb-3">
           <div className="p-3 border rounded text-center">
             <Avatar 
               size={50}
               src={cup.img}
               alt={title+cup.years }
               shape="square"
               className="d-block mx-auto"
             />
             
             <span>{cup.years}</span>
           </div>
         </div>*/
        }

        {
          neww.map((cup, index) => (
          
            <div className="col-md-1 px-2 pb-3" key={index.toString()}>
              {/*console.log(cup)*/}
              <div className="p-3 border rounded text-center">
                <Avatar 
                  size={50}
                  src={check_for_img(title)}
                  alt={/*title+cup.years*/ ""}
                  shape="square"
                  className="d-block mx-auto"
                />
                <span>{cup}</span>
              </div>
            </div>
            
          ))
        }
      </div>
    </SevenColCupsStyle>
  );
};


SevenColCups.propTypes = {
  title: PropTypes.string,
};
SevenColCups.defaultProps = {
  title: "FIFA Club World Cup winner ( X1 )"
}

export default SevenColCups;
