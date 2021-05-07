import React ,{useState,useEffect} from 'react';

import PropTypes from 'prop-types';
import {CardSoccerStyle} from "./style"


const CardSoccer = ({teams,list,className}) => {

   var wid = null;
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const size = useWindowSize();

  if(size.width < 767){

    wid="";

  }else{
    
    wid = "33.33%"
  }



  return (
    <CardSoccerStyle className={`pt-4 ${className}`}>

     
        <div className="table-wrapper">
            <table className="fl-table">
                <thead>
                <tr>
                    <th>{teams.localteam}</th>
                    <th>Stats</th>
                    <th>{teams.visitorteam}</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                      <td style={{width:wid}}>{list.localteam.shots["@total"]}</td>
                      <td style={{width:wid}}>ยิงทั้งหมด</td>
                      <td style={{width:wid}}>{list.visitorteam.shots["@total"]}</td>
                    </tr>
                    <tr>
                      <td>{list.localteam.shots["@insidebox"]}</td>
                      <td>ยิงเข้ากรอบ</td>
                      <td>{list.visitorteam.shots["@insidebox"]}</td>
                    </tr>
                    <tr>
                      <td>{list.localteam.shots["@outsidebox"]}</td>
                      <td>ยิงออกนอกกรอบ</td>
                      <td>{list.visitorteam.shots["@outsidebox"]}</td>
                    </tr>
                    <tr>
                      <td>{list.localteam.fouls["@total"]}</td>
                      <td>ฟาวล์</td>
                      <td>{list.visitorteam.fouls["@total"]}</td>
                    </tr>
                    <tr>
                      <td>{list.localteam.corners["@total"]}</td>
                      <td>เตะมุม</td>
                      <td>{list.visitorteam.corners["@total"]}</td>
                    </tr>
                    <tr>
                      <td>{list.localteam.offsides["@total"]}</td>
                      <td>ล้ำหน้า</td>
                      <td>{list.visitorteam.offsides["@total"]}</td>
                    </tr>
                    <tr>
                      <td>{list.localteam.possestiontime["@total"]}</td>
                      <td>ครองบอล</td>
                      <td>{list.visitorteam.possestiontime["@total"]}</td>
                    </tr>
                    <tr>
                      <td>{list.localteam.yellowcards["@total"]}</td>
                      <td>ใบเหลือง</td>
                      <td>{list.visitorteam.yellowcards["@total"]}</td>
                    </tr>
                    <tr>
                      <td>{list.localteam.redcards["@total"]}</td>
                      <td>ใบแดง</td>
                      <td>{list.visitorteam.redcards["@total"]}</td>
                    </tr>
                    <tr>
                      <td>{list.localteam.saves["@total"]}</td>
                      <td>เซฟบอล</td>
                      <td>{list.visitorteam.saves["@total"]}</td>
                    </tr>
                    <tr>
                      <td>{list.localteam.passes["@total"]}</td>
                      <td>จ่ายบอลทั้งบอล</td>
                      <td>{list.visitorteam.passes["@total"]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      
      {/*<div className="pitch-soccer__container">
         
      
        <div>
          <div className="pitch-soccer__spotlight soccer-corner corner-top corner-left" />
          <div className="pitch-soccer__spotlight soccer-corner corner-top corner-right" />
          <div className="pitch-soccer__spotlight soccer-corner corner-bottom corner-left" />
          <div className="pitch-soccer__spotlight soccer-corner corner-bottom corner-right" />
          <div className="pitch-soccer__spotlight soccer-center">

          
          
           <table>
                    <thead>
                          <tr>
                            <th>{teams.localteam}</th>
                            <th>Stats</th>
                            <th>{teams.visitorteam}</th>
                          </tr>
                    </thead>
                    
                    <tbody>
                    <tr>
                      <td>{list.localteam.shots["@total"]}</td>
                      <td>ยิงทั้งหมด</td>
                      <td>{list.visitorteam.shots["@total"]}</td>
                    </tr>
                    <tr>
                      <td>{list.localteam.shots["@insidebox"]}</td>
                      <td>ยิงเข้ากรอบ</td>
                      <td>{list.visitorteam.shots["@insidebox"]}</td>
                    </tr>
                    <tr>
                      <td>{list.localteam.shots["@outsidebox"]}</td>
                      <td>ยิงออกนอกกรอบ</td>
                      <td>{list.visitorteam.shots["@outsidebox"]}</td>
                    </tr>
                    <tr>
                      <td>{list.localteam.fouls["@total"]}</td>
                      <td>ฟาวล์</td>
                      <td>{list.visitorteam.fouls["@total"]}</td>
                    </tr>
                    <tr>
                      <td>{list.localteam.corners["@total"]}</td>
                      <td>เตะมุม</td>
                      <td>{list.visitorteam.corners["@total"]}</td>
                    </tr>
                    <tr>
                      <td>{list.localteam.offsides["@total"]}</td>
                      <td>ล้ำหน้า</td>
                      <td>{list.visitorteam.offsides["@total"]}</td>
                    </tr>
                    <tr>
                      <td>{list.localteam.possestiontime["@total"]}</td>
                      <td>ครองบอล</td>
                      <td>{list.visitorteam.possestiontime["@total"]}</td>
                    </tr>
                    <tr>
                      <td>{list.localteam.yellowcards["@total"]}</td>
                      <td>ใบเหลือง</td>
                      <td>{list.visitorteam.yellowcards["@total"]}</td>
                    </tr>
                    <tr>
                      <td>{list.localteam.redcards["@total"]}</td>
                      <td>ใบแดง</td>
                      <td>{list.visitorteam.redcards["@total"]}</td>
                    </tr>
                    <tr>
                      <td>{list.localteam.saves["@total"]}</td>
                      <td>เซฟบอล</td>
                      <td>{list.visitorteam.saves["@total"]}</td>
                    </tr>
                    <tr>
                      <td>{list.localteam.passes["@total"]}</td>
                      <td>จ่ายบอลทั้งบอล</td>
                      <td>{list.visitorteam.passes["@total"]}</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                    
                    </tr>

                    </tfoot>
            
          </table>


          
          
          
          </div>
          <div className="pitch-soccer__spotlight soccer-goal soccer-goal-left" />
          <div className="pitch-soccer__spotlight soccer-goal soccer-goal-right" />
        </div>
        <div className="pitch-soccer__stripes"></div>
        <div className="pitch-soccer__noise" />
        
        <div className="pitch-soccer__svg-container--">
       
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 568 352" className="pitch-soccer__svg" style={{stroke: 'rgb(255, 255, 255)'}}>
          
            <path vectorEffect="non-scaling-stroke" strokeWidth={2} fill="none" d="M10,10h548v332H10V10z" />
            <path vectorEffect="non-scaling-stroke" strokeWidth={2} fill="none" d="M83.5,211c12-7.2,20-20.2,20-35s-8-27.8-20-35 M10.5,87h73v178h-73 M557.5,87h-73v178h73 M484.5,211c-12-7.2-20-20.2-20-35s8-27.8,20-35" />
            <path vectorEffect="non-scaling-stroke" strokeWidth={2} fill="none" d="M10.5,139h29v74h-29 M557.5,139h-29v74h29 M284,10v332" />
            <circle vectorEffect="non-scaling-stroke" strokeWidth={2} fill="none" cx={284} cy={176} r={44} />
            <path vectorEffect="non-scaling-stroke" strokeWidth={2} fill="none" d="M10,156H4v40h6" />
            <path vectorEffect="non-scaling-stroke" strokeWidth={2} fill="none" d="M558,156h6v40h-6" />
            <line vectorEffect="non-scaling-stroke" strokeWidth={6} fill="none" strokeLinecap="round" x1={284} y1={176} x2={284} y2={176} />
            <line vectorEffect="non-scaling-stroke" strokeWidth={4} fill="none" strokeLinecap="round" x1={59} y1={176} x2={59} y2={176} />
            <line vectorEffect="non-scaling-stroke" strokeWidth={4} fill="none" strokeLinecap="round" x1={509} y1={176} x2={509} y2={176} />
            <path vectorEffect="non-scaling-stroke" strokeWidth={2} fill="none" d="M10,18c4.4,0,8-3.6,8-8 M18,342c0-4.4-3.6-8-8-8 M550,342c0-4.4,3.6-8,8-8 M558,18c-4.4,0-8-3.6-8-8" />
          </svg>
        </div>
  </div>*/}
     
    </CardSoccerStyle>
  );
};


CardSoccer.propTypes = {
  className: PropTypes.string
};
CardSoccer.defaultProps = {
  className: "",
};

export default CardSoccer;
