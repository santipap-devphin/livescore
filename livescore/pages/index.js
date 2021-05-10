import React, { useState, useEffect ,useRef } from 'react'
import axios from 'axios';
import dynamic from 'next/dynamic';
const HeaderSeo = dynamic(() => import('../shared/commons/HeaderSeo'));
const Layout = dynamic(() => import('../shared/container/Layout'));
const NavDate = dynamic(() => import('../shared/commons/NavDate'));
const TableBattle = dynamic(() => import('../shared/commons/TableBattle'));
const TableBattleMobile = dynamic(()=> import('../shared/commons/TableBattleMobile'));
const BannerInner = dynamic(()=> import('../shared/components/Banner/Inner'));

const Home = () => {

  //console.log(props)
  const myRef = useRef(null)
  const [sdata , setDatas] =  useState(false);

  const [defaults , setDefaults] = useState();
  const [loaddefaults , setloadDefaults] = useState(false);
  const [clickLoad, setClickLoad] = useState(false);

  const [priority , setPriority] = useState([]);
  const [live , setLive] = useState([]);
  const [sectiontwo , setSectiontwo] = useState(false);
  const [lang , setLang] = useState([]);
  const fuct = useState();
  var newsarr = [];
  var _blank = [];
  let teamth = [];
  const sw = 0;
  function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
  }

  

  /*function addDefaultSrc(ev){
    ev.target.src = '/assets/default-team-logo.png';
    //ev.target.src = '';
  }*/
  
  
  const handdleClickAfterload = (e) => {

    e.preventDefault();

    setDatas(false);
    setSectiontwo(false);

    myRef.current.scrollIntoView()

    //window.scrollTo(3000, 20)

  }
  

  //console.log(convertTZ("2021/03/29 16:00 +0000", "Asia/Bangkok"))
 
  const handleClicklive = async (e) => {

    e.preventDefault();

    setDatas(false);
    setSectiontwo(false);
    //console.log(e.target.value);
    const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/home?json=1`)
    
    const data = await res.json()

    let ndata = [];
    let objj = {};
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


      //console.log(output)
      //console.log(newArray)

       

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


function datee(nextday){

    const today = new Date()
    const tomorrow = new Date(today)

    tomorrow.setDate(tomorrow.getDate()+nextday)

    const neww = String(tomorrow);

    const newsdate = neww.split(" ");

    const newsformat = newsdate[1] + " " +newsdate[2];

    
    return newsformat;

  }

  useEffect(() => {

    const fetchteam = async () => {

      const res = await fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/home?json=1')
      const data = await res.json()
      let ndata = [];
      let string_re;
      let newdate;
      let obkk  = {};
      let matchs = [];
 

  //convertTZ("2021/03/29 16:00 +0000", "Asia/Bangkok")

          for(var i = 0 ; i < data.scores.category.length; i++)
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
                  });
          

                  let scores = {
                        "@sport":data.scores["@sport"],
                        "@updated":data.scores["@updated"],
                        "category":ndata
                    
                }
                var object  = {home:scores}
                setDefaults(object)
          
            }
           
             fetchteam();
             setloadDefaults(true)
            

          },[setDefaults])



  useEffect(() => {

     let datee;
     let newdate;
     let timee;
     let formattime;
     let renewsdate;
     let sp_date;
     let lastdate;
    //setDatas(true);

      if(sdata !== false) {
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
     
                         
     
     
                       }else{
                        defaults.home.category[i].matches.match[j]["@time"] = lastdate[0]+":"+lastdate[1];
                       }
                       // console.log(defaults.home.category[i].matches.match[j]["@timer"])


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
                    
                     }else{
                      defaults.home.category[i].matches.match["@time"] = lastdate[0]+":"+lastdate[1];
                     }


                  }

              }


             // console.log(defaults)
               setDatas(true);

               //convertTZ("2021/03/29 16:00 +0000", "Asia/Bangkok")

               //console.log(convertTZ("16:00 +0000", "Asia/Bangkok"))
               //console.log("testst");

      }
    }
   
  },[setDatas]);


  useEffect(() => {

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

      
    
    }, 50);

  },[setLang])
  

  //console.log(priority)


  let navDates = [
    { id: "1", date: datee(-3), route: "/soccer/programs/d-3", today: false },
    { id: "2", date: datee(-2), route: "/soccer/programs/d-2", today: false },
    { id: "3", date: datee(-1), route: "/soccer/programs/d-1", today: false },
    { id: "4", date: datee(0), route: "/", today: true },
    { id: "5", date: datee(1), route: "/soccer/programs/d1", today: false },
    { id: "6", date: datee(2), route: "/soccer/programs/d2", today: false },
    { id: "7", date: datee(3), route: "/soccer/programs/d3", today: false }
  ]

return (
      
    <Layout className="px-0 px-md-3" standings={""/*this.props.list*/}>
      <style jsx>{`
               .button {
                background-color: #4CAF50; /* Green */
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
                -webkit-transition-duration: 0.4s; /* Safari */
                transition-duration: 0.4s;
              }
              .button1 {
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
              }
      `}</style>
      <HeaderSeo
        siteName=""
        title="7score ผลบอล ผลบอลสด ตารางแข่งขัน ไฮไลท์ฟุตบอลทั่วโลก"
        desc="ผลบอล live score ผลบอลสด ผลบอลเมื่อคืน ไฮไลท์การแข่งขัน อัพเดทเรียลไทม์ พร้อมข้อมูลทีมแต่ละลีกทั่วโลก"
        imgSrc=""
        metaUrl=""
        keyWords="ผลบอล, live score, ผลบอลสด, ไฮไลท์ฟุตบอล"
        author=""
      />
      <div className="d-none d-md-block mainf-tab">
        <div className="banner f">
          <a href="https://thai.sg8bet.com/" target="_blank" rel="nofollow"><img className="" src="/banner/sg8bet22.gif" alt="ผลบอล" /></a>
          <a href="https://www.sbobet-888.com/" target="_blank" rel="nofollow"><img className="" src="/banner/Sbobet-888-728x180 2.gif" alt="live score" /></a>
          <a href="https://top789.com/" target="_blank" rel="nofollow"><img className="" src="/banner/Top789-728x180.gif" alt="ผลบอลสด" /></a>
          <a href="https://msbobet-online.com/" target="_blank" rel="nofollow"><img className="" src="/banner/MSbobet-online 728x180.gif" alt="ไฮไลท์ฟุตบอล" /></a>
          <a href="https://sbobet891.com/" target="_blank" rel="nofollow"><img className="" src="/banner/Sbobet891 728x180-2.gif" alt="ตารางบอล" /></a>
          <a href="https://ufabet8989.com/" target="_blank" rel="nofollow"><img className="" src="/banner/UFABET8989-728x180.gif" alt="คู่บอลเตะ" /></a>
        </div>
        <h1>ผลบอล</h1> 7score.live เว็บไซต์รายงานสดผลฟุตบอลทั้งไทยและต่างประเทศทุกลีกทั่วโลก อัพเดทกันวินาทีต่อวินาทีเพื่อให้ท่านได้รับข้อมูลที่รวดเร็ว อีกทั้งยังนำเสนอข้อมูลของแต่ละทีม สถิติการพบกัน และข้อมูลสำคัญต่างๆ เพื่อเป็นแนวทางในการวิเคราะห์ของท่าน
        <NavDate 
          DataDate={navDates}
          onClickLeft={() => console.log("left")}
          onClickRight={() => console.log("right")}
        />
        <a href="/">
            All
        </a>
        <a href="#" onClick={handleClicklive} style={{"marginLeft":"20px"}}>
            Live
        </a>
       
        <div ref={myRef}></div> 

        
        {
           
           (defaults !== undefined) 
            ? 
            defaults.home.category.slice(0, 7).map((res,value) => (

                
              <div key={value.toString()}> 
              
                  
                  <TableBattle  
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
           
           :<center><h1>loading.........</h1></center>
          }
          {
          (defaults !== undefined) ? 

              
                defaults.home.category.slice(8).map((res,value) => (

                      
                  <div key={value.toString()}> 
                  
                      
                      <TableBattle  
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
               
               : null
 

        }
       
       </div>

       {
             <div className="d-block d-md-none mainf-tab score-mobile">
                <div className="banners">
                    <BannerInner />
                </div>
                <div style={{margin:'10px'}}>
                  <h1>ผลบอล</h1> 7score.live เว็บไซต์รายงานสดผลฟุตบอลทั้งไทยและต่างประเทศทุกลีกทั่วโลก อัพเดทกันวินาทีต่อวินาทีเพื่อให้ท่านได้รับข้อมูลที่รวดเร็ว อีกทั้งยังนำเสนอข้อมูลของแต่ละทีม สถิติการพบกัน และข้อมูลสำคัญต่างๆ เพื่อเป็นแนวทางในการวิเคราะห์ของท่าน
                 </div>
                <div style={{margin:'10px'}}>
                <a href="/">
                    All
                </a>
                <a href="#" onClick={handleClicklive} style={{"marginLeft":"20px"}}>
                    Live
                </a>
                </div>
                {

                (defaults !== undefined) ? 

                        
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
    
    </Layout>
  )

}
Home.propTypes = {

};


export default Home;


