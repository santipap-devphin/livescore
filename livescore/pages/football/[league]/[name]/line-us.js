import React, { useState } from 'react';
import HeaderSeo from "../../../../shared/commons/HeaderSeo"
import Layout from "../../../../shared/container/Layout"
import { useRouter } from 'next/router'
import TopLiveSoccerContent from "../../../../shared/components/TopLiveSoccerContent"
import MatchLineUp from "../../../../shared/components/MatchLineUp"

const LineUs = () => {
  const router = useRouter()
  let path = router.asPath
  const host = path.split("/");
  let nav = host.slice(1, host.length - 2);
  let navM = host.slice(1, host.length - 1);
  let navMatchs = Object.assign({}, navM);

  let toTh = router.query.league
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
  nav.push(pageTitle)

  let data = [
    {
      type: "FT",
      date: "2020/09/12",
      team: "Molde",
      score: "1 - 3",
      scoreA: "1",
      scoreB: "3",
      teamB: "Ferencvaros"
    },
  ]
  
  let players = [
    {
      id: "1",
      time: "10'",
      home: "",
      imgHome: "/assets/mock/mock_avatar.png",
      homeChange: {
        in: "Edward Nketiah",
        out: "Alexandre Lacazette"
      },
      score: {
        cardHome: "",
        score: "",
        cardAway: ""
      },
      away: "",
      awayChange: null,
      imgAway: ""
    },
    {
      id: "2",
      time: "23'",
      home: "",
      homeChange: null,
      score: {
        cardHome: "",
        score: "",
        cardAway: "y"
      },
      away: "Siebe Vandermeulen",
      awayChange: null,
      imgAway: "/assets/mock/mock_avatar.png"
    },
    {
      id: "3",
      time: "51'",
      home: "Erik Falkenburg",
      imgHome: "/assets/mock/mock_avatar.png",
      homeChange: null,
      score: {
        cardHome: "",
        score: "1 - 0",
        cardAway: ""
      },
      away: "",
      awayChange: null,
      imgAway: ""
    },
    {
      id: "4",
      time: "87'",
      imgHome: "/assets/mock/mock_avatar.png",
      home: "Kees Luijckx",
      homeChange: null,
      score: {
        cardHome: "",
        score: "",
        cardAway: ""
      },
      away: "",
      awayChange: null,
      imgAway: ""
    },
    {
      id: "5",
      time: "88'",
      home: "",
      imgHome: "",
      homeChange: null,
      score: {
        cardHome: "",
        score: "1 - 1",
        cardAway: ""
      },
      away: "Welat Cagro",
      awayChange: null,
      imgAway: "/assets/mock/mock_avatar.png"
    },
    {
      id: "6",
      time: "89'",
      home: "",
      imgHome: "",
      homeChange: null,
      score: {
        cardHome: "",
        score: "",
        cardAway: "y"
      },
      away: "Vincent Regeling",
      awayChange: null,
      imgAway: "/assets/mock/mock_avatar.png"
    }
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
          {id: "3", name: "LINE-UPS", paths: `/${navMatchs[0]}/${navMatchs[1]}/${navMatchs[2]}/line-us`, active: true },
          {id: "3", name: "H2H", paths: `/${navMatchs[0]}/${navMatchs[1]}/${navMatchs[2]}/h2h`, active: false },
        ]}
      >
        <MatchLineUp type="FT" players={players} />
      </TopLiveSoccerContent>
    </Layout>
  );
};

export default LineUs;
