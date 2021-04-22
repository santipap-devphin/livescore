import React, { useState ,useEffect ,useRef } from 'react';
import Layout from "../../../shared/container/Layout"
import dynamic from 'next/dynamic';
import HeaderSeo from "../../../shared/commons/HeaderSeo"
import TableBattle from "../../../shared/commons/TableBattle"
const TableBattleMobile = dynamic(()=> import('../../../shared/commons/TableBattleMobile'));
import Empty from "../../../shared/commons/Empty"
import UEFAleague from "../../../mock/afcleague"
import PrimaveraCup from "../../../mock/PrimaveraCup"
import CopyButton from "../../../shared/components/CopyButton"
import Button from "../../../shared/commons/Button"
import BannerInner from "../../../shared/components/Banner/Inner"



const TableScore = () => {
    const [isEmbeded, setEmbedee] = useState(0);
    const [isPreview, setPreview] = useState(false);
    const [isLeague, setLeague] = useState("0");
    const [isWidth, setWidth] = useState("0");
    const [iPreview, setiPreview] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const [value, setValue] = useState("")
    const [showvalue, setshowValue] = useState("")
    const [item, setItem] = useState();
    const [err, setErr] = useState(false);
    const myRef = useRef(null)

    /*const stringToHTML = function (str) {
        var dom = document.createElement('div');
        dom.innerHTML = str;
        return dom;
    };*/

    /*useEffect(() => {

        
        setTimeout(function(){ setLoading(true) }, 1000);

            
        
        
     
      },[setLoading]);*/
    const onChange = () => {
        //console.log(isWidth)
        setValue(`<div id="aiscore-free"></div><script language="javascript">document.getElementById("aiscore-free").innerHTML="<iframe src='https://7score.live/live/'  height='100%' width='1200' scrolling='auto' border='0' frameborder='0'></iframe>";</script><style>body{margin:0}#aiscore-free{display:flex;justify-content:center;height:100vh}</style>`);
        
    }


    
    const fetchItems = async (items) => {

        const res = await fetch(`https://www.goalserve.com/getfeed/40e962b3c2a941d6a61008d85e49316a/soccernew/home?json=1`)
        const data = await res.json()

        setItem(data)
        setErr(true)
       
    }


    

    const handleChangeLeague = (value) => {

       // console.log(value.target.value)
        setLeague(value.target.value)
        fetchItems(value.target.value)

    }
    const handleChangeWidth = (value) => {
       // console.log(value.target.value)
        setWidth(value.target.value)
        setTimeout(function(){ setLoading(false) }, 200);
        myRef.current.scrollIntoView()
        if(value.target.value === "1"){
           
            setValue(`<div id="aiscore-free"></div><script language="javascript">document.getElementById("aiscore-free").innerHTML="<iframe src='https://7score.live/live/'  height='100%' width='300' scrolling='auto' border='0' frameborder='0'></iframe>";</script><style>body{margin:0}#aiscore-free{display:flex;justify-content:center;height:100vh}</style>`);
            setshowValue(`<iframe src='https://7score.live/live/'  height='300' width='300' scrolling='auto' border='0' frameborder='0'></iframe>`)
            setiPreview(true)
            setTimeout(function(){ setLoading(true) }, 1000);
            //setLoading(true)
        }
        else if(value.target.value === "2"){
            setValue(`<div id="aiscore-free"></div><script language="javascript">document.getElementById("aiscore-free").innerHTML="<iframe src='https://7score.live/live/'  height='100%' width='500' scrolling='auto' border='0' frameborder='0'></iframe>";</script><style>body{margin:0}#aiscore-free{display:flex;justify-content:center;height:100vh}</style>`);
            setshowValue(`<iframe src='https://7score.live/live/'  height='500' width='500' scrolling='auto' border='0' frameborder='0'></iframe>`)
            setiPreview(true)
            setTimeout(function(){ setLoading(true) }, 1000);
        }
        else if(value.target.value === "3"){
            setValue(`<div id="aiscore-free"></div><script language="javascript">document.getElementById("aiscore-free").innerHTML="<iframe src='https://7score.live/live/'  height='100%' width='600' scrolling='auto' border='0' frameborder='0'></iframe>";</script><style>body{margin:0}#aiscore-free{display:flex;justify-content:center;height:100vh}</style>`);
            setshowValue(`<iframe src='https://7score.live/live/'  height='600' width='600' scrolling='auto' border='0' frameborder='0'></iframe>`)
            setiPreview(true)
            setTimeout(function(){ setLoading(true) }, 1000);
        }
        else if(value.target.value === "4"){
            setshowValue(`<iframe src='https://7score.live/live/'  height='600' width='100%' scrolling='auto' border='0' frameborder='0'></iframe>`)
            setValue(`<div id="aiscore-free"></div><script language="javascript">document.getElementById("aiscore-free").innerHTML="<iframe src='https://7score.live/live/'  height='100%' width='1200' scrolling='auto' border='0' frameborder='0'></iframe>";</script><style>body{margin:0}#aiscore-free{display:flex;justify-content:center;height:100vh}</style>`);
            setiPreview(true)
            setTimeout(function(){ setLoading(true) }, 1000);
           
        }   

        

    }

  

    return (
        <Layout >
            <HeaderSeo
                siteName=""
                title="live score"
                desc=""
                imgSrc=""
                metaUrl=""
                keyWords=""
                author=""
            />
            <BannerInner />
            <h1 className="pb-4 border-bottom mb-0" style={{ lineHeight: 'unset' }}>แจกตารางผลคะแนน</h1>
            <p className="mb-0 pt-4 pb-4">
                Setup your very own free Livescore Widget. You will have a customised version of Livescore-eiei  to use for free on your own website. The free Livescore Widget can be customised with your own size. All data is provided by Livescore-eiei which means, that all data is fast & reliable, 24/7.
            </p>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>เลือกรายการลีค</label>
                        <select onChange={handleChangeLeague} id="select-league" className="form-control">
                            <option value="0">กรุณาเลือกตัวอย่าง</option>
                            <option value="1">แสดงตัวอย่าง</option>
                            {/*<option value="1204">พรีเมียร์ลีก อังกฤษ</option>
                            <option value="1005">ยูฟ่า แชมเปี้ยนส์ลีก</option>
                            <option value="1007">ยูโรป้า ลีก</option>
                            <option value="1198">เอฟเอ คัพ อังกฤษ</option>
                            <option value="1399">ลาลีกา สเปน</option>*/}

                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label>เลือกความกว้าง</label>
                        <select onChange={handleChangeWidth} id="select-width" className="form-control">
                            <option value="0">เลือกความกว้าง</option>
                            <option value="1">300 x 300 px</option>
                            <option value="2">500 x 500 px</option>
                            <option value="3">600 x 600 px</option>
                            <option value="4">เต็มจอ</option>
                        </select>
                    </div>
                </div>

                
                <div className="form mb-4">
                    <div className="form-group">
                        <h3>GENERATE URL AND CODE</h3>
                        <p className="mb-0">
                            Generate the widget and the code you need. Paste the code onto your website, or in your WordPress Widgets and you'll be on your way in no time.
                        </p>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-3">
                        <Button 
                            className="btn-secondary justify-content-center btn-block  mb-3 mb-md-0" 
                            type="button" onClick={() => {
                                setPreview(!isPreview)
                                //console.log(value)
                                setValue(value);
                            }}
                        >Preview</Button>
                    </div>
                    <div className="col-md-4">
                        <Button 
                            className="btn-outline-secondary     justify-content-center btn-block mb-3 mb-md-0" 
                            type="button" 
                            onClick={() => {
                                setEmbedee(1)
                                setValue(`<div id="aiscore-free"></div><script language="javascript">document.getElementById("aiscore-free").innerHTML="<iframe src='https://7score.live/live/'  height='100%' width='1200' scrolling='auto' border='0' frameborder='0'></iframe>";</script><style>body{margin:0}#aiscore-free{display:flex;justify-content:center;height:100vh}</style>`);
                            }}
                        >Generate URL</Button>
                    </div>
                    <div className="col-md-4">
                        <Button
                            className="btn-outline-secondary     justify-content-center btn-block  mb-3 mb-md-0" 
                            type="button" 
                            onClick={() => {
                                setEmbedee(1)
                                setValue(`<div id="aiscore-free"></div><script language="javascript">document.getElementById("aiscore-free").innerHTML="<iframe src='https://7score.live/live/'  height='100%' width='1200' scrolling='auto' border='0' frameborder='0'></iframe>";</script><style>body{margin:0}#aiscore-free{display:flex;justify-content:center;height:100vh}</style>`);
                            }}
                        >Generate Code</Button>
                    </div>
                </div>
            </form>
            <div className="copied-embeded mb-4">
                {
                    isEmbeded === 1
                        ? <div className="copied">
                            <CopyButton code={value} />
                        <textarea className="form-control" onChange={onChange} rows={4} cols={50} value={value} disabled/>
                        </div>
                        : isEmbeded === 2
                            ? <div className="copied">
                            <CopyButton code={value} />
                            <textarea className="form-control" onChange={onChange} rows={4} cols={50} value={value} disabled/>
                            </div>
                            : <div className="copied">
                            <CopyButton code={value} />
                            <textarea className="form-control" onChange={onChange} rows={4} cols={50} value={value} disabled/>
                            </div>
                }
            </div>
            <div className="preivew-embeded mb-4">
                <h3 className="pb-4 border-bottom">
                    แสดงตัวอย่าง
                </h3>
                
                <div ref={myRef}></div> 
                <div className="preview text-center pt-4">
                    {

 
                        iPreview === true
                            ? <>
                            <div className="d-none d-md-block">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img className="mb-4 img-fluid w-100 h-200px" src="/assets/ads/ads200x200.png" alt="" />
                                    </div>
                                    <div className="col-md-4">
                                        <img className="mb-4 img-fluid w-100 h-200px" src="/assets/ads/ads200x200.png" alt="" />
                                    </div>
                                    <div className="col-md-4">
                                        <img className="mb-4 img-fluid w-100 h-200px" src="/assets/ads/ads200x200.png" alt="" />
                                    </div>
                                </div>

                               
                              
                                {
                                    
                                    
                                    <div>
                                        { loading !== false ?
                                        <div dangerouslySetInnerHTML={{__html: showvalue}} />
                                        : <center><h1 style={{color:"white"}}>Loading ......</h1></center>
                                        }</div>
                                    

                                    /*(err === true) ? 
                                    
                                    item.scores.category.slice(0, 3).map((res,value) => (

                                        
                                        <div key={value.toString()} style={{width:500}}> 
                                            <TableBattle  
                                            className="highlight bg-secondary text-white"
                                            title={res['@name']}
                                            data={res.matches.match}
                                            highlight={true} 
                                            exam = {res.matches.match}
                                            
                                            />
                                        </div>
                                       
                                    )) : null*/
                                    
                                }

                                
                                <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
                                <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
                            </div>
                            <div className="d-block d-md-none">
                                <div className="row d-none d-md-flex">
                                    <div className="col-md-4">
                                        <img className="mb-4 img-fluid w-100 h-200px" src="/assets/ads/ads200x200.png" alt="" />
                                    </div>
                                    <div className="col-md-4">
                                        <img className="mb-4 img-fluid w-100 h-200px" src="/assets/ads/ads200x200.png" alt="" />
                                    </div>
                                    <div className="col-md-4">
                                        <img className="mb-4 img-fluid w-100 h-200px" src="/assets/ads/ads200x200.png" alt="" />
                                    </div>
                                </div>
                                <div className="banner row d-flex d-md-none">
                                    <div className="col-4 pr-7px">
                                    <img className="mb-4 img-fluid w-100 h-90px" src="/assets/ads/ads200x200.png" alt="" />
                                    </div>
                                    <div className="col-4 px-7px">
                                    <img className="mb-4 img-fluid w-100 h-90px" src="/assets/ads/ads200x200.png" alt="" />
                                    </div>
                                    <div className="col-4 pl-7px">
                                    <img className="mb-4 img-fluid w-100 h-90px" src="/assets/ads/ads200x200.png" alt="" />
                                    </div>
                                </div>
                               
                                {
                                    loading !== false ?
                                    <div dangerouslySetInnerHTML={{__html: showvalue}} />
                                    : <center><h1 style={{color:"white"}}>Loading ......</h1></center>
                                    /*
                                 (err === true) ?
                                    item.scores.category.slice(0, 1).map((res,value) => (

                                           
                                            <div key={value.toString()}>
                                            <TableBattleMobile 
                                            title={res['@name']}
                                            data={res.matches.match}
                                            highlight={false}
                                            />
                                            </div>
                                           

                                    )) : null
                                    */
                                   
                                    }
                                
                                
                                <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
                                <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
                            </div>
                            </>
                            : <Empty />
                    }
                </div>
            </div>
            <style jsx>{`
                button.btn.btn-copy {
                    position: absolute;
                    right: 15px;
                }
            `}</style>
        </Layout>
    )
}



export default TableScore