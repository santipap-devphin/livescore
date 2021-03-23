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
              <img className="mb-4 img-fluid w-100 h-100px" src="/assets/ads/ads300x100.png" alt="" />
              <img className="mb-4 img-fluid w-100 h-100px" src="/assets/ads/ads300x100.png" alt="" />
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
