import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {TopLiveSoccerContentStyle} from "./style"
import { useRouter } from 'next/router'
import Breadcrumb from "../../commons/Breadcrumb"
import Button from "../../commons/Button"
import Battle from "../../commons/Battle"
import VotedBar from "../../components/VotedBar"
import NavMatch from "../../components/NavMatch"

const TopLiveSoccerContent = ({data, children, navMatch, nav}) => {

  
  // const router = useRouter()
  // let path = router.asPath
  // const host = path.split("/");
  // let nav = host.slice(1, host.length - 1);
  // let toTh = router.query.league
  //   ? router.query.league === "uefa-league"
  //     ? "ยูฟ่า แชมเปี้ยนส์ลีก"
  //     : router.query.league === "premier-league"
  //       ? "พรีเมียร์ลีก อังกฤษ"
  //       : router.query.league === "europa-league"
  //         ? "ยูโรป้า ลีก"
  //         : router.query.league === "fa_cup-league"
  //           ? "เอฟเอ คัพ อังกฤษ"
  //           : router.query.league === "laliga-league"
  //             ? "ลาลีกา สเปน"
  //             : router.query.league === "calcio-league"
  //               ? "กัลโช่ เซเรีย อา อิตาลี"
  //               : router.query.league === "bundesliga-league"
  //                 ? "บุนเดสลีกา เยอรมัน"
  //                 : router.query.league === "eredivisie-league"
  //                   ? "เอเรดิวิซี่ ฮอลแลนด์"
  //                   : router.query.league === "ligue-league"
  //                     ? "ลีก เอิง ฝรั่งเศส"
  //                     : router.query.league === "jleague"
  //                       ? "เจ ลีก ญี่ปุ่น"
  //                       : router.query.league && router.query.league.replace(/-/g, " ")
  //   : router.query.league && router.query.league.replace(/-/g, " ")
  // let pageTitle = router.query.name ? router.query.name.replace(/-/g, " ") : " "
  // for (var i = 0; i < nav.length; i++)
  //   if (nav[i] == "football")
  //     nav[i] = "ฟุตบอล";
  //   else if (nav[i] == router.query.league)
  //     nav[i] = toTh;
  // nav.push(pageTitle)

  const [isVoted, setVoted] = useState(false);
  const [score, setScore] = useState(false)
  const [score1, setScore1] = useState(250)
  const [score2, setScore2] = useState(0)
  const [score3, setScore3] = useState(0)
  const [percent1, setPercent1] = useState(0)
  const [percent2, setPercent2] = useState(0)
  const [percent3, setPercent3] = useState(0)
  const Score1 = () => {
    setVoted(!isVoted)
    if (score1 > 240) {
      setPercent1(100)
      setScore1(240)
    } else {
      setPercent1(score1 + 10)
      setScore1(score1 + 10)
    }
  }
  const Score2 = () => {
    setVoted(!isVoted)
    if (score2 > 240) {
      setPercent2(100)
      setScore2(240)
    } else {
      setPercent2(score2 + 10)
      setScore2(score2 + 10)
    }
  }
  const Score3 = () => {
    setVoted(!isVoted)
    if (score3 > 240) {
      setPercent2(100)
      setScore3(240)
    } else {
      setPercent3(score3 + 10)
      setScore3(score3 + 10)
    }
  }
  return (
    <TopLiveSoccerContentStyle className="mb-4">
      <Breadcrumb
        title={data.title}
        path={nav}
      />
      <Battle
        className=""
        versusText="vs"
        vote={true}
        type={data.type}
        scoreTeamA={data.scoreA}
        scoreTeamB={data.scoreB}
        imgTeamB="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2018/01/esport-team-logo-4-150x150.png"
        imgTeamA="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2018/01/esport-team-logo-2-150x150.png"
        imgTeamAName={data.team}
        imgTeamBName={data.teamB}
      >
        {
          isVoted === true
            ? (
              <div className="row mx-0 mt-3 mt-md-4">
                <VotedBar
                  className="col-4"
                  score={score1}
                  perCent={`${percent1}%`}
                  title="Brighton"
                />
                <VotedBar
                  className="col-4"
                  score={score2}
                  perCent={`${percent2}%`}
                  title="Draw"
                />
                <VotedBar
                  className="col-4"
                  score={score3}
                  perCent={`${percent3}%`}
                  title="Man Utd"
                />
                
                <div className="col-12 my-5 text-center">
                  <div className="d-inline-block">
                    <p className="mb-3 mr-3 font-weight-bold d-inline-block">
                      Bet  THB 100.00 on  Man Utd to get THB 178.00
                    </p>
                    <Button className="bg-gray-300 px-4 rounded-pill mx-auto d-inline-block" size="large" >
                      <span className="text-dark">BET NOW!</span>
                    </Button>
                  </div>
                </div>
                <div className="col-12 border text-center py-3">
                  <span className="text-secondary">
                    18+ | Dafabet T&C's Apply | Gamble Responsibly
                  </span>
                </div>
              </div>
            )
            : (<div className="row mx-0 mt-3 mt-md-4">
              <div className="col-4 text-center">
                <Button
                  className="btn-outline-secondary px-sm-4 mx-auto" size="large"
                  onClick={Score1}
                >
                  Vote
                </Button>
              </div>
              <div className="col-4 score-date text-center">
                <Button
                  className="btn-outline-secondary px-sm-4 mx-auto" size="large"
                  onClick={Score2}
                >
                  Draw
                </Button>
              </div>
              <div className="col-4 text-center">
                <Button
                  className="btn-outline-secondary px-sm-4 mx-auto" size="large"
                  onClick={Score3}
                >
                  Vote
                </Button>
              </div>
              <div className="col-12 text-center my-5 font-weight-bold">3843 votes so far</div>

            </div>)
        }
      </Battle>
      <div className='mt-3 mt-md-4'>
        <NavMatch
          className="text-uppercase"
          route={navMatch}
        />
        {children}
      </div>
    </TopLiveSoccerContentStyle>
  );
};


TopLiveSoccerContent.propTypes = {
  children: PropTypes.node,
  navMatch: PropTypes.array
};


export default TopLiveSoccerContent;
