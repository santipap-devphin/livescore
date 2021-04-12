import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import {TableLiveStyle} from "./style"
import { SliderStyle } from '../CarouselTable/style';
import Avatar from "../Avatar"

const TableLive = ({ className, title, data, highlight , exam , after ,th }) => {

   
  //console.log(data)
  let new_data;
  let cutspace;
  let newimg;
  let lastimg;

  var assets = "/assets";

  if(title.indexOf(":") > -1){

    newimg = title.split(":");
    lastimg = newimg[0]+".png";

  }else{
    lastimg = "default-team-logo.png";
  }

  function DefaultSrc(ev){
    ev.target.src = '/assets/default-team-logo.png';
    //ev.target.src = '';
   }
  function leaugethai(legid){
    var txt;
     switch (legid) {
       case "1005":
         txt = "ยูฟ่า แชมเปี้ยนส์ลีก";
         break;
       case "1204":
         txt = "พรีเมียร์ลีก อังกฤษ";
         break;
       case "1007":
         txt = "ยูโรป้า ลีก";
         break;
       case "1198":
         txt = "เอฟเอ คัพ อังกฤษ";
         break;
       case "1399":
         txt = "ลาลีกา สเปน";
         break;
       case "1269":
         txt = "กัลโช่ เซเรีย อา อิตาลี";
         break;
         case "1229":
         txt = "บุนเดสลีกา เยอรมัน";
         break;
         case "1322":
         txt = "เอเรดิวิซี่ ฮอลแลนด์";
         break;
         case "1221":
         txt = "ลีก เอิง ฝรั่งเศส";
         break;
         case "1271":
         txt = "เจ ลีก ญี่ปุ่น";
         break;
         default:
         txt = title;
     }
     return txt;
 }
 function chkforimg(legid){
  var txt;
   switch (legid) {
     case "1005":
       txt = true;
       break;
     case "1204":
       txt = true;
       break;
     case "1007":
       txt = true;
       break;
     case "1198":
      txt = true;
       break;
     case "1399":
      txt = true;
       break;
      case "1269":
      txt = true;
       break;
       case "1229":
      txt = true;
       break;
       case "1322":
        txt = true;
       break;
       case "1221":
        txt = true;
       break;
       case "1271":
       txt = true;
       break;
       default:
       txt = false;
   }
   return txt;
 }
  return (
    <TableLiveStyle className={`league-matches ${highlight === true ? "highlight" : ""} mb-4 league-${exam}`}>
      <h4 className={`block-title ${className} mb-0`}>
      <img 
         src={`${assets}/country/${lastimg}`}
         alt={"icon"} 
         width={25}
         style={{marginRight:20}}
         onError={DefaultSrc} />
        {leaugethai(exam)}

      </h4>
       
      {
       
       <div className="league-matches-list list-unstyled mb-0">
       {Array.isArray(data) ? (
            <div>
              {
              
              data.map((item, index) => (

                    
                     <div className="w-100 league-matches-item" key={index.toString()} onClick={after}>
                      <Link
                        href={{
                          pathname: `/scorelive/[league]/[name]`,
                          query: { event: JSON.stringify(item.events) , type:item["@status"]},
                        }}
                        as={`/scorelive/${item["@static_id"]}/${exam}`}
                        >
                         
                         <a className="row flex-column flex-md-row mx-0 py-2 text-decoration-none">
                          <div className="col-md-6 pl-md-2 pr-md-0">
                            <div className="d-flex row mx-0">
                              <div className="col-md-1 px-0 px-md-2 flex-fill text-center text-md-left">{item['@status']}</div>
                              <div className="col-md-9 px-0 pl-md-2 pr-md-2 flex-fill text-center text-md-right">
                               {typeof th[item.localteam['@id']] === "undefined" ? item.localteam['@name'] : th[item.localteam['@id']]}
                               <Avatar
                                  className="align-self-center mx-2"
                                  size={25}
                                  shape="square"
                                  src={chkforimg(exam) !== false ? `${assets}/logoteam/small/${item.localteam['@id']}.jpg` : `${assets}/default-team-logo.png`}
                                  alt={title}
                                />
                              </div> 
                              <div className="col-md-2 px-0 pl-md-0 pr-md-0 flex-fill text-center text-score">  
                                {item.localteam['@goals']+" - "+item.visitorteam['@goals']}
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 px-0 px-md-2">
                            <div className="play text-center text-md-left">
                            <Avatar
                                  className="align-self-center mr-2"
                                  size={25}
                                  shape="square"
                                  src={chkforimg(exam) !== false ? `${assets}/logoteam/small/${item.visitorteam['@id']}.jpg` : `${assets}/default-team-logo.png`}
                                  alt={title}
                                />
                             {typeof th[item.visitorteam['@id']] === "undefined" ? item.visitorteam['@name'] : th[item.visitorteam['@id']]}
                            </div>
                          </div>
                        </a>
                      </Link>
                     
                    </div>
                ))
              }
            </div>
       ) : (
        <div className="league-matches-list list-unstyled mb-0">
                {
                typeof(data) != "undefined" ? 
                (<div className="w-100 league-matches-item" key={0} onClick={after}>
                    <Link
                      href={{
                        pathname: `/scorelive/[league]/[name]`,
                        query: { event: JSON.stringify(data.events) , type:JSON.stringify(data["@status"])},
                      }}
                      as={`/scorelive/${data["@static_id"]}/${exam}`}
                      
                    >
                      <a className="row flex-column flex-md-row mx-0 py-2 text-decoration-none">
                        <div className="col-md-6 pl-md-2 pr-md-0">
                          <div className="d-flex row mx-0">
                            <div className="col-md-1 px-0 px-md-2 flex-fill text-center text-md-left">{data['@status']}</div>
                            <div className="col-md-9 px-0 pl-md-2 pr-md-2 flex-fill text-center text-md-right">
                               {typeof th[data.localteam['@id']] === "undefined" ? data.localteam['@name'] : th[data.localteam['@id']]}
                               <Avatar
                                  className="align-self-center mx-2"
                                  size={25}
                                  shape="square"
                                  src={chkforimg(exam) !== false ? `${assets}/logoteam/small/${data.localteam['@id']}.jpg` : `${assets}/default-team-logo.png`}
                                  alt={title}
                                />
                            </div>
                            <div className="col-md-2 px-0 pl-md-0 pr-md-0 flex-fill text-center">  
                              {data.localteam['@goals']+" - "+data.visitorteam['@goals']}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 px-0 px-md-2">
                          <div className="play text-center text-md-left">
                          <Avatar
                                  className="align-self-center mr-2"
                                  size={25}
                                  shape="square"
                                  src={chkforimg(exam) !== false ? `${assets}/logoteam/small/${data.visitorteam['@id']}.jpg` : `${assets}/default-team-logo.png`}
                                  alt={title}
                                />
                             {typeof th[data.visitorteam['@id']] === "undefined" ? data.visitorteam['@name'] : th[data.visitorteam['@id']]}
                          </div>
                        </div>
                      </a>
                    </Link>

                  </div>
                 )
                 : 
                 (
                  <div>
                    ไม่มีข้อมูล
                  </div>
                 ) 
                 }
         
           </div>
       )}
     </div>

     
      
      /*exam.map((res,value) => (

          <p></p>
            <li key={value==0}>{res['@name']}</li>
              <li key={res['@id'] === "1098"}>{res['@name']}</li> 
              )) */}
                    { /* old version <div className="league-matches-list list-unstyled mb-0">
                      {
                        
                        
                        data.map((item, index) => {
                          return (
                            
                            <div className="w-100 league-matches-item" key={index.toString()}>
                            <Link
                              href={{
                                pathname: `/football/[league]/[name]`,
                              }}
                              as={`/football/premier-league/${item.team}-vs-${item.teamB}`}
                              
                            >
                              
                              <a className="row flex-column flex-md-row mx-0 py-2 text-decoration-none text-dark">
                                <div className="col-md-6 pl-md-2 pr-md-0">
                                  <div className="d-flex row mx-0">
                                    <div className="col-md-1 px-0 px-md-2 flex-fill text-center text-md-left">{item.type}</div>
                                    <div className="col-md-9 px-0 pl-md-2 pr-md-2 flex-fill text-center text-md-right">
                                      {item.team}
                                    </div>
                                    <div className="col-md-2 px-0 pl-md-0 pr-md-0 flex-fill text-center">  
                                      {item.score}
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 px-0 px-md-2">
                                  <div className="play text-center text-md-left">
                                    {item.teamB}
                                  </div>
                                </div>
                              </a>
                            </Link>
                            </div>
                          )
                        })
                      }
                    </div> */}
    </TableLiveStyle>
  );
};


TableLive.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  /*data: PropTypes.array.isRequired,*/
  highlight: PropTypes.bool,
  after:PropTypes.func.isRequired
};
TableLive.defaultProps = {
  className: "bg-secondary text-white",
  title: "title",
  highlight: false
};

export default TableLive;
