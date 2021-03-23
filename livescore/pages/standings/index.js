import React from 'react'
import { isMobile } from "react-device-detect"
import HeaderSeo from "../../shared/commons/HeaderSeo"
import Layout from "../../shared/container/Layout"
import LeagueTable from "../../shared/commons/LeagueTableFull"
import CarouselTableMobile from "../../shared/commons/CarouselTableMobile"
import Tabs from "../../shared/components/Tabs"

const Standings = (data) => {

    let LaLigaSantander = []
    let Premier = []
    let Bundesliga = []
    let SerieA = []
    let obj = {};

    //console.log(data)

    data.leages[0].LaLiga.team.map((res,value) => (

        LaLigaSantander.push(
            {"key": res["@position"],
             "title":res["@name"],
             "matches": res,
             "gd": res.total["@gd"],
             "points":  res.total["@p"] ,
             "recent_form": res["@recent_form"],
             "gp": res.overall["@gp"] 
            })
      )
     )

     data.leages[1].PremierLeague.team.map((res,value) => (

        Premier.push(
            {"key": res["@position"], 
            "title":res["@name"], 
            "matches": res,
            "gd": res.total["@gd"], 
            "points":  res.total["@p"] , 
            "recent_form":  res["@recent_form"],
            "gp": res.overall["@gp"] 
        })

     )
     )
     data.leages[2].Bundesliga.team.map((res,value) => (

        Bundesliga.push(
            {"key": res["@position"], 
            "title":res["@name"], 
            "matches": res,
            "gd": res.total["@gd"], 
            "points":  res.total["@p"] , 
            "recent_form": res["@recent_form"],
            "gp": res.overall["@gp"] 
        })

     )
     )
     data.leages[3].Seriea.team.map((res,value) => (

        SerieA.push(
            {"key": res["@position"],
             "title":res["@name"], 
             "matches": res,
             "gd": res.total["@gd"], 
             "points":  res.total["@p"] , 
             "recent_form": res["@recent_form"],
             "gp": res.overall["@gp"] 
            })

     )
     )

    
    let slide = [
      { id: "1", title: "LaLiga Santander", match: LaLigaSantander},
      { id: "2", title: "Premier League", match: Premier},
      { id: "3", title: "Bundesliga", match: Bundesliga},
      { id: "4", title: "SerieA", match: SerieA},
    ]
    return (
        <Layout className="px-0 pr-md-3 pl-md-0">
            <HeaderSeo
                siteName=""
                title="live score"
                desc=""
                imgSrc=""
                metaUrl=""
                keyWords=""
                author=""
            />

             {isMobile ? 
             
             <CarouselTableMobile 
               slideValues={slide}
                className="mb-4"
             />
             
             :
             <div>
                 
             <h1>ตารางคะแนน</h1>
                {<Tabs>
                    <div label="premier">
                        <h1>2020-2021 PREMIER TABLE</h1>
                        <LeagueTable 
                        title={data.leages[1].PremierLeague["@league"]}
                        matches={data.leages[1].PremierLeague.team} 
                        className={""}
                        />

                    </div>
                    <div label="la-liga">
                        <h1>2020-2021 LA LIGA TABLE</h1>
                        <LeagueTable 
                        title={data.leages[0].LaLiga["@league"]}
                        matches={data.leages[0].LaLiga.team} 
                        className={""}
                        />
                    </div>
                    <div label="seria-a">
                        <h1>2020-2021 SERIA A TABLE</h1>
                        <LeagueTable 
                        title={data.leages[3].Seriea["@league"]}
                        matches={data.leages[3].Seriea.team} 
                        className={""}
                        />
                    </div>
                    <div label="bundes">
                        <h1>2020-2021 BUNDES TABLE</h1>
                        <LeagueTable 
                        title={data.leages[2].Bundesliga["@league"]}
                        matches={data.leages[2].Bundesliga.team} 
                        className={""}
                        />
                    </div>
                    <div label="france">
                        <h1>FRANCE</h1>
                        <LeagueTable 
                        title={data.leages[4].France["@league"]}
                        matches={data.leages[4].France.team} 
                        className={""}
                        />
                    </div>
                    <div label="j-league">
                        <h1>J League</h1>
                        <LeagueTable 
                        title={data.leages[5].Japan["@league"]}
                        matches={data.leages[5].Japan.team} 
                        className={""}
                        />
                    </div>
                    
                </Tabs>}
            </div>
                }
             
            
            <div className="banner px-3 px-md-0">
                <img className="mb-3 img-fluid w-100 h-100px" src="/assets/ads/ads300x100.png" alt="" />
                <div className="row">
                    <div className="col-6 pr-7px">
                        <img className="mb-3 img-fluid w-100 h-100px" src="/assets/ads/ads200x200.png" alt="" />
                    </div>
                    <div className="col-6 pl-7px">
                        <img className="mb-3 img-fluid w-100 h-100px" src="/assets/ads/ads200x200.png" alt="" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

Layout.defaultProps = {
    standings:[]
    }

    
Standings.getInitialProps = async (ctx) => {

    try {
        // Promise.all() lets us coalesce multiple promises into a single super-promise
        var data = await Promise.all([
          /* Alternatively store each in an array */
          // var [x, y, z] = await Promise.all([
          // parse results as json; fetch data response has several reader methods available:
          //.arrayBuffer()
          //.blob()
          //.formData()
          //.json()
          //.text()
          fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/1399.xml?json=1').then((response) => response.json()),// parse each response as json
          fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/1204.xml?json=1').then((response) => response.json()),
          fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/1229.xml?json=1').then((response) => response.json()),
          fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/1269.xml?json=1').then((response) => response.json()),
          fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/1221.xml?json=1').then((response) => response.json()),
          fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/1271.xml?json=1').then((response) => response.json())
        ]);
  
      
  
      } catch (error) {
        console.log(error);
      }

      let leage = [];

      leage.push({LaLiga: data[0].standings.tournament})
      leage.push({PremierLeague:data[1].standings.tournament})
      leage.push({Bundesliga:data[2].standings.tournament})
      leage.push({Seriea:data[3].standings.tournament})
      leage.push({France:data[4].standings.tournament})
      leage.push({Japan: data[5].standings.tournament})
     
  
      return { leages: leage}
   
   
}


export default Standings;
