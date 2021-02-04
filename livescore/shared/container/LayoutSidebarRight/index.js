import React from 'react';
import PropTypes from 'prop-types';
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import Sidebar from "../../components/Sidebar"
import HeaderTitle from "../../commons/HeaderTitle"
import TopPlayer from "../../commons/TopPlayer"
import ChampionsLeagueTable from "../../commons/ChampionsLeagueTable"

import Players from "../../../mock/Players"

const LayoutSidebarRight = ({ children }) => {
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
      <HeaderTitle />
      <div className="container-fluid container-xl pt-4">
        <div className="row">
          <main className="col-md-8 col-xl-9">
            <article className="">
              {children}
            </article>
          </main>
          <div className="col-md-4 col-xl-3">
            <Sidebar>
              <ChampionsLeagueTable title="English Premier League" matches={matches} className="mb-4" />
              <TopPlayer title="Monthly savings" players={Players} />
            </Sidebar>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};


LayoutSidebarRight.propTypes = {
  children: PropTypes.node.isRequired,
};
LayoutSidebarRight.defaultProps = {}

export default LayoutSidebarRight;
