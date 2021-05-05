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
                title="ติดต่อเรา 7score.live"
                desc="ติดต่อสอบถามข้อมูลกับ 7score.live ผ่านทางอีเมล์ admin@7score.live ได้ตลอด 24 ชั่วโมง"
                imgSrc=""
                metaUrl=""
                keyWords=""
                author=""
            />
            <h1>ติดต่อเรา</h1>
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
                <p>หากท่านมีข้อสงสัยสามารถติดต่อเราผ่านทางอีเมล์ของ 7score.live ด้านล่างได้ตลอด 24 ชั่วโมง</p>
                <p>ติดต่อเรา : admin@7score.live</p>
            </div>
    )
}

export default Contact
