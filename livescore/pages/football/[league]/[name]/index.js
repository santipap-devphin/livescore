import React, { useState } from 'react';
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
  
  const router = useRouter()

  var obj = {};
  var title_obj = {}; 
  var events = [];

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
                          nav[1] = toTh;
                          nav[2] = props.league.match.localteam["@name"] +" vs "+ props.league.match.visitorteam["@name"];
                          

                        //console.log(obj.summary.localteam.goals)
                       
                        
                       


                      console.log(events)
                        /*sortable.sort(function(a, b) {
                            console.log(a[1] + " "+b[1])
                            return a[1] - b[1];
                        });*/
                        //console.log(obj.summary.localteam.goals)
                          //console.log(sortable);
  /*let toTh = router.query.league
    ? router.query.league === "uefa-league"
      ? "ยูฟ่า แชมเปี้ยนส์ลีก"
      : router.query.league === "premier-league"
        ? "พรีเมียร์ลีก อังกฤษ"
        : router.query.league === "europa-league"
          ? "ยูโรป้า ลีก"
          : router.query.league === "fa_cup-league"
            ? "เอฟเอ คัพ อังกฤษ"
            : router.query.league === "laliga-league"
              ? "ลาลีกา สเปน"
              : router.query.league === "calcio-league"
                ? "กัลโช่ เซเรีย อา อิตาลี"
                : router.query.league === "bundesliga-league"
                  ? "บุนเดสลีกา เยอรมัน"
                  : router.query.league === "eredivisie-league"
                    ? "เอเรดิวิซี่ ฮอลแลนด์"
                    : router.query.league === "ligue-league"
                      ? "ลีก เอิง ฝรั่งเศส"
                      : router.query.league === "jleague"
                        ? "เจ ลีก ญี่ปุ่น"
                        : router.query.league && router.query.league.replace(/-/g, " ")
                            : router.query.league && router.query.league.replace(/-/g, " ")
                          let pageTitle = router.query.name ? router.query.name.replace(/-/g, " ") : " "
                          for (var i = 0; i < nav.length; i++)
                            if (nav[i] == "football")
                              nav[i] = "ฟุตบอล";
                            else if (nav[i] == router.query.league)
                              nav[i] = toTh;
                          nav.push(pageTitle)*/



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

  /*let data = [
    {
      type: "FT",
      date: "2020/09/12",
      team: "Molde",
      score: "1 - 3",
      scoreA: "1",
      scoreB: "3",
      teamB: "Ferencvaros"
    },
  ]*/
 
  let data = [
    {
      title: props.league["@name"],
      type: props.league.match["@status"],
      date: props.league.match["@date"],
      team: props.league.match.localteam["@name"],
      score:props.league.match.localteam["@goals"] + " - " +props.league.match.visitorteam["@goals"] ,
      scoreA:props.league.match.localteam["@goals"],
      scoreB:props.league.match.visitorteam["@goals"],
      teamB: props.league.match.visitorteam["@name"]
    },
  ]

  
  
  

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
          {id: "1", name: "MATCH INFO", paths: `/${navMatchs[0]}/${navMatchs[1]}/${navMatchs[2]}`, active: true },
          {id: "2", name: "TRACKER", paths: `/${navMatchs[0]}/${navMatchs[1]}/${navMatchs[2]}/tracker`, active: false },
          {id: "3", name: "LINE-UPS", paths: `/${navMatchs[0]}/${navMatchs[1]}/${navMatchs[2]}/line-us`, active: false },
          {id: "3", name: "H2H", paths: `/${navMatchs[0]}/${navMatchs[1]}/${navMatchs[2]}/h2h`, active: false },
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
              venue:
            </div>
            <div className="card-body">
              <p className="mb-0">{props.league.match.matchinfo.stadium["@name"]}</p>
            </div>
          </div>
          <div className="card rounded-0 border-top-0 border-left-0 border-right-0 mb-4">
            <div className="card-header text-dark text-lowercase border-top-0 border-bottom-0 font-weight-bold">
              referee:
            </div>
            <div className="card-body">
              <p className="mb-0">{props.league.match.matchinfo.referee["@name"]}</p>
            </div>
          </div>
          <div className="card rounded-0 border-top-0 border-bottom-0 border-left-0 border-right-0">
            <div className="card-header text-dark text-lowercase border-top-0 border-bottom-0 font-weight-bold">
              ODDS:
            </div>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-sm-4 text-center text-sm-left">
                  <img className="img-fluid mb-3 mb-sm-0" src='/assets/defabet.png' />
                </div>
                <div className="col-sm-8 d-inline-block">
                  <div className="col-sm-4 d-inline-block mb-3 mb-sm-0 pl-sm-0 pr-sm-2">
                    <InputGroup symbo="1" value="4.80" disabled={true}/>
                  </div>
                  <div className="col-sm-4 d-inline-block mb-3 mb-sm-0 px-sm-2">
                    <InputGroup symbo="X" value="3.85" disabled={true}/>
                  </div>
                  <div className="col-sm-4 d-inline-block pl-sm-2 pr-sm-0">
                    <InputGroup symbo="2" value="1.75" disabled={true}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TopLiveSoccerContent>
    </Layout>
  );
}

PremierLeague.getInitialProps = async ({query}) => {

  let league =  query.league;
  let name =  query.name;
  let events ;
  const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/commentaries/match?id=${league}&league=${name}&json=1`)
  const data = await res.json()


  
  return { 
    league: data.commentaries.tournament
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
