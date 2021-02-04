import React, { useState, useEffect } from 'react';
import HeaderSeo from "../../shared/commons/HeaderSeo"
import Layout from "../../shared/container/Layout"
import CardClips from "../../shared/components/CardClips"
import posts from "../../mock/Blog"
import Carousel from "../../shared/commons/Carousel"
import Button from "../../shared/commons/Button"

const limit = 4;
let arrayForHoldingPosts = [];

const HighLight = () => {
  const [clips, setClips] = useState([]);
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(0);
  // const [limit, setLimit] = useState(4);
  // const [loadMore, setLoadMore] = useState(false);

  const loopThroughPosts = (count) => {
    for (let i = count * limit - limit; i < limit * count; i++) {
      if (posts.data[i] !== undefined) {
        arrayForHoldingPosts.push(posts.data[i]);
      }
    }
    setTotal(posts.total)
    setClips(arrayForHoldingPosts);
  }
  // useEffect(() => {
  //   loopWithSlice(0, limit);
  // }, []);
  useEffect(() => {
    // setItem(clips.length)
    setCount((prevCount) => prevCount + 1);
    loopThroughPosts(count);
  }, []);

  const onClickLoadMore = () => {
    setCount((prevCount) => prevCount + 1);
    loopThroughPosts(count);
  };

  // const onClickLoadMore = (e) => {
  //   e.preventDefault();
  //   setLimit(item + 2)
  // setLoading(true);
  // let dataLoadmore = await campaignApi.getCampaign(item, limit);
  // if (dataLoadmore.length !== 0) {
  //   if (dataLoadmore.length < limit) {
  //     setLoading(false);
  //     setLoadMore(false);
  //     setItem(item + dataLoadmore.length);
  //     setCampaignAll((campaignContent) => [
  //       ...campaignContent,
  //       ...dataLoadmore,
  //     ]);
  //   } else {
  //     setLoading(false);
  //     setLoadMore(true);
  //     setItem(item + dataLoadmore.length);
  //     setCampaignAll((campaignContent) => [
  //       ...campaignContent,
  //       ...dataLoadmore,
  //     ]);
  //   }
  // } else {
  //   setLoadMore(false);
  // }
  // };
  let clipsSlide = [
    {
      id: "1", 
      url: "/highlight/แมนฯ ยูไนเต็ด VS อาร์เซนอล ลืมเกมพ่ายจิ้งจอกพร้อมบวกปีศาจแดง ลุ้นสามแต้มที่นี่", 
      title: "แมนฯ ยูไนเต็ด VS อาร์เซนอล ลืมเกมพ่ายจิ้งจอกพร้อมบวกปีศาจแดง ลุ้นสามแต้มที่นี่",
      img: "/assets/mock/players/andy-robertson.jpg", 
      urlToImage: "/assets/mock/players/andy-robertson.jpg",
      publishedAt: "22 กันยายน 2563 , 12:15",
      view: "1,105",
      shared: "4",
    },
    {
      id: "2", 
      url: "/highlight/ลิเวอร์พูล VS เวสต์แฮม ยูไนเต็ด ภารกิจดับขุนค้อนฟอร์มร้อน แฟนหงส์แดงลุ้นไปกับเราที่นี่", 
      title: "ลิเวอร์พูล VS เวสต์แฮม ยูไนเต็ด ภารกิจดับขุนค้อนฟอร์มร้อน แฟนหงส์แดงลุ้นไปกับเราที่นี่", 
      img: "/assets/mock/players/andy-robertson.jpg", 
      urlToImage: "/assets/mock/players/andy-robertson.jpg",
      publishedAt: "22 กันยายน 2563 , 12:15",
      view: "1,105",
      shared: "4",
    },
    {
      id: "3", 
      url: "/highlight/เบิร์นลี่ย์ VS เชลซี สุดป้ายสิงห์ต้อง 3 แต้มเกมเยือน ชวนแฟนเชียร์ไปพร้อมกันที่นี่", 
      title: "เบิร์นลี่ย์ VS เชลซี สุดป้ายสิงห์ต้อง 3 แต้มเกมเยือน ชวนแฟนเชียร์ไปพร้อมกันที่นี่", 
      img: "/assets/mock/players/andy-robertson.jpg", 
      urlToImage: "/assets/mock/players/andy-robertson.jpg",
      publishedAt: "22 กันยายน 2563 , 12:15",
      view: "1,105",
      shared: "4",
    },
    {
      id: "4", 
      url: "/highlight/ลิเวอร์พูล VS อาร์เซนอล ชนะสามเกมรวดรออยู่แฟนหงส์พร้อมบู๊บิ๊กแมตช์ชนปืนโตที่นี่", 
      title: "ลิเวอร์พูล VS อาร์เซนอล ชนะสามเกมรวดรออยู่แฟนหงส์พร้อมบู๊บิ๊กแมตช์ชนปืนโตที่นี่", 
      img: "/assets/mock/players/andy-robertson.jpg", 
      urlToImage: "/assets/mock/players/andy-robertson.jpg",
      publishedAt: "22 กันยายน 2563 , 12:15",
      view: "1,105",
      shared: "4",
    },
  ]
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
      <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
      <img className="mb-4 img-fluid w-100 h-70px" src="/assets/ads/ads630x70.png" alt="" />
      <h1 className="mb-4">HIGHLIGHT!</h1>
      <Carousel 
        slideValues={clipsSlide} 
        title="LaLiga Santander"
        className="mb-4"
      />
      <CardClips className="d-block d-md-none mb-5" data={clipsSlide} grid={false} />
      <h2 className="mb-4">SPORTS CLIPS</h2>
      <div className="row mx-0">
        {/* {
          clips.length > 0
            ? <CardClips data={clips} grid={true} />
            : "loading..."
        } */}
        <CardClips data={clips} grid={false} />

        {
          total !== clips.length
          ? <div className="col-12 text-center px-0">
          <Button type="button" className="btn-outline-secondary mx-auto mt-5 mb-5 mb-md-0" onClick={onClickLoadMore}>Load more</Button>
        </div>
         : ""
        }
        
        {/* {
          clips.length !== 0 &&
            loadMore === true ? (
              <button onClick={(e) => onClickLoadMore(e)}>
                Load More
              </button>
            ) : ""
        } */}
      </div>
    </Layout>
  );
}

export default HighLight;
