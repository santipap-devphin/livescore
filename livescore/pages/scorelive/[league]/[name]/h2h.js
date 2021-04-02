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
import CardSoccer from "../../../../shared/components/CardSoccer"
import TopLiveSoccerContent from "../../../../shared/components/TopLiveSoccerContent"

const H2h = (props) => {

  //console.log(props)
  const router = useRouter()
  let path = router.asPath
  const host = path.split("/");
  let nav = host.slice(1, host.length - 2);
  let navM = host.slice(1, host.length - 1);
  let navMatchs = Object.assign({}, navM);
  const [defalut, setDefalut] = useState(props);
  let objteam = {};
  let data;
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

                        //console.log(toTh)
                        for (var i = 0; i < nav.length; i++)
                          if (nav[i] == "football")
                            nav[i] = "ฟุตบอล";
                          else if (nav[i] == router.query.name)
                            nav[i] = toTh;

                            if(defalut.check === 0){

                              nav[1] = toTh;
                              nav[2] = defalut.league.match.localteam["@name"] +" vs "+ defalut.league.match.visitorteam["@name"];
                            
                               data = [
                                {
                                  title: defalut.league["@name"],
                                  type: defalut.league.match["@status"],
                                  date: defalut.league.match["@date"],
                                  team: defalut.league.match.localteam["@name"],
                                  score:defalut.league.match.localteam["@goals"] + " - " +defalut.league.match.visitorteam["@goals"] ,
                                  scoreA:defalut.league.match.localteam["@goals"],
                                  scoreB:defalut.league.match.visitorteam["@goals"],
                                  teamB: defalut.league.match.visitorteam["@name"]
                                },
                              ]
  
                              objteam["localteam"] = defalut.league.match.localteam["@name"];
                              objteam["visitorteam"] = defalut.league.match.visitorteam["@name"];
  
                            }else{
  
                              nav[1] = toTh;
                              nav[2] = defalut.sleague.matches.match.localteam["@name"] +" vs "+ defalut.sleague.matches.match.visitorteam["@name"];
                              data = [
                               {
                                 title: defalut.sleague["@name"],
                                 type: defalut.sleague.matches.match["@status"],
                                 date: defalut.sleague.matches.match["@date"],
                                 team: defalut.sleague.matches.match.localteam["@name"],
                                 score:defalut.sleague.matches.match.localteam["@goals"] + " - " +defalut.sleague.matches.match.visitorteam["@goals"] ,
                                 scoreA:defalut.sleague.matches.match.localteam["@goals"],
                                 scoreB:defalut.sleague.matches.match.visitorteam["@goals"],
                                 teamB: defalut.sleague.matches.match.visitorteam["@name"]
                               },
                             ]
  
                              objteam["localteam"] = defalut.sleague.matches.match.localteam["@name"];
                              objteam["visitorteam"] = defalut.sleague.matches.match.visitorteam["@name"];
  
  
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
          {id: "1", name: "รายละเอียด", paths: `/${navMatchs[0]}/${navMatchs[1]}/${navMatchs[2]}`, active: false },
          {id: "2", name: "ข้อมูลเชิงลึก", paths: `/${navMatchs[0]}/${navMatchs[1]}/${navMatchs[2]}/tracker`, active: false },
          {id: "3", name: "ผู้เล่น", paths: `/${navMatchs[0]}/${navMatchs[1]}/${navMatchs[2]}/line-us`, active: false },
          {id: "3", name: "ผลงานเจอกัน", paths: `/${navMatchs[0]}/${navMatchs[1]}/${navMatchs[2]}/h2h`, active: true },
        ]}
      >
       
         
                  
                    {
                      

                        defalut.listh2s.h2h.top50 !== null ? 
                     
                          Array.isArray(defalut.listh2s.h2h.top50.match) === true ?  
                        
                        
                              defalut.listh2s.h2h.top50.match.slice(0, 10).map((res,index) => (

                                    <div className="row" key={index.toString()} style={{margin: "20px"}}>
                                          <div className="col-6 px-2" style={{textAlign: "center"}}>
                                            
                                                  {res["@team1"] +" "+ res["@team1_score"] +"-" + res["@team2_score"] +" "+res["@team2"]} 
                                          </div>
                                          <div className="col-4 px-2" style={{textAlign: "center"}}>
                                                {res["@league"]}
                                          </div>
                                          <div className="col-2 px-2" style={{textAlign: "center"}}>
                                              วัน {res["@date"]}
                                          </div>
                                  
                                    </div>

                                ))
                     
                     
                     
                     
                     :
                        <div className="row" key={0} style={{margin: "20px"}}>
                            <div className="col-6 px-2" style={{textAlign: "center"}}>
                              
                                    {defalut.listh2s.h2h.top50.match["@team1"] +" "+ defalut.listh2s.h2h.top50.match["@team1_score"] +"-" + defalut.listh2s.h2h.top50.match["@team2_score"] +" "+defalut.listh2s.h2h.top50.match["@team2"]} 
                            </div>
                            <div className="col-4 px-2" style={{textAlign: "center"}}>
                                  {defalut.listh2s.h2h.top50.match["@league"]}
                            </div>
                            <div className="col-2 px-2" style={{textAlign: "center"}}>
                                วัน {defalut.listh2s.h2h.top50.match["@date"]}
                            </div>
                        </div>
                    
                    : <div style={{padding: "20px"}}><center><h1>ไม่มีข้อมูล</h1></center></div>
                    }
                    
                  
           

          
      </TopLiveSoccerContent>
    </Layout>
  );
};

