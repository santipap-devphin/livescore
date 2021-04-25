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

const PremierLeague = (props ,{ }) => {
  
  function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
  }
  const router = useRouter()
  const [defalut, setDefalut] = useState(props);
  const [ldata, setLdata] = useState(null);
  const [errs, setErrs] = useState(false);
  const [opens, setOpens] = useState(false);

  var obj = {};
  var title_obj = {}; 
  var events = [];
  let data;
  let numm = 0;
  console.log(defalut)
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
  

},[]);

  let path = router.asPath
  
  const host = path.split("/");
  let nav = host.slice(1, host.length - 1);
  let nmatch = host.slice(1, host.length);
  let navMatchs = Object.assign({}, nmatch);
console.log(navMatchs)
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
                              console.log(props.league.match["@status"])
                   
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
                                team: props.league.match.localteam["@name"],
                                score:props.league.match.localteam["@goals"] + " - " +props.league.match.visitorteam["@goals"] ,
                                scoreA:props.league.match.localteam["@goals"],
                                scoreB:props.league.match.visitorteam["@goals"],
                                teamB: props.league.match.visitorteam["@name"]
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
                                team: defalut.sleague.matches.match.localteam["@name"],
                                score:defalut.sleague.matches.match.localteam["@goals"] + " - " +defalut.sleague.matches.match.visitorteam["@goals"] ,
                                scoreA:defalut.sleague.matches.match.localteam["@goals"],
                                scoreB:defalut.sleague.matches.match.visitorteam["@goals"],
                                teamB: defalut.sleague.matches.match.visitorteam["@name"]
                              },
                            ]


                          }
        
      const [isVoted, setVoted] = useState(false);
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
      }

  
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
        
        <div className='card border-top-0 py-4 mb-4 mb-sm-0'>
       
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
          
          <div className="card rounded-0 border-top-0 border-left-0 border-right-0 mb-4">
            <div className="card-header text-dark text-lowercase border-top-0 border-bottom-0 font-weight-bold">
              เตะสนาม:
            </div>
            <div className="card-body">
              <p className="mb-0">{ defalut.check === 1 ? "ไม่มีข้อมูล" :  defalut.league.match.matchinfo.stadium["@name"]}</p>
            </div>
          </div>
          <div className="card rounded-0 border-top-0 border-left-0 border-right-0 mb-4">
            <div className="card-header text-dark text-lowercase border-top-0 border-bottom-0 font-weight-bold">
              ผู้ตัดสิน:
            </div>
            <div className="card-body">
              <p className="mb-0">{defalut.check === 1 ? "ไม่มีข้อมูล" : defalut.league.match.matchinfo.referee["@name"]}</p>
            </div>
          </div>

          
          <div className="card rounded-0 border-top-0 border-bottom-0 border-left-0 border-right-0">
            <div className="card-header text-dark text-lowercase border-top-0 border-bottom-0 font-weight-bold">
              ราคาต่อรอง (Match Winner) :
            </div>
            {

                  errs !== false ?

                  ldata === null ? <center style={{padding:"10px"}}><h1>ไม่มีข้อมูล</h1></center>
                  :
                  ldata.odds.map((res,index) => (

                          res["value"] === "Match Winner" ?

                                Array.isArray(res["bookmakers"]) === true ?
                                
                                          res["bookmakers"].map((resin,indexin) => (

                                              resin["id"] === "88" || resin["id"] === "56" || resin["id"] === "105" || resin["id"] === "232" || resin["id"] === "16" ? 
                                              <div className="card-body" key={indexin}>
                                              <div className="row align-items-center">
                                                <div className="col-sm-4 text-center text-sm-left">
                                                  {/*<img className="img-fluid mb-3 mb-sm-0" src='/assets/defabet.png' />*/}
                                                  {resin["name"]}
                                                </div>
                                                <div className="col-sm-8 d-inline-block">
                                                  <div className="col-sm-4 d-inline-block mb-3 mb-sm-0 pl-sm-0 pr-sm-2">
                                                    {
                                                    
                                                    resin["odds"].map((result,num) => 
                                                      
                                                    result["name"] === "Home" ?
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
                                                      
                                                        result["name"] === "Away" ?
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
                                  

                                : 
                                null
                                
                          : null


                    )) 
                  :<center><h1>loading .......</h1></center>

                  }
         
            
          </div>
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

       const resdefalut = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/${paramdefalut}?json=1`)
       const datadefalut = await resdefalut.json()

       for(var i =0; i < datadefalut.scores.category.length; i++){

              
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
       }



    cate.matches  = {match}

   }
 
   

   return { 
        league: data.commentaries.tournament , check:check , sleague : cate  ,date :todayNY
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