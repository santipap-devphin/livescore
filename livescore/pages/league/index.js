import React from 'react'
import HeaderSeo from "../../shared/commons/HeaderSeo"
import Layout from "../../shared/container/Layout"
import Navigation from "../../shared/commons/Navigation"

const League = () => {
    let routes = [
      { key: "1", title: "พรีเมียร์ลีก อังกฤษ", links: "/premier-league", img: "/assets/icons/league/league_premier.png" },
      { key: "2", title: "ยูฟ่า แชมเปี้ยนส์ลีก", links: "/uefa-league", img: "/assets/icons/league/league_uefa.png" },
      { key: "3", title: "ยูโรป้า ลีก", links: "/europa-league", img: "/assets/icons/league/league_europa.png" },
      { key: "4", title: "เอฟเอ คัพ อังกฤษ", links: "/fa-cup-league", img: "/assets/icons/league/league_fa_cup.png" },
      { key: "5", title: "ลาลีกา สเปน", links: "/laliga-league", img: "/assets/icons/league/league_laliga.png" },
      { key: "6", title: "กัลโช่ เซเรีย อา อิตาลี", links: "/calcio-league", img: "/assets/icons/league/league_calcio.png" },
      { key: "7", title: "บุนเดสลีกา เยอรมัน", links: "/bundesliga-league", img: "/assets/icons/league/league_bundesliga.png" },
      { key: "8", title: "เอเรดิวิซี่ ฮอลแลนด์", links: "/eredivisie-league", img: "/assets/icons/league/league_eredivisie.png" },
      { key: "9", title: "ลีก เอิง ฝรั่งเศส", links: "/ligue-league", img: "/assets/icons/league/league_ligue.png" },
      { key: "10", title: "เจ ลีก ญี่ปุ่น", links: "/jleague", img: "/assets/icons/league/league_jleague.png" }
    ]
    let worldleague = [
      { key: "1", title: "พรีเมียร์ลีก อังกฤษ", links: "/premier-league", img: "/assets/icons/league/league_premier.png" },
      { key: "2", title: "ยูฟ่า แชมเปี้ยนส์ลีก", links: "/uefa-league", img: "/assets/icons/league/league_uefa.png" },
      { key: "3", title: "ยูโรป้า ลีก", links: "/europa-league", img: "/assets/icons/league/league_europa.png" },
      { key: "4", title: "เอฟเอ คัพ อังกฤษ", links: "/fa-cup-league", img: "/assets/icons/league/league_fa_cup.png" },
      { key: "5", title: "ลาลีกา สเปน", links: "/laliga-league", img: "/assets/icons/league/league_laliga.png" },
      { key: "6", title: "กัลโช่ เซเรีย อา อิตาลี", links: "/calcio-league", img: "/assets/icons/league/league_calcio.png" },
      { key: "7", title: "บุนเดสลีกา เยอรมัน", links: "/bundesliga-league", img: "/assets/icons/league/league_bundesliga.png" },
      { key: "8", title: "เอเรดิวิซี่ ฮอลแลนด์", links: "/eredivisie-league", img: "/assets/icons/league/league_eredivisie.png" },
      { key: "9", title: "ลีก เอิง ฝรั่งเศส", links: "/ligue-league", img: "/assets/icons/league/league_ligue.png" },
      { key: "10", title: "เจ ลีก ญี่ปุ่น", links: "/jleague", img: "/assets/icons/league/league_jleague.png" },
      { key: "1", title: "พรีเมียร์ลีก อังกฤษ", links: "/premier-league", img: "/assets/icons/league/league_premier.png" },
      { key: "2", title: "ยูฟ่า แชมเปี้ยนส์ลีก", links: "/uefa-league", img: "/assets/icons/league/league_uefa.png" },
      { key: "3", title: "ยูโรป้า ลีก", links: "/europa-league", img: "/assets/icons/league/league_europa.png" },
      { key: "4", title: "เอฟเอ คัพ อังกฤษ", links: "/fa-cup-league", img: "/assets/icons/league/league_fa_cup.png" },
      { key: "5", title: "ลาลีกา สเปน", links: "/laliga-league", img: "/assets/icons/league/league_laliga.png" },
      { key: "6", title: "กัลโช่ เซเรีย อา อิตาลี", links: "/calcio-league", img: "/assets/icons/league/league_calcio.png" },
      { key: "7", title: "บุนเดสลีกา เยอรมัน", links: "/bundesliga-league", img: "/assets/icons/league/league_bundesliga.png" },
      { key: "8", title: "เอเรดิวิซี่ ฮอลแลนด์", links: "/eredivisie-league", img: "/assets/icons/league/league_eredivisie.png" },
      { key: "9", title: "ลีก เอิง ฝรั่งเศส", links: "/ligue-league", img: "/assets/icons/league/league_ligue.png" },
      { key: "10", title: "เจ ลีก ญี่ปุ่น", links: "/jleague", img: "/assets/icons/league/league_jleague.png" },
      { key: "1", title: "พรีเมียร์ลีก อังกฤษ", links: "/premier-league", img: "/assets/icons/league/league_premier.png" },
      { key: "2", title: "ยูฟ่า แชมเปี้ยนส์ลีก", links: "/uefa-league", img: "/assets/icons/league/league_uefa.png" },
      { key: "3", title: "ยูโรป้า ลีก", links: "/europa-league", img: "/assets/icons/league/league_europa.png" },
      { key: "4", title: "เอฟเอ คัพ อังกฤษ", links: "/fa-cup-league", img: "/assets/icons/league/league_fa_cup.png" },
      { key: "5", title: "ลาลีกา สเปน", links: "/laliga-league", img: "/assets/icons/league/league_laliga.png" },
      { key: "6", title: "กัลโช่ เซเรีย อา อิตาลี", links: "/calcio-league", img: "/assets/icons/league/league_calcio.png" },
      { key: "7", title: "บุนเดสลีกา เยอรมัน", links: "/bundesliga-league", img: "/assets/icons/league/league_bundesliga.png" },
      { key: "8", title: "เอเรดิวิซี่ ฮอลแลนด์", links: "/eredivisie-league", img: "/assets/icons/league/league_eredivisie.png" },
      { key: "9", title: "ลีก เอิง ฝรั่งเศส", links: "/ligue-league", img: "/assets/icons/league/league_ligue.png" },
      { key: "10", title: "เจ ลีก ญี่ปุ่น", links: "/jleague", img: "/assets/icons/league/league_jleague.png" },
    ]
    return (
        <Layout className="d-md-none">
            <HeaderSeo
                siteName=""
                title="live score"
                desc=""
                imgSrc=""
                metaUrl=""
                keyWords=""
                author=""
            />
            <Navigation navTitle="ลีคยอดฮิต" routes={routes} />
            <Navigation navTitle="ลีคอื่นๆ (ทั่วโลก)" routes={worldleague} />
        </Layout>
    )
}

export default League;
