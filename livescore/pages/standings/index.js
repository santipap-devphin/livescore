import React from 'react'
import HeaderSeo from "../../shared/commons/HeaderSeo"
import Layout from "../../shared/container/Layout"
import CarouselTableMobile from "../../shared/commons/CarouselTableMobile"

const Standings = () => {
    let matches = [
      { key: "1", title: "Getafe", matches: "3", gd: "4", points: "7" },
      { key: "2", title: "Valencia", matches: "4", gd: "2", points: "7" },
      { key: "3", title: "Real Madrid", matches: "3", gd: "2", points: "7" },
      { key: "4", title: "Villarreal", matches: "4", gd: "-1", points: "7" },
      { key: "5", title: "Barcelona", matches: "2", gd: "7", points: "6" },
      { key: "6", title: "Getafe", matches: "3", gd: "4", points: "7" },
      { key: "7", title: "Valencia", matches: "4", gd: "2", points: "7" },
      { key: "8", title: "Real Madrid", matches: "3", gd: "2", points: "7" },
      { key: "9", title: "Villarreal", matches: "4", gd: "-1", points: "7" },
      { key: "10", title: "Barcelona", matches: "2", gd: "7", points: "6" },
      { key: "11", title: "Getafe", matches: "3", gd: "4", points: "7" },
      { key: "12", title: "Valencia", matches: "4", gd: "2", points: "7" },
      { key: "13", title: "Real Madrid", matches: "3", gd: "2", points: "7" },
      { key: "14", title: "Villarreal", matches: "4", gd: "-1", points: "7" },
      { key: "15", title: "Barcelona", matches: "2", gd: "7", points: "6" },
      { key: "16", title: "Getafe", matches: "3", gd: "4", points: "7" },
      { key: "17", title: "Valencia", matches: "4", gd: "2", points: "7" },
      { key: "18", title: "Real Madrid", matches: "3", gd: "2", points: "7" },
      { key: "19", title: "Villarreal", matches: "4", gd: "-1", points: "7" },
      { key: "20", title: "Barcelona", matches: "2", gd: "7", points: "6" },
    ]
    let slide = [
      { id: "1", title: "LaLiga Santander", match: matches},
      { id: "2", title: "Premier League", match: matches},
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

export default Standings;
