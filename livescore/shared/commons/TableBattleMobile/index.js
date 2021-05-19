import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import {TableBattleMobileStyle} from "./style"
import Avatar from "../Avatar"
import { useRouter } from 'next/router'

const TableBattleMobile = ({title, data, className , exam ,after , th}) => {

  let newimg;
  let lastimg;
  const router = useRouter()
  var assets = "/";
  if(router.pathname !== "/"){
    
     assets = "/assets";

  }else{
    assets = "../assets";
  }

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
 // console.log(exam)
  return (
    <TableBattleMobileStyle className={`league-matches mb-4 ${className}`}>
      <div className="block-title
         align-items-center">
        {/*<Avatar
          className="align-self-center mr-3"
          size={25}
          shape="square"
          src="/assets/icons/league/league_premier.png"
          alt={title}
        />*/}
        <div className="mb-0">
        <img 
         src={`${assets}/country/${lastimg}`}
         alt={`ผลบอล mobile ${title}`}
         width={25}
         style={{marginRight:20}}
         onError={DefaultSrc} />
          {leaugethai(exam)}
          </div>
      </div>

    
      
      <div className="league-matches-list list-unstyled mb-0">
        
        {Array.isArray(data) ? (

                data.map((item, index) => {
                  return (
                    <div className="w-100 league-matches-item"  key={index.toString()} onClick={after}>
                      <Link
                        href={{
                          pathname: `/football/[league]/[name]`,
                          query: { event: JSON.stringify(item.events) , type:item["@status"]}
                        }}
                        as={`/football/${item["@static_id"]}/${exam}`}
                      >
                        <a className="row mx-0 text-decoration-none border-bottom">
                          <div className="col-3 px-0 py-2 text-center align-self-center">
                            <p className="small mb-2">{item['@date']}</p>
                            <p className="mb-0">{item['@status']}</p>
                          </div>
                          <div className="col-7 px-2 league-matches-list_name py-2 border-left border-right text-left">
                            <p className="mb-0">
                                <Avatar
                                  className="align-self-center"
                                  size={25}
                                  shape="square"
                                  src={chkforimg(exam) !== false ? `${assets}/logoteam/small/${item.localteam['@id']}.jpg` : `${assets}/default-team-logo.png`}
                                  alt={`ผลบอลสด ${item.localteam['@name']}`}
                                />
                             {typeof th[item.localteam['@id']] === "undefined" ? <span className="mx-2">{item.localteam['@name']}</span> : <span className="mx-2">{th[item.localteam['@id']]}</span>}
                            </p>
                            <p className="mb-0">
                                <Avatar
                                  className="align-self-center mr-2"
                                  size={25}
                                  shape="square"
                                  src={chkforimg(exam) !== false ? `${assets}/logoteam/small/${item.visitorteam['@id']}.jpg` : `${assets}/default-team-logo.png`}
                                  alt={`ผลบอลสด ${item.visitorteam['@name']}`}
                                />
                              {typeof th[item.visitorteam['@id']] === "undefined" ? item.visitorteam['@name'] : th[item.visitorteam['@id']]}
                            </p>
                          </div>
                          <div className="col-2 py-2 px-0 text-center align-self-center">
                            <p className="mb-2">{item.localteam['@goals']}</p>
                            <p className="mb-0">{item.visitorteam['@goals']}</p>
                          </div>
                        </a>
                      </Link>
                    </div>
                  )
                })


            ) 
        
        
            : 
        
            (
              <div className="league-matches-list list-unstyled mb-0">
                  {

                      typeof(data) != "undefined" ?  
                      
                         (
                          <div className="w-100 league-matches-item"  key={0} onClick={after}>

                              <Link
                              href={{
                               pathname: `/football/[league]/[name]`,
                               query: { event: JSON.stringify(data.events) , type:JSON.stringify(data["@status"])}
                              }}
                              as={`/football/${data["@static_id"]}/${exam}`}
                            >
                              <a className="row mx-0 text-decoration-none border-bottom">
                                <div className="col-3 px-0 py-2 text-center align-self-center">
                                  <p className="small mb-2">{data['@date']}</p>
                                  <p className="mb-0">{data['@status']}</p>
                                </div>
                                <div className="col-7 px-2 league-matches-list_name py-2 border-left border-right text-left">
                                  <p className="mb-2">
                                  <Avatar
                                  className="align-self-center"
                                  size={25}
                                  shape="square"
                                  src={chkforimg(exam) !== false ? `${assets}/logoteam/small/${data.localteam['@id']}.jpg` : `${assets}/default-team-logo.png`}
                                  alt={`ทีม ${data.localteam['@name']}`}
                                />
                                    {typeof th[data.localteam['@id']] === "undefined" ? <span className="mx-2">{data.localteam['@name']}</span> : <span className="mx-2">{th[data.localteam['@id']]}</span>}
                                  </p>
                                  <p className="mb-0">
                                  <Avatar
                                  className="align-self-center mr-2"
                                  size={25}
                                  shape="square"
                                  src={chkforimg(exam) !== false ? `${assets}/logoteam/small/${data.visitorteam['@id']}.jpg` : `${assets}/default-team-logo.png`}
                                  alt={`ทีม ${data.visitorteam['@name']}`}
                                />
                                    
                                    {typeof th[data.visitorteam['@id']] === "undefined" ? data.visitorteam['@name'] : th[data.visitorteam['@id']]}
                                  </p>
                                </div>
                                <div className="col-2 py-2 px-0 text-center align-self-center">
                                  <p className="mb-2">{data.localteam['@goals']}</p>
                                  <p className="mb-0">{data.visitorteam['@goals']}</p>
                                </div>
                              </a>
                            </Link>

                         </div>
                         )
                         : (<div>ไม่มีข้อมูล</div>)


                  }
              </div>
            )}
        {
         
        }
      </div>
    </TableBattleMobileStyle>
  );
};


TableBattleMobile.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  after:PropTypes.func.isRequired
  /*data: PropTypes.array.isRequired,*/
};
TableBattleMobile.defaultProps = {
  className: "",
  title: "title",
};

export default TableBattleMobile;
