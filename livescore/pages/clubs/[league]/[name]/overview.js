import React from 'react';
import HeaderSeo from "../../../../shared/commons/HeaderSeo"
import LayoutSidebarClub from "../../../../shared/container/LayoutSidebarClub"
import OverViewMatchesTable from "../../../../shared/components/OverViewMatchesTable"
import OverViewStatsTable from "../../../../shared/components/OverViewStatsTable"
import OverViewInjuredTable from "../../../../shared/components/OverViewInjuredTable"
import { AiOutlineSwapRight } from "react-icons/ai";

import liverpool from "../../../../mock/liverpool"
const Overview = () => {
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
          Liverpool fixtures, schedule, match results and the latest standings. Liverpool previous game was against Sheffield Wednesday in English Premier League on 18.08.1995 UTC, match ended with result 1-0. Liverpool is going to play their next match on 01.10.2020 UTC against Arsenal FC in England League Cup. When the match starts, you will be able to follow Liverpool vs Arsenal FC live score , standings, minute by minute updated live results and match statistics.
          Liverpool Last Match Lineup
          Liverpool Last Match Formations: 4-3-3
          Forwards: Sadio Mané, Diogo Jota, Roberto Firmino, Mohamed Salah, Divock Origi, Takumi Minamino
          Midfielders: Fabinho, Naby Keïta, Georginio Wijnaldum, James Milner, Curtis Jones
      </span>
        <br />
        <button className="text-read-more mt-3 mb-3">
          Readmore <AiOutlineSwapRight className="ml-2" />
        </button>

        <OverViewMatchesTable plyers={liverpool[0].strikers} />
        <OverViewStatsTable title="Stats" players={liverpool[0].strikers} />
        <OverViewInjuredTable title="Injured or suspended" plyers={liverpool[0].strikers} />

      </>

    </LayoutSidebarClub>
  );
};

export default Overview;
