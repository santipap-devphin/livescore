import React from 'react'
import HeaderSeo from "../../shared/commons/HeaderSeo"
import Layout from "../../shared/container/Layout"
import CarouselTableMobile from "../../shared/commons/CarouselTableMobile"

const Standings = (data) => {

    let LaLigaSantander = []
    let Premier = []
    let Bundesliga = []
    let SerieA = []
    let obj = {};

    data.leages[0].LaLiga.team.map((res,value) => (

        LaLigaSantander.push({"key": res["@position"], "title":res["@name"], "matches": res.overall["@gp"], "gd": res.total["@gd"], "points":  res.total["@p"]})
      )
     )

     data.leages[1].PremierLeague.team.map((res,value) => (

        Premier.push({"key": res["@position"], "title":res["@name"], "matches": res.overall["@gp"], "gd": res.total["@gd"], "points":  res.total["@p"]})

     )
     )
     data.leages[2].Bundesliga.team.map((res,value) => (

        Bundesliga.push({"key": res["@position"], "title":res["@name"], "matches": res.overall["@gp"], "gd": res.total["@gd"], "points":  res.total["@p"]})

     )
     )
     data.leages[3].Seriea.team.map((res,value) => (

        SerieA.push({"key": res["@position"], "title":res["@name"], "matches": res.overall["@gp"], "gd": res.total["@gd"], "points":  res.total["@p"]})

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
            <CarouselTableMobile 
                slideValues={slide}
                className="mb-4"
            />
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

    const res = await fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/1399.xml?json=1')
    const json = await res.json()
 
    const respre = await fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/1204.xml?json=1')
    const jsonpre = await respre.json()

    const resbun = await fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/1229.xml?json=1')
    const jsonbun = await resbun.json()

    const resSerieA = await fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/1269.xml?json=1')
    const jsonSerieA = await resSerieA.json()

    let leage = [];

    leage.push({LaLiga: json.standings.tournament})
    leage.push({PremierLeague: jsonpre.standings.tournament})
    leage.push({Bundesliga: jsonbun.standings.tournament})
    leage.push({Seriea: jsonSerieA.standings.tournament})

    
    return { leages: leage}
}


export default Standings;
