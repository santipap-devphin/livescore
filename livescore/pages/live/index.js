import React, { useState, useEffect ,useRef } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
const HeaderSeo = dynamic(() => import('../../shared/commons/HeaderSeo'));
const Footer = dynamic(() => import('../../shared/components/Footer'));

import TableLive from "../../shared/commons/TableLive"
import TableBattleMobile from "../../shared/commons/TableBattleMobile"

const Live = (props) => {


 function convertTZ(date, tzString) {
      return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
 }

const [sdata , setDatas] =  useState(false);
const [defaults , setDefaults] = useState(props);
const myRef = useRef(null)
const [sectiontwo , setSectiontwo] = useState(false);
const [lang , setLang] = useState([]);
const [live , setLive] = useState([]);
const [poparr , setpoparr] = useState([]);
const [loadlive , setloadLive] = useState(false);
var newsarr = [];
let teamth  = [];

const fetchlives = async () => {

  const res = await fetch(`https://zio666.com/service_live/load_live.php`)
  const data = await res.json()

  let objj = {};

  let scores = {
          "@sport":data.scores["@sport"],
          "@updated":data.scores["@updated"],
          "category":data.scores.category,
         
      
  }

  objj = {home:scores};

  setLive(objj)
  setpoparr(data.scores.list)
  setloadLive(true)

}

useEffect(() => {

  fetchlives();

},[setLive])

useEffect(() => {

  setDatas(true);

},[setDatas])

const  handdleClickAfterload = (e) => {

  e.preventDefault();

  setDatas(false);
  setSectiontwo(false);
  

  myRef.current.scrollIntoView()

  //window.scrollTo(3000, 20)

}
const handleClicklive = async (e) => {

  e.preventDefault();

  setDatas(false);
  setSectiontwo(false);
  //console.log(e.target.value);
  const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/home?json=1`)
  
  const data = await res.json()

  let ndata = [];
  let objj = {};
  newsarr = [];
  
  var values;

    for(var i = 0 ; i < data.scores.category.length; i++)
    {
      
     // 
      if(data.scores.category[i]["@id"] === "1204"){

        if(Array.isArray(data.scores.category[i]["matches"].match) === true){

          //newsarr = [];
         for(var j = 0 ; j < data.scores.category[i]["matches"].match.length; j++){

                //newsarr = []
                if(data.scores.category[i]["matches"].match[j]["@timer"] !== "" || data.scores.category[i]["matches"].match[j]["@status"] === "HT"){

                    newsarr.push(
                        {
                          "@leagueid": data.scores.category[i]["@gid"],
                          "@status": data.scores.category[i]["matches"].match[j]["@status"],
                          "@timer": data.scores.category[i]["matches"].match[j]["@timer"],
                          "@date": data.scores.category[i]["matches"].match[j]["@date"],
                          "@formatted_date": data.scores.category[i]["matches"].match[j]["@formatted_date"],
                          "@time": data.scores.category[i]["matches"].match[j]["@time"],
                          "@commentary_available": data.scores.category[i]["matches"].match[j]["@commentary_available"],
                          "@venue": data.scores.category[i]["matches"].match[j]["@venue"],
                          "@v": data.scores.category[i]["matches"].match[j]["@v"],
                          "@static_id": data.scores.category[i]["matches"].match[j]["@static_id"],
                          "@fix_id": data.scores.category[i]["matches"].match[j]["@fix_id"],
                          "@id": data.scores.category[i]["matches"].match[j]["@id"],
                          "localteam": data.scores.category[i]["matches"].match[j]["localteam"],
                          "visitorteam": data.scores.category[i]["matches"].match[j]["visitorteam"],
                          "events": data.scores.category[i]["matches"].match[j]["events"],
                          "ht": data.scores.category[i]["matches"].match[j]["ht"],
                        }
                      )
                      ndata.push(
                       {
                         "@name":data.scores.category[i]["@name"] ,
                         "@gid": data.scores.category[i]["@gid"] ,
                         "@id": data.scores.category[i]["@id"] ,
                         "@file_group": data.scores.category[i]["@file_group"],
                         "@iscup": data.scores.category[i]["@iscup"],
                         "@priority": "1",
                         "matches":{match :[]}
                       }
                     )
                  }
          }
    }else{

         if(data.scores.category[i]["matches"].match["@timer"] !== "" || data.scores.category[i]["matches"].match["@status"] === "HT"){

                 newsarr.push(
                   {
                     "@leagueid": data.scores.category[i]["@gid"],
                     "@status": data.scores.category[i]["matches"].match["@status"],
                     "@timer": data.scores.category[i]["matches"].match["@timer"],
                     "@date": data.scores.category[i]["matches"].match["@date"],
                     "@formatted_date": data.scores.category[i]["matches"].match["@formatted_date"],
                     "@time": data.scores.category[i]["matches"].match["@time"],
                     "@commentary_available": data.scores.category[i]["matches"].match["@commentary_available"],
                     "@venue": data.scores.category[i]["matches"].match["@venue"],
                     "@v": data.scores.category[i]["matches"].match["@v"],
                     "@static_id": data.scores.category[i]["matches"].match["@static_id"],
                     "@fix_id": data.scores.category[i]["matches"].match["@fix_id"],
                     "@id": data.scores.category[i]["matches"].match["@id"],
                     "localteam": data.scores.category[i]["matches"].match["localteam"],
                     "visitorteam": data.scores.category[i]["matches"].match["visitorteam"],
                     "events": data.scores.category[i]["matches"].match["events"],
                     "ht": data.scores.category[i]["matches"].match["ht"],
                   }
                 )

                 ndata.push(
                     {
                       "@name":data.scores.category[i]["@name"] ,
                       "@gid": data.scores.category[i]["@gid"] ,
                       "@id": data.scores.category[i]["@id"] ,
                       "@file_group": data.scores.category[i]["@file_group"],
                       "@iscup": data.scores.category[i]["@iscup"],
                       "@priority": "1",
                       "matches": data.scores.category[i]["matches"],
                     }
         
                   )
               }
          }

      }
      else if(data.scores.category[i]["@id"] === "1005"){

        if(Array.isArray(data.scores.category[i]["matches"].match) === true){

          //newsarr = [];
         for(var j = 0 ; j < data.scores.category[i]["matches"].match.length; j++){

                //newsarr = []
                if(data.scores.category[i]["matches"].match[j]["@timer"] !== "" || data.scores.category[i]["matches"].match[j]["@status"] === "HT"){

                    newsarr.push(
                        {
                          "@leagueid": data.scores.category[i]["@gid"],
                          "@status": data.scores.category[i]["matches"].match[j]["@status"],
                          "@timer": data.scores.category[i]["matches"].match[j]["@timer"],
                          "@date": data.scores.category[i]["matches"].match[j]["@date"],
                          "@formatted_date": data.scores.category[i]["matches"].match[j]["@formatted_date"],
                          "@time": data.scores.category[i]["matches"].match[j]["@time"],
                          "@commentary_available": data.scores.category[i]["matches"].match[j]["@commentary_available"],
                          "@venue": data.scores.category[i]["matches"].match[j]["@venue"],
                          "@v": data.scores.category[i]["matches"].match[j]["@v"],
                          "@static_id": data.scores.category[i]["matches"].match[j]["@static_id"],
                          "@fix_id": data.scores.category[i]["matches"].match[j]["@fix_id"],
                          "@id": data.scores.category[i]["matches"].match[j]["@id"],
                          "localteam": data.scores.category[i]["matches"].match[j]["localteam"],
                          "visitorteam": data.scores.category[i]["matches"].match[j]["visitorteam"],
                          "events": data.scores.category[i]["matches"].match[j]["events"],
                          "ht": data.scores.category[i]["matches"].match[j]["ht"],
                        }
                      )
                      ndata.push(
                       {
                         "@name":data.scores.category[i]["@name"] ,
                         "@gid": data.scores.category[i]["@gid"] ,
                         "@id": data.scores.category[i]["@id"] ,
                         "@file_group": data.scores.category[i]["@file_group"],
                         "@iscup": data.scores.category[i]["@iscup"],
                         "@priority": "2",
                         "matches":{match :[]}
                       }
                     )
                  }
          }
    }else{

         if(data.scores.category[i]["matches"].match["@timer"] !== "" || data.scores.category[i]["matches"].match["@status"] === "HT"){

                 newsarr.push(
                   {
                     "@leagueid": data.scores.category[i]["@gid"],
                     "@status": data.scores.category[i]["matches"].match["@status"],
                     "@timer": data.scores.category[i]["matches"].match["@timer"],
                     "@date": data.scores.category[i]["matches"].match["@date"],
                     "@formatted_date": data.scores.category[i]["matches"].match["@formatted_date"],
                     "@time": data.scores.category[i]["matches"].match["@time"],
                     "@commentary_available": data.scores.category[i]["matches"].match["@commentary_available"],
                     "@venue": data.scores.category[i]["matches"].match["@venue"],
                     "@v": data.scores.category[i]["matches"].match["@v"],
                     "@static_id": data.scores.category[i]["matches"].match["@static_id"],
                     "@fix_id": data.scores.category[i]["matches"].match["@fix_id"],
                     "@id": data.scores.category[i]["matches"].match["@id"],
                     "localteam": data.scores.category[i]["matches"].match["localteam"],
                     "visitorteam": data.scores.category[i]["matches"].match["visitorteam"],
                     "events": data.scores.category[i]["matches"].match["events"],
                     "ht": data.scores.category[i]["matches"].match["ht"],
                   }
                 )

                 ndata.push(
                     {
                       "@name":data.scores.category[i]["@name"] ,
                       "@gid": data.scores.category[i]["@gid"] ,
                       "@id": data.scores.category[i]["@id"] ,
                       "@file_group": data.scores.category[i]["@file_group"],
                       "@iscup": data.scores.category[i]["@iscup"],
                       "@priority": "2",
                       "matches": data.scores.category[i]["matches"],
                     }
         
                   )
               }
          }

      }
      else if(data.scores.category[i]["@id"] === "1007"){

        if(Array.isArray(data.scores.category[i]["matches"].match) === true){

          //newsarr = [];
         for(var j = 0 ; j < data.scores.category[i]["matches"].match.length; j++){

                //newsarr = []
                if(data.scores.category[i]["matches"].match[j]["@timer"] !== "" || data.scores.category[i]["matches"].match[j]["@status"] === "HT"){

                    newsarr.push(
                        {
                          "@leagueid": data.scores.category[i]["@gid"],
                          "@status": data.scores.category[i]["matches"].match[j]["@status"],
                          "@timer": data.scores.category[i]["matches"].match[j]["@timer"],
                          "@date": data.scores.category[i]["matches"].match[j]["@date"],
                          "@formatted_date": data.scores.category[i]["matches"].match[j]["@formatted_date"],
                          "@time": data.scores.category[i]["matches"].match[j]["@time"],
                          "@commentary_available": data.scores.category[i]["matches"].match[j]["@commentary_available"],
                          "@venue": data.scores.category[i]["matches"].match[j]["@venue"],
                          "@v": data.scores.category[i]["matches"].match[j]["@v"],
                          "@static_id": data.scores.category[i]["matches"].match[j]["@static_id"],
                          "@fix_id": data.scores.category[i]["matches"].match[j]["@fix_id"],
                          "@id": data.scores.category[i]["matches"].match[j]["@id"],
                          "localteam": data.scores.category[i]["matches"].match[j]["localteam"],
                          "visitorteam": data.scores.category[i]["matches"].match[j]["visitorteam"],
                          "events": data.scores.category[i]["matches"].match[j]["events"],
                          "ht": data.scores.category[i]["matches"].match[j]["ht"],
                        }
                      )
                      ndata.push(
                       {
                         "@name":data.scores.category[i]["@name"] ,
                         "@gid": data.scores.category[i]["@gid"] ,
                         "@id": data.scores.category[i]["@id"] ,
                         "@file_group": data.scores.category[i]["@file_group"],
                         "@iscup": data.scores.category[i]["@iscup"],
                         "@priority": "3",
                         "matches":{match :[]}
                       }
                     )
                  }
          }
    }else{

         if(data.scores.category[i]["matches"].match["@timer"] !== "" || data.scores.category[i]["matches"].match["@status"] === "HT"){

                 newsarr.push(
                   {
                     "@leagueid": data.scores.category[i]["@gid"],
                     "@status": data.scores.category[i]["matches"].match["@status"],
                     "@timer": data.scores.category[i]["matches"].match["@timer"],
                     "@date": data.scores.category[i]["matches"].match["@date"],
                     "@formatted_date": data.scores.category[i]["matches"].match["@formatted_date"],
                     "@time": data.scores.category[i]["matches"].match["@time"],
                     "@commentary_available": data.scores.category[i]["matches"].match["@commentary_available"],
                     "@venue": data.scores.category[i]["matches"].match["@venue"],
                     "@v": data.scores.category[i]["matches"].match["@v"],
                     "@static_id": data.scores.category[i]["matches"].match["@static_id"],
                     "@fix_id": data.scores.category[i]["matches"].match["@fix_id"],
                     "@id": data.scores.category[i]["matches"].match["@id"],
                     "localteam": data.scores.category[i]["matches"].match["localteam"],
                     "visitorteam": data.scores.category[i]["matches"].match["visitorteam"],
                     "events": data.scores.category[i]["matches"].match["events"],
                     "ht": data.scores.category[i]["matches"].match["ht"],
                   }
                 )

                 ndata.push(
                     {
                       "@name":data.scores.category[i]["@name"] ,
                       "@gid": data.scores.category[i]["@gid"] ,
                       "@id": data.scores.category[i]["@id"] ,
                       "@file_group": data.scores.category[i]["@file_group"],
                       "@iscup": data.scores.category[i]["@iscup"],
                       "@priority": "3",
                       "matches": data.scores.category[i]["matches"],
                     }
         
                   )
               }
          }

      }
      else if(data.scores.category[i]["@id"] === "1198"){

        if(Array.isArray(data.scores.category[i]["matches"].match) === true){

          //newsarr = [];
         for(var j = 0 ; j < data.scores.category[i]["matches"].match.length; j++){

                //newsarr = []
                if(data.scores.category[i]["matches"].match[j]["@timer"] !== "" || data.scores.category[i]["matches"].match[j]["@status"] === "HT"){

                    newsarr.push(
                        {
                          "@leagueid": data.scores.category[i]["@gid"],
                          "@status": data.scores.category[i]["matches"].match[j]["@status"],
                          "@timer": data.scores.category[i]["matches"].match[j]["@timer"],
                          "@date": data.scores.category[i]["matches"].match[j]["@date"],
                          "@formatted_date": data.scores.category[i]["matches"].match[j]["@formatted_date"],
                          "@time": data.scores.category[i]["matches"].match[j]["@time"],
                          "@commentary_available": data.scores.category[i]["matches"].match[j]["@commentary_available"],
                          "@venue": data.scores.category[i]["matches"].match[j]["@venue"],
                          "@v": data.scores.category[i]["matches"].match[j]["@v"],
                          "@static_id": data.scores.category[i]["matches"].match[j]["@static_id"],
                          "@fix_id": data.scores.category[i]["matches"].match[j]["@fix_id"],
                          "@id": data.scores.category[i]["matches"].match[j]["@id"],
                          "localteam": data.scores.category[i]["matches"].match[j]["localteam"],
                          "visitorteam": data.scores.category[i]["matches"].match[j]["visitorteam"],
                          "events": data.scores.category[i]["matches"].match[j]["events"],
                          "ht": data.scores.category[i]["matches"].match[j]["ht"],
                        }
                      )
                      ndata.push(
                       {
                         "@name":data.scores.category[i]["@name"] ,
                         "@gid": data.scores.category[i]["@gid"] ,
                         "@id": data.scores.category[i]["@id"] ,
                         "@file_group": data.scores.category[i]["@file_group"],
                         "@iscup": data.scores.category[i]["@iscup"],
                         "@priority": "4",
                         "matches":{match :[]}
                       }
                     )
                  }
          }
    }else{

         if(data.scores.category[i]["matches"].match["@timer"] !== "" || data.scores.category[i]["matches"].match["@status"] === "HT"){

                 newsarr.push(
                   {
                     "@leagueid": data.scores.category[i]["@gid"],
                     "@status": data.scores.category[i]["matches"].match["@status"],
                     "@timer": data.scores.category[i]["matches"].match["@timer"],
                     "@date": data.scores.category[i]["matches"].match["@date"],
                     "@formatted_date": data.scores.category[i]["matches"].match["@formatted_date"],
                     "@time": data.scores.category[i]["matches"].match["@time"],
                     "@commentary_available": data.scores.category[i]["matches"].match["@commentary_available"],
                     "@venue": data.scores.category[i]["matches"].match["@venue"],
                     "@v": data.scores.category[i]["matches"].match["@v"],
                     "@static_id": data.scores.category[i]["matches"].match["@static_id"],
                     "@fix_id": data.scores.category[i]["matches"].match["@fix_id"],
                     "@id": data.scores.category[i]["matches"].match["@id"],
                     "localteam": data.scores.category[i]["matches"].match["localteam"],
                     "visitorteam": data.scores.category[i]["matches"].match["visitorteam"],
                     "events": data.scores.category[i]["matches"].match["events"],
                     "ht": data.scores.category[i]["matches"].match["ht"],
                   }
                 )

                 ndata.push(
                     {
                       "@name":data.scores.category[i]["@name"] ,
                       "@gid": data.scores.category[i]["@gid"] ,
                       "@id": data.scores.category[i]["@id"] ,
                       "@file_group": data.scores.category[i]["@file_group"],
                       "@iscup": data.scores.category[i]["@iscup"],
                       "@priority": "4",
                       "matches": data.scores.category[i]["matches"],
                     }
         
                   )
               }
          }

      }
      else if(data.scores.category[i]["@id"] === "1399"){

        if(Array.isArray(data.scores.category[i]["matches"].match) === true){

          //newsarr = [];
         for(var j = 0 ; j < data.scores.category[i]["matches"].match.length; j++){

                //newsarr = []
                if(data.scores.category[i]["matches"].match[j]["@timer"] !== "" || data.scores.category[i]["matches"].match[j]["@status"] === "HT"){

                    newsarr.push(
                        {
                          "@leagueid": data.scores.category[i]["@gid"],
                          "@status": data.scores.category[i]["matches"].match[j]["@status"],
                          "@timer": data.scores.category[i]["matches"].match[j]["@timer"],
                          "@date": data.scores.category[i]["matches"].match[j]["@date"],
                          "@formatted_date": data.scores.category[i]["matches"].match[j]["@formatted_date"],
                          "@time": data.scores.category[i]["matches"].match[j]["@time"],
                          "@commentary_available": data.scores.category[i]["matches"].match[j]["@commentary_available"],
                          "@venue": data.scores.category[i]["matches"].match[j]["@venue"],
                          "@v": data.scores.category[i]["matches"].match[j]["@v"],
                          "@static_id": data.scores.category[i]["matches"].match[j]["@static_id"],
                          "@fix_id": data.scores.category[i]["matches"].match[j]["@fix_id"],
                          "@id": data.scores.category[i]["matches"].match[j]["@id"],
                          "localteam": data.scores.category[i]["matches"].match[j]["localteam"],
                          "visitorteam": data.scores.category[i]["matches"].match[j]["visitorteam"],
                          "events": data.scores.category[i]["matches"].match[j]["events"],
                          "ht": data.scores.category[i]["matches"].match[j]["ht"],
                        }
                      )
                      ndata.push(
                       {
                         "@name":data.scores.category[i]["@name"] ,
                         "@gid": data.scores.category[i]["@gid"] ,
                         "@id": data.scores.category[i]["@id"] ,
                         "@file_group": data.scores.category[i]["@file_group"],
                         "@iscup": data.scores.category[i]["@iscup"],
                         "@priority": "5",
                         "matches":{match :[]}
                       }
                     )
                  }
          }
    }else{

         if(data.scores.category[i]["matches"].match["@timer"] !== "" || data.scores.category[i]["matches"].match["@status"] === "HT"){

                 newsarr.push(
                   {
                     "@leagueid": data.scores.category[i]["@gid"],
                     "@status": data.scores.category[i]["matches"].match["@status"],
                     "@timer": data.scores.category[i]["matches"].match["@timer"],
                     "@date": data.scores.category[i]["matches"].match["@date"],
                     "@formatted_date": data.scores.category[i]["matches"].match["@formatted_date"],
                     "@time": data.scores.category[i]["matches"].match["@time"],
                     "@commentary_available": data.scores.category[i]["matches"].match["@commentary_available"],
                     "@venue": data.scores.category[i]["matches"].match["@venue"],
                     "@v": data.scores.category[i]["matches"].match["@v"],
                     "@static_id": data.scores.category[i]["matches"].match["@static_id"],
                     "@fix_id": data.scores.category[i]["matches"].match["@fix_id"],
                     "@id": data.scores.category[i]["matches"].match["@id"],
                     "localteam": data.scores.category[i]["matches"].match["localteam"],
                     "visitorteam": data.scores.category[i]["matches"].match["visitorteam"],
                     "events": data.scores.category[i]["matches"].match["events"],
                     "ht": data.scores.category[i]["matches"].match["ht"],
                   }
                 )

                 ndata.push(
                     {
                       "@name":data.scores.category[i]["@name"] ,
                       "@gid": data.scores.category[i]["@gid"] ,
                       "@id": data.scores.category[i]["@id"] ,
                       "@file_group": data.scores.category[i]["@file_group"],
                       "@iscup": data.scores.category[i]["@iscup"],
                       "@priority": "5",
                       "matches": data.scores.category[i]["matches"],
                     }
         
                   )
               }
          }

      }
      else if(data.scores.category[i]["@id"] === "1269"){

        if(Array.isArray(data.scores.category[i]["matches"].match) === true){

          //newsarr = [];
         for(var j = 0 ; j < data.scores.category[i]["matches"].match.length; j++){

                //newsarr = []
                if(data.scores.category[i]["matches"].match[j]["@timer"] !== "" || data.scores.category[i]["matches"].match[j]["@status"] === "HT"){

                    newsarr.push(
                        {
                          "@leagueid": data.scores.category[i]["@gid"],
                          "@status": data.scores.category[i]["matches"].match[j]["@status"],
                          "@timer": data.scores.category[i]["matches"].match[j]["@timer"],
                          "@date": data.scores.category[i]["matches"].match[j]["@date"],
                          "@formatted_date": data.scores.category[i]["matches"].match[j]["@formatted_date"],
                          "@time": data.scores.category[i]["matches"].match[j]["@time"],
                          "@commentary_available": data.scores.category[i]["matches"].match[j]["@commentary_available"],
                          "@venue": data.scores.category[i]["matches"].match[j]["@venue"],
                          "@v": data.scores.category[i]["matches"].match[j]["@v"],
                          "@static_id": data.scores.category[i]["matches"].match[j]["@static_id"],
                          "@fix_id": data.scores.category[i]["matches"].match[j]["@fix_id"],
                          "@id": data.scores.category[i]["matches"].match[j]["@id"],
                          "localteam": data.scores.category[i]["matches"].match[j]["localteam"],
                          "visitorteam": data.scores.category[i]["matches"].match[j]["visitorteam"],
                          "events": data.scores.category[i]["matches"].match[j]["events"],
                          "ht": data.scores.category[i]["matches"].match[j]["ht"],
                        }
                      )
                      ndata.push(
                       {
                         "@name":data.scores.category[i]["@name"] ,
                         "@gid": data.scores.category[i]["@gid"] ,
                         "@id": data.scores.category[i]["@id"] ,
                         "@file_group": data.scores.category[i]["@file_group"],
                         "@iscup": data.scores.category[i]["@iscup"],
                         "@priority": "6",
                         "matches":{match :[]}
                       }
                     )
                  }
            }
    }else{

         if(data.scores.category[i]["matches"].match["@timer"] !== "" || data.scores.category[i]["matches"].match["@status"] === "HT"){

                 newsarr.push(
                   {
                     "@leagueid": data.scores.category[i]["@gid"],
                     "@status": data.scores.category[i]["matches"].match["@status"],
                     "@timer": data.scores.category[i]["matches"].match["@timer"],
                     "@date": data.scores.category[i]["matches"].match["@date"],
                     "@formatted_date": data.scores.category[i]["matches"].match["@formatted_date"],
                     "@time": data.scores.category[i]["matches"].match["@time"],
                     "@commentary_available": data.scores.category[i]["matches"].match["@commentary_available"],
                     "@venue": data.scores.category[i]["matches"].match["@venue"],
                     "@v": data.scores.category[i]["matches"].match["@v"],
                     "@static_id": data.scores.category[i]["matches"].match["@static_id"],
                     "@fix_id": data.scores.category[i]["matches"].match["@fix_id"],
                     "@id": data.scores.category[i]["matches"].match["@id"],
                     "localteam": data.scores.category[i]["matches"].match["localteam"],
                     "visitorteam": data.scores.category[i]["matches"].match["visitorteam"],
                     "events": data.scores.category[i]["matches"].match["events"],
                     "ht": data.scores.category[i]["matches"].match["ht"],
                   }
                 )

                 ndata.push(
                     {
                       "@name":data.scores.category[i]["@name"] ,
                       "@gid": data.scores.category[i]["@gid"] ,
                       "@id": data.scores.category[i]["@id"] ,
                       "@file_group": data.scores.category[i]["@file_group"],
                       "@iscup": data.scores.category[i]["@iscup"],
                       "@priority": "6",
                       "matches": data.scores.category[i]["matches"],
                     }
         
                   )
               }
          }

      }
      else if(data.scores.category[i]["@id"] === "1229"){

        if(Array.isArray(data.scores.category[i]["matches"].match) === true){

          //newsarr = [];
         for(var j = 0 ; j < data.scores.category[i]["matches"].match.length; j++){

                //newsarr = []
                if(data.scores.category[i]["matches"].match[j]["@timer"] !== "" || data.scores.category[i]["matches"].match[j]["@status"] === "HT"){

                    newsarr.push(
                        {
                          "@leagueid": data.scores.category[i]["@gid"],
                          "@status": data.scores.category[i]["matches"].match[j]["@status"],
                          "@timer": data.scores.category[i]["matches"].match[j]["@timer"],
                          "@date": data.scores.category[i]["matches"].match[j]["@date"],
                          "@formatted_date": data.scores.category[i]["matches"].match[j]["@formatted_date"],
                          "@time": data.scores.category[i]["matches"].match[j]["@time"],
                          "@commentary_available": data.scores.category[i]["matches"].match[j]["@commentary_available"],
                          "@venue": data.scores.category[i]["matches"].match[j]["@venue"],
                          "@v": data.scores.category[i]["matches"].match[j]["@v"],
                          "@static_id": data.scores.category[i]["matches"].match[j]["@static_id"],
                          "@fix_id": data.scores.category[i]["matches"].match[j]["@fix_id"],
                          "@id": data.scores.category[i]["matches"].match[j]["@id"],
                          "localteam": data.scores.category[i]["matches"].match[j]["localteam"],
                          "visitorteam": data.scores.category[i]["matches"].match[j]["visitorteam"],
                          "events": data.scores.category[i]["matches"].match[j]["events"],
                          "ht": data.scores.category[i]["matches"].match[j]["ht"],
                        }
                      )
                      ndata.push(
                       {
                         "@name":data.scores.category[i]["@name"] ,
                         "@gid": data.scores.category[i]["@gid"] ,
                         "@id": data.scores.category[i]["@id"] ,
                         "@file_group": data.scores.category[i]["@file_group"],
                         "@iscup": data.scores.category[i]["@iscup"],
                         "@priority": "7",
                         "matches":{match :[]}
                       }
                     )
                  }
          }
    }else{

         if(data.scores.category[i]["matches"].match["@timer"] !== "" || data.scores.category[i]["matches"].match["@status"] === "HT"){

                 newsarr.push(
                   {
                     "@leagueid": data.scores.category[i]["@gid"],
                     "@status": data.scores.category[i]["matches"].match["@status"],
                     "@timer": data.scores.category[i]["matches"].match["@timer"],
                     "@date": data.scores.category[i]["matches"].match["@date"],
                     "@formatted_date": data.scores.category[i]["matches"].match["@formatted_date"],
                     "@time": data.scores.category[i]["matches"].match["@time"],
                     "@commentary_available": data.scores.category[i]["matches"].match["@commentary_available"],
                     "@venue": data.scores.category[i]["matches"].match["@venue"],
                     "@v": data.scores.category[i]["matches"].match["@v"],
                     "@static_id": data.scores.category[i]["matches"].match["@static_id"],
                     "@fix_id": data.scores.category[i]["matches"].match["@fix_id"],
                     "@id": data.scores.category[i]["matches"].match["@id"],
                     "localteam": data.scores.category[i]["matches"].match["localteam"],
                     "visitorteam": data.scores.category[i]["matches"].match["visitorteam"],
                     "events": data.scores.category[i]["matches"].match["events"],
                     "ht": data.scores.category[i]["matches"].match["ht"],
                   }
                 )

                 ndata.push(
                     {
                       "@name":data.scores.category[i]["@name"] ,
                       "@gid": data.scores.category[i]["@gid"] ,
                       "@id": data.scores.category[i]["@id"] ,
                       "@file_group": data.scores.category[i]["@file_group"],
                       "@iscup": data.scores.category[i]["@iscup"],
                       "@priority": "7",
                       "matches": data.scores.category[i]["matches"],
                     }
         
                   )
               }
          }

      }
      else if(data.scores.category[i]["@id"] === "1322"){

        if(Array.isArray(data.scores.category[i]["matches"].match) === true){

          //newsarr = [];
         for(var j = 0 ; j < data.scores.category[i]["matches"].match.length; j++){

                //newsarr = []
                if(data.scores.category[i]["matches"].match[j]["@timer"] !== "" || data.scores.category[i]["matches"].match[j]["@status"] === "HT"){

                    newsarr.push(
                        {
                          "@leagueid": data.scores.category[i]["@gid"],
                          "@status": data.scores.category[i]["matches"].match[j]["@status"],
                          "@timer": data.scores.category[i]["matches"].match[j]["@timer"],
                          "@date": data.scores.category[i]["matches"].match[j]["@date"],
                          "@formatted_date": data.scores.category[i]["matches"].match[j]["@formatted_date"],
                          "@time": data.scores.category[i]["matches"].match[j]["@time"],
                          "@commentary_available": data.scores.category[i]["matches"].match[j]["@commentary_available"],
                          "@venue": data.scores.category[i]["matches"].match[j]["@venue"],
                          "@v": data.scores.category[i]["matches"].match[j]["@v"],
                          "@static_id": data.scores.category[i]["matches"].match[j]["@static_id"],
                          "@fix_id": data.scores.category[i]["matches"].match[j]["@fix_id"],
                          "@id": data.scores.category[i]["matches"].match[j]["@id"],
                          "localteam": data.scores.category[i]["matches"].match[j]["localteam"],
                          "visitorteam": data.scores.category[i]["matches"].match[j]["visitorteam"],
                          "events": data.scores.category[i]["matches"].match[j]["events"],
                          "ht": data.scores.category[i]["matches"].match[j]["ht"],
                        }
                      )
                      ndata.push(
                       {
                         "@name":data.scores.category[i]["@name"] ,
                         "@gid": data.scores.category[i]["@gid"] ,
                         "@id": data.scores.category[i]["@id"] ,
                         "@file_group": data.scores.category[i]["@file_group"],
                         "@iscup": data.scores.category[i]["@iscup"],
                         "@priority": "8",
                         "matches":{match :[]}
                       }
                     )
                  }
          }
    }else{

         if(data.scores.category[i]["matches"].match["@timer"] !== "" || data.scores.category[i]["matches"].match["@status"] === "HT"){

                 newsarr.push(
                   {
                     "@leagueid": data.scores.category[i]["@gid"],
                     "@status": data.scores.category[i]["matches"].match["@status"],
                     "@timer": data.scores.category[i]["matches"].match["@timer"],
                     "@date": data.scores.category[i]["matches"].match["@date"],
                     "@formatted_date": data.scores.category[i]["matches"].match["@formatted_date"],
                     "@time": data.scores.category[i]["matches"].match["@time"],
                     "@commentary_available": data.scores.category[i]["matches"].match["@commentary_available"],
                     "@venue": data.scores.category[i]["matches"].match["@venue"],
                     "@v": data.scores.category[i]["matches"].match["@v"],
                     "@static_id": data.scores.category[i]["matches"].match["@static_id"],
                     "@fix_id": data.scores.category[i]["matches"].match["@fix_id"],
                     "@id": data.scores.category[i]["matches"].match["@id"],
                     "localteam": data.scores.category[i]["matches"].match["localteam"],
                     "visitorteam": data.scores.category[i]["matches"].match["visitorteam"],
                     "events": data.scores.category[i]["matches"].match["events"],
                     "ht": data.scores.category[i]["matches"].match["ht"],
                   }
                 )

                 ndata.push(
                     {
                       "@name":data.scores.category[i]["@name"] ,
                       "@gid": data.scores.category[i]["@gid"] ,
                       "@id": data.scores.category[i]["@id"] ,
                       "@file_group": data.scores.category[i]["@file_group"],
                       "@iscup": data.scores.category[i]["@iscup"],
                       "@priority": "8",
                       "matches": data.scores.category[i]["matches"],
                     }
         
                   )
               }
          }

      }
      else if(data.scores.category[i]["@id"] === "1221"){

        if(Array.isArray(data.scores.category[i]["matches"].match) === true){

          //newsarr = [];
         for(var j = 0 ; j < data.scores.category[i]["matches"].match.length; j++){

                //newsarr = []
                if(data.scores.category[i]["matches"].match[j]["@timer"] !== "" || data.scores.category[i]["matches"].match[j]["@status"] === "HT"){

                    newsarr.push(
                        {
                          "@leagueid": data.scores.category[i]["@gid"],
                          "@status": data.scores.category[i]["matches"].match[j]["@status"],
                          "@timer": data.scores.category[i]["matches"].match[j]["@timer"],
                          "@date": data.scores.category[i]["matches"].match[j]["@date"],
                          "@formatted_date": data.scores.category[i]["matches"].match[j]["@formatted_date"],
                          "@time": data.scores.category[i]["matches"].match[j]["@time"],
                          "@commentary_available": data.scores.category[i]["matches"].match[j]["@commentary_available"],
                          "@venue": data.scores.category[i]["matches"].match[j]["@venue"],
                          "@v": data.scores.category[i]["matches"].match[j]["@v"],
                          "@static_id": data.scores.category[i]["matches"].match[j]["@static_id"],
                          "@fix_id": data.scores.category[i]["matches"].match[j]["@fix_id"],
                          "@id": data.scores.category[i]["matches"].match[j]["@id"],
                          "localteam": data.scores.category[i]["matches"].match[j]["localteam"],
                          "visitorteam": data.scores.category[i]["matches"].match[j]["visitorteam"],
                          "events": data.scores.category[i]["matches"].match[j]["events"],
                          "ht": data.scores.category[i]["matches"].match[j]["ht"],
                        }
                      )
                      ndata.push(
                       {
                         "@name":data.scores.category[i]["@name"] ,
                         "@gid": data.scores.category[i]["@gid"] ,
                         "@id": data.scores.category[i]["@id"] ,
                         "@file_group": data.scores.category[i]["@file_group"],
                         "@iscup": data.scores.category[i]["@iscup"],
                         "@priority": "9",
                         "matches":{match :[]}
                       }
                     )
                  }
          }
    }else{

         if(data.scores.category[i]["matches"].match["@timer"] !== "" || data.scores.category[i]["matches"].match["@status"] === "HT"){

                 newsarr.push(
                   {
                     "@leagueid": data.scores.category[i]["@gid"],
                     "@status": data.scores.category[i]["matches"].match["@status"],
                     "@timer": data.scores.category[i]["matches"].match["@timer"],
                     "@date": data.scores.category[i]["matches"].match["@date"],
                     "@formatted_date": data.scores.category[i]["matches"].match["@formatted_date"],
                     "@time": data.scores.category[i]["matches"].match["@time"],
                     "@commentary_available": data.scores.category[i]["matches"].match["@commentary_available"],
                     "@venue": data.scores.category[i]["matches"].match["@venue"],
                     "@v": data.scores.category[i]["matches"].match["@v"],
                     "@static_id": data.scores.category[i]["matches"].match["@static_id"],
                     "@fix_id": data.scores.category[i]["matches"].match["@fix_id"],
                     "@id": data.scores.category[i]["matches"].match["@id"],
                     "localteam": data.scores.category[i]["matches"].match["localteam"],
                     "visitorteam": data.scores.category[i]["matches"].match["visitorteam"],
                     "events": data.scores.category[i]["matches"].match["events"],
                     "ht": data.scores.category[i]["matches"].match["ht"],
                   }
                 )

                 ndata.push(
                     {
                       "@name":data.scores.category[i]["@name"] ,
                       "@gid": data.scores.category[i]["@gid"] ,
                       "@id": data.scores.category[i]["@id"] ,
                       "@file_group": data.scores.category[i]["@file_group"],
                       "@iscup": data.scores.category[i]["@iscup"],
                       "@priority": "9",
                       "matches": data.scores.category[i]["matches"],
                     }
         
                   )
               }
          }

      }
      else if(data.scores.category[i]["@id"] === "1271"){

        if(Array.isArray(data.scores.category[i]["matches"].match) === true){

          //newsarr = [];
         for(var j = 0 ; j < data.scores.category[i]["matches"].match.length; j++){

                //newsarr = []
                if(data.scores.category[i]["matches"].match[j]["@timer"] !== "" || data.scores.category[i]["matches"].match[j]["@status"] === "HT"){

                    newsarr.push(
                        {
                          "@leagueid": data.scores.category[i]["@gid"],
                          "@status": data.scores.category[i]["matches"].match[j]["@status"],
                          "@timer": data.scores.category[i]["matches"].match[j]["@timer"],
                          "@date": data.scores.category[i]["matches"].match[j]["@date"],
                          "@formatted_date": data.scores.category[i]["matches"].match[j]["@formatted_date"],
                          "@time": data.scores.category[i]["matches"].match[j]["@time"],
                          "@commentary_available": data.scores.category[i]["matches"].match[j]["@commentary_available"],
                          "@venue": data.scores.category[i]["matches"].match[j]["@venue"],
                          "@v": data.scores.category[i]["matches"].match[j]["@v"],
                          "@static_id": data.scores.category[i]["matches"].match[j]["@static_id"],
                          "@fix_id": data.scores.category[i]["matches"].match[j]["@fix_id"],
                          "@id": data.scores.category[i]["matches"].match[j]["@id"],
                          "localteam": data.scores.category[i]["matches"].match[j]["localteam"],
                          "visitorteam": data.scores.category[i]["matches"].match[j]["visitorteam"],
                          "events": data.scores.category[i]["matches"].match[j]["events"],
                          "ht": data.scores.category[i]["matches"].match[j]["ht"],
                        }
                      )
                      ndata.push(
                       {
                         "@name":data.scores.category[i]["@name"] ,
                         "@gid": data.scores.category[i]["@gid"] ,
                         "@id": data.scores.category[i]["@id"] ,
                         "@file_group": data.scores.category[i]["@file_group"],
                         "@iscup": data.scores.category[i]["@iscup"],
                         "@priority": "10",
                         "matches":{match :[]}
                       }
                     )
                  }
          }
    }else{

         if(data.scores.category[i]["matches"].match["@timer"] !== "" || data.scores.category[i]["matches"].match["@status"] === "HT"){

                 newsarr.push(
                   {
                     "@leagueid": data.scores.category[i]["@gid"],
                     "@status": data.scores.category[i]["matches"].match["@status"],
                     "@timer": data.scores.category[i]["matches"].match["@timer"],
                     "@date": data.scores.category[i]["matches"].match["@date"],
                     "@formatted_date": data.scores.category[i]["matches"].match["@formatted_date"],
                     "@time": data.scores.category[i]["matches"].match["@time"],
                     "@commentary_available": data.scores.category[i]["matches"].match["@commentary_available"],
                     "@venue": data.scores.category[i]["matches"].match["@venue"],
                     "@v": data.scores.category[i]["matches"].match["@v"],
                     "@static_id": data.scores.category[i]["matches"].match["@static_id"],
                     "@fix_id": data.scores.category[i]["matches"].match["@fix_id"],
                     "@id": data.scores.category[i]["matches"].match["@id"],
                     "localteam": data.scores.category[i]["matches"].match["localteam"],
                     "visitorteam": data.scores.category[i]["matches"].match["visitorteam"],
                     "events": data.scores.category[i]["matches"].match["events"],
                     "ht": data.scores.category[i]["matches"].match["ht"],
                   }
                 )

                 ndata.push(
                     {
                       "@name":data.scores.category[i]["@name"] ,
                       "@gid": data.scores.category[i]["@gid"] ,
                       "@id": data.scores.category[i]["@id"] ,
                       "@file_group": data.scores.category[i]["@file_group"],
                       "@iscup": data.scores.category[i]["@iscup"],
                       "@priority": "10",
                       "matches": data.scores.category[i]["matches"],
                     }
         
                   )
               }
          }
        

      }else{

          if(Array.isArray(data.scores.category[i]["matches"].match) === true){

               //newsarr = [];
              for(var j = 0 ; j < data.scores.category[i]["matches"].match.length; j++){

                     //newsarr = []
                     if(data.scores.category[i]["matches"].match[j]["@timer"] !== "" || data.scores.category[i]["matches"].match[j]["@status"] === "HT"){

                         newsarr.push(
                             {
                               "@leagueid": data.scores.category[i]["@gid"],
                               "@status": data.scores.category[i]["matches"].match[j]["@status"],
                               "@timer": data.scores.category[i]["matches"].match[j]["@timer"],
                               "@date": data.scores.category[i]["matches"].match[j]["@date"],
                               "@formatted_date": data.scores.category[i]["matches"].match[j]["@formatted_date"],
                               "@time": data.scores.category[i]["matches"].match[j]["@time"],
                               "@commentary_available": data.scores.category[i]["matches"].match[j]["@commentary_available"],
                               "@venue": data.scores.category[i]["matches"].match[j]["@venue"],
                               "@v": data.scores.category[i]["matches"].match[j]["@v"],
                               "@static_id": data.scores.category[i]["matches"].match[j]["@static_id"],
                               "@fix_id": data.scores.category[i]["matches"].match[j]["@fix_id"],
                               "@id": data.scores.category[i]["matches"].match[j]["@id"],
                               "localteam": data.scores.category[i]["matches"].match[j]["localteam"],
                               "visitorteam": data.scores.category[i]["matches"].match[j]["visitorteam"],
                               "events": data.scores.category[i]["matches"].match[j]["events"],
                               "ht": data.scores.category[i]["matches"].match[j]["ht"],
                             }
                           )
                           ndata.push(
                            {
                              "@name":data.scores.category[i]["@name"] ,
                              "@gid": data.scores.category[i]["@gid"] ,
                              "@id": data.scores.category[i]["@id"] ,
                              "@file_group": data.scores.category[i]["@file_group"],
                              "@iscup": data.scores.category[i]["@iscup"],
                              "@priority": "11",
                              "matches":{match :[]}
                            }
                          )
                       }
               }
         }else{

              if(data.scores.category[i]["matches"].match["@timer"] !== "" || data.scores.category[i]["matches"].match["@status"] === "HT"){

                      newsarr.push(
                        {
                          "@leagueid": data.scores.category[i]["@gid"],
                          "@status": data.scores.category[i]["matches"].match["@status"],
                          "@timer": data.scores.category[i]["matches"].match["@timer"],
                          "@date": data.scores.category[i]["matches"].match["@date"],
                          "@formatted_date": data.scores.category[i]["matches"].match["@formatted_date"],
                          "@time": data.scores.category[i]["matches"].match["@time"],
                          "@commentary_available": data.scores.category[i]["matches"].match["@commentary_available"],
                          "@venue": data.scores.category[i]["matches"].match["@venue"],
                          "@v": data.scores.category[i]["matches"].match["@v"],
                          "@static_id": data.scores.category[i]["matches"].match["@static_id"],
                          "@fix_id": data.scores.category[i]["matches"].match["@fix_id"],
                          "@id": data.scores.category[i]["matches"].match["@id"],
                          "localteam": data.scores.category[i]["matches"].match["localteam"],
                          "visitorteam": data.scores.category[i]["matches"].match["visitorteam"],
                          "events": data.scores.category[i]["matches"].match["events"],
                          "ht": data.scores.category[i]["matches"].match["ht"],
                        }
                      )

                      ndata.push(
                          {
                            "@name":data.scores.category[i]["@name"] ,
                            "@gid": data.scores.category[i]["@gid"] ,
                            "@id": data.scores.category[i]["@id"] ,
                            "@file_group": data.scores.category[i]["@file_group"],
                            "@iscup": data.scores.category[i]["@iscup"],
                            "@priority": "11",
                            "matches": data.scores.category[i]["matches"],
                          }
              
                        )
                    }
               }

          }
      

    }

    ndata.sort(function(a, b) {
    
        return a["@priority"] - b["@priority"];
    });

    var flags = [], output = [], l = ndata.length, i;

    for( i=0; i<l; i++) {

        if(flags[ndata[i]["@gid"]]) continue;
        flags[ndata[i]["@gid"]] = true;
        output.push(ndata[i]);
    }
    

   var newArray = newsarr.reduce(function(acc, curr) {
      //finding Index in the array where the NamaCategory matched
      var findIfNameExist = acc.findIndex(function(item) {
        return item["@leagueid"] === curr["@leagueid"];
      })
      // if in the new array no such object exist where
      // namecategory matches then create a new object
      if (findIfNameExist === -1) {
        let obj = {
          '@leagueid': curr["@leagueid"],
          "match": [curr]
        }
        acc.push(obj)
      } else {
        // if name category matches , then push the value 
        acc[findIfNameExist].match.push(curr)
      }
      return acc;

    }, []);


    for (let [key, value] of Object.entries(output)) {
        

      for(var i = 0; i < newArray.length; i++){
       //console.log(value["@gid"] +"==="+ newArray[i]["@leagueid"])
       if(value["@gid"] === newArray[i]["@leagueid"]){

         //console.log(newArray[key])
        //value.matches.push(newArray[key])

        //objjj = newArray[key]["match"];
        value.matches.match = newArray[i]["match"];
       // console.log(newArray[key]["match"])
    

   }

      }
      
    
   }
   
 let scores = {
          "@sport":data.scores["@sport"],
          "@updated":data.scores["@updated"],
          "category":output
      
  }

  objj = {home:scores};

  //console.log(objj)
  //return {home: scores}
  setDefaults(objj);

  setDatas(true);
  setSectiontwo(true);

}

/*useEffect(() => {

     let datee;
     let newdate;
     let timee;
     let formattime;
     let renewsdate;
     let sp_date;
     let lastdate;
     //console.log(defaults.home.category)

    setDatas(false)

  if(defaults.home.category.length > 0){
        for(var i = 0; i < defaults.home.category.length; i++)
        {

          if(Array.isArray(defaults.home.category[i].matches.match) === true){
                    

                for(var j = 0; j < defaults.home.category[i].matches.match.length; j++)
                {

                  
                  datee = defaults.home.category[i].matches.match[j]["@formatted_date"].split(".");
                  newdate = datee[2]+"/"+datee[1]+"/"+datee[0];
                  timee = defaults.home.category[i].matches.match[j]["@time"];
                  formattime = newdate+" "+timee +" +0000";
                  renewsdate = convertTZ(formattime, "Asia/Bangkok");
                  //console.log(renewsdate)
                  sp_date = renewsdate.toString().split(" ");
                  lastdate = sp_date[4].split(":");
                  //console.log(lastdate[0]+":"+lastdate[1])
                  //console.log(defaults.home.category[i]["@name"] +"   "+lastdate[0]+":"+lastdate[1])
                  if(defaults.home.category[i].matches.match[j]["@timer"] === ""){

                   
                     if(defaults.home.category[i].matches.match[j]["@status"] === "HT" 
                     || defaults.home.category[i].matches.match[j]["@status"] === "FT" 
                     || defaults.home.category[i].matches.match[j]["@status"] === "Postp." 
                     || defaults.home.category[i].matches.match[j]["@status"] === "Cancl."
                     || defaults.home.category[i].matches.match[j]["@status"] === "Pen."){
                     }else{
                          defaults.home.category[i].matches.match[j]["@time"] = lastdate[0]+":"+lastdate[1];
                          defaults.home.category[i].matches.match[j]["@status"] = lastdate[0]+":"+lastdate[1];
                     }

                    


                  }


                }

            }
            else{

              datee = defaults.home.category[i].matches.match["@formatted_date"].split(".");
              newdate = datee[2]+"/"+datee[1]+"/"+datee[0];
              timee = defaults.home.category[i].matches.match["@time"];
              formattime = newdate+" "+timee +" +0000";
              renewsdate = convertTZ(formattime, "Asia/Bangkok");
              //console.log(renewsdate)
              sp_date = renewsdate.toString().split(" ");
              lastdate = sp_date[4].split(":");
              //console.log(lastdate[0]+":"+lastdate[1])
            
              if(defaults.home.category[i].matches.match["@timer"] === ""){

                if(defaults.home.category[i].matches.match["@status"] === "HT" 
                || defaults.home.category[i].matches.match["@status"] === "FT" 
                || defaults.home.category[i].matches.match["@status"] === "Postp." 
                || defaults.home.category[i].matches.match["@status"] === "Cancl."
                || defaults.home.category[i].matches.match["@status"] === "Pen."){
                }else{
                     defaults.home.category[i].matches.match["@time"] = lastdate[0]+":"+lastdate[1];
                     defaults.home.category[i].matches.match["@status"] = lastdate[0]+":"+lastdate[1];
                }
              
               }


            }
          
        }


      setDatas(true)

  }


}, [setDatas])*/

/*useEffect(() => {

  const fetchItems = async () => {

    const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/teams_th?json=1`)
    const data = await res.json()

    
     for(var i=0 ;i < data.teams.team.length; i++){

      teamth[data.teams.team[i]["@id"]] = data.teams.team[i]["@name"];

    }
    setLang(teamth)

  }

  setTimeout(function(){

  
    fetchItems();
    setSectiontwo(true)

    
  
  }, 100);

},[setLang])*/


