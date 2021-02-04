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
  }

  render() {
    // console.log(this.props.data);
    let navDate = [
      { id: "1", date: "SEP 28", route: "/", today: false },
      { id: "2", date: "SEP 29", route: "/", today: false },
      { id: "3", date: "SEP 30", route: "/", today: false },
      { id: "4", date: "OCT 1", route: "/", today: true },
      { id: "5", date: "OCT 2", route: "/", today: false },
      { id: "6", date: "OCT 3", route: "/", today: false },
      { id: "7", date: "OCT 4", route: "/", today: false }
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
          <TableBattle
            className="highlight bg-secondary text-white"
            title="Europe - UEFA Europa League"
            data={Europe}
            highlight={true}
          />
          <TableBattle
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
          />
        </div>
        <div className="d-block d-md-none">
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
        </div>
      </Layout>
    )
  }
}
