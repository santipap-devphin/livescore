import React from 'react';
import fetch from 'isomorphic-unfetch'
import useDeviceDetect from "../../utils/useDeviceDetect";
import { useRouter } from 'next/router'
import { useState } from 'react';
import dynamic from 'next/dynamic'
import axios from 'axios';
import PropTypes from 'prop-types';
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import Sidebar from "../../components/Sidebar"
import Navigation from "../../commons/Navigation"
import CarouselTable from "../../commons/CarouselTable"
import NavCategory from "../../components/NavCategory"
import NavDate from "../../commons/NavDate"


function datee(nextday){

  const today = new Date()
  const tomorrow = new Date(today)

  tomorrow.setDate(tomorrow.getDate()+nextday)

  const neww = String(tomorrow);

  const newsdate = neww.split(" ");

  const newsformat = newsdate[1] + " " +newsdate[2];

  
  return newsformat;

}



const Layout = (props) => {

  const router = useRouter()
  let pathname = router.pathname
  const { isMobile } = useDeviceDetect();

    let LaLigaSantander = []
    let Premier = []
    let Bundesliga = []
    let SerieA = []

    /*props.standings[1].LaLiga.team.map((res,value) => (

      LaLigaSantander.push({"key": res["@position"], "title":res["@name"], "matches": res.overall["@gp"], "gd": res.total["@gd"], "points":  res.total["@p"]})
    )
    )

    props.standings[2].PremierLeague.team.map((res,value) => (

          Premier.push({"key": res["@position"], "title":res["@name"], "matches": res.overall["@gp"], "gd": res.total["@gd"], "points":  res.total["@p"]})

      )
      )
    props.standings[3].Bundesliga.team.map((res,value) => (

        Bundesliga.push({"key": res["@position"], "title":res["@name"], "matches": res.overall["@gp"], "gd": res.total["@gd"], "points":  res.total["@p"]})

    )
    )
    props.standings[4].Seriea.team.map((res,value) => (

        SerieA.push({"key": res["@position"], "title":res["@name"], "matches": res.overall["@gp"], "gd": res.total["@gd"], "points":  res.total["@p"]})

    )
    )*/
  

    let routes = [
      
      { key: "1", title: "พรีเมียร์ลีก อังกฤษ",id:"1204", links: "/league/1204/today/", img: "/assets/icons/league/league_premier.png" },
      { key: "2", title: "ยูฟ่า แชมเปี้ยนส์ลีก",id:"1005", links: "/league/1005/today/", img: "/assets/icons/league/league_uefa.png" },
      { key: "3", title: "ยูโรป้า ลีก",id:"1007", links: "/league/1007/today/", img: "/assets/icons/league/league_europa.png" },
      { key: "4", title: "เอฟเอ คัพ อังกฤษ",id:"1198", links: "/league/1198/today/", img: "/assets/icons/league/league_fa_cup.png" },
      { key: "5", title: "ลาลีกา สเปน",id:"1399", links: "/league/1399/today/", img: "/assets/icons/league/league_laliga.png" },
      { key: "6", title: "กัลโช่ เซเรีย อา อิตาลี",id:"1269", links: "/league/1269/today/", img: "/assets/icons/league/league_calcio.png" },
      { key: "7", title: "บุนเดสลีกา เยอรมัน",id:"1229", links: "/league/1229/today/", img: "/assets/icons/league/league_bundesliga.png" },
      { key: "8", title: "เอเรดิวิซี่ ฮอลแลนด์",id:"1322", links: "/league/1322/today/", img: "/assets/icons/league/league_eredivisie.png" },
      { key: "9", title: "ลีก เอิง ฝรั่งเศส",id:"1221", links: "/league/1221/today/", img: "/assets/icons/league/league_ligue.png" },
      { key: "10", title: "เจ ลีก ญี่ปุ่น",id:"1271", links: "/league/1271/today/", img: "/assets/icons/league/league_jleague.png" }
    ]
    let worldleague = [
      { key: "1", title: "พรีเมียร์ลีก อังกฤษ",id:"", links: "/premier-league", img: "/assets/icons/league/league_premier.png" },
      { key: "2", title: "ยูฟ่า แชมเปี้ยนส์ลีก",id:"", links: "/uefa-league", img: "/assets/icons/league/league_uefa.png" },
      { key: "3", title: "ยูโรป้า ลีก",id:"", links: "/europa-league", img: "/assets/icons/league/league_europa.png" },
      { key: "4", title: "เอฟเอ คัพ อังกฤษ",id:"", links: "/fa-cup-league", img: "/assets/icons/league/league_fa_cup.png" },
      { key: "5", title: "ลาลีกา สเปน",id:"", links: "/laliga-league", img: "/assets/icons/league/league_laliga.png" },
      { key: "6", title: "กัลโช่ เซเรีย อา อิตาลี",id:"", links: "/calcio-league", img: "/assets/icons/league/league_calcio.png" },
      { key: "7", title: "บุนเดสลีกา เยอรมัน",id:"", links: "/bundesliga-league", img: "/assets/icons/league/league_bundesliga.png" },
      { key: "8", title: "เอเรดิวิซี่ ฮอลแลนด์",id:"", links: "/eredivisie-league", img: "/assets/icons/league/league_eredivisie.png" },
      { key: "9", title: "ลีก เอิง ฝรั่งเศส",id:"", links: "/ligue-league", img: "/assets/icons/league/league_ligue.png" },
      { key: "10", title: "เจ ลีก ญี่ปุ่น",id:"", links: "/jleague", img: "/assets/icons/league/league_jleague.png" },
      { key: "11", title: "พรีเมียร์ลีก อังกฤษ",id:"", links: "/premier-league", img: "/assets/icons/league/league_premier.png" },
      { key: "12", title: "ยูฟ่า แชมเปี้ยนส์ลีก",id:"", links: "/uefa-league", img: "/assets/icons/league/league_uefa.png" },
      { key: "13", title: "ยูโรป้า ลีก",id:"", links: "/europa-league", img: "/assets/icons/league/league_europa.png" },
      { key: "14", title: "เอฟเอ คัพ อังกฤษ",id:"", links: "/fa-cup-league", img: "/assets/icons/league/league_fa_cup.png" },
      { key: "15", title: "ลาลีกา สเปน",id:"", links: "/laliga-league", img: "/assets/icons/league/league_laliga.png" },
      { key: "16", title: "กัลโช่ เซเรีย อา อิตาลี",id:"", links: "/calcio-league", img: "/assets/icons/league/league_calcio.png" },
      { key: "17", title: "บุนเดสลีกา เยอรมัน",id:"", links: "/bundesliga-league", img: "/assets/icons/league/league_bundesliga.png" },
      { key: "18", title: "เอเรดิวิซี่ ฮอลแลนด์",id:"", links: "/eredivisie-league", img: "/assets/icons/league/league_eredivisie.png" },
      { key: "19", title: "ลีก เอิง ฝรั่งเศส",id:"", links: "/ligue-league", img: "/assets/icons/league/league_ligue.png" },
      { key: "20", title: "เจ ลีก ญี่ปุ่น",id:"", links: "/jleague", img: "/assets/icons/league/league_jleague.png" },
      { key: "21", title: "พรีเมียร์ลีก อังกฤษ",id:"", links: "/premier-league", img: "/assets/icons/league/league_premier.png" },
      { key: "22", title: "ยูฟ่า แชมเปี้ยนส์ลีก",id:"", links: "/uefa-league", img: "/assets/icons/league/league_uefa.png" },
      { key: "23", title: "ยูโรป้า ลีก",id:"", links: "/europa-league", img: "/assets/icons/league/league_europa.png" },
      { key: "24", title: "เอฟเอ คัพ อังกฤษ",id:"", links: "/fa-cup-league", img: "/assets/icons/league/league_fa_cup.png" },
      { key: "25", title: "ลาลีกา สเปน",id:"", links: "/laliga-league", img: "/assets/icons/league/league_laliga.png" },
      { key: "26", title: "กัลโช่ เซเรีย อา อิตาลี",id:"", links: "/calcio-league", img: "/assets/icons/league/league_calcio.png" },
      { key: "27", title: "บุนเดสลีกา เยอรมัน",id:"", links: "/bundesliga-league", img: "/assets/icons/league/league_bundesliga.png" },
      { key: "28", title: "เอเรดิวิซี่ ฮอลแลนด์",id:"", links: "/eredivisie-league", img: "/assets/icons/league/league_eredivisie.png" },
      { key: "29", title: "ลีก เอิง ฝรั่งเศส",id:"", links: "/ligue-league", img: "/assets/icons/league/league_ligue.png" },
      { key: "30", title: "เจ ลีก ญี่ปุ่น",id:"", links: "/jleague", img: "/assets/icons/league/league_jleague.png" },
    ]
    
    /*let slide = [
      { id: "1", title: "LaLiga Santander", match: LaLigaSantander},
      { id: "2", title: "Premier League", match: Premier},
      { id: "3", title: "Bundesliga", match: Bundesliga},
      { id: "4", title: "SerieA", match: SerieA},
    ]*/

    let mobileRoute = [
      {id: "1", title: "Live", url: "/"},
      {id: "2", title: "Leagues", url: "/league"},
      {id: "3", title: "Standings", url: "/standings"},
    ]
    let navDate = [
      { id: "1", date: datee(-3), route: "/soccer/programs/d-3", today: false },
      { id: "2", date: datee(-2), route: "/soccer/programs/d-2", today: false },
      { id: "3", date: datee(-1), route: "/soccer/programs/d-1", today: false },
      { id: "4", date: datee(0), route: "/", today: true },
      { id: "5", date: datee(1), route: "/soccer/programs/d1", today: false },
      { id: "6", date: datee(2), route: "/soccer/programs/d2", today: false },
      { id: "7", date: datee(3), route: "/soccer/programs/d3", today: false }
    ]
    return (
      <>
        <Header className={props.className} />
        
        {/* {!isMobile ? */}
        <NavCategory route={mobileRoute} />
        {
          pathname === "/"
          ? <NavDate
          DataDate={navDate.slice(1, navDate.length - 1)}
          className="d-flex d-md-none w-100"
          onClickLeft={() => console.log("left")}
          onClickRight={() => console.log("right")}
        /> : ""
        }
        <div className="container-fluid container-xl pt-4">
          <div className="row row-cols-xl-3">
            <aside className="col-md-4 col-xl-3 d-none d-md-block">
              <div className="sidebar-box">
                <Sidebar>
                  <Navigation navTitle="ลีคยอดฮิต" routes={routes}/>
                  <img className="mb-4 img-fluid w-100 h-200px" src="/assets/ads/ads200x200.png" alt="" />
                </Sidebar>
                <Navigation 
                  className="" 
                  navTitle="ลีคอื่นๆ (ทั่วโลก)" 
                  routes={worldleague} 
                  
                />
                <img className="mb-4 img-fluid w-100 h-200px" src="/assets/ads/ads200x200.png" alt="" />
                <img className="mb-4 img-fluid w-100 h-200px" src="/assets/ads/ads200x200.png" alt="" />
              </div>
              <div className="sidebar-box d-none d-md-block d-xl-none">
                <Sidebar>{/* ตารางคะแนนหน้า Homepage */}
                  {/*<CarouselTable 
                    slideValues={slide}
                    className="mb-4"
                  />*/}
                  <img className="mb-4 img-fluid w-100 h-100px" src="/assets/ads/ads300x100.png" alt="" />
                  <img className="mb-4 img-fluid w-100 h-100px" src="/assets/ads/ads300x100.png" alt="" />
                </Sidebar>
              </div>
            </aside>
            <main className={`col-md-8 col-xl-9 ${props.className}`}>
              <article>
                {props.children}
              </article>
            </main>
            <aside className="col-md-4 col-xl-3 d-none d-xl-block">{/* ตารางคะแนนหน้า Homepage */}{}
              <Sidebar>
               
                {/*<CarouselTable 
                  slideValues={slide}
                  className="mb-4"
                />*/}
                <p>{}</p>
                <img className="mb-5 img-fluid w-100 h-100px" src="/assets/ads/ads300x100.png" alt="" />
                <img className="mb-5 img-fluid w-100 h-100px" src="/assets/ads/ads300x100.png" alt="" />
              </Sidebar>
            </aside>
          </div>
        </div>
        <Footer />
      </>
    );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  bgHeader: PropTypes.string,
  className: PropTypes.string,
  };
Layout.defaultProps = {
  bgHeader: "",
  className: "",
  standings:[]
  }



  


export default Layout;
