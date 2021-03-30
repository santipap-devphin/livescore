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
import Carousel from "../../../../shared/commons/Carousel"
import CarouselTableMobile from "../../../../shared/commons/CarouselTableMobile"
import TopLiveSoccerContent from "../../../../shared/components/TopLiveSoccerContent"

const Tracker = (props) => {

  //console.log(props)

  const [defalut, setDefalut] = useState(props);
  let obj = {};
  let objteam = {};
  let data;

  var clipss = []
  const router = useRouter()
  let path = router.asPath
  const host = path.split("/");
  let nav = host.slice(1, host.length - 2);
  let navM = host.slice(1, host.length - 1);
  let navMatchs = Object.assign({}, navM);

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
                             
                          nav.push(pageTitle)
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
                          
                          



  const [isVoted, setVoted] = useState(false);
  const [score, setScore] = useState(false)
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
          {id: "1", name: "MATCH INFO", paths: `/${navMatchs[0]}/${navMatchs[1]}/${navMatchs[2]}`, active: false },
          {id: "2", name: "TRACKER", paths: `/${navMatchs[0]}/${navMatchs[1]}/${navMatchs[2]}/tracker`, active: true },
          {id: "3", name: "LINE-UPS", paths: `/${navMatchs[0]}/${navMatchs[1]}/${navMatchs[2]}/line-us`, active: false },
          {id: "3", name: "H2H", paths: `/${navMatchs[0]}/${navMatchs[1]}/${navMatchs[2]}/h2h`, active: false },
        ]}
      >
        {
        defalut.check === 1 ? 
        <div style={{padding: "20px"}}>
          <center><h1>ไม่มีข้อมูล</h1></center>
        </div>
        
        :  
            defalut.league.match.stats === null ? 
            <div style={{padding: "20px"}}>
              <center><h1>ไม่มีข้อมูล</h1></center>
            </div>
            : 
            <CardSoccer teams={objteam} list={defalut.league.match.stats}/>
        }
        
        
      
      </TopLiveSoccerContent>
    </Layout>
  );
};

Tracker.getInitialProps = async ({asPath}) => {

  let path = asPath
  const host = path.split("/");

  const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/commentaries/match?id=${host[2]}&league=${host[3]}&json=1`)
  const data = await res.json()
  let check = 0; 
  let match;
  let cate;
  if(typeof data.commentaries.tournament === "undefined"){

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


                }


              }


            }else{

              if(datadefalut.scores.category[i].matches.match["@static_id"] === host[2]){


                        match = datadefalut.scores.category[i].matches.match;
                        cate.matches  = {match}


                 }


            }


      }



    }



  }




  
  //return { listdata: host[2]}
  return { league: data.commentaries.tournament , check:check ,sleague :cate}
}

export default Tracker;
