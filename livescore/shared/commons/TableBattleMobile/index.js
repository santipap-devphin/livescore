import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import {TableBattleMobileStyle} from "./style"
import Avatar from "../Avatar"

const TableBattleMobile = ({title, data, className , exam ,after , th}) => {

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
        <h4 className="mb-0">{leaugethai(exam)}</h4>
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
                        <a className="row mx-0 text-decoration-none text-dark border-bottom">
                          <div className="col-3 px-0 py-2 text-center align-self-center">
                            <p className="small mb-2">{item['@date']}</p>
                            <p className="mb-0">{item['@status']}</p>
                          </div>
                          <div className="col-7 px-2 league-matches-list_name py-2 border-left border-right text-left">
                            <p className="mb-2">
                              {/*<Avatar
                                className="align-self-center mr-2"
                                size={25}
                                shape="square"
                                src="/assets/icons/league/league_premier.png"
                                alt={title}
                              />*/}
                             {typeof th[item.localteam['@id']] === "undefined" ? item.localteam['@name'] : th[item.localteam['@id']]}
                            </p>
                            <p className="mb-0">
                              {/*<Avatar
                                className="align-self-center mr-2"
                                size={25}
                                shape="square"
                                src="/assets/icons/league/league_premier.png"
                                alt={title}
                              />*/}
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
                              <a className="row mx-0 text-decoration-none text-dark border-bottom">
                                <div className="col-3 px-0 py-2 text-center align-self-center">
                                  <p className="small mb-2">{data['@date']}</p>
                                  <p className="mb-0">{data['@status']}</p>
                                </div>
                                <div className="col-7 px-2 league-matches-list_name py-2 border-left border-right text-left">
                                  <p className="mb-2">
                                    {/*<Avatar
                                      className="align-self-center mr-2"
                                      size={25}
                                      shape="square"
                                      src="/assets/icons/league/league_premier.png"
                                      alt={title}
                                    />*/}
                                    {typeof th[data.localteam['@id']] === "undefined" ? data.localteam['@name'] : th[data.localteam['@id']]}
                                  </p>
                                  <p className="mb-0">
                                    {/*<Avatar
                                      className="align-self-center mr-2"
                                      size={25}
                                      shape="square"
                                      src="/assets/icons/league/league_premier.png"
                                      alt={title}
                                    />*/}
                                    
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
