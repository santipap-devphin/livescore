import React, { useState ,useEffect } from 'react';
import HeaderSeo from "../../../../shared/commons/HeaderSeo"
import Layout from "../../../../shared/container/Layout"
import Battle from "../../../../shared/commons/Battle"
import { useRouter } from 'next/router'
import Breadcrumb from "../../../../shared/commons/Breadcrumb"
import Button from "../../../../shared/commons/Button"
import VotedBar from "../../../../shared/components/VotedBar"
import InputGroup from "../../../../shared/commons/InputGroup"
import NavMatch from "../../../../shared/components/NavMatch"
import MatchIonfo from "../../../../shared/components/MatchIonfo"
import MatchSummary from "../../../../shared/components/MatchSummary"
import TopLiveSoccerContent from "../../../../shared/components/TopLiveSoccerContent"
import {TableOdds} from "../../../../shared/components/TableOdds"
import {Accordion} from "../../../../shared/components/Accordion"
import { isIE } from 'react-device-detect';

const PremierLeague = (props ,{ }) => {
  
  function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
  }

  let btnstyles = {
    background: '#710000',
    background: '-webkit-linear-gradient( 0deg, #710000 0%, #af0000 100%)',
    background: '-webkit-linear-gradient(bottom, #710000 0%, #af0000 100%)',
    background: 'linear-gradient( 0deg, #710000 0%, #af0000 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#710000",endColorstr="#af0000",GradientType=1)',
    color: '#ffffff',
    width: '100%',
    fontSize :'20px',
  
  };
 

  const router = useRouter()
  const [defalut, setDefalut] = useState(props);
  const [ldata, setLdata] = useState(null);
  const [errs, setErrs] = useState(false);
  const [Lbtn , setLbtn] = useState(false);
  const [opens, setOpens] = useState(false);
  const [listOdds , setOdds] = useState([]);
  const [listOddsUnder , setOddsUnder] = useState([]);
  const [oddsLoad , setoddsLoad] = useState(false);


  var obj = {};
  var title_obj = {}; 
  var events = [];
  let data;
  let numm = 0;
  var listoddss = [];
  var listoddsunder = [];

  const handdleClickOddsetc = (e) => {

    e.preventDefault();
    setLbtn(true);

    for(var i = 0; i < ldata.odds.length; i++){


      if(ldata.odds[i].id !== "1" && ldata.odds[i].id !== "4" && ldata.odds[i].id !== "5" && ldata.odds[i].id !== "22627"){

          
          if(ldata.odds[i].id === "2" 
          || ldata.odds[i].id === "3" 
          || ldata.odds[i].id === "13" 
          || ldata.odds[i].id === "14" 
          || ldata.odds[i].id === "15" 
          || ldata.odds[i].id === "16" 
          || ldata.odds[i].id === "17" 
          || ldata.odds[i].id === "222" 
          || ldata.odds[i].id === "2102" 
          || ldata.odds[i].id === "2224"
          || ldata.odds[i].id === "2225"
          || ldata.odds[i].id === "2293"
          || ldata.odds[i].id === "22602"
          || ldata.odds[i].id === "22603"
          || ldata.odds[i].id === "22604"
          || ldata.odds[i].id === "22605"
          || ldata.odds[i].id === "22607"
          || ldata.odds[i].id === "22608"
          || ldata.odds[i].id === "22609"
          || ldata.odds[i].id === "22610"
          || ldata.odds[i].id === "22611"
          || ldata.odds[i].id === "22612"
          || ldata.odds[i].id === "22613"
          || ldata.odds[i].id === "22615"
          || ldata.odds[i].id === "22618"
          || ldata.odds[i].id === "22622"
          || ldata.odds[i].id === "22623"
          || ldata.odds[i].id === "22626"
          || ldata.odds[i].id === "22713"
          || ldata.odds[i].id === "22833"
          || ldata.odds[i].id === "22844"
          || ldata.odds[i].id === "22949"
          || ldata.odds[i].id === "22950"
          || ldata.odds[i].id === "23147"
          ){
            
            listoddss.push(ldata.odds[i]);
          }
          else if(
          ldata.odds[i].id === "5" 
          || ldata.odds[i].id === "6" 
          || ldata.odds[i].id === "7" 
          || ldata.odds[i].id === "22124"
          || ldata.odds[i].id === "22125"
          || ldata.odds[i].id === "22600"
          || ldata.odds[i].id === "22601"
          || ldata.odds[i].id === "22621"
          || ldata.odds[i].id === "22644"
          || ldata.odds[i].id === "22836"
          || ldata.odds[i].id === "22837"
          || ldata.odds[i].id === "22841"
          || ldata.odds[i].id === "22842"
          || ldata.odds[i].id === "22843"
          || ldata.odds[i].id === "22850"
          || ldata.odds[i].id === "22905"
          || ldata.odds[i].id === "22906"
          || ldata.odds[i].id === "22907"
          || ldata.odds[i].id === "22956"
          || ldata.odds[i].id === "22957"
          || ldata.odds[i].id === "22958"
          || ldata.odds[i].id === "22959"
          || ldata.odds[i].id === "22960"
          || ldata.odds[i].id === "22961"
          || ldata.odds[i].id === "23119"
          || ldata.odds[i].id === "23120"
          || ldata.odds[i].id === "23121"
          || ldata.odds[i].id === "23121"
          ){

               listoddsunder.push(ldata.odds[i]);
          }
     }


    }

    setOdds(listoddss);
    setOddsUnder(listoddsunder)

    setoddsLoad(true);

   
    


  }
  const handdleClickOddhidec = (e) => {

    e.preventDefault();
    setLbtn(false);
    setoddsLoad(false)

  }

 
  const loadods = async (param,param2) => {

    const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/getodds/soccer?cat=soccer_10&league=${param2}&json=1`)
    const data = await res.json()

    for(var i = 0; i < data.scores.categories.length; i++)
    {
               if(Array.isArray(data.scores.categories[i].matches) === true){

               
                for(var j = 0; j < data.scores.categories[i].matches.length; j++)
                {
                   //console.log(data.scores.categories[i].matches[j])
                   if(data.scores.categories[i].matches[j].static_id === param){
                          setLdata(data.scores.categories[i].matches[j])

                   }

                }


               }else{

                      setLdata(data.scores.categories[i].matches)

               }
     }
     setErrs(true)
     
  }


if(props.check === 1){

   //console.log(defalut.sleague)
//loadingdata();
       if(Array.isArray(defalut.sleague.matches.match) === true){ 

         for(var i = 0; i < defalut.sleague.matches.match.length; i++){


          if(defalut.sleague.matches.match[i].events !== null){

                  obj = {event:props.check}
    
                  title_obj = {"title":defalut.sleague.matches.match[i]["@status"]};
    
           
                  if(Array.isArray(defalut.sleague.matches.match[i].events.event) === true){
    
    
                    for(var j =0; j< defalut.sleague.matches.match[i].events.event.length; j++){
    
    
                      //console.log(defalut.sleague.matches.match.events.event[i])
    
                      events.push({
                                  "@player":defalut.sleague.matches.match[i].events.event[j]["@player"],
                                  "@assist_id":defalut.sleague.matches.match[i].events.event[j]["@assistid"],
                                  "@minute":defalut.sleague.matches.match[i].events.event[j]["@minute"],
                                  "@extra_min":defalut.sleague.matches.match[i].events.event[j]["@extra_min"],
                                  "@owngoal":"",
                                  "@var_cancelled":"",
                                  "@penalty":"",
                                  "@id":defalut.sleague.matches.match[i].events.event[j]["@playerId"],
                                  "@assist":defalut.sleague.matches.match[i].events.event[j]["@assist"],
                                  "@team":defalut.sleague.matches.match[i].events.event[j]["@team"],
                                  "@type":defalut.sleague.matches.match[i].events.event[j]["@type"]
                        
                              })
    
    
                    }
    
    
                  }else{
    
                    events.push({
                      "@player":defalut.sleague.matches.match[i].events.event["@player"],
                      "@assist_id":defalut.sleague.matches.match[i].events.event["@assist_id"],
                      "@minute":defalut.sleague.matches.match[i].events.event["@minute"],
                      "@extra_min":defalut.sleague.matches.match[i].events.event["@extra_min"],
                      "@owngoal":"",
                      "@var_cancelled":"",
                      "@penalty":"",
                      "@id":defalut.sleague.matches.match[i].events.event["@playerId"],
                      "@assist":defalut.sleague.matches.match[i].events.event["@assist"],
                      "@team":defalut.sleague.matches.match[i].events.event["@team"],
                      "@type":defalut.sleague.matches.match[i].events.event["@type"]
            
                  })
    
                  }
    
    
                events.sort(function(a, b) {
                    //console.log(a["@minute"])
                    return a["@minute"] - b["@minute"];
                });
            
          }
          else{
    
              obj = {event:"nodata"}
          }



         }



       }else{

        if(defalut.sleague.matches.match.events !== null){

          obj = {event:props.check}
  
          title_obj = {"title":defalut.sleague.matches.match["@status"]};
  
         
                if(Array.isArray(defalut.sleague.matches.match.events.event) === true){
  
  
                  for(var i =0; i< defalut.sleague.matches.match.events.event.length; i++){
  
  
                    //console.log(defalut.sleague.matches.match.events.event[i])
  
                    events.push({
                                "@player":defalut.sleague.matches.match.events.event[i]["@player"],
                                "@assist_id":defalut.sleague.matches.match.events.event[i]["@assistid"],
                                "@minute":defalut.sleague.matches.match.events.event[i]["@minute"],
                                "@extra_min":defalut.sleague.matches.match.events.event[i]["@extra_min"],
                                "@owngoal":"",
                                "@var_cancelled":"",
                                "@penalty":"",
                                "@id":defalut.sleague.matches.match.events.event[i]["@playerId"],
                                "@assist":defalut.sleague.matches.match.events.event[i]["@assist"],
                                "@team":defalut.sleague.matches.match.events.event[i]["@team"],
                                "@type":defalut.sleague.matches.match.events.event[i]["@type"]
                      
                            })
  
  
                  }
  
  
                }else{
  
                  events.push({
                    "@player":defalut.sleague.matches.match.events.event["@player"],
                    "@assist_id":defalut.sleague.matches.match.events.event["@assist_id"],
                    "@minute":defalut.sleague.matches.match.events.event["@minute"],
                    "@extra_min":defalut.sleague.matches.match.events.event["@extra_min"],
                    "@owngoal":"",
                    "@var_cancelled":"",
                    "@penalty":"",
                    "@id":defalut.sleague.matches.match.events.event["@playerId"],
                    "@assist":defalut.sleague.matches.match.events.event["@assist"],
                    "@team":defalut.sleague.matches.match.events.event["@team"],
                    "@type":defalut.sleague.matches.match.events.event["@type"]
          
                })
  
                }
  
  
              events.sort(function(a, b) {
                  //console.log(a["@minute"])
                  return a["@minute"] - b["@minute"];
              });
          
        }
        else{
  
            obj = {event:"nodata"}
        }


       }

       



}else{

  if(typeof router.query.event === "undefined"){

    
    obj = {event:"reload","summary":props.league.match.summary};
    title_obj = {"title":props.league.match["@status"]};

     if(obj.summary !== null){



      if(obj.summary.localteam.goals !== null){

        if(Array.isArray(obj.summary.localteam.goals.player) === true){
    
    
          for(var i =0; i< obj.summary.localteam.goals.player.length; i++)
            {
              
             
              //events.push(obj.summary.localteam.goals.player[i])
              events.push({
                            "@name":obj.summary.localteam.goals.player[i]["@name"],
                            "@assist_id":obj.summary.localteam.goals.player[i]["@assist_id"],
                            "@minute":obj.summary.localteam.goals.player[i]["@minute"],
                            "@extra_min":obj.summary.localteam.goals.player[i]["@extra_min"],
                            "@owngoal":obj.summary.localteam.goals.player[i]["@owngoal"],
                            "@var_cancelled":obj.summary.localteam.goals.player[i]["@var_cancelled"],
                            "@penalty":obj.summary.localteam.goals.player[i]["@penalty"],
                            "@id":obj.summary.localteam.goals.player[i]["@id"],
                            "@assist_name":obj.summary.localteam.goals.player[i]["@assist_name"],
                            "@team":"localteam",
                            "@type":"goal"
                            
                          })
    
            }
    
    
        }
        else{
  
          events.push({
                      "@name":obj.summary.localteam.goals.player["@name"],
                      "@assist_id":obj.summary.localteam.goals.player["@assist_id"],
                      "@minute":obj.summary.localteam.goals.player["@minute"],
                      "@extra_min":obj.summary.localteam.goals.player["@extra_min"],
                      "@owngoal":obj.summary.localteam.goals.player["@owngoal"],
                      "@var_cancelled":obj.summary.localteam.goals.player["@var_cancelled"],
                      "@penalty":obj.summary.localteam.goals.player["@penalty"],
                      "@id":obj.summary.localteam.goals.player["@id"],
                      "@assist_name":obj.summary.localteam.goals.player["@assist_name"],
                      "@team":"localteam",
                      "@type":"goal"
                      
          })
    
        }
  
  
      }
      if(obj.summary.localteam.yellowcards !== null){
  
      if(Array.isArray(obj.summary.localteam.yellowcards.player) === true){
  
  
        for(var i =0; i< obj.summary.localteam.yellowcards.player.length; i++)
          {
  
            //events.push(obj.summary.localteam.goals.player[i])
            events.push({
                          "@name":obj.summary.localteam.yellowcards.player[i]["@name"],
                          "@minute":obj.summary.localteam.yellowcards.player[i]["@minute"],
                          "@extra_min":obj.summary.localteam.yellowcards.player[i]["@extra_min"],
                          "@id":obj.summary.localteam.yellowcards.player[i]["@id"],
                          "@comment":obj.summary.localteam.yellowcards.player[i]["@comment"],
                          "@team":"localteam",
                          "@type":"yellowcard"
                          
                        })
  
          }
  
  
      }
      else{
  
        events.push({
                    "@name":obj.summary.localteam.yellowcards.player["@name"],
                    "@minute":obj.summary.localteam.yellowcards.player["@minute"],
                    "@extra_min":obj.summary.localteam.yellowcards.player["@extra_min"],
                    "@id":obj.summary.localteam.yellowcards.player["@id"],
                    "@comment":obj.summary.localteam.yellowcards.player["@comment"],
                    "@team":"localteam",
                    "@type":"yellowcard"
                    
        })
  
      }
  
  
      }
      if(obj.summary.localteam.redcards !== null){
  
          if(Array.isArray(obj.summary.localteam.redcards.player) === true){
        
        
            for(var i =0; i< obj.summary.localteam.redcards.player.length; i++)
              {
  
                //events.push(obj.summary.localteam.goals.player[i])
                events.push({
                              "@name":obj.summary.localteam.redcards.player[i]["@name"],
                              "@minute":obj.summary.localteam.redcards.player[i]["@minute"],
                              "@extra_min":obj.summary.localteam.redcards.player[i]["@extra_min"],
                              "@id":obj.summary.localteam.redcards.player[i]["@id"],
                              "@comment":obj.summary.localteam.redcards.player[i]["@comment"],
                              "@team":"localteam",
                              "@type":"redcard"
                              
                            })
  
              }
  
  
          }
          else{
  
            events.push({
                        "@name":obj.summary.localteam.redcards.player["@name"],
                        "@minute":obj.summary.localteam.redcards.player["@minute"],
                        "@extra_min":obj.summary.localteam.redcards.player["@extra_min"],
                        "@id":obj.summary.localteam.redcards.player["@id"],
                        "@comment":obj.summary.localteam.redcards.player["@comment"],
                        "@team":"localteam",
                        "@type":"redcard"
                        
            })
  
          }
  
      }
      if(obj.summary.visitorteam.goals !== null){
  
      if(Array.isArray(obj.summary.visitorteam.goals.player) === true){
  
  
        for(var i =0; i< obj.summary.visitorteam.goals.player.length; i++)
          {
  
            //events.push(obj.summary.localteam.goals.player[i])
            events.push({
                         "@name":obj.summary.visitorteam.goals.player[i]["@name"],
                          "@assist_id":obj.summary.visitorteam.goals.player[i]["@assist_id"],
                          "@minute":obj.summary.visitorteam.goals.player[i]["@minute"],
                          "@extra_min":obj.summary.visitorteam.goals.player[i]["@extra_min"],
                          "@owngoal":obj.summary.visitorteam.goals.player[i]["@owngoal"],
                          "@var_cancelled":obj.summary.visitorteam.goals.player[i]["@var_cancelled"],
                          "@penalty":obj.summary.visitorteam.goals.player[i]["@penalty"],
                          "@id":obj.summary.visitorteam.goals.player[i]["@id"],
                          "@assist_name":obj.summary.visitorteam.goals.player[i]["@assist_name"],
                          "@team":"visitorteam",
                          "@type":"goal"
                          
                        })
  
          }
        }
        else{
  
          events.push({
                      "@name":obj.summary.visitorteam.goals.player["@name"],
                      "@assist_id":obj.summary.visitorteam.goals.player["@assist_id"],
                      "@minute":obj.summary.visitorteam.goals.player["@minute"],
                      "@extra_min":obj.summary.visitorteam.goals.player["@extra_min"],
                      "@owngoal":obj.summary.visitorteam.goals.player["@owngoal"],
                      "@var_cancelled":obj.summary.visitorteam.goals.player["@var_cancelled"],
                      "@penalty":obj.summary.visitorteam.goals.player["@penalty"],
                      "@id":obj.summary.visitorteam.goals.player["@id"],
                      "@assist_name":obj.summary.visitorteam.goals.player["@assist_name"],
                      "@team":"visitorteam",
                      "@type":"goal"
            
                  })
    
        }
  
      }
      if(obj.summary.visitorteam.yellowcards !== null){
  
      if(Array.isArray(obj.summary.visitorteam.yellowcards.player) === true){
  
  
        for(var i =0; i< obj.summary.visitorteam.yellowcards.player.length; i++)
          {
  
            //events.push(obj.summary.localteam.goals.player[i])
            events.push({
                          "@name":obj.summary.visitorteam.yellowcards.player[i]["@name"],
                          "@minute":obj.summary.visitorteam.yellowcards.player[i]["@minute"],
                          "@extra_min":obj.summary.visitorteam.yellowcards.player[i]["@extra_min"],
                          "@id":obj.summary.visitorteam.yellowcards.player[i]["@id"],
                          "@comment":obj.summary.visitorteam.yellowcards.player[i]["@comment"],
                          "@team":"visitorteam",
                          "@type":"yellowcard"
                          
                        })
  
          }
        }
        else{
  
          events.push({
                      "@name":obj.summary.visitorteam.yellowcards.player["@name"],
                      "@minute":obj.summary.visitorteam.yellowcards.player["@minute"],
                      "@extra_min":obj.summary.visitorteam.yellowcards.player["@extra_min"],
                      "@id":obj.summary.visitorteam.yellowcards.player["@id"],
                      "@comment":obj.summary.visitorteam.yellowcards.player["@comment"],
                      "@team":"visitorteam",
                      "@type":"yellowcard"
            
                  })
    
        }
  
  
      }
      if(obj.summary.visitorteam.redcards !== null){
  
          if(Array.isArray(obj.summary.visitorteam.redcards.player) === true){
        
        
            for(var i =0; i< obj.summary.visitorteam.redcards.player.length; i++)
              {
  
                //events.push(obj.summary.localteam.goals.player[i])
                events.push({
  
                              "@name":obj.summary.visitorteam.redcards.player[i]["@name"],
                              "@minute":obj.summary.visitorteam.redcards.player[i]["@minute"],
                              "@extra_min":obj.summary.visitorteam.redcards.player[i]["@extra_min"],
                              "@id":obj.summary.visitorteam.redcards.player[i]["@id"],
                              "@comment":obj.summary.visitorteam.redcards.player[i]["@comment"],
                              "@team":"visitorteam",
                              "@type":"redcard"
                              
                            })
  
              }
  
  
          }
          else{
  
            events.push({
                        "@name":obj.summary.visitorteam.redcards.player["@name"],
                        "@minute":obj.summary.visitorteam.redcards.player["@minute"],
                        "@extra_min":obj.summary.visitorteam.redcards.player["@extra_min"],
                        "@id":obj.summary.visitorteam.redcards.player["@id"],
                        "@comment":obj.summary.visitorteam.redcards.player["@comment"],
                        "@team":"visitorteam",
                        "@type":"redcard"
              
                    })
  
          }
      }





     }

    
    
    if(props.league.match.substitutions !== null){

      if(props.league.match.substitutions.localteam !== null){

        if(Array.isArray(props.league.match.substitutions.localteam.substitution) === true){
          
          for(var i =0; i < props.league.match.substitutions.localteam.substitution.length;i++)
          {
                events.push({
        
                  "@off":props.league.match.substitutions.localteam.substitution[i]["@off"],
                  "@on":props.league.match.substitutions.localteam.substitution[i]["@on"],
                  "@minute":props.league.match.substitutions.localteam.substitution[i]["@minute"],
                  "@on_id":props.league.match.substitutions.localteam.substitution[i]["@on_id"],
                  "@off_id":props.league.match.substitutions.localteam.substitution[i]["@off_id"],
                  "@injury":props.league.match.substitutions.localteam.substitution[i]["@injury"],
                  "@team":"localteam",
                  "@type":"subst"
                  
                })
          }
  
  
        }
        else{
  
                events.push({
          
                  "@off":props.league.match.substitutions.localteam.substitution["@off"],
                  "@on":props.league.match.substitutions.localteam.substitution["@on"],
                  "@minute":props.league.match.substitutions.localteam.substitution["@minute"],
                  "@on_id":props.league.match.substitutions.localteam.substitution["@on_id"],
                  "@off_id":props.league.match.substitutions.localteam.substitution["@off_id"],
                  "@injury":props.league.match.substitutions.localteam.substitution["@injury"],
                  "@team":"localteam",
                  "@type":"subst"
                  
                })
  
        
        }
  
        
      }
      
      if(props.league.match.substitutions.visitorteam !== null){
  
        
        if(Array.isArray(props.league.match.substitutions.visitorteam.substitution) === true){
  
          for(var i =0; i < props.league.match.substitutions.visitorteam.substitution.length;i++)
          {
                events.push({
        
                  "@off":props.league.match.substitutions.visitorteam.substitution[i]["@off"],
                  "@on":props.league.match.substitutions.visitorteam.substitution[i]["@on"],
                  "@minute":props.league.match.substitutions.visitorteam.substitution[i]["@minute"],
                  "@on_id":props.league.match.substitutions.visitorteam.substitution[i]["@on_id"],
                  "@off_id":props.league.match.substitutions.visitorteam.substitution[i]["@off_id"],
                  "@injury":props.league.match.substitutions.visitorteam.substitution[i]["@injury"],
                  "@team":"visitorteam",
                  "@type":"subst"
                  
                })
          }
  
  
        }
        else{
  
                events.push({
          
                  "@off":props.league.match.substitutions.visitorteam.substitution["@off"],
                  "@on":props.league.match.substitutions.visitorteam.substitution["@on"],
                  "@minute":props.league.match.substitutions.visitorteam.substitution["@minute"],
                  "@on_id":props.league.match.substitutions.visitorteam.substitution["@on_id"],
                  "@off_id":props.league.match.substitutions.visitorteam.substitution["@off_id"],
                  "@injury":props.league.match.substitutions.visitorteam.substitution["@injury"],
                  "@team":"visitorteam",
                  "@type":"subst"
                  
                })
  
  
        }
  
      }


    }

  events.sort(function(a, b) {
      //console.log(a["@minute"])
      return a["@minute"] - b["@minute"];
  });
    //useRouter.reload(window.location.pathname);
    
  }
  else if(router.query.event === "null"){

     obj = {event:null};
  }
  else{

    obj = JSON.parse(router.query.event);

  }


}

/*useEffect(() => async () => {
    
  const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/getodds/soccer?cat=soccer_10&bm=88&json=1`)
  const data = await res.json()

   setLdata(data)
   setErrs(true)

  

},[]);*/
useEffect(() => {
    
  
  loadods(router.query.league,router.query.name)
  

},[loadods]);

  //loadods(router.query.league,router.query.name)

  let path = router.asPath
  
  const host = path.split("/");
  let nav = host.slice(1, host.length - 1);
  let nmatch = host.slice(1, host.length);
  let navMatchs = Object.assign({}, nmatch);

  let toTh = router.query.name
    ? router.query.name === "1005"
      ? "ยูฟ่า แชมเปี้ยนส์ลีก"
      : router.query.name === "1204"
        ? "พรีเมียร์ลีก อังกฤษ"
        : router.query.name === "1007"
          ? "ยูโรป้า ลีก"
          : router.query.name === "1198"
            ? "เอฟเอ คัพ อังกฤษ"
            : router.query.name === "1399"
              ? "ลาลีกา สเปน"
              : router.query.name === "1269"
                ? "กัลโช่ เซเรีย อา อิตาลี"
                : router.query.name === "1229"
                  ? "บุนเดสลีกา เยอรมัน"
                  : router.query.name === "1322"
                    ? "เอเรดิวิซี่ ฮอลแลนด์"
                    : router.query.name === "1221"
                      ? "ลีก เอิง ฝรั่งเศส"
                      : router.query.name === "1271"
                        ? "เจ ลีก ญี่ปุ่น"
                        : router.query.name && router.query.name.replace(/-/g, " ")
                            : router.query.name && router.query.name.replace(/-/g, " ")
                            let pageTitle = router.query.name ? router.query.name.replace(/-/g, " ") : " "

                          //console.log(nav)
                          for (var i = 0; i < nav.length; i++)
                            if (nav[i] == "football")
                              nav[i] = "ฟุตบอล";
                            else if (nav[i] == router.query.name)
                              nav[i] = toTh;
                             
                          nav.push(pageTitle)

                          
                          
                         if(props.check === 0){

                            nav[1] = toTh;
                            nav[2] = props.league.match.localteam["@name"] +" vs "+ props.league.match.visitorteam["@name"];

                            let datee;
                            let newdate;
                            let timee;
                            let formattime;
                            let renewsdate;
                            let sp_date;
                            let lastdate;
                            let date_convert;


                            datee = props.league.match["@formatted_date"].split(".");
                            newdate = datee[2]+"/"+datee[1]+"/"+datee[0];
                            timee = props.league.match["@time"];
                            formattime = newdate+" "+timee +" +0000";
                            renewsdate = convertTZ(formattime, "Asia/Bangkok");
                            //console.log(renewsdate)
                            sp_date = renewsdate.toString().split(" ");
                            lastdate = sp_date[4].split(":");

                            

                            if(props.league.match["@timer"] === ""){
                              //console.log(props.league.match["@status"])
                   
                              if(props.league.match["@status"] === "HT" 
                              || props.league.match["@status"] === "FT" 
                              || props.league.match["@status"] === "Full-time" 
                              || props.league.match["@status"] === "Postp." 
                              || props.league.match["@status"] === "Cancl."
                              || props.league.match["@status"] === "Aban."
                              || props.league.match["@status"] === "Pen."){
                              date_convert = props.league.match["@status"];
                              }else{
                                  
                                  date_convert = lastdate[0]+":"+lastdate[1];
                              }
         
                             
         
         
                           }else{
                                    date_convert = props.league.match["@status"];
                           }


                            data = [
                              {
                                title: props.league["@name"],
                                type: date_convert,
                                date: props.league.match["@date"],
                                teamid: props.league.match.localteam["@id"],
                                team: props.league.match.localteam["@name"],
                                score:props.league.match.localteam["@goals"] + " - " +props.league.match.visitorteam["@goals"] ,
                                scoreA:props.league.match.localteam["@goals"],
                                scoreB:props.league.match.visitorteam["@goals"],
                                teamB: props.league.match.visitorteam["@name"],
                                teamBid: props.league.match.visitorteam["@id"],
                              },
                            ]


                          }
                          else{

                           

                            let datee;
                            let newdate;
                            let timee;
                            let formattime;
                            let renewsdate;
                            let sp_date;
                            let lastdate;
                            let date_convert;

                            
                            datee = defalut.sleague.matches.match["@formatted_date"].split(".");
                            newdate = datee[2]+"/"+datee[1]+"/"+datee[0];
                            timee = defalut.sleague.matches.match["@time"];
                            formattime = newdate+" "+timee +" +0000";

                            

                            renewsdate = convertTZ(formattime, "Asia/Bangkok");
                            //console.log(renewsdate)
                            sp_date = renewsdate.toString().split(" ");
                            
                            lastdate = sp_date[4].split(":");

                            if(defalut.sleague.matches.match["@timer"] === ""){
                              
                   
                              if(defalut.sleague.matches.match["@status"] === "HT" 
                              || defalut.sleague.matches.match["@status"] === "FT" 
                              || defalut.sleague.matches.match["@status"] === "Full-time" 
                              || defalut.sleague.matches.match["@status"] === "Postp." 
                              || defalut.sleague.matches.match["@status"] === "Cancl."
                              || defalut.sleague.matches.match["@status"] === "Aban."
                              || defalut.sleague.matches.match["@status"] === "Pen."){
                              date_convert = defalut.sleague.matches.match["@status"];
                              }else{
                                  date_convert = lastdate[0]+":"+lastdate[1];
                                
                              }
                           }else{
                                    
                                  date_convert = defalut.sleague.matches.match["@status"];
                           }

                            nav[1] = toTh;
                            nav[2] = defalut.sleague.matches.match.localteam["@name"] +" vs "+ defalut.sleague.matches.match.visitorteam["@name"];
                             data = [
                              {
                                title: defalut.sleague["@name"],
                                type: date_convert,
                                date: defalut.sleague.matches.match["@date"],
                                teamid: defalut.sleague.matches.match.localteam["@id"],
                                team: defalut.sleague.matches.match.localteam["@name"],
                                score:defalut.sleague.matches.match.localteam["@goals"] + " - " +defalut.sleague.matches.match.visitorteam["@goals"] ,
                                scoreA:defalut.sleague.matches.match.localteam["@goals"],
                                scoreB:defalut.sleague.matches.match.visitorteam["@goals"],
                                teamB: defalut.sleague.matches.match.visitorteam["@name"],
                                teamBid: defalut.sleague.matches.match.visitorteam["@id"],
                              },
                            ]


                          }
        
      /*const [isVoted, setVoted] = useState(false);
      const [score, setScore] = useState(true)
      const [score1, setScore1] = useState(250)
      const [score2, setScore2] = useState(0)
      const [score3, setScore3] = useState(0)
      const [percent1, setPercent1] = useState(0)
      const [percent2, setPercent2] = useState(0)
      const [percent3, setPercent3] = useState(0)
      const Score1 = () => {
        setVoted(!isVoted)
        if (score1 > 240) {
          setPercent1(100)
          setScore1(240)
        } else {
          setPercent1(score1 + 10)
          setScore1(score1 + 10)
        }
      }
      const Score2 = () => {
        setVoted(!isVoted)
        if (score2 > 240) {
          setPercent2(100)
          setScore2(240)
        } else {
          setPercent2(score2 + 10)
          setScore2(score2 + 10)
        }
      }
      const Score3 = () => {
        setVoted(!isVoted)
        if (score3 > 240) {
          setPercent2(100)
          setScore3(240)
        } else {
          setPercent3(score3 + 10)
          setScore3(score3 + 10)
        }
      }*/

  
  return (
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
      
      <TopLiveSoccerContent 
        nav={nav} 
        data={data[0]} 
        navMatch={[
          {id: "1", name: "รายละเอียด", paths: `/${navMatchs[0]}/${navMatchs[1]}/${navMatchs[2]}`, active: true },
          {id: "2", name: "ข้อมูลเชิงลึก", paths: `/${navMatchs[0]}/${navMatchs[1]}/${navMatchs[2]}/tracker`, active: false },
          {id: "3", name: "ผู้เล่น", paths: `/${navMatchs[0]}/${navMatchs[1]}/${navMatchs[2]}/line-us`, active: false },
          {id: "3", name: "ผลงานเจอกัน", paths: `/${navMatchs[0]}/${navMatchs[1]}/${navMatchs[2]}/h2h`, active: false },
        ]}
      >  
        
        <div className='card border-top-0 py-4 mb-4 mb-sm-0 card-content'>
          {
             Array.isArray(obj.event) ? 
            (
              <MatchIonfo 
                type={router.query.type}
                matchionfo={obj.event}
              />
             ) :
             obj.event === 1 ?  
             <MatchIonfo
                    type={title_obj.title}
                    matchionfo={events}
               />
               
             :
             /* (obj.event === null)
              ? (<div style={{padding: "20px"}}><center><h1>ไม่มีข้อมูล null</h1></center></div>)
            :*/
              (obj.event === "reload")
              ? (<div style={{padding: "20px"}}>
                <center>
                  {
                  obj.summary === null ? <h1>ไม่มีข้อมูล</h1>
                  
                  :<MatchSummary
                    type={title_obj.title}
                    matchionfo={events}
                   />
                  }
                  
                  
                  </center>
                  </div>
                )
              :
              (obj.event === "nodata") ? <div style={{padding: "20px"}}><center><h1>ไม่มีข้อมูล</h1></center></div>
              :<div style={{padding: "20px"}}><center><h1>ไม่มีข้อมูล</h1></center></div>

          }
          
          <div className="card rounded-0 border-top-0 border-left-0 border-right-0 mb-4 card-content">
          <div className="row bg-dark">
            <div className="col-md-3">
              <div className="card-header  text-lowercase border-top-0 border-bottom-0 font-weight-bold"> เตะสนาม: </div>
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <p className="mb-0">{ defalut.check === 1 ? "ไม่มีข้อมูล" :  defalut.league.match.matchinfo.stadium["@name"]}</p>
              </div>
            </div>
          </div>
          </div>
          <div className="card rounded-0 border-top-0 border-left-0 border-right-0 mb-4 card-content">
            <div className="row bg-dark">
              <div className="col-md-3">
                <div className="card-header  text-lowercase border-top-0 border-bottom-0 font-weight-bold">
                  ผู้ตัดสิน:
                </div>
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <p className="mb-0">{defalut.check === 1 ? "ไม่มีข้อมูล" : defalut.league.match.matchinfo.referee["@name"]}</p>
                </div>
              </div>
            </div>          
          </div>
          <div className="card rounded-0 border-top-0 border-bottom-0 border-left-0 border-right-0 card-content">
          <div className="card-header  text-lowercase border-top-0 border-bottom-0 font-weight-bold">
              <h2><center>ราคาต่อรอง</center></h2>
          </div>
         {/*.slice(0, 50)*/}
         <div style={{overflowX:'scroll'}}>
         <table className="tbl">
                <thead>
                <tr>
                 <th>ประเภท</th>
                 <th><img className="img-fluid mb-3 mb-sm-0" src={"/assets/odds/bet365.png"} /></th>
                 <th><img className="img-fluid mb-3 mb-sm-0" src={"/assets/odds/188bet.png"} /></th>
                 <th><img className="img-fluid mb-3 mb-sm-0" src={"/assets/odds/sbo.png"} /></th>
                 <th><img className="img-fluid mb-3 mb-sm-0" src={"/assets/odds/1xBet.png"} /></th>
                 <th><img className="img-fluid mb-3 mb-sm-0" src={"/assets/odds/Dafabet.png"} /></th>
                 </tr>
                </thead>
                <tbody>
                 
                {
                      errs !== false ? 
                      
                      ldata === null ? <center style={{padding:"10px"}}><h1>ไม่มีข้อมูล</h1></center> 
                      :

                          ldata.odds.map((res,index) => 
                          
                              res["id"] === "1" ? 
                              <tr key={index}>
                              <td>{res["value"]}</td>
                              <td>
                              
                              {Array.isArray(res["bookmakers"]) === true ?

                                        res["bookmakers"].map((resin,indexin) => (

                                             resin["id"] === "16" ?

                                                resin["odds"].map((result,num) => {
                                                  
                                                   return(
                                                     
                                                                result["name"] === "Home" || result["name"] === "Over" ? <p key={num}>Home : {result["value"]}</p>
                                                                :result["name"] === "Draw" ? <p key={num}>Draw : {result["value"]}</p>
                                                                :result["name"] === "Away" || result["name"] === "Under" ? <p key={num}>Away : {result["value"]}</p>
                                                                :""
                                                            
                                                    
                                                    )})
                                                  :null
                                            
                                            ))
                                            :null
                                }
                                </td>
                                 <td>
                                 {Array.isArray(res["bookmakers"]) === true ?

                                      res["bookmakers"].map((resin,indexin) => (

                                          resin["id"] === "56" ?

                                              resin["odds"].map((result,num) => {
                                                
                                                return(
                                                  
                                                              result["name"] === "Home" || result["name"] === "Over" ? <p key={num}>Home : {result["value"]}</p>
                                                              :result["name"] === "Draw" ? <p key={num}>Draw : {result["value"]}</p>
                                                              :result["name"] === "Away" || result["name"] === "Under" ? <p key={num}>Away : {result["value"]}</p>
                                                              :""
                                                          
                                                  
                                                  )})
                                                :null
                                          
                                          ))
                                          :null
                                 }
                                 </td>
                                <td>
                                {Array.isArray(res["bookmakers"]) === true ?

                                            res["bookmakers"].map((resin,indexin) => (

                                                resin["id"] === "88" ?

                                                    resin["odds"].map((result,num) => {
                                                      
                                                      return(
                                                        
                                                                    result["name"] === "Home" || result["name"] === "Over" ? <p key={num}>Home : {result["value"]}</p>
                                                                    :result["name"] === "Draw" ? <p key={num}>Draw : {result["value"]}</p>
                                                                    :result["name"] === "Away" || result["name"] === "Under" ? <p key={num}>Away : {result["value"]}</p>
                                                                    :""
                                                                
                                                        
                                                        )})
                                                      :null
                                                
                                                ))
                                                :null
                                }
                                </td>
                                <td>
                                {Array.isArray(res["bookmakers"]) === true ?

                                          res["bookmakers"].map((resin,indexin) => (

                                              resin["id"] === "105" ?

                                                  resin["odds"].map((result,num) => {
                                                    
                                                    return(
                                                      
                                                                  result["name"] === "Home" || result["name"] === "Over" ? <p key={num}>Home : {result["value"]}</p>
                                                                  :result["name"] === "Draw" ? <p key={num}>Draw : {result["value"]}</p>
                                                                  :result["name"] === "Away" || result["name"] === "Under" ? <p key={num}>Away : {result["value"]}</p>
                                                                  :""
                                                              
                                                      
                                                      )})
                                                    :null
                                              
                                              ))
                                              :null
                                 }
                                </td>
                                <td>

                                {Array.isArray(res["bookmakers"]) === true ?

                                        res["bookmakers"].map((resin,indexin) => (

                                            resin["id"] === "105" ?

                                                resin["odds"].map((result,num) => {
                                                  
                                                  return(
                                                    
                                                                result["name"] === "Home" || result["name"] === "Over" ? <p key={num}>Home : {result["value"]}</p>
                                                                :result["name"] === "Draw" ? <p key={num}>Draw : {result["value"]}</p>
                                                                :result["name"] === "Away" || result["name"] === "Under" ? <p key={num}>Away : {result["value"]}</p>
                                                                :""
                                                            
                                                    
                                                    )})
                                                  :null
                                            
                                            ))
                                            :null
                                        }

                                </td>
                                        
                                             
                                                                                
                                  
                                  
                              </tr>
                              :res["id"] === "4" ? 
                              
                              <tr key={index}>
                              <td>{res["value"]} (+0)</td>
                              <td>

                              {Array.isArray(res["bookmakers"]) === true ?

                                        res["bookmakers"].map((resin,indexin) => (

                                            resin["id"] === "16" ?

                                                
                                                  resin["odds"].map((result,num) => {
                                                  
                                                  
                                                  return(

                                                    result["name"]  === "+0" ?


                                                              Array.isArray(result["odds"]) === true ?

                                                                  result["odds"].map((resultlower,indexlow) => 
                                                                  
                                                                        resultlower["name"] === "Home" || resultlower["name"] === "Over" ? <p key={indexlow}>Home : {resultlower["value"]}</p>
                                                                        :resultlower["name"] === "Draw" ? <p key={indexlow}>Draw : {resultlower["value"]}</p>
                                                                        :resultlower["name"] === "Away" || resultlower["name"] === "Under" ? <p key={indexlow}>Away : {resultlower["value"]}</p>
                                                                        :""
                                                                  
                                                                  )
                                                                      
                                                              :""
                                                            
                                                    
                                                    :""
                                                    
                                                    )})
                                                  :null
                                            
                                            ))
                                            :null
                                        }

                              </td>
                              <td>

                              {Array.isArray(res["bookmakers"]) === true ?

                                    res["bookmakers"].map((resin,indexin) => (

                                        resin["id"] === "56" ?

                                                  
                                                    resin["odds"].map((result,num) => {
                                                    
                                                    
                                                    return(

                                                      result["name"]  === "+0" ?


                                                                Array.isArray(result["odds"]) === true ?

                                                                    result["odds"].map((resultlower,indexlow) => 
                                                                    
                                                                          resultlower["name"] === "Home" || resultlower["name"] === "Over" ? <p key={indexlow}>Home : {resultlower["value"]}</p>
                                                                          :resultlower["name"] === "Draw" ? <p key={indexlow}>Draw : {resultlower["value"]}</p>
                                                                          :resultlower["name"] === "Away" || resultlower["name"] === "Under" ? <p key={indexlow}>Away : {resultlower["value"]}</p>
                                                                          :""
                                                                    
                                                                    )
                                                                        
                                                                :""
                                                              
                                                      
                                                      :""
                                                      
                                                      )})
                                                  
                                              :null
                                        
                                        ))
                                    :null
                                    }

                              </td>
                              <td>

                              {Array.isArray(res["bookmakers"]) === true ?

                                      res["bookmakers"].map((resin,indexin) => (

                                          resin["id"] === "88" ?

                                                  
                                                    resin["odds"].map((result,num) => {
                                                    
                                                    
                                                    return(

                                                      result["name"]  === "+0" ?


                                                                Array.isArray(result["odds"]) === true ?

                                                                    result["odds"].map((resultlower,indexlow) => 
                                                                    
                                                                          resultlower["name"] === "Home" || resultlower["name"] === "Over" ? <p key={indexlow}>Home : {resultlower["value"]}</p>
                                                                          :resultlower["name"] === "Draw" ? <p key={indexlow}>Draw : {resultlower["value"]}</p>
                                                                          :resultlower["name"] === "Away" || resultlower["name"] === "Under" ? <p key={indexlow}>Away : {resultlower["value"]}</p>
                                                                          :""
                                                                    
                                                                    )
                                                                        
                                                                :""
                                                              
                                                      
                                                      :""
                                                      
                                                      )})
                                                    
                                            
                                                  
                                                  
                                                :null
                                          
                                          ))
                                      :null
                                      }

                              </td>
                              <td>
                                
                              {Array.isArray(res["bookmakers"]) === true ?

                                    res["bookmakers"].map((resin,indexin) => (

                                        resin["id"] === "105" ?

                                              
                                                resin["odds"].map((result,num) => {
                                                
                                                
                                                return(

                                                  result["name"]  === "+0" ?


                                                            Array.isArray(result["odds"]) === true ?

                                                                result["odds"].map((resultlower,indexlow) => 
                                                                
                                                                      resultlower["name"] === "Home" || resultlower["name"] === "Over" ? <p key={indexlow}>Home : {resultlower["value"]}</p>
                                                                      :resultlower["name"] === "Draw" ? <p key={indexlow}>Draw : {resultlower["value"]}</p>
                                                                      :resultlower["name"] === "Away" || resultlower["name"] === "Under" ? <p key={indexlow}>Away : {resultlower["value"]}</p>
                                                                      :""
                                                                
                                                                )
                                                                    
                                                            :""
                                                          
                                                  
                                                  :""
                                                  
                                                  )})
                                              
                                              :null
                                        
                                        ))
                                    :null
                                    } 

                              </td>
                              <td>

                              {Array.isArray(res["bookmakers"]) === true ?

                                          res["bookmakers"].map((resin,indexin) => (

                                              resin["id"] === "232" ?

                                              resin["odds"].map((result,num) => {
                                                      
                                                      
                                                          return(

                                                            result["name"]  === "+0" ?


                                                                      Array.isArray(result["odds"]) === true ?

                                                                          result["odds"].map((resultlower,indexlow) => 
                                                                          
                                                                                resultlower["name"] === "Home" || resultlower["name"] === "Over" ? <p key={indexlow}>Home : {resultlower["value"]}</p>
                                                                                :resultlower["name"] === "Draw" ? <p key={indexlow}>Draw : {resultlower["value"]}</p>
                                                                                :resultlower["name"] === "Away" || resultlower["name"] === "Under" ? <p key={indexlow}>Away : {resultlower["value"]}</p>
                                                                                :""
                                                                          
                                                                          )
                                                                              
                                                                      :""
                                                                    
                                                            
                                                            :""
                                                            
                                                            )})
                                                      
                                                
                                                      
                                                      
                                                    :null
                                              
                                              ))
                                          :null
                                          }

                              </td>
                                
                             </tr>
                              :
                              res["id"] === "5" ? 
                              
                              <tr key={index}>
                              <td>{res["value"]} (2.5)</td>
                              <td>
                              {Array.isArray(res["bookmakers"]) === true ?

                                      res["bookmakers"].map((resin,indexin) => (

                                          resin["id"] === "16" ?

                                              
                                                resin["odds"].map((result,num) => {
                                                
                                                
                                                return(

                                                  result["name"]  === "2.5" ?


                                                            Array.isArray(result["odds"]) === true ?

                                                                result["odds"].map((resultlower,indexlow) => 
                                                                
                                                                      resultlower["name"] === "Over"  ? <p key={indexlow}>Over : {resultlower["value"]}</p>
                                                                      :resultlower["name"] === "Under" ? <p key={indexlow}>Under : {resultlower["value"]}</p>
                                                                      :""
                                                                
                                                                )
                                                                    
                                                            :""
                                                          
                                                  
                                                  :""
                                                  
                                                  )})
                                                
                                            
                                                  
                                                  
                                                :null
                                          
                                          ))
                                          :null
                                      }

                              </td>
                              <td>

                              {Array.isArray(res["bookmakers"]) === true ?

                                      res["bookmakers"].map((resin,indexin) => (

                                          resin["id"] === "56" ?

                                                    
                                                      resin["odds"].map((result,num) => {
                                                      
                                                      
                                                      return(

                                                        result["name"]  === "2.5" ?


                                                              Array.isArray(result["odds"]) === true ?

                                                                  result["odds"].map((resultlower,indexlow) => 
                                                                  
                                                                        resultlower["name"] === "Over"  ? <p key={indexlow}>Over : {resultlower["value"]}</p>
                                                                        :resultlower["name"] === "Under" ? <p key={indexlow}>Under : {resultlower["value"]}</p>
                                                                        :""
                                                                  
                                                                  )
                                                                      
                                                              :""
                                                            
                                              
                                                      :"" 
                                                        
                                                        )})
                                                      
                                                :null
                                          
                                          ))
                                      :null
                                      }

                              </td>
                              <td>

                              {Array.isArray(res["bookmakers"]) === true ?

                                    res["bookmakers"].map((resin,indexin) => (

                                        resin["id"] === "88" ?

                                                
                                                  resin["odds"].map((result,num) => {
                                                  
                                                  
                                                  return(

                                                      result["name"]  === "2.5" ?


                                                            Array.isArray(result["odds"]) === true ?

                                                                result["odds"].map((resultlower,indexlow) => 
                                                                
                                                                      resultlower["name"] === "Over"  ? <p key={indexlow}>Over : {resultlower["value"]}</p>
                                                                      :resultlower["name"] === "Under" ? <p key={indexlow}>Under : {resultlower["value"]}</p>
                                                                      :""
                                                                
                                                                )
                                                                    
                                                            :""
                                                  
                                          
                                                    :""
                                                    
                                                    )})
                                                  
                                          
                                                
                                                
                                              :null
                                        
                                        ))
                                    :null
                                    }

                              </td>

                              <td>

                              {Array.isArray(res["bookmakers"]) === true ?

                                    res["bookmakers"].map((resin,indexin) => (

                                        resin["id"] === "105" ?

                                              
                                                resin["odds"].map((result,num) => {
                                                
                                                
                                                return(

                                                            result["name"]  === "2.5" ?


                                                            Array.isArray(result["odds"]) === true ?

                                                                result["odds"].map((resultlower,indexlow) => 
                                                                
                                                                      resultlower["name"] === "Over"  ? <p key={indexlow}>Over : {resultlower["value"]}</p>
                                                                      :resultlower["name"] === "Under" ? <p key={indexlow}>Under : {resultlower["value"]}</p>
                                                                      :""
                                                                
                                                                )
                                                                    
                                                            :""
                                                          
                                                  
                                                        :""
                                                  
                                                  )})
                                              
                                              :null
                                        
                                        ))
                                    :null
                                    }

                              </td>
                              <td>

                              {Array.isArray(res["bookmakers"]) === true ?

                                    res["bookmakers"].map((resin,indexin) => (

                                        resin["id"] === "232" ?


                                                
                                                resin["odds"].map((result,num) => {
                                                
                                                
                                                    return(

                                                      result["name"]  === "2.5" ?


                                                            Array.isArray(result["odds"]) === true ?

                                                                result["odds"].map((resultlower,indexlow) => 
                                                                
                                                                      resultlower["name"] === "Over"  ? <p key={indexlow}>Over : {resultlower["value"]}</p>
                                                                      :resultlower["name"] === "Under" ? <p key={indexlow}>Under : {resultlower["value"]}</p>
                                                                      :""
                                                                
                                                                )
                                                                    
                                                            :""
                                                  
                                          
                                                      :""
                                                      
                                                      )})
                                              :null
                                        
                                        ))
                                    :null
                                    }

                              </td>
                              </tr>
                              :res["id"] === "22627" ? 
                              <tr key={index}>
                              <td>{res["value"]}</td>
                              <td>

                              {Array.isArray(res["bookmakers"]) === true ?

                                    res["bookmakers"].map((resin,indexin) => (

                                        resin["id"] === "16" ?

                                            resin["odds"].map((result,num) => {
                                              
                                              return(
                                                
                                                            result["name"] === "Home" || result["name"] === "Over" ? <p key={num}>Home : {result["value"]}</p>
                                                            :result["name"] === "Draw" ? <p key={num}>Draw : {result["value"]}</p>
                                                            :result["name"] === "Away" || result["name"] === "Under" ? <p key={num}>Away : {result["value"]}</p>
                                                            :""
                                                        
                                                
                                                )})
                                              :null
                                        
                                        ))
                                        :null
                              }

                              </td>
                              <td>
                              {Array.isArray(res["bookmakers"]) === true ?

                                    res["bookmakers"].map((resin,indexin) => (

                                        resin["id"] === "56" ?

                                            resin["odds"].map((result,num) => {
                                              
                                              return(
                                                
                                                            result["name"] === "Home" || result["name"] === "Over" ? <p key={num}>Home : {result["value"]}</p>
                                                            :result["name"] === "Draw" ? <p key={num}>Draw : {result["value"]}</p>
                                                            :result["name"] === "Away" || result["name"] === "Under" ? <p key={num}>Away : {result["value"]}</p>
                                                            :""
                                                        
                                                
                                                )})
                                              :null
                                        
                                        ))
                                        :null
                              }
                              </td>
                              <td>
                              {Array.isArray(res["bookmakers"]) === true ?

                                          res["bookmakers"].map((resin,indexin) => (

                                              resin["id"] === "88" ?

                                                  resin["odds"].map((result,num) => {
                                                    
                                                    return(
                                                      
                                                                  result["name"] === "Home" || result["name"] === "Over" ? <p key={num}>Home : {result["value"]}</p>
                                                                  :result["name"] === "Draw" ? <p key={num}>Draw : {result["value"]}</p>
                                                                  :result["name"] === "Away" || result["name"] === "Under" ? <p key={num}>Away : {result["value"]}</p>
                                                                  :""
                                                              
                                                      
                                                      )})
                                                    :null
                                              
                                              ))
                                              :null
                              }
                              </td>
                              <td>
                              {Array.isArray(res["bookmakers"]) === true ?

                                    res["bookmakers"].map((resin,indexin) => (

                                        resin["id"] === "105" ?

                                            resin["odds"].map((result,num) => {
                                              
                                              return(
                                                
                                                            result["name"] === "Home" || result["name"] === "Over" ? <p key={num}>Home : {result["value"]}</p>
                                                            :result["name"] === "Draw" ? <p key={num}>Draw : {result["value"]}</p>
                                                            :result["name"] === "Away" || result["name"] === "Under" ? <p key={num}>Away : {result["value"]}</p>
                                                            :""
                                                        
                                                
                                                )})
                                              :null
                                        
                                        ))
                                        :null
                               }
                              </td>
                              <td>
                              {Array.isArray(res["bookmakers"]) === true ?

                                      res["bookmakers"].map((resin,indexin) => (

                                          resin["id"] === "232" ?

                                              resin["odds"].map((result,num) => {
                                                
                                                return(
                                                  
                                                              result["name"] === "Home" || result["name"] === "Over" ? <p key={num}>Home : {result["value"]}</p>
                                                              :result["name"] === "Draw" ? <p key={num}>Draw : {result["value"]}</p>
                                                              :result["name"] === "Away" || result["name"] === "Under" ? <p key={num}>Away : {result["value"]}</p>
                                                              :""
                                                          
                                                  
                                                  )})
                                                :null
                                          
                                          ))
                                          :null
                                      }
                              </td>
                              </tr>
                              

                              :null
                          )
                    
                          
                         


                    :<tr><td colSpan="6">Loading ......</td></tr>
                  }

                  
                </tbody>
                <tfoot>
                
                {
                    oddsLoad !== false ? 
                    listOdds.length === 0 ? <center style={{padding:"10px"}}><h1>ไม่มีข้อมูล</h1></center> 
                    :
                    listOdds.map((res,index) => 
                    
                      <tr key={index}>
                          <td>{res["value"]}</td>
                          <td>

                          {Array.isArray(res["bookmakers"]) === true ?

                              res["bookmakers"].map((resin,indexin) => (

                                  resin["id"] === "16"  ?

                                      resin["odds"].map((result,num) => {
                                        
                                        return(
                                                       result["name"] === "Home" || result["name"] === "Over" || result["name"] === "Yes" || result["name"] === "Odd" || result["name"] === "Home/Draw" ? <p key={num}>{result["name"]} : {result["value"]}</p>
                                                      :result["name"] === "Draw" || result["name"] === "Home/Away"  ? <p key={num}>{result["name"]} : {result["value"]}</p>
                                                      :result["name"] === "Away" || result["name"] === "Under"  || result["name"] === "No" || result["name"] === "Even" || result["name"] === "Draw/Away" ? <p key={num}>{result["name"]} : {result["value"]}</p>
                                                      :""
                                                  
                                          
                                          )})
                                        
                                        
                                      :null
                                    ))
                                  
                                  :null
                              }

                          </td>
                          <td>
                          {Array.isArray(res["bookmakers"]) === true ?

                                    res["bookmakers"].map((resin,indexin) => (

                                        resin["id"] === "56"  ?

                                            
                                              resin["odds"].map((result,num) => {
                                              
                                              return(
                                                
                                                result["name"] === "Home" || result["name"] === "Over" || result["name"] === "Yes" || result["name"] === "Odd" || result["name"] === "Home/Draw" ? <p key={num}>{result["name"]} : {result["value"]}</p>
                                                :result["name"] === "Draw" || result["name"] === "Home/Away"  ? <p key={num}>{result["name"]} : {result["value"]}</p>
                                                :result["name"] === "Away" || result["name"] === "Under"  || result["name"] === "No" || result["name"] === "Even" || result["name"] === "Draw/Away" ? <p key={num}>{result["name"]} : {result["value"]}</p>
                                                :""
                                                        
                                                
                                                )})
                                            
                                            :null
                                          ))
                                        
                                        :null
                                    }

                          </td>
                          <td>
                          {Array.isArray(res["bookmakers"]) === true ?

                                        res["bookmakers"].map((resin,indexin) => (

                                            resin["id"] === "88"  ?

                                                
                                                  resin["odds"].map((result,num) => {
                                                  
                                                  return(
                                                    
                                                            
                                                    result["name"] === "Home" || result["name"] === "Over" || result["name"] === "Yes" || result["name"] === "Odd" || result["name"] === "Home/Draw" ? <p key={num}>{result["name"]} : {result["value"]}</p>
                                                    :result["name"] === "Draw" || result["name"] === "Home/Away"  ? <p key={num}>{result["name"]} : {result["value"]}</p>
                                                    :result["name"] === "Away" || result["name"] === "Under"  || result["name"] === "No" || result["name"] === "Even" || result["name"] === "Draw/Away" ? <p key={num}>{result["name"]} : {result["value"]}</p>
                                                    :""
                                                            
                                                    
                                                    )})
                                                
                                                :null
                                              ))
                                            
                                            :null
                             }
                            </td>
                          
                            <td>
                            {Array.isArray(res["bookmakers"]) === true ?

                                    res["bookmakers"].map((resin,indexin) => (

                                        resin["id"] === "105"  ?

                                          
                                              resin["odds"].map((result,num) => {
                                              
                                              return(
                                                
                                                result["name"] === "Home" || result["name"] === "Over" || result["name"] === "Yes" || result["name"] === "Odd" || result["name"] === "Home/Draw" ? <p key={num}>{result["name"]} : {result["value"]}</p>
                                                :result["name"] === "Draw" || result["name"] === "Home/Away"  ? <p key={num}>{result["name"]} : {result["value"]}</p>
                                                :result["name"] === "Away" || result["name"] === "Under"  || result["name"] === "No" || result["name"] === "Even" || result["name"] === "Draw/Away" ? <p key={num}>{result["name"]} : {result["value"]}</p>
                                                :""
                                                        
                                                
                                                )})
                                          
                                            :null
                                          ))
                                        
                                        :null
                                    }
                            </td>
                             <td>
                             {Array.isArray(res["bookmakers"]) === true ?

                                      res["bookmakers"].map((resin,indexin) => (

                                          resin["id"] === "232"  ?

                                              
                                                resin["odds"].map((result,num) => {
                                                
                                                return(
                                                  
                                                          
                                                  result["name"] === "Home" || result["name"] === "Over" || result["name"] === "Yes" || result["name"] === "Odd" || result["name"] === "Home/Draw" ? <p key={num}>{result["name"]} : {result["value"]}</p>
                                                  :result["name"] === "Draw" || result["name"] === "Home/Away"  ? <p key={num}>{result["name"]} : {result["value"]}</p>
                                                  :result["name"] === "Away" || result["name"] === "Under"  || result["name"] === "No" || result["name"] === "Even" || result["name"] === "Draw/Away" ? <p key={num}>{result["name"]} : {result["value"]}</p>
                                                  :""
                                                          
                                                  
                                                  )})
                                                
                                              :null
                                            ))
                                          
                                          :null
                                      }

                             </td>
                      </tr>
                    
                    
                    )
                    
                    :null
                  
                  }
                  {
                     oddsLoad !== false ? 

                          listOddsUnder.length === 0 ? ""
                          :
                          listOddsUnder.map((res,index) => 

                          <tr key={index}>
                              <td>{res["value"]}(1.5)</td>
                              <td>
                              {Array.isArray(res["bookmakers"]) === true ?

                                  res["bookmakers"].map((resin,indexin) => (

                                      resin["id"] === "16" ?


                                              resin["odds"].map((result,num) => {
                                              
                                              
                                                  return(

                                                    result["name"]  === "1.5" ?


                                                          Array.isArray(result["odds"]) === true ?

                                                              result["odds"].map((resultlower,indexlow) => 
                                                              
                                                                    resultlower["name"] === "Over"  ? <p key={indexlow}>{resultlower["name"]} : {resultlower["value"]}</p>
                                                                    :resultlower["name"] === "Under" ? <p key={indexlow}>{resultlower["name"]} : {resultlower["value"]}</p>
                                                                    :""
                                                              
                                                              )
                                                                  
                                                          :""
                                                
                                        
                                                    :""
                                                    
                                                    )})
                                            :null
                                      
                                      ))
                                  :null
                                  }
                              </td>
                              <td>
                              {Array.isArray(res["bookmakers"]) === true ?

                                  res["bookmakers"].map((resin,indexin) => (

                                      resin["id"] === "56" ?


                                              resin["odds"].map((result,num) => {
                                              
                                              
                                                  return(

                                                    result["name"]  === "1.5" ?


                                                          Array.isArray(result["odds"]) === true ?

                                                              result["odds"].map((resultlower,indexlow) => 
                                                              
                                                                    resultlower["name"] === "Over"  ? <p key={indexlow}>{resultlower["name"]} : {resultlower["value"]}</p>
                                                                    :resultlower["name"] === "Under" ? <p key={indexlow}>{resultlower["name"]} : {resultlower["value"]}</p>
                                                                    :""
                                                              
                                                              )
                                                                  
                                                          :""
                                                
                                        
                                                    :""
                                                    
                                                    )})
                                            :null
                                      
                                      ))
                                  :null
                                  }
                              </td>
                              <td>
                              {Array.isArray(res["bookmakers"]) === true ?

                                  res["bookmakers"].map((resin,indexin) => (

                                      resin["id"] === "88" ?


                                              resin["odds"].map((result,num) => {
                                              
                                              
                                                  return(

                                                    result["name"]  === "1.5" ?


                                                          Array.isArray(result["odds"]) === true ?

                                                              result["odds"].map((resultlower,indexlow) => 
                                                              
                                                                    resultlower["name"] === "Over"  ? <p key={indexlow}>{resultlower["name"]} : {resultlower["value"]}</p>
                                                                    :resultlower["name"] === "Under" ? <p key={indexlow}>{resultlower["name"]} : {resultlower["value"]}</p>
                                                                    :""
                                                              
                                                              )
                                                                  
                                                          :""
                                                
                                        
                                                    :""
                                                    
                                                    )})
                                            :null
                                      
                                      ))
                                  :null
                                  }
                              </td>
                              <td>
                              {Array.isArray(res["bookmakers"]) === true ?

                                    res["bookmakers"].map((resin,indexin) => (

                                        resin["id"] === "105" ?


                                                resin["odds"].map((result,num) => {
                                                
                                                
                                                    return(

                                                      result["name"]  === "1.5" ?


                                                            Array.isArray(result["odds"]) === true ?

                                                                result["odds"].map((resultlower,indexlow) => 
                                                                
                                                                      resultlower["name"] === "Over"  ? <p key={indexlow}>{resultlower["name"]} : {resultlower["value"]}</p>
                                                                      :resultlower["name"] === "Under" ? <p key={indexlow}>{resultlower["name"]} : {resultlower["value"]}</p>
                                                                      :""
                                                                
                                                                )
                                                                    
                                                            :""
                                                  
                                          
                                                      :""
                                                      
                                                      )})
                                              :null
                                        
                                        ))
                                    :null
                                    }
                              </td>
                              <td>
                              {Array.isArray(res["bookmakers"]) === true ?

                                    res["bookmakers"].map((resin,indexin) => (

                                        resin["id"] === "232" ?


                                                resin["odds"].map((result,num) => {
                                                
                                                
                                                    return(

                                                      result["name"]  === "1.5" ?


                                                            Array.isArray(result["odds"]) === true ?

                                                                result["odds"].map((resultlower,indexlow) => 
                                                                
                                                                      resultlower["name"] === "Over"  ? <p key={indexlow}>{resultlower["name"]} : {resultlower["value"]}</p>
                                                                      :resultlower["name"] === "Under" ? <p key={indexlow}>{resultlower["name"]} : {resultlower["value"]}</p>
                                                                      :""
                                                                
                                                                )
                                                                    
                                                            :""
                                                  
                                          
                                                      :""
                                                      
                                                      )})
                                              :null
                                        
                                        ))
                                    :null
                                    }
                              </td>
                          </tr>
                          
                          )
                      :null
                  }
                  
                  <tr>
                          <td colSpan="6">
                                {
                                  Lbtn === false ?
                                  <center>
                                      <button style={btnstyles}  onClick={handdleClickOddsetc}>ดูราคาอื่นๆ</button>
                                
                                  </center>
                                  :<center>
                                      <button style={btnstyles}  onClick={handdleClickOddhidec}>ซ่อนรายการ</button>
                                  </center>
                                }
                                
                          </td>
                    </tr>
                 </tfoot>
             </table>
             </div>

         {
         
         /*errs !== false ?

          ldata === null ? <center style={{padding:"10px"}}><h1>ไม่มีข้อมูล</h1></center>
          :
          
          <Accordion>
                
                   {ldata.odds.map((res,index) => {
                         
                          return(
    
                            <div label={res["id"]} text={res["value"]} key={index} style={{padding:5}}>
                               
                                  {Array.isArray(res["bookmakers"]) === true ?

                                        res["bookmakers"].map((resin,indexin) => (

                                          resin["id"] === "88" || resin["id"] === "56" || resin["id"] === "105" || resin["id"] === "232" || resin["id"] === "16" ? 
                                          <div className="card-body" key={indexin} style={{background: "#222222"}}>
                                              <div className="row align-items-center">
                                                <div className="col-sm-4 text-center text-sm-left">
                                                  {<img className="img-fluid mb-3 mb-sm-0" src={`/assets/odds/${resin["name"]}.png`} />}
                                                  
                                                </div>
                                                <div className="col-sm-8 d-inline-block">
                                                  <div className="col-sm-4 d-inline-block mb-3 mb-sm-0 pl-sm-0 pr-sm-2">
                                                    {
                                                    
                                                    resin["odds"].map((result,num) => 
                                                      
                                                    result["name"] === "Home" || result["name"] === "Over" ?
                                                    <InputGroup symbo={result["name"]} value={result["value"]} disabled={true} key={num}/>
                                                    : ""
                                                    )
                                                    }
                                                    
                                                  </div>
                                                  <div className="col-sm-4 d-inline-block mb-3 mb-sm-0 px-sm-2">
                                                    {
                                                    
                                                    resin["odds"].map((result,num) => 
                                                      
                                                    result["name"] === "Draw" ?
                                                    <InputGroup symbo={result["name"]} value={result["value"]} disabled={true} key={num}/>
                                                    :""
                                                    )
                                                    }
                                                  </div>
                                                  <div className="col-sm-4 d-inline-block pl-sm-2 pr-sm-0">
                                                  {
                                                      resin["odds"].map((result,num) => 
                                                      
                                                        result["name"] === "Away" || result["name"] === "Under" ?
                                                        <InputGroup symbo={result["name"]} value={result["value"]} disabled={true} key={num}/>
                                                        :""
                                                        )
                                                    }
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            :null

                                        ))

                                   :null}
                                 
                                
                          </div>
    
                       )})}
           </Accordion>
           :<center><h1>loading .......</h1></center>
           */
          }
          </div>
         
          {/*<Accordion>
            
                <div label="MatchWinner 1">
                 
                    <p>
                        Match Winner 1 text
                    </p>
                </div>
                <div label="MatchWinner 2">
                    
                    <p>
                        Match Winner 2 text
                    </p>
                </div>
               
          </Accordion>*/}
         
        </div>
      </TopLiveSoccerContent>
      
      
    </Layout>
  );
}

