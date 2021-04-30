import React, { useState, useEffect ,useRef } from 'react'
import { isMobile } from "react-device-detect"
import HeaderSeo from "../../shared/commons/HeaderSeo"
import Layout from "../../shared/container/Layout"
import LeagueTable from "../../shared/commons/LeagueTableFull"
import CarouselTableMobile from "../../shared/commons/CarouselTableMobile"
import Tabs from "../../shared/components/Tabs"
import BannerInner from "../../shared/components/Banner/Inner"


const Standings = (data) => {

    let LaLigaSantander = []
    let Premier = []
    let Bundesliga = []
    let SerieA = []
    let France = []
    let Japan = []
    let Thailand = []
    let obj = {};
    const [chkload ,setchkLoad] = useState(false);
    

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
     data.leages[4].France.team.map((res,value) => (

        France.push(
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

     data.leages[5].Japan.team.map((res,value) => (

        Japan.push(
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
     data.leages[6].Thailand.team.map((res,value) => (

        Thailand.push(
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

     useEffect(() => {

       if(isMobile === true){

        setchkLoad(false)

       }else{
        setchkLoad(true)
       }


     })


  
    let slide = [
        { id: "1", title: "ลาลีกา สเปน", match: LaLigaSantander},
        { id: "2", title: "พรีเมียร์ลีก อังกฤษ", match: Premier},
        { id: "3", title: "บุนเดสลีกา เยอรมัน", match: Bundesliga},
        { id: "4", title: "กัลโช่ เซเรีย อา อิตาลี", match: SerieA},
        { id: "5", title: "ลีก เอิง ฝรั่งเศส", match: France},
        { id: "6", title: "เจ ลีก ญี่ปุ่น", match: Japan},
        { id: "7", title: "ไทย ลีก", match: Thailand}
      ]
    
    return (
        <Layout className="px-0 pr-md-3 pl-md-0">
            <HeaderSeo
                siteName=""
                title="7score ตารางคะแนนทุกลีกดัง อัพเดทฉับไวกับลีกฟุตบอลดังทั่วโลก"
                desc="อัพเดทตารางคะแนนทุกลีกดังทั่วยุโรป พรีเมียร์ ลีก, ลา ลีกา , กัลโช่ ซีเรีย อา, บุนเดส ลีกา และไทย ลีก พร้อมทั้งสถิติข้อมูลการแข่งขันย้อนหลังของฟุตบอลทั่วทุกมุมโลก"
                imgSrc=""
                metaUrl=""
                keyWords="ตารางคะแนนพรีเมียร์ลีก, ตารางคะแนนบุนเดสลีกา, ตารางคะแนนซีเรียอา, ตารางคะแนนลาลีกา, ตารางคะแนนไทยลีก, ตารางคะแนนทุกลีก"
                author=""
            />
            {
                
                chkload  !== false ?
                <div>
                    <BannerInner />
                 <h1>ตารางคะแนน</h1>
                 <div className="tab-standing">
                {<Tabs>
                    <div label="premier" texts="พรีเมียร์ ลีก">
                        <h1 style={{padding:10}}>
                        พรีเมียร์ลีก อังกฤษ</h1>
                        <LeagueTable 
                        title={data.leages[1].PremierLeague["@league"]}
                        matches={data.leages[1].PremierLeague.team} 
                        className={""}
                        />

                    </div>
                    <div label="la-liga" texts="ลาลีกา">
                        <h1 style={{padding:10}}>
                        
                        ลาลีกาลีก สเปน</h1>
                        <LeagueTable 
                        title={data.leages[0].LaLiga["@league"]}
                        matches={data.leages[0].LaLiga.team} 
                        className={""}
                        />
                    </div>
                    <div label="seria-a" texts="กัลโช่ เซเรีย อา">
                        <h1 style={{padding:10}}>
                       
                        กัลโช่ เซเรีย อา อิตาลี</h1>
                        <LeagueTable 
                        title={data.leages[3].Seriea["@league"]}
                        matches={data.leages[3].Seriea.team} 
                        className={""}
                        />
                    </div>
                    <div label="bundes" texts="บุนเดสลีกา">
                        <h1 style={{padding:10}}>
                        
                        บุนเดสลีกา เยอรมัน
                        </h1>
                        <LeagueTable 
                        title={data.leages[2].Bundesliga["@league"]}
                        matches={data.leages[2].Bundesliga.team} 
                        className={""}
                        />
                    </div>
                    <div label="france" texts="ลีก เอิง">
                        <h1 style={{padding:10}}>
                       
                        ลีก เอิง ฝรั่งเศส
                        </h1>
                        <LeagueTable 
                        title={data.leages[4].France["@league"]}
                        matches={data.leages[4].France.team} 
                        className={""}
                        />
                    </div>
                    <div label="j-league" texts="เจลีก">
                        <h1 style={{padding:10}}>
                        
                        เจลีก ญี่ปุ่น
                        </h1>
                        <LeagueTable 
                        title={data.leages[5].Japan["@league"]}
                        matches={data.leages[5].Japan.team} 
                        className={""}
                        />
                    </div>
                    <div label="thai-league" texts="ไทยลีก">
                        <h1 style={{padding:10}}>
                       
                        ไทยลีก 
                        </h1>
                        <LeagueTable 
                        title={data.leages[6].Thailand["@league"]}
                        matches={data.leages[6].Thailand.team} 
                        className={""}
                        />
                    </div>
                    
                </Tabs>}
                </div>
            </div>
                
            :

            <CarouselTableMobile 
                slideValues={slide}
                className="mb-4"
            />
            }
          
            
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
          fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/1271.xml?json=1').then((response) => response.json()),
          fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/1415.xml?json=1').then((response) => response.json())

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
      leage.push({Thailand: data[6].standings.tournament})
     
  
      return { leages: leage}
   
   
}


export default Standings;
