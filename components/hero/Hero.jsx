import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Hero.module.css"
import {BiArrowBack} from 'react-icons/bi'
import Image from "next/image";

const Hero = () => {
  return (
    <>
<div className={`${styles.carousel}`} id="home">
  <Carousel
    autoPlay={false}
    interval={1000}
    infiniteLoop={true}
    showThumbs={false}
    showIndicators={false}
    showStatus={false}
    renderArrowPrev={(clickHandler, hasPrev) => (
      <div
        onClick={clickHandler}
        className={`${styles.leftarrow}`}
      >
          <BiArrowBack />
      </div>
    )}
    renderArrowNext={(clickHandler, hasNext) => (
      <div
        onClick={clickHandler}
        className={`${styles.rightarrow}`}
      >
          <BiArrowBack />
      </div>
    )}
  >
          <div>
            <Image
              src="/home-banner.jpg"
              className={`${styles.image}`}
              width={100}
              height={100}
            />
            <div className={`${styles.overlay}`}></div>

            <div className={`${styles.content}`}>

                <h1>Drive growth with  Digital Marketing Services</h1>
                <p>Looking to accelerate business growth and accomplish desired results with digital marketing?  the best digital marketing service provider with years of experience, is the only name you need to know. Our team of professionals will collaborate with you to create a tailored strategy that employs cutting-edge strategies and technology to boost your online visibility and increase traffic to your website.</p>
                <div className={`${styles.button_box}`}>

                <button className={`${styles.herobtn}`}>
                  Contact Us
                </button>
                
                <button className={`${styles.herobtn2}`}>
                  Know More
                </button>
                </div>
            </div>
          </div>

          <div>
            <Image
              src="/home_banner2.webp"
              className={`${styles.image}`}
              width={100}
              height={100}
            />
            <div className={`${styles.overlay}`}></div>

            <div className={`${styles.content}`}>

                <h1>Revolutionize your Digital presence with Himanstech</h1>
                <p>Do you find it difficult to see results from your digital marketing and web development efforts ? Make room for our expert teams and cutting-edge technologies to rock your market. Contact us now to discover your real digital potential.</p>
                <div className={`${styles.button_box}`}>

                <button className={`${styles.herobtn}`}>
                  Contact Us
                </button>
                
                <button className={`${styles.herobtn2}`}>
                  Know More
                </button>
                </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Hero;

