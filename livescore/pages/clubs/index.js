import React, { useState, useEffect } from 'react';
import HeaderSeo from "../../shared/commons/HeaderSeo"
import Layout from "../../shared/container/Layout"
import Empty from "../../shared/commons/Empty"
import Link from 'next/link'
import Avatar from "../../shared/commons/Avatar"

const Teams = () => {

   const [isLeague, setLeague] = useState("0");
   const [items, setItems] = useState();
   const [load, setLoad] = useState(false);
   const [error, setError] = useState('');
   let events = [];
  useEffect(() => {
    setLeague("0");
  }, []);

 
  
  const handleChangeLeague = (value) => {

    setError("start")
    setLeague(value.target.value)

    fetchItems(value.target.value)

  }

  const fetchItems = async (items) => {

    const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/${items}.xml?json=1`)
    const data = await res.json()

    data.standings.tournament.team.sort(function(a, b) {
      //console.log(a["@minute"])
       return a["@id"] - b["@id"];
    });
   
     setItems(data)
     setLoad(true)
     setError("end")

  }


  
  
 
  return (
    <Layout>
      <HeaderSeo
        siteName=""
        title="live score"
        desc=""
        imgSrc=""
        metaUrl=""
        keyWords=""
        author=""
      />
      
     
      <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
      <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
      <div className="d-flex border-bottom">
        <h1 className="pb-4 mr-auto mb-0">ข้อมูลสโมสร</h1>
        <div className="filter">
          <select className="form-control" id="exampleFormControlSelect1" onChange={handleChangeLeague}>
            <option value="0">เลือกลีคที่ต้องการ</option>
            <option value="1204">พรีเมียร์ลีก อังกฤษ</option>
            <option value="1399">ลาลีกา สเปน</option>
            <option value="1229">บุนเดสลีกา เยอรมัน</option>
            <option value="1269">เซเรียอา อิตาลี</option>
            <option value="1221">ลีก เอิง ฝรั่งเศส</option>
            <option value="1322">เอเรดิวิซี่ ฮอลแลนด์</option>
            <option value="1271">เจ ลีก ญี่ปุ่น</option>
          </select>
        </div>
      </div>

     
      {
        load !== false
          ? <div>
            <div className="content-wrapper">
              <div className="media align-items-center py-4">
                <Avatar
                  className="align-self-center mr-3"
                  size={100}
                  shape="square"
                  src="/assets/league_1204@2x.png"
                  alt="English Premier League" 
                />
                <div className="media-body">
                  <h5 className="mt-0">{items.standings.tournament["@league"]}</h5>
                  <div className="">
                    <img src="/assets/flag/england.png" className="avatar rounded-circle mr-3" alt="" />
                    {items.standings["@country"]}
                  </div>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>TEAMS</th>
                    {/*<th></th>*/}
                  </tr>
                </thead>
                <tbody>
                {/*console.log(items)*/}
                  {

                      items.standings.tournament.team.map((item, index) => (

                      <tr className="border-bottom gray" style={{borderBottom: "#E3E3E3"}} key={index.toString()}>
                      <td style={{background: "#606060"}} className="text-white text-center">{index+1}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            href={{
                              pathname: `/clubs/[league]/[name]/overviews/${item["@id"]}`,
                            }}
                            as={`/clubs/${items.standings.tournament["@league"]}/${item["@name"]}/overviews/${item["@id"]}`}
                          >
                            <a className="text-dark">
                              <Avatar 
                                size={30}
                                shape="square"
                                src="/assets/mock/mock_avatar.png" alt={item["@name"]}
                              />
                            </a>
                          </Link>
                          <div className="ml-2">
                            <Link
                              href={{
                                pathname: `/clubs/[league]/[name]/overviews/${item["@id"]}`,
                              }}
                              as={`/clubs/${items.standings.tournament["@league"]}/${item["@name"]}/overviews/${item["@id"]}`}
                              >
                              <a className="text-dark">
                                {item["@name"]}
                              </a>
                            </Link>
                          </div>
                        </div>
                      </td>
                      {/*<td>
                        item.total["@gd"]
                      </td>*/}
                    </tr>


                    ))

                  }
                  {
                    /*Clup.map((item, index) => (
                      <tr className="border-bottom gray" style={{borderBottom: "#E3E3E3"}} key={index.toString()}>
                        <td style={{background: "#606060"}} className="text-white text-center">{item.id}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              href={{
                                pathname: `/clubs/[league]/[name]/overview`,
                              }}
                              as={`/clubs/premier-league/liverpool/overview`}
                            >
                              <a className="text-dark">
                                <Avatar 
                                  size={30}
                                  shape="square"
                                  src="/assets/mock/mock_avatar.png" alt={item.teams}
                                />
                              </a>
                            </Link>
                            <div className="ml-2">
                              <Link
                                href={{
                                  pathname: `/clubs/[league]/[name]/overview`,
                                }}
                                as={`/clubs/premier-league/liverpool/overview`}
                              >
                                <a className="text-dark">
                                  {item.teams}
                                </a>
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td>
                          {item.goals}
                        </td>
                      </tr>
                    ))
                  */}
                </tbody>
              </table>

            </div>
          </div>
          : <Empty className="pt-4 pb-4" />
      }
      {error === "start" ? <div>load ......</div> : <div></div>}
    </Layout>
  )
}

export default Teams