PremierLeague.getInitialProps = async ({query}) => {

  let league =  query.league;
  let name =  query.name;
  let events;

  var offset = -8;
  
  var dd = new Date();
  var datee = dd.getDate();
  const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/commentaries/match?id=${league}&league=${name}&json=1`)
  const data = await res.json()

  let check = 0; 
  let obb = {};
  let match;
  let cate;
  let paramdefalut = "home";
  var todayNY = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
  

  if(typeof data.commentaries.tournament === "undefined"){

       check = 1;

       //const resdefalut = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/${paramdefalut}?json=1`)
       //const datadefalut = await resdefalut.json()

       var datadefalut = await Promise.all([
        /* Alternatively store each in an array */
        // var [x, y, z] = await Promise.all([
        // parse results as json; fetch data response has several reader methods available:
        //.arrayBuffer()
        //.blob()
        //.formData()
        //.json()
        //.text()
        fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/home?json=1').then((response) => response.json()),// parse each response as json
        fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/d-1?json=1').then((response) => response.json()),
        fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/d1?json=1').then((response) => response.json()),
        fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/d-2?json=1').then((response) => response.json()),
        fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/d2?json=1').then((response) => response.json()),
        fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/d-3?json=1').then((response) => response.json()),
        fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/d3?json=1').then((response) => response.json()),
       
      ]);


      for(var ii =0; ii < datadefalut.length; ii++){

        for(var i =0; i < datadefalut[ii].scores.category.length; i++){

              
              if(datadefalut[ii].scores.category[i]["@id"] === name){

                
                  cate = {
                      "@name":datadefalut[ii].scores.category[i]["@name"],
                      "@gid":datadefalut[ii].scores.category[i]["@gid"],
                      "@id":datadefalut[ii].scores.category[i]["@id"],
                      "@file_group":datadefalut[ii].scores.category[i]["@file_group"],
                      "@iscup":datadefalut[ii].scores.category[i]["@iscup"],
                      "matches":{}
                  }
                
                  
                  if(Array.isArray(datadefalut[ii].scores.category[i].matches.match) === true){


                    for(var j =0; j < datadefalut[ii].scores.category[i].matches.match.length; j++){

                      
                      if(datadefalut[ii].scores.category[i].matches.match[j]["@static_id"] === league){

                        
                              match = datadefalut[ii].scores.category[i].matches.match[j];
                           }
                    }


                  }else{

                        if(datadefalut[ii].scores.category[i].matches.match["@static_id"] === league){


                              match = datadefalut[ii].scores.category[i].matches.match;
                        }
                   }
            }
       }


        
      }
       // defalut version
       /*for(var i =0; i < datadefalut.scores.category.length; i++){

              
              if(datadefalut.scores.category[i]["@id"] === name){

                
                  cate = {
                      "@name":datadefalut.scores.category[i]["@name"],
                      "@gid":datadefalut.scores.category[i]["@gid"],
                      "@id":datadefalut.scores.category[i]["@id"],
                      "@file_group":datadefalut.scores.category[i]["@file_group"],
                      "@iscup":datadefalut.scores.category[i]["@iscup"],
                      "matches":{}
                  }
                
                  
                  if(Array.isArray(datadefalut.scores.category[i].matches.match) === true){


                    for(var j =0; j < datadefalut.scores.category[i].matches.match.length; j++){

                      
                      if(datadefalut.scores.category[i].matches.match[j]["@static_id"] === league){

                        
                              match = datadefalut.scores.category[i].matches.match[j];
                           }
                    }


                  }else{

                        if(datadefalut.scores.category[i].matches.match["@static_id"] === league){


                              match = datadefalut.scores.category[i].matches.match;
                        }
                   }
            }
       }*/



    cate.matches  = {match}

   }
 
   

   return { 
        league: data.commentaries.tournament , check:check , sleague : cate
   }

  /*let paths =  asPath;

  if(paths.indexOf("#") > -1){

    let newurl = paths.split("#");
    
    if(newurl[1].indexOf("&&") >-1){

      let lasturl = newurl[1].split("&&");
      const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/commentaries/match?id=${lasturl[0]}&league=${lasturl[1]}&json=1`)
      const data = await res.json()

      return { 
        league: data.commentaries.tournament.match
       }
    }
    else{

      return { 
        league: null
       }

    }
 }*/
  
}

export default PremierLeague;
