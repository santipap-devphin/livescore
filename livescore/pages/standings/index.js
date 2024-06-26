import React, { useState, useEffect ,useRef } from 'react'
import dynamic from 'next/dynamic';
import { isMobile } from "react-device-detect"
const HeaderSeo = dynamic(() => import('../../shared/commons/HeaderSeo'));
const Layout = dynamic(() => import('../../shared/container/Layout'));
const BannerInner = dynamic(() => import('../../shared/components/Banner/Inner'));
import LeagueTable from "../../shared/commons/LeagueTableFull"
import CarouselTableMobile from "../../shared/commons/CarouselTableMobile"
import Tabs from "../../shared/components/Tabs"



const Standings = () => {

   
    let obj = {};
    //var slide = {};
    var LaLigaSantander = [];
    var Bundesliga = [];
    var Premier = [];
    var SerieA = [];
    var France = [];
    var Japan = [];
    var Thailand = [];
    const [load ,setLoad] = useState(false);
    const [chkload ,setchkLoad] = useState(false);
    const [Stand, setStand] = useState();
    const [slide, setSlide] = useState([]);
    //const [LaLigaSantander, setLaLigaSantander] = useState();
    
    
    

    //console.log(data)

    useEffect(() => {

        const fetchstanding = async () => {
    
            
            try {
               
                 var data = await Promise.all([
               
                  fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/1399.xml?json=1').then((response) => response.json()),// parse each response as json
                  fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/1204.xml?json=1').then((response) => response.json()),
                  fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/1229.xml?json=1').then((response) => response.json()),
                  fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/1269.xml?json=1').then((response) => response.json()),
                  fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/1221.xml?json=1').then((response) => response.json()),
                  fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/1271.xml?json=1').then((response) => response.json()),
                  fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/1415.xml?json=1').then((response) => response.json())
        
                ]);

                

                data[0].standings.tournament.team.map((res,value) => (

                        
                    LaLigaSantander.push({"key": res["@position"],
                        "title":res["@name"],
                        "matches": res,
                        "gd": res.total["@gd"],
                        "points":  res.total["@p"] ,
                        "recent_form": res["@recent_form"],
                        "gp": res.overall["@gp"] 
                       })

                       
                  )
                 )
                 data[1].standings.tournament.team.map((res,value) => (
    
                    Premier.push(
                        {"key": res["@position"], 
                        "title":res["@name"], 
                        "matches": res,
                        "gd": res.total["@gd"], 
                        "points":  res.total["@p"] , 
                        "recent_form":  res["@recent_form"],
                        "gp": res.overall["@gp"] 
                        }
                        )
                    
            
                 )
                 )
                 data[2].standings.tournament.team.map((res,value) => (
    
                    Bundesliga.push(
                        {"key": res["@position"], 
                            "title":res["@name"], 
                            "matches": res,
                            "gd": res.total["@gd"], 
                            "points":  res.total["@p"] , 
                            "recent_form": res["@recent_form"],
                            "gp": res.overall["@gp"] 
                        }
                    )
                
            
                 )
                 )
                 data[3].standings.tournament.team.map((res,value) => (
    
                    SerieA.push(
                    {"key": res["@position"],
                    "matches": res,
                    "gd": res.total["@gd"], 
                    "points":  res.total["@p"] , 
                    "title":res["@name"], 
                    "recent_form": res["@recent_form"],
                    "gp": res.overall["@gp"] 
                   })
                   
            
                 )
                 )
                 data[4].standings.tournament.team.map((res,value) => (
    
                   
                    France.push({"key": res["@position"],
                                "title":res["@name"], 
                                "matches": res,
                                "gd": res.total["@gd"], 
                                "points":  res.total["@p"] , 
                                "recent_form": res["@recent_form"],
                                "gp": res.overall["@gp"] 
                                })
            
                 )
                 )
                 data[5].standings.tournament.team.map((res,value) => (
    
                    
                    Japan.push({"key": res["@position"],
                        "title":res["@name"], 
                        "matches": res,
                        "gd": res.total["@gd"], 
                        "points":  res.total["@p"] , 
                        "recent_form": res["@recent_form"],
                        "gp": res.overall["@gp"] 
                        })
            
                 )
                 )
                 data[6].standings.tournament.team.map((res,value) => (
    
                    
                    Thailand.push({"key": res["@position"],
                        "title":res["@name"], 
                        "matches": res,
                        "gd": res.total["@gd"], 
                        "points":  res.total["@p"] , 
                        "recent_form": res["@recent_form"],
                        "gp": res.overall["@gp"] 
                       })
            
                 )
                 )

              } catch (error) {
                console.log(error);
              }
             setSlide([{ id: "1", title: "ลาลีกา สเปน", match: LaLigaSantander}
                    ,{ id: "2", title: "พรีเมียร์ลีก อังกฤษ", match: Premier}
                    ,{ id: "3", title: "บุนเดสลีกา เยอรมัน", match: Bundesliga}
                    ,{ id: "4", title: "กัลโช่ เซเรีย อา อิตาลี", match: SerieA}
                    ,{ id: "5", title: "ลีก เอิง ฝรั่งเศส", match: France}
                    ,{ id: "6", title: "เจ ลีก ญี่ปุ่น", match: Japan}
                    ,{ id: "7", title: "ไทย ลีก", match: Thailand}
                   ])
                   
          setStand(data);
          setLoad(true);
        }
        
        fetchstanding();
        
    
      },[setStand])

    

     useEffect(() => {

       if(isMobile === true){

        setchkLoad(false)

       }else{
        setchkLoad(true)
       }


     })


   
    
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
            <div> 
                <BannerInner />
                <h1>ตารางคะแนน</h1>
            </div>
            {
                
                chkload  !== false ?
                load !== false ?
                <div>
                   
                 
                 <div className="tab-standing">
                {<Tabs>
                    <div label="premier" texts="พรีเมียร์ ลีก">
                        <h1 style={{padding:10}}>
                        พรีเมียร์ลีก อังกฤษ</h1>
                        <LeagueTable 
                        title={Stand[1].standings.tournament["@league"]}
                        matches={Stand[1].standings.tournament.team} 
                        className={""}
                        />

                    </div>
                    <div label="la-liga" texts="ลาลีกา">
                        <h1 style={{padding:10}}>
                        
                        ลาลีกาลีก สเปน</h1>
                        <LeagueTable 
                        title={Stand[0].standings.tournament["@league"]}
                        matches={Stand[0].standings.tournament.team} 
                        className={""}
                        />
                    </div>
                    <div label="seria-a" texts="กัลโช่ เซเรีย อา">
                        <h1 style={{padding:10}}>
                       
                        กัลโช่ เซเรีย อา อิตาลี</h1>
                        <LeagueTable 
                        title={Stand[3].standings.tournament["@league"]}
                        matches={Stand[3].standings.tournament.team} 
                        className={""}
                        />
                    </div>
                    <div label="bundes" texts="บุนเดสลีกา">
                        <h1 style={{padding:10}}>
                        
                        บุนเดสลีกา เยอรมัน
                        </h1>
                        <LeagueTable 
                        title={Stand[2].standings.tournament["@league"]}
                        matches={Stand[2].standings.tournament.team} 
                        className={""}
                        />
                    </div>
                    <div label="france" texts="ลีก เอิง">
                        <h1 style={{padding:10}}>
                       
                        ลีก เอิง ฝรั่งเศส
                        </h1>
                        <LeagueTable 
                        title={Stand[4].standings.tournament["@league"]}
                        matches={Stand[4].standings.tournament.team} 
                        className={""}
                        />
                    </div>
                    <div label="j-league" texts="เจลีก">
                        <h1 style={{padding:10}}>
                        
                        เจลีก ญี่ปุ่น
                        </h1>
                        <LeagueTable 
                        title={Stand[5].standings.tournament["@league"]}
                        matches={Stand[5].standings.tournament.team} 
                        className={""}
                        />
                    </div>
                    <div label="thai-league" texts="ไทยลีก">
                        <h1 style={{padding:10}}>
                       
                        ไทยลีก 
                        </h1>
                        <LeagueTable 
                        title={Stand[6].standings.tournament["@league"]}
                        matches={Stand[6].standings.tournament.team} 
                        className={""}
                        />
                    </div>
                    
                </Tabs>}
                </div>
            </div>: <center><h1>กรุณารอสักครู่ ......</h1></center>
                
            :

            
            load !== false ?
            
            <CarouselTableMobile 
                slideValues={slide}
                className="mb-4"
            />
            
            :<center><h1>กรุณารอสักครู่ ......</h1></center>
            }
          
            
        </Layout>
    )
}

Layout.defaultProps = {
    standings:[]
    }

    
/*Standings.getInitialProps = async (ctx) => {

    try {
      
        var data = await Promise.all([
         
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
   
   
}*/


export default Standings;
