import React from 'react';
import HeaderSeo from "../../../../shared/commons/HeaderSeo"
import SevenColCups from "../../../../shared/commons/SevenColCups"
import LayoutSidebarClub from "../../../../shared/container/LayoutSidebarClub"

import Cups from "../../../../mock/Cups"

const Champions = () => {
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
      <h1 className="text-uppercase border-bottom pb-3">Champions</h1>
      <SevenColCups 
        cups={Cups[0].fifa} 
        title="FIFA Club World Cup winner ( X1 )" 
      />
      {/* {
          Cups[0].fifa.map((fifa, index) => (
            <SevenColCups cups={fifa} key={index.toString()} title="FIFA Club World Cup winner ( X1 )" />
          ))
      }
       */}
      <SevenColCups 
        cups={Cups[0].english} 
        title="English Champion ( X19 )" 
      />
      <SevenColCups 
        cups={Cups[0].uefa} 
        title="UEFA Supercup Winner ( X4 )" 
      />
      <SevenColCups 
        cups={Cups[0].winner} 
        title="Champions League Winner ( X2 )" 
      />
      <SevenColCups 
        cups={Cups[0].englishwinner} 
        title="English League Cup winner ( X8 )" 
      />
      <SevenColCups 
        cups={Cups[0].supercup} 
        title="English Supercup Winner ( X15 )" 
      />
      <SevenColCups 
        cups={Cups[0].fawinner} 
        title="FA Cup Winner ( X7 )" 
      />
      <SevenColCups 
        cups={Cups[0].uefawinner} 
        title="UEFA Cup Winner ( X3 )" 
      />
      <SevenColCups 
        cups={Cups[0].european} 
        title="European Champion Clubs Cup winner (X4)" 
      />
    </LayoutSidebarClub>
  );
};

export default Champions;
