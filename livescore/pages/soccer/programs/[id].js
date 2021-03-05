
import Layout from "../../../shared/container/Layout"
import axios from 'axios';
import NavDate from "../../../shared/commons/NavDate"
import HeaderSeo from "../../../shared/commons/HeaderSeo"
import dynamic from 'next/dynamic';

const TableBattle = dynamic(() => import('../../../shared/commons/TableBattle'));
const TableBattleMobile = dynamic(()=> import('../../../shared/commons/TableBattleMobile'));

import Link from 'next/link'
import { useRouter } from 'next/router'
import { Component } from 'react';


export default class Homefilter extends Component {


  static async getInitialProps({ query }) {
    // res is assigned the response once the axios
    // async get is completed
    // ลีคอื่นๆ
    // const res = await axios.get('https://api.football-data.org/v2/competitions', { headers: { 'X-Auth-Token': 'a167ab4159d6448ab062e7f0730c30f3' } });
    // // api for mock https://www.football-data.org/documentation/quickstart
    // // Return properties
    // return {
    //   data: res.data,
    // }

    const { id } = query

    const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/${id}?json=1`)
    const data  = await res.json()

   /* const reslaliga = await fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/1399.xml?json=1')
    const jsonlaliga = await reslaliga.json()
 
    const respre = await fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/1204.xml?json=1')
    const jsonpre = await respre.json()

    const resbun = await fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/1229.xml?json=1')
    const jsonbun = await resbun.json()

    const resSerieA = await fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/1269.xml?json=1')
    const jsonSerieA = await resSerieA.json()*/

    let leage = [];

    leage.push({home: data})
    /*leage.push({LaLiga: jsonlaliga.standings.tournament})
    leage.push({PremierLeague: jsonpre.standings.tournament})
    leage.push({Bundesliga: jsonbun.standings.tournament})
    leage.push({Seriea: jsonSerieA.standings.tournament})*/
    
    return {id:id,list:leage}
    
  }

  render() {
    // console.log(this.props.data);
   
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
      { id: "1", date: datee(-3), route: "/soccer/programs/d-3", today: false },
      { id: "2", date: datee(-2), route: "/soccer/programs/d-2", today: false },
      { id: "3", date: datee(-1), route: "/soccer/programs/d-1", today: false },
      { id: "4", date: datee(0), route: "/", today: false },
      { id: "5", date: datee(1), route: "/soccer/programs/d1", today: false },
      { id: "6", date: datee(2), route: "/soccer/programs/d2", today: false },
      { id: "7", date: datee(3), route: "/soccer/programs/d3", today: false }
    ]
    let navDatemobile = [
      { id: "1", date: datee(-2), route: "/soccer/programs/d-2", today: false },
      { id: "2", date: datee(-1), route: "/soccer/programs/d-1", today: false },
      { id: "3", date: datee(0), route: "/", today: false },
      { id: "4", date: datee(1), route: "/soccer/programs/d1", today: false },
      { id: "5", date: datee(2), route: "/soccer/programs/d2", today: false },
     
    ]
   

    {
      ( this.props.id === "d-3" ) ? navDate[0] = { id: "1", date: datee(-3), route: "/soccer/programs/d-3", today: true } 
      :
      ( this.props.id === "d-2" ) ? navDate[1] = { id: "2", date: datee(-2), route: "/soccer/programs/d-2", today: true } 
      :
      ( this.props.id === "d-1" ) ? navDate[2] = { id: "3", date: datee(-1), route: "/soccer/programs/d-1", today: true } 
      :
      ( this.props.id === "d1" ) ? navDate[4] = { id: "5", date: datee(1), route: "/soccer/programs/d1", today: true } 
      : 
      ( this.props.id === "d2" ) ? navDate[5] = { id: "6", date: datee(2), route: "/soccer/programs/d2", today: true } 
      :
      ( this.props.id === "d3" ) ? navDate[6] = { id: "7", date: datee(3), route: "/soccer/programs/d3", today: true } 
      :(navDate[3] = { id: "4", date: datee(0), route: "/", today: true })
    }

    {
      ( this.props.id === "d-2" ) ? navDatemobile[0] = { id: "1", date: datee(-2), route: "/soccer/programs/d-2", today: true } 
      :
      ( this.props.id === "d-1" ) ? navDatemobile[1] = { id: "2", date: datee(-1), route: "/soccer/programs/d-1", today: true } 
      :
      ( this.props.id === "d1" ) ? navDatemobile[3] = { id: "4", date: datee(1), route: "/soccer/programs/d1", today: true } 
      :
      ( this.props.id === "d2" ) ? navDatemobile[4] = { id: "5", date: datee(2), route: "/soccer/programs/d2", today: true } 
      :( navDatemobile[2] = { id: "3", date: datee(0), route: "/", today: true })
    }
    
    return (
       
      <Layout className="px-0 px-md-3" standings={this.props.list}>
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
          
          {/*console.log(this.props.home.scores.category)*/}
          {/*console.log(Europe)*/}
          
          {this.props.list[0].home.scores.category.map((res,value) => (

                (res['@id'] === "1204" || res['@id'] === "1399" || res['@id'] === "1269" || res['@id'] === "1229" || res['@id'] === "1322" || res['@id'] === "1221" || res['@id'] === "1271") ?  
                            
                <div key={value.toString()}> 
                    <TableBattle  
                    className="highlight bg-secondary text-white"
                    title={res['@name']}
                    data={res.matches.match}
                    highlight={true} 
                    exam = {res['@id']}
                    />
                    
                </div>
                :
                null
          ))}


          {this.props.list[0].home.scores.category.map((res,value) => (


          (res['@id'] !== "1204" && res['@id'] !== "1399" && res['@id'] !== "1269" && res['@id'] !== "1229"  && res['@id'] !== "1322" && res['@id'] !== "1221" && res['@id'] !== "1271") ?  
            <div key={value.toString()}> 
                <TableBattle  
                className="highlight bg-secondary text-white"
                title={res['@name']}
                data={res.matches.match}
                highlight={true} 
                exam = {res['@id']}
                />
            </div>
            :
            null
          ))}
         
        </div>

         {

          <div className="d-block d-md-none">
                  <div className="banner px-3">

                      <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
                      <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />

                  </div>
                  <NavDate 
                      DataDate={navDatemobile}
                      onClickLeft={() => console.log("left")}
                      onClickRight={() => console.log("right")}
                    />

                      {this.props.list[0].home.scores.category.map((res,value) => (

                            (res['@id'] === "1204" || res['@id'] === "1399" || res['@id'] === "1269" || res['@id'] === "1229" || res['@id'] === "1322" || res['@id'] === "1221" || res['@id'] === "1271") ?  
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


                      {this.props.list[0].home.scores.category.map((res,value) => (

                      (res['@id'] !== "1204" && res['@id'] !== "1399" && res['@id'] !== "1269" && res['@id'] !== "1229"  && res['@id'] !== "1322" && res['@id'] !== "1221" && res['@id'] !== "1271") ?  
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
                                                            
          </div>


         }
        
      </Layout>
    )
  }
}