return (
      
    <div className="container">
      <HeaderSeo
        siteName=""
        title="7score ผลบอล ผลบอลสด ตารางแข่งขัน ไฮไลท์ฟุตบอลทั่วโลก"
        desc="ผลบอล live score ผลบอลสด ผลบอลเมื่อคืน ไฮไลท์การแข่งขัน อัพเดทเรียลไทม์ พร้อมข้อมูลทีมแต่ละลีกทั่วโลก"
        imgSrc=""
        metaUrl=""
        keyWords="ผลบอล, live score, ผลบอลสด, ไฮไลท์ฟุตบอล"
        author=""
      />
      
      <h1>ผลบอล</h1> 7score.live เว็บไซต์รายงานสดผลฟุตบอลทั้งไทยและต่างประเทศทุกลีกทั่วโลก อัพเดทกันวินาทีต่อวินาทีเพื่อให้ท่านได้รับข้อมูลที่รวดเร็ว อีกทั้งยังนำเสนอข้อมูลของแต่ละทีม สถิติการพบกัน และข้อมูลสำคัญต่างๆ เพื่อเป็นแนวทางในการวิเคราะห์ของท่าน
      <div className="d-none d-md-block mainf-tab">
        {/*<img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
        <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />*/}
        <a href="#" onClick={handleClicklive} >
            Live
        </a>
        <a href="/live" style={{"marginLeft":"20px"}}>
            All
        </a>
        
        <div ref={myRef}></div> 
       
        {
          loadlive !== false ? 

          live.home.category.map((res,value) => (
  
            <div key={value.toString()}> 
                    <TableLive  
                    className="highlight bg-secondary text-white"
                    title={res['@name']}
                    data={res.matches.match}
                    highlight={true} 
                    exam = {res['@id']}
                    after = {handdleClickAfterload}
                    th = {lang}
                    />
                    
              </div>
              
              )) 
              : <center><h1>loading.........</h1></center>
        }
        {
          
          sdata !== false ? 
           
            defaults.home.category.map((res,value) => (
  
              <div key={value.toString()}> 
                      <TableLive  
                      className="highlight bg-secondary text-white"
                      title={res['@name']}
                      data={res.matches.match}
                      highlight={true} 
                      exam = {res['@id']}
                      after = {handdleClickAfterload}
                      th = {lang}
                      />
                      
                </div>
                
                )) 
                : <center><h1>loading.........</h1></center>
               


        }
       
        
      </div>

       {
             <div className="d-block d-md-none mainf-tab">
                <div className="banner px-3">

                    {/*<img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
                    <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />*/}

                </div>
                
                 <div style={{margin:'10px'}}>
                 <a href="#" onClick={handleClicklive}>
                    Live
                </a>
                <a href="/live" style={{"marginLeft":"20px"}}>
                  All
                </a>
               
                </div>

                {
                  loadlive !== false ? 

                    live.home.category.map((res,value) => (
  
                       <div key={value.toString()}>
                            <TableBattleMobile 
                              title={res['@name']}
                              data={res.matches.match}
                              highlight={false}
                              exam = {res['@id']}
                              after = {handdleClickAfterload}
                              th = {lang}
                            />
                           
                        </div>
                      
                      )) 
                      : null

                }
                {

               
                sdata !== false ? 
                   
                    defaults.home.category.map((res,value) => (

                       <div key={value.toString()}>
                            <TableBattleMobile 
                              title={res['@name']}
                              data={res.matches.match}
                              highlight={false}
                              exam = {res['@id']}
                              after = {handdleClickAfterload}
                              th = {lang}
                            />
                           
                        </div>
                ))
              : <center><h1>loading.........</h1></center>
             
              }
           
          </div>
        

       }
     <Footer />
   </div>
   
  )

}
Live.propTypes = {

};
Live.getInitialProps = async (ctx) => {

  const res = await fetch('https://zio666.com/service_live/load_livescore.php')
  const data = await res.json()
  let ndata = [];

  /*for(var i = 0 ; i < data.scores.category.length; i++)
  {
    
    if(data.scores.category[i]["@id"] === "1204"){

      ndata.push(
        {
          "@name":data.scores.category[i]["@name"] ,
          "@gid": data.scores.category[i]["@gid"] ,
          "@id": data.scores.category[i]["@id"] ,
          "@file_group": data.scores.category[i]["@file_group"],
          "@iscup": data.scores.category[i]["@iscup"],
          "@priority": "1",
          "matches": data.scores.category[i]["matches"],
        }

      )

    }
    else if(data.scores.category[i]["@id"] === "1005"){

      ndata.push(
        {
          "@name":data.scores.category[i]["@name"] ,
          "@gid": data.scores.category[i]["@gid"] ,
          "@id": data.scores.category[i]["@id"] ,
          "@file_group": data.scores.category[i]["@file_group"],
          "@iscup": data.scores.category[i]["@iscup"],
          "@priority": "2",
          "matches": data.scores.category[i]["matches"],
        }

      )

    }
    else if(data.scores.category[i]["@id"] === "1007"){

      ndata.push(
        {
          "@name":data.scores.category[i]["@name"] ,
          "@gid": data.scores.category[i]["@gid"] ,
          "@id": data.scores.category[i]["@id"] ,
          "@file_group": data.scores.category[i]["@file_group"],
          "@iscup": data.scores.category[i]["@iscup"],
          "@priority": "3",
          "matches": data.scores.category[i]["matches"],
        }

      )

    }
    else if(data.scores.category[i]["@id"] === "1198"){

      ndata.push(
        {
          "@name":data.scores.category[i]["@name"] ,
          "@gid": data.scores.category[i]["@gid"] ,
          "@id": data.scores.category[i]["@id"] ,
          "@file_group": data.scores.category[i]["@file_group"],
          "@iscup": data.scores.category[i]["@iscup"],
          "@priority": "4",
          "matches": data.scores.category[i]["matches"],
        }

      )

    }
    else if(data.scores.category[i]["@id"] === "1399"){

      ndata.push(
        {
          "@name":data.scores.category[i]["@name"] ,
          "@gid": data.scores.category[i]["@gid"] ,
          "@id": data.scores.category[i]["@id"] ,
          "@file_group": data.scores.category[i]["@file_group"],
          "@iscup": data.scores.category[i]["@iscup"],
          "@priority": "5",
          "matches": data.scores.category[i]["matches"],
        }

      )

    }
    else if(data.scores.category[i]["@id"] === "1269"){

      ndata.push(
        {
          "@name":data.scores.category[i]["@name"] ,
          "@gid": data.scores.category[i]["@gid"] ,
          "@id": data.scores.category[i]["@id"] ,
          "@file_group": data.scores.category[i]["@file_group"],
          "@iscup": data.scores.category[i]["@iscup"],
          "@priority": "6",
          "matches": data.scores.category[i]["matches"],
        }

      )

    }
    else if(data.scores.category[i]["@id"] === "1229"){

      ndata.push(
        {
          "@name":data.scores.category[i]["@name"] ,
          "@gid": data.scores.category[i]["@gid"] ,
          "@id": data.scores.category[i]["@id"] ,
          "@file_group": data.scores.category[i]["@file_group"],
          "@iscup": data.scores.category[i]["@iscup"],
          "@priority": "7",
          "matches": data.scores.category[i]["matches"],
        }

      )

    }
    else if(data.scores.category[i]["@id"] === "1322"){

      ndata.push(
        {
          "@name":data.scores.category[i]["@name"] ,
          "@gid": data.scores.category[i]["@gid"] ,
          "@id": data.scores.category[i]["@id"] ,
          "@file_group": data.scores.category[i]["@file_group"],
          "@iscup": data.scores.category[i]["@iscup"],
          "@priority": "8",
          "matches": data.scores.category[i]["matches"],
        }

      )

    }
    else if(data.scores.category[i]["@id"] === "1221"){

      ndata.push(
        {
          "@name":data.scores.category[i]["@name"] ,
          "@gid": data.scores.category[i]["@gid"] ,
          "@id": data.scores.category[i]["@id"] ,
          "@file_group": data.scores.category[i]["@file_group"],
          "@iscup": data.scores.category[i]["@iscup"],
          "@priority": "9",
          "matches": data.scores.category[i]["matches"],
        }

      )

    }
    else if(data.scores.category[i]["@id"] === "1271"){

      ndata.push(
        {
          "@name":data.scores.category[i]["@name"] ,
          "@gid": data.scores.category[i]["@gid"] ,
          "@id": data.scores.category[i]["@id"] ,
          "@file_group": data.scores.category[i]["@file_group"],
          "@iscup": data.scores.category[i]["@iscup"],
          "@priority": "10",
          "matches": data.scores.category[i]["matches"],
        }

      )

    }else{

      ndata.push(
        {
          "@name":data.scores.category[i]["@name"] ,
          "@gid": data.scores.category[i]["@gid"] ,
          "@id": data.scores.category[i]["@id"] ,
          "@file_group": data.scores.category[i]["@file_group"],
          "@iscup": data.scores.category[i]["@iscup"],
          "@priority": "11",
          "matches": data.scores.category[i]["matches"],
        }

      )


    }
    

  }

  ndata.sort(function(a, b) {
  
      return a["@priority"] - b["@priority"];
  });*/
  

  /*let scores = {
        "@sport":data.scores["@sport"],
        "@updated":data.scores["@updated"],
        "category":ndata
     
 }*/

  let scores = {
        "@sport":data.scores["@sport"],
        "@updated":data.scores["@updated"],
        "category":data.scores.category
     
 }

  return {home: scores}
}


export default Live;


