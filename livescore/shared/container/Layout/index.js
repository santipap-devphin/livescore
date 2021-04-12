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
  const pathh = router.asPath;
  var pathname = router.pathname;
  var sppath  = "";
  var nstr  = "";

  if(pathh === "/"){

    nstr = "today";

  }else{

     
     sppath = pathh.split("/");
     nstr = sppath[3];

  }
  
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
      
   
      { key: "1", title: "พรีเมียร์ลีก อังกฤษ",id:"1204", links: `/league/1204/${nstr}/`, img: "/assets/icons/league/league_premier.png" },
      { key: "2", title: "ยูฟ่า แชมเปี้ยนส์ลีก",id:"1005", links: `/league/1005/${nstr}/`, img: "/assets/icons/league/league_uefa.png" },
      { key: "3", title: "ยูโรป้า ลีก",id:"1007", links: `/league/1007/${nstr}/`, img: "/assets/icons/league/league_europa.png" },
      { key: "4", title: "เอฟเอ คัพ อังกฤษ",id:"1198", links: `/league/1198/${nstr}/`, img: "/assets/icons/league/league_fa_cup.png" },
      { key: "5", title: "ลาลีกา สเปน",id:"1399", links: `/league/1399/${nstr}/`, img: "/assets/icons/league/league_laliga.png" },
      { key: "6", title: "กัลโช่ เซเรีย อา อิตาลี",id:"1269", links: `/league/1269/${nstr}/`, img: "/assets/icons/league/league_calcio.png" },
      { key: "7", title: "บุนเดสลีกา เยอรมัน",id:"1229", links: `/league/1229/${nstr}/`, img: "/assets/icons/league/league_bundesliga.png" },
      { key: "8", title: "เอเรดิวิซี่ ฮอลแลนด์",id:"1322", links: `/league/1322/${nstr}/`, img: "/assets/icons/league/league_eredivisie.png" },
      { key: "9", title: "ลีก เอิง ฝรั่งเศส",id:"1221", links: `/league/1221/${nstr}/`, img: "/assets/icons/league/league_ligue.png" },
      { key: "10", title: "เจ ลีก ญี่ปุ่น",id:"1271", links: `/league/1271/${nstr}/`, img: "/assets/icons/league/league_jleague.png" }
    ]


    let worldleague = [
      { key: "1", title: "France",id:"1012", links: `/league/1012/${nstr}/`, img: "/assets/country/France.png" },
      { key: "2", title: "Germany",id:"1014", links: `/league/1014/${nstr}/`, img: "/assets/country/Germany.png" },
      { key: "3", title: "Italy",id:"1019", links: `/league/1019/${nstr}/`, img: "/assets/country/Italy.png"},
      { key: "4", title: "Spain",id:"1033", links: `/league/1033/${nstr}/`, img: "/assets/country/Spain.png"},
      { key: "5", title: "Sweden",id:"1035", links: `/league/1035/${nstr}/`, img: "/assets/country/Sweden.png" },
      { key: "6", title: "Albania",id:"1064", links: `/league/1064/${nstr}/`, img: "/assets/country/Albania.png" },
      { key: "7", title: "Argentina",id:"1076", links: `/league/1076/${nstr}/`, img: "/assets/country/Argentina.png" },
      { key: "8", title: "Armenia",id:"1082", links: `/league/1082/${nstr}/`, img: "/assets/country/Armenia.png" },
      { key: "9", title: "Australia",id:"1086", links: `/league/1086/${nstr}/`,img: "/assets/country/Australia.png" },
      { key: "10", title: "Bahrain",id:"1097", links: `/league/1097/${nstr}/`, img: "/assets/country/Bahrain.png" },
      { key: "11", title: "Belgium",id:"1102", links: `/league/1102/${nstr}/`, img: "/assets/country/Belgium.png" },
      { key: "12", title: "Bosnia and Herzegovina",id:"1111", links: `/league/1111/${nstr}/`,img: "/assets/country/Bosnia and Herzegovina.png" },
      { key: "13", title: "Brazil",id:"1141", links: `/league/1141/${nstr}/`, img: "/assets/country/Brazil.png" },
      { key: "14", title: "Bulgaria",id:"1154", links: `/league/1154/${nstr}/`, img: "/assets/country/Bulgaria.png" },
      { key: "15", title: "Canada",id:"1156", links: `/league/1156/${nstr}/`, img: "/assets/country/Canada.png" },
      { key: "16", title: "Chile",id:"1159", links: `/league/1159/${nstr}/`, img: "/assets/country/Chile.png" },
      { key: "17", title: "China",id:"1162", links: `/league/1162/${nstr}/`, img: "/assets/country/China.png" },
      { key: "18", title: "Croatia",id:"1172", links: `/league/1172/${nstr}/`, img: "/assets/country/Croatia.png" },
      { key: "19", title: "Czech Republic",id:"1184", links: `/league/1184/${nstr}/`, img: "/assets/country/Czech Republic.png" },
      { key: "20", title: "Denmark",id:"1185", links: `/league/1185/${nstr}/`, img: "/assets/country/Denmark.png"},
      { key: "21", title: "Ecuador",id:"1191", links: `/league/1191/${nstr}/`, img: "/assets/country/Ecuador.png" },
      { key: "22", title: "Egypt",id:"1193", links: `/league/1193/${nstr}/`, img: "/assets/country/Egypt.png" },
      { key: "23", title: "England",id:"1204", links: `/league/1204/${nstr}/`, img: "/assets/country/England.png" },
      { key: "24", title: "Finland",id:"1213", links: `/league/1213/${nstr}/`, img: "/assets/country/Finland.png" },
      { key: "25", title: "Greece",id:"1232", links: `/league/1232/${nstr}/`, img: "/assets/country/Greece.png" },
      { key: "26", title: "Hong Kong",id:"1243", links: `/league/1243/${nstr}/`, img: "/assets/country/Hong Kong.png" },
      { key: "27", title: "Hungary",id:"1248", links: `/league/1248/${nstr}/`, img: "/assets/country/Hungary.png" },
      { key: "28", title: "India",id:"1250", links: `/league/1250/${nstr}/`, img: "/assets/country/India.png" },
      { key: "29", title: "Japan",id:"1271", links: `/league/1271/${nstr}/`, img: "/assets/country/Japan.png" },
      { key: "30", title: "Jordan",id:"1275", links: `/league/1275/${nstr}/`, img: "/assets/country/Jordan.png" },
    ]
    
    /*let slide = [
      { id: "1", title: "LaLiga Santander", match: LaLigaSantander},
      { id: "2", title: "Premier League", match: Premier},
      { id: "3", title: "Bundesliga", match: Bundesliga},
      { id: "4", title: "SerieA", match: SerieA},
    ]*/

    let mobileRoute = [
      {id: "1", title: "หน้าแรก", url: "/"},
      {id: "2", title: "แจกผลบอล", url: "/plugins/table-score"},
      {id: "3", title: "ตารางคะแนน", url: "/standings"},
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
