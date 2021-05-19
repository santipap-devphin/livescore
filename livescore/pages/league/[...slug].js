import React from 'react'
import { useRouter } from 'next/router'
import { useState,useEffect ,useRef } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../../shared/container/Layout'));
import HeaderSeo from "../../shared/commons/HeaderSeo"
const TableBattle = dynamic(() => import('../../shared/commons/TableBattle'));
const TableBattleMobile = dynamic(()=> import('../../shared/commons/TableBattleMobile'));
const NavDate = dynamic(()=> import('../../shared/commons/NavDate'));
const BannerInner = dynamic(()=> import('../../shared/components/Banner/Inner'));

const Post = (props) => {

  console.log(props)
  const router = useRouter()
  const slug = router.query.slug || []
  const myRef = useRef(null)
 
  const [items, setItems] = useState();

  const [load, setLoad] = useState(false);
  const [defaults , setDefaults] = useState();
  const [error, setError] = useState('');
  const [lang , setLang] = useState([]);
  const [sectiontwo , setSectiontwo] = useState(false);
  let teamth = [];
  var txtdate = null ;
  var txtleg = null;
  //console.log(props)

  function datee(nextday){

    const today = new Date()
    const tomorrow = new Date(today)

    var month_th = {};

    month_th["Jan"] = "มค.";
    month_th["Feb"] = "กพ.";
    month_th["Mar"] = "มีค.";
    month_th["Apr"] = "เมย.";
    month_th["May"] = "พค.";
    month_th["Jun"] = "มิย.";
    month_th["Jul"] = "กค.";
    month_th["Aug"] = "สค.";
    month_th["Sep"] = "กย.";
    month_th["Oct"] = "ตค.";
    month_th["Nov"] = "พย.";
    month_th["Dec"] = "ธค.";

    tomorrow.setDate(tomorrow.getDate()+nextday)

    const neww = String(tomorrow);

    const newsdate = neww.split(" ");

    const newsformat = month_th[newsdate[1]] + " " +newsdate[2];

    
    return newsformat;

    }
    const Loaddatadefalut = async () => {
  
      let lslug =  router.query.slug;
     
      var objj = [];
      var list_objj = {};
     

            if(lslug[1] === "today" || lslug[1] === "undefined"){

              const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/home?json=1`)
              const data = await res.json()
              for(var i =0; i < data.scores.category.length; i++)
              {
                      if(lslug[0] === data.scores.category[i]["@id"]){

                          objj.push(data.scores.category[i]);

                      }


              }

             }else{

              const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/${lslug[1]}?json=1`)
              const data = await res.json()
                  for(var i =0; i < data.scores.category.length; i++)
                  {
                          if(lslug[0] === data.scores.category[i]["@id"]){

                              objj.push(data.scores.category[i]);

                          }


                  }
            }

            list_objj = {listid:lslug[0],listdata: objj}
            setDefaults(list_objj)
            

      
  
    }
    const handdleClickAfterload = (e) => {

      e.preventDefault();
  
      setDatas(false);
  
      myRef.current.scrollIntoView()
  
      //window.scrollTo(3000, 20)
  
    }
    useEffect(() => {

      
      
      Loaddatadefalut();
  
      
  
    },[setDefaults])

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
       
  
        
      
      }, 100);
  
    },[setLang])

    /*useEffect(() => {

      myRef.current.scrollIntoView()
      setTimeout(function(){
        setLoad(true)
      }, 1500)
      
    })*/
    
    let navDate = [
        { id: "1",pathid:"d-3", date: datee(-3), route: `/league/${slug[0]}/d-3`, today: false },
        { id: "2",pathid:"d-2", date: datee(-2), route: `/league/${slug[0]}/d-2`, today: false },
        { id: "3",pathid:"d-1", date: datee(-1), route:`/league/${slug[0]}/d-1`, today: false },
        { id: "4",pathid:"today", date: datee(0), route: `/league/${slug[0]}/today`, today:false  },
        { id: "5",pathid:"d1", date: datee(1), route: `/league/${slug[0]}/d1`, today: false },
        { id: "6",pathid:"d2", date: datee(2), route: `/league/${slug[0]}/d2`, today: false },
        { id: "7",pathid:"d3", date: datee(3), route: `/league/${slug[0]}/d3`, today: false }
      ]

      // console.log(navDate)
      slug[1] === "d-3" ? navDate[0].today = true 
      :
      slug[1] === "d-2" ? navDate[1].today = true 
      :
      slug[1] === "d-1" ? navDate[2].today = true 
      :
      slug[1] === "d1" ? navDate[4].today = true 
      :
      slug[1] === "d2" ? navDate[5].today = true
      :
      slug[1] === "d3" ? navDate[6].today = true
      :
      navDate[3].today = true

      
      if(defaults !== undefined){

        if(props.id !== defaults.listid){

          Loaddatadefalut();
          
        }
        //console.log(defaults.listid)

      }

      
 
  return (
    <>
       <Layout className="px-0 px-md-3">
       <HeaderSeo
        siteName=""
        title={`ลีกยอดฮิต ${props.legue} ${props.date}`}
        desc={`ลีกยอดฮิต ชอง ${props.legue} ${props.date}`}
        imgSrc=""
        metaUrl=""
        keyWords={`รายงาน ลีกยอดฮิต ${props.legue} ${props.date}`}
        author=""
      />
        <div className="d-none d-md-block mainf-tab">
          <BannerInner />
       <NavDate 
        DataDate={navDate}
        onClickLeft={() => console.log("left")}
        onClickRight={() => console.log("right")}
       
      />
       <div ref={myRef}></div> 
       
        {
          defaults !== undefined ?
          defaults.listdata.length > 0 ?
          defaults.listdata.map((res,val) => (
           
            <div key={val.toString()}>
                  <TableBattle  
                  className="highlight bg-secondary text-white"
                  title={res['@name']}
                  data={res.matches.match}
                  highlight={false} 
                  exam = {res['@id']}
                  after = {handdleClickAfterload}
                  th = {lang}
                  />
              </div> 
               
          ))
          : <center><h1>ไม่มีข้อมูล</h1></center>
          :<center><h1>Loading ......</h1></center>  
        }

        </div>

        <div className="d-block d-md-none mainf-tab">
                  <div className="banner px-3">

                      {/*<img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
                      <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />*/}

                  </div>

                  {
                    
                      defaults !== undefined ?
                      defaults.listdata.length > 0 ?
                      defaults.listdata.map((res,val) => (
                       
                        
                        <div key={val.toString()}>

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
                      :<center><h1>ไม่มีข้อมูล</h1></center>
                      :<center><h1>Loading ......</h1></center> 
                    }


        </div>

       </Layout>
     
    
     
    </>
  )
}
Post.getInitialProps = async ({query}) => {

   let lslug =  query.slug;
   var txtdate = null;
   var txtleg  = null;
   
      lslug[1] === "d-3" ? txtdate = "ย้อนหลัง 3 วัน" 
      :
      lslug[1] === "d-2" ? txtdate = "ย้อนหลัง 2 วัน" 
      :
      lslug[1] === "d-1" ? txtdate = "ย้อนหลัง 1 วัน" 
      :
      lslug[1] === "d1" ? txtdate = "ล่วงหน้า 1 วัน" 
      :
      lslug[1] === "d2" ? txtdate = "ล่วงหน้า 2 วัน" 
      :
      lslug[1] === "d3" ? txtdate = "ล่วงหน้า 3 วัน" 
      :
      txtdate = "วันนี้" 

      lslug[0] === "1005" ? txtleg = "ยูฟ่า แชมเปี้ยนส์ลีก"
      :
      lslug[0] === "1204" ? txtleg = "พรีเมียร์ลีก อังกฤษ"
      :
      lslug[0] === "1007" ? txtleg = "ยูโรป้า ลีก"
      :
      lslug[0] === "1198" ? txtleg = "เอฟเอ คัพ อังกฤษ"
      :
      lslug[0] === "1399" ? txtleg = "ลาลีกา สเปน"
      :
      lslug[0] === "1269" ? txtleg =  "กัลโช่ เซเรีย อา อิตาลี"
      :
      lslug[0] === "1229" ? txtleg = "บุนเดสลีกา เยอรมัน"
      :
      lslug[0] === "1322" ? txtleg = "เอเรดิวิซี่ ฮอลแลนด์"
      :
      lslug[0] === "1221" ? txtleg = "ลีก เอิง ฝรั่งเศส"
      :
      lslug[0] === "1271" ? txtleg = "เจ ลีก ญี่ปุ่น"
      :""

   

      return {id:lslug[0],date:txtdate,legue:txtleg}

}

export default Post
