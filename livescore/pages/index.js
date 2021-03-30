import React, { useState, useEffect } from 'react';
import Layout from "../shared/container/Layout"
import axios from 'axios';
import NavDate from "../shared/commons/NavDate"
import HeaderSeo from "../shared/commons/HeaderSeo"
import dynamic from 'next/dynamic';


const TableBattle = dynamic(() => import('../shared/commons/TableBattle'));
const TableBattleMobile = dynamic(()=> import('../shared/commons/TableBattleMobile'));


const Home = (props) => {

  //console.log(props)

  const [sdata , setDatas] =  useState(false);

  const [defaults , setDefaults] = useState(props);

  const [priority , setPriority] = useState([]);
  const [live , setLive] = useState([]);
  var newsarr = [];
  var _blank = [];
  const sw = 0;
  function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
  }

  function chklive(obj){

    


  }

  //console.log(convertTZ("2021/03/29 16:00 +0000", "Asia/Bangkok"))
  
  const handleClicklive = async (e) => {

    e.preventDefault();

    setDatas(false);
    //console.log(e.target.value);
    const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/home?json=1`)
    
    const data = await res.json()

    let ndata = [];
    let objj = {};
  
      for(var i = 0 ; i < data.scores.category.length; i++)
      {
        
       // 
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
        //console.log(value);
         if(value["@gid"] === newArray[key]["@leagueid"]){

              //value.matches.push(newArray[key])

              //objjj = newArray[key]["match"];
              value.matches.match = newArray[key]["match"];
             // console.log(newArray[key]["match"])
          

         }
       
      }
     
   let scores = {
            "@sport":data.scores["@sport"],
            "@updated":data.scores["@updated"],
            "category":output
        
    }
 
    objj = {home:scores};

    //return {home: scores}
    setDefaults(objj);

    setDatas(true);

  }

  //console.log(defaults.home)
  let items = ['one', 'two', 'three', 'four', 'five'];

  let index = 2;

  let tmp = items.splice(index, 1)

  //console.log(tmp)

  items.unshift(tmp[0])

  //console.log(items);
 
  /*let newindex;

  for(var i = 0 ; i < props.home.scores.category.length; i++)
  {
    if(props.home.scores.category[i]["@file_group"].toLowerCase() === "spain"){

      console.log(props.home.scores.category[i]["@file_group"].toUpperCase())

      newindex = i;

      let tmpp = props.home.scores.category.splice(newindex, 1);

      props.home.scores.category.unshift(tmpp[0]);

    }else{

    }
  }*/

   
  


  /*setDatas([...props.home.scores.category, newElement]);*/

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


    //setDatas(true);
      if(defaults.home.category.length > 0){

             setDatas(true);

      }
   
  },[setDatas]);

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
      <HeaderSeo
        siteName=""
        title="live score"
        desc=""
        imgSrc=""
        metaUrl=""
        keyWords=""
        author=""
      />
      <div className="d-none d-md-block mainf-tab">
        <div className="banner f">
          <a href="#" target="_blank" rel="nofollow"><img className="" src="/banner/sg8bet22.gif" alt="" /></a>
          <a href="#" target="_blank" rel="nofollow"><img className="" src="/banner/Sbobet-888-728x180 2.gif" alt="" /></a>
          <a href="#" target="_blank" rel="nofollow"><img className="" src="/banner/Top789-728x180.gif" alt="" /></a>
          <a href="#" target="_blank" rel="nofollow"><img className="" src="/banner/MSbobet-online 728x180.gif" alt="" /></a>
          <a href="#" target="_blank" rel="nofollow"><img className="" src="/banner/Sbobet891 728x180-2.gif" alt="" /></a>
          <a href="#" target="_blank" rel="nofollow"><img className="" src="/banner/UFABET8989-728x180.gif" alt="" /></a>
        </div>
        
        <NavDate 
          DataDate={navDates}
          onClickLeft={() => console.log("left")}
          onClickRight={() => console.log("right")}
        />
        <a href="#" onClick={handleClicklive}>
            Live
        </a>
       
        {
          
          (sdata !== false) ? 

              defaults.home.category.map((res,value) => (

                <div key={value.toString()}> 
                    <TableBattle  
                    className="highlight bg-secondary text-white"
                    title={res['@name']}
                    data={res.matches.match}
                    highlight={true} 
                    exam = {res['@id']}
                    />
                    
                </div>
           

                )) 
            : "loading........."


        }

      
      </div>

       {
             <div className="d-block d-md-none">
                <div className="banner px-3">
                  
                    <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
                    <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />

                </div>
                
                {

                (sdata !== false) ? 
                        defaults.home.category.map((res,value) => (

                      
                            <div key={value.toString()}>
                                  <TableBattleMobile 
                                    title={res['@name']}
                                    data={res.matches.match}
                                    highlight={false}
                                  />
                                
                            </div>
                          
                            
                          
                      ))
              : "loading........."
              }

           </div>
        

       }
    
    </Layout>
  )

}
Home.propTypes = {

};
Home.getInitialProps = async  (ctx) => {

  const res = await fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/home?json=1')
  const data = await res.json()
  let ndata = [];
  let string_re;
  let newdate;
  let obkk  = {};
  let matchs = [];
  function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
  }

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


    

  

  //setLoads(true)

  return {home: scores}
}

export default Home;