H2h.getInitialProps = async ({asPath}) => {

  let path = asPath
  const host = path.split("/");
  
  const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/commentaries/match?id=${host[2]}&league=${host[3]}&json=1`)
  const json = await res.json()
  let check = 0; 
  let match;
  let cate;
  let localteamid;
  let visitorteam;
  let global;
  if(typeof json.commentaries.tournament === "undefined"){

      check = 1;
      const resdefalut = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/home?json=1`)
      const datadefalut = await resdefalut.json()

      for(var i =0; i < datadefalut.scores.category.length; i++){

        if(datadefalut.scores.category[i]["@id"] === host[3]){

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
  
  
                  if(datadefalut.scores.category[i].matches.match[j]["@static_id"] === host[2]){
  

                           match = datadefalut.scores.category[i].matches.match[j];
                           cate.matches  = {match}
                           localteamid = datadefalut.scores.category[i].matches.match[j].localteam["@id"];
                           visitorteam = datadefalut.scores.category[i].matches.match[j].visitorteam["@id"];
                           const responh2hin = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/h2h/${localteamid}/${visitorteam}?json=1`)
                           const jsonh2h = await responh2hin.json()
                           global = jsonh2h;

                          
  
  
                  }
  
  
                }
  
  
              }else{
  
                if(datadefalut.scores.category[i].matches.match["@static_id"] === host[2]){
  
  
                            match = datadefalut.scores.category[i].matches.match;
                            cate.matches  = {match}
                            localteamid = datadefalut.scores.category[i].matches.match.localteam["@id"];
                            visitorteam = datadefalut.scores.category[i].matches.match.visitorteam["@id"];
                            const responh2hin = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/h2h/${localteamid}/${visitorteam}?json=1`)
                            const jsonh2h = await responh2hin.json()
                            global = jsonh2h;
                        
  
  
                   }
  
  
              }
  
  
        }
  
  
  
      }



  }else{


    const responh2h = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/h2h/${json.commentaries.tournament.match.localteam["@id"]}/${json.commentaries.tournament.match.visitorteam["@id"]}?json=1`)
    const jsonh2h = await responh2h.json()
    global = jsonh2h;


  }







  



  //return { listdata: host[2]}
  return { league: json.commentaries.tournament ,listh2s :global ,check:check ,sleague :cate}
}

export default H2h;
