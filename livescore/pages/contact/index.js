import { data } from 'jquery';
import React from 'react'
/*import axios from 'axios'
import {useEffect , useState} from 'react'
import {useRouter} from 'next/router
import {useQuery} from 'react-query''*/
import HeaderSeo from "../../shared/commons/HeaderSeo"
import Layout from "../../shared/container/Layout"

//const toJSON = () => _.json();
//const fetchh = () => fetch('https://dev.to/api/articles').then(toJSON);
const Contact = () => {
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
            <h1>Contact ทดสอบ ทดสอบ</h1>
            <Exam/>
        </Layout>
    )
}


function Exam(){

    //const {data:articles, isLoading , error} = useQuery('articles',fetchh);
    //if(isLoading) return 'Loading ......'
    //if(error) return error.message;
    return (
            <div>
                <p>............</p>
            </div>
    )
}

export default Contact
