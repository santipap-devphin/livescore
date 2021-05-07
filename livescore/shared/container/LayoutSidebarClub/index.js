import React from 'react';
import PropTypes from 'prop-types';
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import Sidebar from "../../components/Sidebar"
import ClubNav from "../../components/ClubNav"

const LayoutSidebarClub = ({children }) => {
 

  //console.log(children)
  return (
    <>
      <Header  />
      <ClubNav
        title={`Liverpool`}
        logo={children[1].props.src}
        flag={`https://www.cct-tour.com/wp-content/themes/wow/resources/templates/cct/assets/images/flag/england.png`}
        nation={""}
      />
      <div className="container-fluid container-xl pt-4 ">
        <div className="row">
          <main className="col-md-8 col-xl-9">
            {children}
          </main>
          <div className="col-md-4 col-xl-3">
            <Sidebar>
              {/*<ChampionsLeagueTable 
                title="English Premier League" 
                matches={matches} 
                className="mb-4" 
              />*/}
              <div className="banner">
              <a href="https://sbobet-55555.com/" target="_blank" rel="nofollow" title="sbobet-55555"><img className="" src="/banner/Sbobet-55555.com 250x500.gif" alt="sbobet-55555" /></a>
              </div>
              <div className="banner">
              <a href="https://sbobetsc.com/" target="_blank" rel="nofollow" title="sbobetsc"><img className="" src="/banner/sbobetsc 250x500.gif" alt="sbobetsc"/></a>
              </div>
              {/*<TopPlayer title="Monthly savings" players={Players} />*/}
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
