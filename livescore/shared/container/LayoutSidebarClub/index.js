import React from 'react';
import PropTypes from 'prop-types';
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import Sidebar from "../../components/Sidebar"
import ClubNav from "../../components/ClubNav"
import HeaderTitle from "../../commons/HeaderTitle"
import TopPlayer from "../../commons/TopPlayer"
import ChampionsLeagueTable from "../../commons/ChampionsLeagueTable"

import Players from "../../../mock/Players"

const LayoutSidebarClub = ({ children }) => {
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
  ]
  return (
    <>
      <Header  />
      <ClubNav
        title={`Liverpool`}
        logo={`https://upload.wikimedia.org/wikipedia/th/d/d1/Liverpool_FC_Logo.svg`}
        flag={`https://www.cct-tour.com/wp-content/themes/wow/resources/templates/cct/assets/images/flag/england.png`}
        nation={`England`}
      />
      <div className="container-fluid container-xl pt-4 ">
        <div className="row">
          <main className="col-md-8 col-xl-9">
            {children}
          </main>
          <div className="col-md-4 col-xl-3">
            <Sidebar>
              <ChampionsLeagueTable 
                title="English Premier League" 
                matches={matches} 
                className="mb-4" 
              />
              <img className="mb-4 img-fluid w-100 h-100px" src="/assets/ads/ads300x100.png" alt="" />
              <img className="mb-4 img-fluid w-100 h-100px" src="/assets/ads/ads300x100.png" alt="" />
              <TopPlayer title="Monthly savings" players={Players} />
            </Sidebar>
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
};

LayoutSidebarClub.propTypes = {
  children: PropTypes.node.isRequired,
};
LayoutSidebarClub.defaultProps = {}

export default LayoutSidebarClub;
