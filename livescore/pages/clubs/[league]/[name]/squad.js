import React from 'react';
import HeaderSeo from "../../../../shared/commons/HeaderSeo"
import Avatar from "../../../../shared/commons/Avatar"
import LayoutSidebarClub from "../../../../shared/container/LayoutSidebarClub"
import SquadPlayerTable from "../../../../shared/components/SquadPlayerTable"

import liverpool from "../../../../mock/liverpool"

const Squad = () => {

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
      <h1 className="text-uppercase border-bottom pb-3">SQUAD</h1>
      <div className="mb-5">
        <h2 className="text-dark pt-4 pb-3">Coach</h2>
        {
          liverpool[0].coach.map((coach, index) => (
            <div className="media align-items-center" key={index.toString()}>
              <img 
                width={30}
                height={30}
                src={coach.img}
                alt={coach.name}
                className="rounded-circle mx-2"
              />
              <div className="media-body">
                  {coach.name}
              </div>
            </div>
          ))
        }
      </div>
      <SquadPlayerTable title="Strikers" plyers={liverpool[0].strikers} />
      <SquadPlayerTable title="Midfielders" plyers={liverpool[0].defender} />
      <SquadPlayerTable title="Defender" plyers={liverpool[0].defender} />
      <SquadPlayerTable title="Goalkeeper" plyers={liverpool[0].goalkeeper} />
    </LayoutSidebarClub>
  );
};


export default Squad;
