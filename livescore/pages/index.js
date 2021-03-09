import Layout from "../shared/container/Layout"
import axios from 'axios';
import NavDate from "../shared/commons/Navdate"
import HeaderSeo from "../shared/commons/HeaderSeo"
import dynamic from 'next/dynamic';


const TableBattle = dynamic(() => import('../shared/commons/TableBattle'));
const TableBattleMobile = dynamic(()=> import('../shared/commons/TableBattleMobile'));


const Home = (props) => {

  
  function datee(nextday){

    const today = new Date()
    const tomorrow = new Date(today)

    tomorrow.setDate(tomorrow.getDate()+nextday)

    const neww = String(tomorrow);

    const newsdate = neww.split(" ");

    const newsformat = newsdate[1] + " " +newsdate[2];

    
    return newsformat;

  }


  let navDate = [
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
      <div className="d-none d-md-block">
        <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
        <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
        <NavDate 
          DataDate={navDate}
          onClickLeft={() => console.log("left")}
          onClickRight={() => console.log("right")}
        />

        {
          (props.load === true) ? 

            props.home.scores.category.map((res,value) => (

           
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
           props.home.scores.category.map((res,value) => (


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
                props.home.scores.category.map((res,value) => (

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
              props.home.scores.category.map((res,value) => (

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
    
    </Layout>
  )

}
Home.propTypes = {

};
Home.getInitialProps = async (ctx) => {

  const res = await fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/home?json=1')
  const data = await res.json()

  //setLoads(true)

  return {home: data , load : true}
}


export default Home;


