import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import HeaderSeo from "../../shared/commons/HeaderSeo"
import Layout from "../../shared/container/Layoutscore"
import Empty from "../../shared/commons/Empty"
import Link from 'next/link'
import Avatar from "../../shared/commons/Avatar"

import Clup from "../../mock/Clup"

import LeagueTable from "../../shared/commons/LeagueTableFull"

const Teams = (props) => {

   const router = useRouter();
   const [isLeague, setLeague] = useState("0");
   const [items, setItems] = useState();
   const [load, setLoad] = useState(false);
   const [error, setError] = useState('');
   let leg = []
  useEffect(() => {

    setLeague("0");

  }, []);

  const handleChangeLeague = (value) => {

    setError("start")
    setLeague(value.target.value)

    fetchItems(value.target.value)

  }

  const fetchItems = async (items) => {

    const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/${items}.xml?json=1`)
    const data = await res.json()

     setItems(data)
     setLoad(true)
     setError("end")
  }

  
  return (
    <Layout className="px-0 px-md-3">
        
        <HeaderSeo
                siteName=""
                title="live score"
                desc=""
                imgSrc=""
                metaUrl=""
                keyWords=""
                author=""
            />
            <div>
                         <LeagueTable 
                            title={props.League["@league"]}
                            matches={props.League.team} 
                            className={""}
                          
                        />
            </div>
            
          
    </Layout>
  )
}

Teams.getInitialProps = async ({query}) => {

    let id =  query.id;
    
    const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/standings/${id}.xml?json=1`)
    const data = await res.json()
 
    
     return { 
        League: data.standings.tournament
       }
    
 
  
 
 }



export default Teams