import React,{ Component } from 'react';
import fetch from 'isomorphic-unfetch'
import HeaderSeo from "../../../../shared/commons/HeaderSeo"
import LayoutSidebarClub from "../../../../shared/container/LayoutSidebarClub"
import OverViewMatchesTable from "../../../../shared/components/OverViewMatchesTable"
import OverViewStatsTable from "../../../../shared/components/OverViewStatsTable"
import OverViewInjuredTable from "../../../../shared/components/OverViewInjuredTable"
import Meow from "../../../api/test"

import { AiOutlineSwapRight } from "react-icons/ai";

import liverpool from "../../../../mock/liverpool"


class Apitest extends Component {

  static async getInitialProps(){
  
      const res = await fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccerstats/team/9249?json=1')
      const data  = await res.json()
      
      return {home:data}

  }
  render() {
  
    return (
      <LayoutSidebarClub>
        <HeaderSeo
          siteName=""
          title="live score"
          desc=""
          imgSrc=""
          metaUrl=""
          keyWords=""
          author=""
        />
        <>
          <span>
          <h1>{this.props.home.teams.team.name}</h1>
          <p>{this.props.home.teams.team.venue_name}</p>
          
          
         
        </span>
        <img src={this.props.home.teams.team.image}/>
          <br />
          <button className="text-read-more mt-3 mb-3">
            Readmore <AiOutlineSwapRight className="ml-2" />
          </button>
            {console.log(this.props.home.teams.team.squad.player)}
          <OverViewMatchesTable plyers={liverpool[0].strikers} />
          <OverViewStatsTable title="Stats" players={this.props.home.teams.team.squad.player} />
          <OverViewInjuredTable title="Injured or suspended" plyers={liverpool[0].strikers} />
  
        </>
  
      </LayoutSidebarClub>
    );
  
  
  }
  
  }


export default Apitest;
