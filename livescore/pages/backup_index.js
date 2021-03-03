import Layout from "../shared/container/Layout"
import axios from 'axios';
import NavDate from "../shared/commons/NavDate"
import HeaderSeo from "../shared/commons/HeaderSeo"
import dynamic from 'next/dynamic';

const TableBattle = dynamic(() => import('../shared/commons/TableBattle'));
const TableBattleMobile = dynamic(()=> import('../shared/commons/TableBattleMobile'));

// mock data
import Europe from "../mock/uefaleague"
import Asia from "../mock/afcleague"
import PrimaveraCup from "../mock/PrimaveraCup"
import PFL from "../mock/PFL"
import leages from "../mock/leages"
import { Component } from 'react';


export default class Home extends Component {

  static async getInitialProps() {
    // res is assigned the response once the axios
    // async get is completed
    // ลีคอื่นๆ
    // const res = await axios.get('https://api.football-data.org/v2/competitions', { headers: { 'X-Auth-Token': 'a167ab4159d6448ab062e7f0730c30f3' } });
    // // api for mock https://www.football-data.org/documentation/quickstart
    // // Return properties
    // return {
    //   data: res.data,
    // }

    const res = await fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/home?json=1')
    const data  = await res.json()
    
    return {home:data}

  }

  

  render() {

    function datee(nextday){

      const today = new Date()
      const tomorrow = new Date(today)
 
      tomorrow.setDate(tomorrow.getDate()+nextday)
 
      const neww = String(tomorrow);
 
      const newsdate = neww.split(" ");
 
      const newsformat = newsdate[1] + " " +newsdate[2];

      
      return newsformat;

    }

    

     //const day = String(tomorrow.getDate()).padStart(2, '0');
    //const newd = newdate.split(" ");
    
    
    // console.log(this.props.data);

    
    let navDate = [
      { id: "1", date: datee(-3), route: "/soccer/programs/d-3", today: false },
      { id: "2", date: datee(-2), route: "/soccer/programs/d-2", today: false },
      { id: "3", date: datee(-1), route: "/soccer/programs/d-1", today: false },
      { id: "4", date: datee(0), route: "/", today: true },
      { id: "5", date: datee(1), route: "/soccer/programs/d1", today: false },
      { id: "6", date: datee(2), route: "/soccer/programs/d2", today: false },
      { id: "7", date: datee(3), route: "/soccer/programs/d3", today: false }
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
          
         {/*console.log(this.props.home.scores.category)*/}
          {/*console.log(Europe)*/}
          {this.props.home.scores.category.map((res,value) => (

              <div> {/*console.log(res.matches)*/}
                    <TableBattle  
                    className="highlight bg-secondary text-white"
                    title={res['@name']}
                    data={res.matches.match}
                    highlight={true} 
                    exam = {""/*res.matches.match*/} />
              </div>
             /*<li key={value==0}>{res['@name']}</li>*/
          /*<li key={res['@id'] === "1098"}>{res['@name']}</li> */

            
         


          ))}
         
          { /*<TableBattle
            className="bg-secondary text-white"
            title="Asia - AFC Champions League"
            data={Asia}
            highlight={false}
          />
          <TableBattle
            className="bg-secondary text-white"
            title="Italy - Primavera Cup"
            data={PrimaveraCup}
            highlight={false}
          />
          <TableBattle
            className="bg-secondary text-white"
            title="Russia - PFL"
            data={PFL}
            highlight={false}
          /> */}
        </div>

         {

          <div className="d-block d-md-none">
                  <div className="banner px-3">

                      <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
                      <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />

                  </div>

                  {this.props.home.scores.category.map((res,value) => (

                        <div>
                              <TableBattleMobile 
                                title={res['@name']}
                                data={res.matches.match}
                                highlight={false}
                              />
                             
                        </div>
                       
                        ))}
                 

          </div>


         }
        {/*<div className="d-block d-md-none">
          <div className="banner px-3">
            <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
            <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
          </div>
          <TableBattleMobile 
            title="Europe - UEFA Europa League" 
            data={Europe}
            highlight={false}
          />
          <div className="banner row mx-0">
            <div className="col-6 pr-7px">
              <img className="mb-4 img-fluid w-100 h-100px" src="/assets/ads/ads300x100.png" alt="" />
            </div>
            <div className="col-6 pl-7px">
              <img className="mb-4 img-fluid w-100 h-100px" src="/assets/ads/ads300x100.png" alt="" />
            </div>
          </div>
          <TableBattleMobile 
            title="Asia - AFC Champions League" 
            data={Asia}
            highlight={false}
          />
          <div className="banner row mx-0">
            <div className="col-6 pr-7px">
              <img className="mb-4 img-fluid w-100 h-100px" src="/assets/ads/ads300x100.png" alt="" />
            </div>
            <div className="col-6 pl-7px">
              <img className="mb-4 img-fluid w-100 h-100px" src="/assets/ads/ads300x100.png" alt="" />
            </div>
          </div>
          <TableBattleMobile 
            title="Italy - Primavera Cup" 
            data={PrimaveraCup}
            highlight={false}
          />
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
          <TableBattleMobile 
            title="Russia - PFL" 
            data={PFL}
            highlight={false}
          />
        </div> */}
      </Layout>
    )
  }

  
}
