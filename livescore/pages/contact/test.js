import { data } from 'jquery';
import React from 'react'
import { Component } from 'react';
/*import axios from 'axios'
import {useEffect , useState} from 'react'
import {useRouter} from 'next/router
import {useQuery} from 'react-query''*/
import HeaderSeo from "../../shared/commons/HeaderSeo"
import Layout from "../../shared/container/Layout"
import fetch from 'isomorphic-unfetch'


class Apitest extends Component {

    static async getInitialProps(){
    
        const res = await fetch('https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccerstats/team/9249?json=1')
        const data  = await res.json()
        
        return {home:data}
    
        
    
    }
    render() {
    
    return (
        <Layout>
            <HeaderSeo
                siteName=""
                title="live score"
                desc=""
                imgSrc=""
                metaUrl=""
                keyWords=""
                author=""
            />
            <h1>{this.props.home.teams.team.name}</h1>
           
        </Layout>
    )
    
    
    }
    
    
    
    }


export default Apitest
