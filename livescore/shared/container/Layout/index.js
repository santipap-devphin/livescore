import React from 'react';
import useDeviceDetect from "../../utils/useDeviceDetect";
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types';
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import Sidebar from "../../components/Sidebar"
import Navigation from "../../commons/Navigation"
import CarouselTable from "../../commons/CarouselTable"
import NavCategory from "../../components/NavCategory"
import NavDate from "../../commons/NavDate"

const Layout = (props) => {
  const router = useRouter()
  let pathname = router.pathname
  const { isMobile } = useDeviceDetect();
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
      { key: "11", title: "พรีเมียร์ลีก อังกฤษ", links: "/premier-league", img: "/assets/icons/league/league_premier.png" },
      { key: "12", title: "ยูฟ่า แชมเปี้ยนส์ลีก", links: "/uefa-league", img: "/assets/icons/league/league_uefa.png" },
      { key: "13", title: "ยูโรป้า ลีก", links: "/europa-league", img: "/assets/icons/league/league_europa.png" },
      { key: "14", title: "เอฟเอ คัพ อังกฤษ", links: "/fa-cup-league", img: "/assets/icons/league/league_fa_cup.png" },
      { key: "15", title: "ลาลีกา สเปน", links: "/laliga-league", img: "/assets/icons/league/league_laliga.png" },
      { key: "16", title: "กัลโช่ เซเรีย อา อิตาลี", links: "/calcio-league", img: "/assets/icons/league/league_calcio.png" },
      { key: "17", title: "บุนเดสลีกา เยอรมัน", links: "/bundesliga-league", img: "/assets/icons/league/league_bundesliga.png" },
      { key: "18", title: "เอเรดิวิซี่ ฮอลแลนด์", links: "/eredivisie-league", img: "/assets/icons/league/league_eredivisie.png" },
      { key: "19", title: "ลีก เอิง ฝรั่งเศส", links: "/ligue-league", img: "/assets/icons/league/league_ligue.png" },
      { key: "20", title: "เจ ลีก ญี่ปุ่น", links: "/jleague", img: "/assets/icons/league/league_jleague.png" },
      { key: "21", title: "พรีเมียร์ลีก อังกฤษ", links: "/premier-league", img: "/assets/icons/league/league_premier.png" },
      { key: "22", title: "ยูฟ่า แชมเปี้ยนส์ลีก", links: "/uefa-league", img: "/assets/icons/league/league_uefa.png" },
      { key: "23", title: "ยูโรป้า ลีก", links: "/europa-league", img: "/assets/icons/league/league_europa.png" },
      { key: "24", title: "เอฟเอ คัพ อังกฤษ", links: "/fa-cup-league", img: "/assets/icons/league/league_fa_cup.png" },
      { key: "25", title: "ลาลีกา สเปน", links: "/laliga-league", img: "/assets/icons/league/league_laliga.png" },
      { key: "26", title: "กัลโช่ เซเรีย อา อิตาลี", links: "/calcio-league", img: "/assets/icons/league/league_calcio.png" },
      { key: "27", title: "บุนเดสลีกา เยอรมัน", links: "/bundesliga-league", img: "/assets/icons/league/league_bundesliga.png" },
      { key: "28", title: "เอเรดิวิซี่ ฮอลแลนด์", links: "/eredivisie-league", img: "/assets/icons/league/league_eredivisie.png" },
      { key: "29", title: "ลีก เอิง ฝรั่งเศส", links: "/ligue-league", img: "/assets/icons/league/league_ligue.png" },
      { key: "30", title: "เจ ลีก ญี่ปุ่น", links: "/jleague", img: "/assets/icons/league/league_jleague.png" },
    ]
    let matches = [
      { key: "1", title: "Getafe", matches: "3", gd: "4", points: "7" },
      { key: "2", title: "Valencia", matches: "4", gd: "2", points: "7" },
      { key: "3", title: "Real Madrid", matches: "3", gd: "2", points: "7" },
      { key: "4", title: "Villarreal", matches: "4", gd: "-1", points: "7" },
      { key: "5", title: "Barcelona", matches: "2", gd: "7", points: "6" },
      { key: "6", title: "Getafe", matches: "3", gd: "4", points: "7" },
      { key: "7", title: "Valencia", matches: "4", gd: "2", points: "7" },
      { key: "8", title: "Real Madrid", matches: "3", gd: "2", points: "7" },
      { key: "9", title: "Villarreal", matches: "4", gd: "-1", points: "7" },
      { key: "10", title: "Barcelona", matches: "2", gd: "7", points: "6" },
      { key: "11", title: "Getafe", matches: "3", gd: "4", points: "7" },
      { key: "12", title: "Valencia", matches: "4", gd: "2", points: "7" },
      { key: "13", title: "Real Madrid", matches: "3", gd: "2", points: "7" },
      { key: "14", title: "Villarreal", matches: "4", gd: "-1", points: "7" },
      { key: "15", title: "Barcelona", matches: "2", gd: "7", points: "6" },
      { key: "16", title: "Getafe", matches: "3", gd: "4", points: "7" },
      { key: "17", title: "Valencia", matches: "4", gd: "2", points: "7" },
      { key: "18", title: "Real Madrid", matches: "3", gd: "2", points: "7" },
      { key: "19", title: "Villarreal", matches: "4", gd: "-1", points: "7" },
      { key: "20", title: "Barcelona", matches: "2", gd: "7", points: "6" },
    ]
    let slide = [
      { id: "1", title: "LaLiga Santander", match: matches},
      { id: "2", title: "Premier League", match: matches},
    ]

    let mobileRoute = [
      {id: "1", title: "Live", url: "/"},
      {id: "2", title: "Leagues", url: "/league"},
      {id: "3", title: "Standings", url: "/standings"},
    ]
    let navDate = [
      { id: "1", date: "SEP 28", route: "/", today: false },
      { id: "2", date: "SEP 29", route: "/", today: false },
      { id: "3", date: "SEP 30", route: "/", today: false },
      { id: "4", date: "OCT 1", route: "/", today: true },
      { id: "5", date: "OCT 2", route: "/", today: false },
      { id: "6", date: "OCT 3", route: "/", today: false },
      { id: "7", date: "OCT 4", route: "/", today: false }
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
                  <Navigation navTitle="ลีคยอดฮิต" routes={routes} />
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
                <Sidebar>
                  <CarouselTable 
                    slideValues={slide}
                    className="mb-4"
                  />
                  <img className="mb-4 img-fluid w-100 h-100px" src="/assets/ads/ads300x100.png" alt="" />
                  <img className="mb-4 img-fluid w-100 h-100px" src="/assets/ads/ads300x100.png" alt="" />
                </Sidebar>
              </div>
            </aside>
            <main className={`col-md-8 col-xl-6 ${props.className}`}>
              <article>
                {props.children}
              </article>
            </main>
            <aside className="col-md-4 col-xl-3 d-none d-xl-block">
              <Sidebar>
                <CarouselTable 
                  slideValues={slide}
                  className="mb-4"
                />
                <img className="mb-4 img-fluid w-100 h-100px" src="/assets/ads/ads300x100.png" alt="" />
                <img className="mb-4 img-fluid w-100 h-100px" src="/assets/ads/ads300x100.png" alt="" />
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
  className: ""
}

export default Layout;
