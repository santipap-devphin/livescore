import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderSeo from "../../shared/commons/HeaderSeo"
import dynamic from 'next/dynamic';


const TableBattle = dynamic(() => import('../../shared/commons/TableBattle'));
const TableBattleMobile = dynamic(()=> import('../../shared/commons/TableBattleMobile'));


const Live = (props) => {

const [defaults , setDefaults] = useState(props);

return (
      
    <div className="container">
      <HeaderSeo
        siteName=""
        title="live score"
        desc=""
        imgSrc=""
        metaUrl=""
        keyWords=""
        author=""
      />
      <div className="d-none d-md-block">
        <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
        <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
        

        {
          (defaults.load === true) ? 
           
            defaults.live.category.map((res,value) => (
  
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

                (defaults.load === true) ? 
                   
                    defaults.live.category.map((res,value) => (

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
    
   </div>
  )

}
Live.propTypes = {

};
Live.getInitialProps = async (ctx) => {

  const res = await fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/home?json=1')
  const data = await res.json()
  let ndata = [];

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
  

  return {live: scores , load : true}
}


export default Live;


