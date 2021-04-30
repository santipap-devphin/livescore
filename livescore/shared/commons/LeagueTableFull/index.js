import React from 'react';
import PropTypes from 'prop-types';
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import {LeagueTableStyle } from "./style"
import ReactHtmlParser from 'react-html-parser';


const LeagueTable = ({ className, arrow, matches, title }) => {
 
  function leaugenamethai(titlee){
    var txt;
     switch (titlee) {
       case "Premier League":
         txt = "พรีเมียร์ลีก อังกฤษ";
         break;
       case "Primera División":
         txt = "ลาลีกา สเปน";
         break;
       case "Serie A":
         txt = "กัลโช่ เซเรีย อา อิตาลี";
         break;
       case "Bundesliga":
         txt = "บุนเดสลีกา เยอรมัน";
         break;
       case "Ligue 1":
         txt = "ลีก เอิง ฝรั่งเศส";
         break;
       case "J1 League":
         txt = "เจ ลีก ญี่ปุ่น";
         break;
         case "Thai League 1":
         txt = "ไทย ลีก";
         break;
        default:
         txt = title;
     }
     return txt;
 }
 function chkforms(txt){
  var str = "";
  for(var i =0; i < txt.length; i++)
  {

      if(txt[i] === "W"){
        str += "<span class='form-W'>"+txt[i]+"</span>";
      }
      else if(txt[i] === "D"){
        str += "<span class='form-D'>"+txt[i]+"</span>";
      }else{
        str += "<span class='form-L'>"+txt[i]+"</span>";
      }


  }

  return str;

 }
  return (
    <LeagueTableStyle className={`league-table-container ${className}`}>

<div className="league-table mt-0 table-responsive">
        <table className="table table-bordered">
        <thead>
          <tr>
            <th></th>
            <th colSpan="2">{leaugenamethai(title)}</th>
            <th className="text-center px-1 py-2">MP</th>
            <th className="text-center px-1 py-2">W</th>
            <th className="text-center px-1 py-2">D</th>
            <th className="text-center px-1 py-2">L</th>
            <th className="text-center px-1 py-2">F</th>
            <th className="text-center px-1 py-2">A</th>
            <th className="text-center px-1 py-2">D</th>
            <th className="text-center px-1 py-2">P</th>
            <th className="text-center px-1 py-2">FORM</th>
          </tr>
        </thead>
        <tbody>
        
        {
          matches.length === 18 ?

          matches.map((item, k) => (
            <tr key={k.toString()}>
              
              <td className={item["@position"] === "16" || item["@position"] === "17" ? `league-lower text-center px-0 py-1`:"text-center px-0 py-1"}>{item["@position"]}</td>
              <td colSpan="2">{item["@name"]}</td>
              <td className="px-0 py-1 text-center">{item.overall["@gp"]}</td>
              <td className="px-0 py-1 text-center">{item.overall["@w"]}</td>
              <td className="px-0 py-1 text-center">{item.overall["@d"]}</td>
              <td className="px-0 py-1 text-center">{item.overall["@l"]}</td>
              <td className="px-0 py-1 text-center">{item.overall["@gs"]}</td>
              <td className="px-0 py-1 text-center">{item.overall["@ga"]}</td>
              <td className="px-0 py-1 text-center">{item.total["@gd"]}</td>
              <td className="px-0 py-1 text-center">{item.total["@p"]}</td>
              <td className="px-0 py-1 text-center">
              { ReactHtmlParser (chkforms(item["@recent_form"])) } 
                          
              </td>
            </tr>
          ))

          :
          matches.length === 16 ?

          matches.map((item, k) => (
            <tr key={k.toString()}>
              
              <td className={item["@position"] === "14" || item["@position"] === "15" || item["@position"] === "16" ? `league-lower text-center px-0 py-1`:"text-center px-0 py-1"}>{item["@position"]}</td>
              <td colSpan="2">{item["@name"]}</td>
              <td className="px-0 py-1 text-center">{item.overall["@gp"]}</td>
              <td className="px-0 py-1 text-center">{item.overall["@w"]}</td>
              <td className="px-0 py-1 text-center">{item.overall["@d"]}</td>
              <td className="px-0 py-1 text-center">{item.overall["@l"]}</td>
              <td className="px-0 py-1 text-center">{item.overall["@gs"]}</td>
              <td className="px-0 py-1 text-center">{item.overall["@ga"]}</td>
              <td className="px-0 py-1 text-center">{item.total["@gd"]}</td>
              <td className="px-0 py-1 text-center">{item.total["@p"]}</td>
              <td className="px-0 py-1 text-center">
              { ReactHtmlParser (chkforms(item["@recent_form"])) } 
                          
              </td>
            </tr>
          ))
          :

          matches.map((item, k) => (
            <tr key={k.toString()}>
              
              <td className="text-center px-0 py-1">{item["@position"]}</td>
              <td colSpan="2">{item["@name"]}</td>
              <td className="px-0 py-1 text-center">{item.overall["@gp"]}</td>
              <td className="px-0 py-1 text-center">{item.overall["@w"]}</td>
              <td className="px-0 py-1 text-center">{item.overall["@d"]}</td>
              <td className="px-0 py-1 text-center">{item.overall["@l"]}</td>
              <td className="px-0 py-1 text-center">{item.overall["@gs"]}</td>
              <td className="px-0 py-1 text-center">{item.overall["@ga"]}</td>
              <td className="px-0 py-1 text-center">{item.total["@gd"]}</td>
              <td className="px-0 py-1 text-center">{item.total["@p"]}</td>
              <td className="px-0 py-1 text-center">
              { ReactHtmlParser (chkforms(item["@recent_form"])) } 
                          
              </td>
            </tr>
          ))
        }
        </tbody>
        </table>
      </div>
      
    </LeagueTableStyle >
  );
};


LeagueTable.propTypes = {
  className: PropTypes.string,
  arrow: PropTypes.bool.isRequired,
  matches: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};
LeagueTable.defaultProps = {
  className: "",
  arrow: false
};

export default LeagueTable;
