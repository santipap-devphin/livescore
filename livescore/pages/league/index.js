import React from 'react';
import Layout from "../../shared/container/Layout"
import HeaderSeo from "../../shared/commons/HeaderSeo"
import NavDate from "../../shared/commons/Navdate"
import TableBattle from "../../shared/commons/TableBattle"
import TableBattleMobile from "../../shared/commons/TableBattleMobile"

const Teams = (props) => {

  console.log(props)

  function datee(nextday){

    const today = new Date()
    const tomorrow = new Date(today)

    tomorrow.setDate(tomorrow.getDate()+nextday)

    const neww = String(tomorrow);

    const newsdate = neww.split(" ");

    const newsformat = newsdate[1] + " " +newsdate[2];

    
    return newsformat;

    }

    let navDate = [
      { id: "1",pathid:"d-3", date: datee(-3), route: `/league/d-3`, today: false },
      { id: "2",pathid:"d-2", date: datee(-2), route: `/league/d-2`, today: false },
      { id: "3",pathid:"d-1", date: datee(-1), route:`/league/d-1`, today: false },
      { id: "4",pathid:"today", date: datee(0), route: `/league/`, today: false },
      { id: "5",pathid:"d1", date: datee(1), route: `/league/d1`, today: false },
      { id: "6",pathid:"d2", date: datee(2), route: `/league/d2`, today: false },
      { id: "7",pathid:"d3", date: datee(3), route: `/league/d3`, today: false }
    ]
  return (
    <Layout className="px-0 px-md-3">
    <HeaderSeo
      siteName=""
      title="live score"
      desc=""
      imgSrc=""
      metaUrl=""
      keyWords=""
      author=""
    />
    <div className="d-none d-md-block">
      <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
      <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
      <NavDate 
        DataDate={navDate}
        onClickLeft={() => console.log("left")}
        onClickRight={() => console.log("right")}
      />
        {props.listdata.map((res,value) => (

             
            (res['@id'] === "1204" || res['@id'] === "1399" || res['@id'] === "1269" || res['@id'] === "1229" || res['@id'] === "1322" || res['@id'] === "1221" || res['@id'] === "1271") ?  

            <div key={value.toString()}> 
                <TableBattle  
                className="highlight bg-secondary text-white"
                title={res['@name']}
                data={res.matches.match}
                highlight={false} 
                exam = {res['@id']}
                />
                
            </div>
            :
            null


            ))}
     
    </div>
    <div className="d-block d-md-none">
      <div className="banner px-3">
        <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
        <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
      </div>
     
      {props.listdata.map((res,value) => (

          (res['@id'] === "1204" || res['@id'] === "1399" || res['@id'] === "1269" || res['@id'] === "1229" || res['@id'] === "1399" || res['@id'] === "1322" || res['@id'] === "1221" || res['@id'] === "1271") ?  
              <div key={value.toString()}>
                    <TableBattleMobile 
                      title={res['@name']}
                      data={res.matches.match}
                      highlight={false}
                    />
                  
              </div>
              :
              null
              
            
       ))}
      <div className="banner row mx-0">
        <div className="col-4 pr-7px">
          <img className="mb-4 img-fluid w-100 h-90px" src="/assets/ads/ads200x200.png" alt="" />
        </div>
        <div className="col-4 px-7px">
          <img className="mb-4 img-fluid w-100 h-90px" src="/assets/ads/ads200x200.png" alt="" />
        </div>
        <div className="col-4 pl-7px">
          <img className="mb-4 img-fluid w-100 h-90px" src="/assets/ads/ads200x200.png" alt="" />
        </div>
      </div>
     
    </div>
    
  </Layout>
  )
}


Teams.propTypes = {

};

Teams.getInitialProps = async () => {

   const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/home?json=1`)
   const data = await res.json()

   return { 
       listdata: data.scores.category
     }

}


export default Teams;

