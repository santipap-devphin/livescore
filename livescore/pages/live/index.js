import axios from 'axios';
import HeaderSeo from "../../shared/commons/HeaderSeo"
import dynamic from 'next/dynamic';


const TableBattle = dynamic(() => import('../../shared/commons/TableBattle'));
const TableBattleMobile = dynamic(()=> import('../../shared/commons/TableBattleMobile'));


const Live = (props) => {

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
          (props.load === true) ? 

            props.live.scores.category.map((res,value) => (

           
            (res['@id'] === "1005" || res['@id'] === "1007" || res['@id'] === "1204" || res['@id'] === "1399" || res['@id'] === "1269" || res['@id'] === "1229" || res['@id'] === "1322" || res['@id'] === "1221" || res['@id'] === "1271") ?  
            
            <div key={value.toString()}> 
                 <TableBattle  
                 className="highlight bg-secondary text-white"
                 title={res['@name']}
                 data={res.matches.match}
                 highlight={true} 
                 exam = {res['@id']}
                 />
                 
           </div>
            :
            null
           )) 
           : "loading........."


        }
        {
          
          (props.load === true) ? 
           props.live.scores.category.map((res,value) => (


            (res['@id'] !== "1005"  && res['@id'] !== "1007" && res['@id'] !== "1204" && res['@id'] !== "1399" && res['@id'] !== "1269" && res['@id'] !== "1229" && res['@id'] !== "1399" && res['@id'] !== "1322" && res['@id'] !== "1221" && res['@id'] !== "1271") ?  
            <div key={value.toString()}> 
                <TableBattle  
                className="highlight bg-secondary text-white"
                title={res['@name']}
                data={res.matches.match}
                highlight={true} 
                exam = {res['@id']}
                />
            </div>
            :
            null
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

                (props.load === true) ? 
                props.live.scores.category.map((res,value) => (

                  (res['@id'] === "1005" || res['@id'] === "1007" || res['@id'] === "1204" || res['@id'] === "1399" || res['@id'] === "1269" || res['@id'] === "1229" || res['@id'] === "1399" || res['@id'] === "1322" || res['@id'] === "1221" || res['@id'] === "1271") ?  
                      <div key={value.toString()}>
                            <TableBattleMobile 
                              title={res['@name']}
                              data={res.matches.match}
                              highlight={false}
                            />
                           
                      </div>
                      :
                      null
                      
                     
                ))
              : "loading........."
              }


              {
              (props.load === true) ? 
              props.live.scores.category.map((res,value) => (

                  (res['@id'] !== "1005"  && res['@id'] !== "1007" && res['@id'] !== "1204" && res['@id'] !== "1399" && res['@id'] !== "1269" && res['@id'] !== "1229" && res['@id'] !== "1399" && res['@id'] !== "1322" && res['@id'] !== "1221" && res['@id'] !== "1271") ?  
                  <div key={value.toString()}>
                        <TableBattleMobile 
                          title={res['@name']}
                          data={res.matches.match}
                          highlight={false}
                        />
                      
                  </div>
                  :
                  null
                  
                
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

  //setLoads(true)

  return {live: data , load : true}
}


export default Live;


