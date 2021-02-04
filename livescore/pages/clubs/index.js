import React, { useState, useEffect } from 'react';
import HeaderSeo from "../../shared/commons/HeaderSeo"
import Layout from "../../shared/container/Layout"
import Empty from "../../shared/commons/Empty"
import Link from 'next/link'
import Avatar from "../../shared/commons/Avatar"

import Clup from "../../mock/Clup"

const Teams = () => {
  const [isLeague, setLeague] = useState("0");

  useEffect(() => {
    setLeague("0");
  }, []);
  const handleChangeLeague = (value) => {
    setLeague(value.target.value)
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
            <option value="1">พรีเมียร์ลีก อังกฤษ</option>
            <option value="2">ยูฟ่า แชมเปี้ยนส์ลีก</option>
            <option value="3">ยูโรป้า ลีก</option>
            <option value="4">เอฟเอ คัพ อังกฤษ</option>
            <option value="5">ลาลีกา สเปน</option>
          </select>
        </div>
      </div>
      {
        isLeague !== "0"
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
                  <h5 className="mt-0">English Premier League</h5>
                  <div className="">
                    <img src="/assets/flag/england.png" className="avatar rounded-circle mr-3" alt="" />
                    England
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
                    <th>GOALS</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Clup.map((item, index) => (
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
                  }
                </tbody>
              </table>

            </div>
          </div>
          : <Empty className="pt-4 pb-4" />
      }
    </Layout>
  )
}
export default Teams