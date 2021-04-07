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
  //const pathh = router.asPath
  let pathname = router.pathname
  //console.log(pathname)
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
      { key: "1", title: "France",id:"1012", links: "/league/1012/today/", img: "" },
      { key: "2", title: "Germany",id:"1014", links: "/league/1014/today/", img: "" },
      { key: "3", title: "Italy",id:"1019", links: "/league/1019/today/", img: ""},
      { key: "4", title: "Spain",id:"1033", links: "/league/1033/today/", img: "" },
      { key: "5", title: "Sweden",id:"1035", links: "/league/1035/today/", img: "" },
      { key: "6", title: "Albania",id:"1064", links: "/league/1064/today/", img: "" },
      { key: "7", title: "Argentina",id:"1076", links: "/league/1076/today/", img: "" },
      { key: "8", title: "Armenia",id:"1082", links: "/league/1082/today/", img: "" },
      { key: "9", title: "Australia",id:"1086", links: "/league/1086/today/",img: "" },
      { key: "10", title: "Bahrain",id:"1097", links: "/league/1097/today/", img: "" },
      { key: "11", title: "Belgium",id:"1102", links: "/league/1102/today/", img: "" },
      { key: "12", title: "Bosnia and Herzegovina",id:"1111", links: "/league/1111/today/",img: "" },
      { key: "13", title: "Brazil",id:"1141", links: "/league/1141/today/", img: "" },
      { key: "14", title: "Bulgaria",id:"1154", links: "/league/1154/today/", img: "" },
      { key: "15", title: "Canada",id:"1156", links: "/league/1156/today/", img: "" },
      { key: "16", title: "Chile",id:"1159", links: "/league/1159/today/", img: "" },
      { key: "17", title: "China",id:"1162", links: "/league/1162/today/", img: "" },
      { key: "18", title: "Croatia",id:"1172", links: "/league/1172/today/", img: "" },
      { key: "19", title: "Czech Republic",id:"1184", links: "/league/1184/today/", img: "" },
      { key: "20", title: "Denmark",id:"1185", links: "/league/1185/today/", img: ""},
      { key: "21", title: "Ecuador",id:"1191", links: "/league/1191/today/", img: "" },
      { key: "22", title: "Egypt",id:"1193", links: "/league/1193/today/", img: ""},
      { key: "23", title: "England",id:"1204", links: "/league/1204/today/", img: "" },
      { key: "24", title: "Finland",id:"1213", links: "/league/1213/today/", img: ""},
      { key: "25", title: "Greece",id:"1232", links: "/league/1232/today/", img: "" },
      { key: "26", title: "Hong Kong",id:"1243", links: "/league/1243/today/", img: "" },
      { key: "27", title: "Hungary",id:"1248", links: "/league/1248/today/", img: "" },
      { key: "28", title: "India",id:"1250", links: "/league/1250/today/", img: ""},
      { key: "29", title: "Japan",id:"1271", links: "/league/1271/today/", img: ""},
      { key: "30", title: "Jordan",id:"1275", links: "/league/1275/today/", img: ""},
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

        {pathname.indexOf("/scorelive") > -1 ?
        <div className="container">
           <div className="row">
           
              <div className="col-md-3">
                      <a className="navbar-brand" href="/live"><img src="/assets/7scorex300.png" alt="7SCORE" /></a>
              </div>
              <div className="col-md-4" style={{paddingTop:20}}>
                      <a href="/live">กลับหน้าหลัก </a>
              </div>
          </div>
        </div>
        : 
        <Header className={props.className} />
        }
        
        
        {/* {!isMobile ? */}
        {pathname.indexOf("/scorelive") > -1 ? "" 
        :<NavCategory route={mobileRoute} />
        }
       
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
                  {
                    pathname === "/highlight" ? "" 
                    :
                    pathname === "/plugins/table-score" ? "" 
                    :
                    pathname === "/clubs" ? "" 
                    :
                    pathname === "/standings" ? "" 
                    :
                    pathname.indexOf("/scorelive") > -1 ? ""
                    :
                    <Navigation navTitle="ลีคยอดฮิต" routes={routes}/>

                  }
                  <div className="banner">
                    <a href="#" target="_blank" rel="nofollow"><img className="" src="/banner/Sbobet-55555.com 250x500.gif" alt="" /></a>
                    { /* <img className="mb-4 img-fluid w-100 h-200px" src="/assets/ads/ads200x200.png" alt="" />  */ }
                  </div>
                 
                </Sidebar>
                {
                     pathname === "/highlight" ? ""
                     :
                     pathname === "/plugins/table-score" ? ""
                     :
                     pathname === "/clubs" ? "" 
                     :
                     pathname === "/standings" ? ""
                     :
                     pathname.indexOf("/scorelive") > -1 ? "" 
                     :
                    <Navigation 
                      className="" 
                      navTitle="ลีคอื่นๆ (ทั่วโลก)" 
                      routes={worldleague} 
                    />
                 }
                <div className="banner">
                  <a href="#" target="_blank" rel="nofollow"><img className="" src="/banner/sbobetsc 250x500.gif" alt="" /></a>
                  { /* <img className="mb-4 img-fluid w-100 h-200px" src="/assets/ads/ads200x200.png" alt="" />  */ }
                </div>
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
