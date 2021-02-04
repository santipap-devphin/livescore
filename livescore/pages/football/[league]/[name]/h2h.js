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

const H2h = () => {
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
        H2H
      </TopLiveSoccerContent>
    </Layout>
  );
};

export default H2h;
