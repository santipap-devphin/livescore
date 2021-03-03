
import React from 'react'
/*import axios from 'axios'
import {useEffect , useState} from 'react'
import {useRouter} from 'next/router
import {useQuery} from 'react-query''*/
import HeaderSeo from "../../shared/commons/HeaderSeo"
import Layout from "../../shared/container/Layout"
import fetch from 'isomorphic-unfetch'
import { Component } from 'react';
// example data ตัวอย่างข้อมุลในการเรียก api format data json


class Apitest extends Component {

static async getInitialProps(){

    const res = await fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccerstats/team/9249?json=1')
    const data  = await res.json()
    
    return {home:data}

    

}
render() {

return (
        <div>
            
            <ul>

                    <li>{this.props.home.teams.team.name}</li>
                
                
            </ul>
        </div>

)


}



}

export default Apitest;