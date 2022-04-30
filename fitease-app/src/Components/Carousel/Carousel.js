import React, { useEffect, useState } from "react";
import image from "./image.png";
import "./Carousel.css";
import axios from "axios";
/*
import bg1 from "./bg-1";
import bg2 from "./bg-2";
import bg3 from "./bg-3";*/
const Carousel = () => {
  const images = [image, image, image];
  const [slideIndex, setSlideIndex] = useState(1);

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  const banners = ["./bg-1.jpg", "./bg-2.jpg", "./bg-3.jpg"];

  // From Api
  /* const [homepageData, setHomePageData] = useState({});
  const [banners, setBanners] = useState([]);

  const getData = async () => {
    return await axios
      .get('https://staging-backend.comverseglobal.com/storefront/homepage')
      .then((response) => {
        if (response) {
          setHomePageData(response?.data?.homepage)
          getBanners()
        }

        //console.log(response.data.homepage)
      })
      .catch((error) => console.error(error))
  }
  const getBanners = () => {
    const newData = homepageData?.filter(
      (data) => data?.type === 'banner_slider'
    )
    const brands = newData[0].slides
    setBanners(brands)
  }
  console.log("HomePage", homepageData);
  console.log("Banners", banners);

  useEffect(() => {
    getData();
  }, []);*/
  return (
    <>
      <div className="upperImgDiv">
        {banners.map((banner, index) => (
          <div
            className={
              slideIndex === index + 1 ? "slide active" : "slide not-active"
            }
          >
            <img key={index} src={banner} width="100%" height="800px" />
          </div>
        ))}
        <div className="container-dots">
          {Array.from({ length: 3 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;

/* <div className=' d-flex flex-column align-items-start textPart'>
        <div className='upper'>
          100%
          <span> ORGANIC</span>
        </div>
        <br />
        <div className='lower'>FRESH & NATURAL FARM FOOD</div>
        <div className='para'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do
          eiusmod tempor incididunt ut labore et dolore magna <br />
          aliqua.
        </div>
      </div>*/
