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

  console.log(props)
  const router = useRouter()
  let path = router.asPath
  const host = path.split("/");
  let nav = host.slice(1, host.length - 2);
  let navM = host.slice(1, host.length - 1);
  let navMatchs = Object.assign({}, navM);

  let objteam = {};
  
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

                        console.log(toTh)
                        for (var i = 0; i < nav.length; i++)
                          if (nav[i] == "football")
                            nav[i] = "ฟุตบอล";
                          else if (nav[i] == router.query.name)
                            nav[i] = toTh;
                            nav[1] = toTh;
                            nav[2] = props.league.match.localteam["@name"] +" vs "+ props.league.match.visitorteam["@name"];
  
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
          {id: "1", name: "MATCH INFO", paths: `/${navMatchs[0]}/${navMatchs[1]}/${navMatchs[2]}`, active: false },
          {id: "2", name: "TRACKER", paths: `/${navMatchs[0]}/${navMatchs[1]}/${navMatchs[2]}/tracker`, active: false },
          {id: "3", name: "LINE-UPS", paths: `/${navMatchs[0]}/${navMatchs[1]}/${navMatchs[2]}/line-us`, active: false },
          {id: "3", name: "H2H", paths: `/${navMatchs[0]}/${navMatchs[1]}/${navMatchs[2]}/h2h`, active: true },
        ]}
      >
       
         
                  
                    {

                      props.listh2s.h2h.top50 !== null ? 
                     
                          Array.isArray(props.listh2s.h2h.top50.match) === true ?  
                        
                        
                                props.listh2s.h2h.top50.match.slice(0, 10).map((res,index) => (

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
                              
                                    {props.listh2s.h2h.top50.match["@team1"] +" "+ props.listh2s.h2h.top50.match["@team1_score"] +"-" + props.listh2s.h2h.top50.match["@team2_score"] +" "+props.listh2s.h2h.top50.match["@team2"]} 
                            </div>
                            <div className="col-4 px-2" style={{textAlign: "center"}}>
                                  {props.listh2s.h2h.top50.match["@league"]}
                            </div>
                            <div className="col-2 px-2" style={{textAlign: "center"}}>
                                วัน {props.listh2s.h2h.top50.match["@date"]}
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

  const responh2h = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/h2h/${json.commentaries.tournament.match.localteam["@id"]}/${json.commentaries.tournament.match.visitorteam["@id"]}?json=1`)
  const jsonh2h = await responh2h.json()



  //return { listdata: host[2]}
  return { league: json.commentaries.tournament ,listh2s :jsonh2h}
}

export default H2h;
