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

  static async getInitialProps({ query }){

      const { id } = query
    
      const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccerstats/team/${id}?json=1`)
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
          <h1>ผู้จัดการทีม {this.props.home.teams.team.coach["@name"]}</h1>
          <h2>อันดับตารางปัจจุบัน {this.props.home.teams.team.leagues["@league_rank"]}</h2>
          <p>ประเทศ {this.props.home.teams.team.country}</p>
          <p>ชื่อสนามฟุตบอล {this.props.home.teams.team.venue_name}</p>
          <p>ที่อยู่ {this.props.home.teams.team.venue_address["#cdata-section"]}</p>
          <p>เมือง {this.props.home.teams.team.venue_city["#cdata-section"] }</p>
          <p>ความจุสนาม {this.props.home.teams.team.venue_capacity}</p>
          <br />
          <button className="text-read-more mt-3 mb-3">
            Readmore <AiOutlineSwapRight className="ml-2" />
          </button>
            {console.log(this.props.home.teams.team.sidelined.player)}
          <OverViewMatchesTable plyers={liverpool[0].strikers} />
          <OverViewStatsTable title="Stats" players={this.props.home.teams.team.squad.player} />
          <OverViewInjuredTable title="Injured or suspended" plyers={this.props.home.teams.team.sidelined.player} />
  
      
  
      </LayoutSidebarClub>
    );
  
  
  }
  
  }


export default Apitest;
