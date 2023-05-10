import React from "react";
import styles from "./Portfolio.module.css";
import Image from "next/image";
import { useState } from "react";

import {motion} from "framer-motion"

const data = [
  {
    id: 1,
    image:
    "/portfolio1.jpg",
    name: "Web-Design",
    category: "web-design",
  },
  {
    id: 2,
    image:
    "/portfolio2.jpg",
    name: "Seo",
    category: "seo",
  },
  {
    id: 3,
    image:
    "/portfolio3.jpg",
    name: "Web-Development",
    category: "web-development",
  },
  {
    id: 4,
    image:
    "/portfolio4.jpg",
    name: "App-Development",
    category: "app-development",
  },
  {
    id: 5,
    image:
    "/portfolio5.jpg",
    name: "Web-Design",
    category: "web-design",
  },

  {
    id: 6,
    image:
    "/portfolio6.jpg",
    name: "Web-Development",
    category: "web-development",
  },
];

const Portfolio = () => {

  const [portfolio, setPortfolio] = useState(data);
  const [activeButton, setActiveButton] = useState(false);

  const filter = (currCategory) => {

    const updated_portfolio = data.filter((current) => current.category === currCategory)

    setPortfolio(updated_portfolio)

    setActiveButton(currCategory);
  }

  const onActive = (show) => {
    setPortfolio(data)

    setActiveButton(show)
  }

  
  return (
    <>
      <section className={`${styles.portfolio}`} id="portfolio">
        <h1 className={`${styles.heading}`}>Our <span style={{color:"#5abc2e"}}>Portfolio</span></h1>
        <main>
          <div className={`${styles.category_box}`}>
            <motion.button onClick={() => filter("web-design")}
             
             style={{ 
             color: activeButton === "web-design" ? "rgb(163 230 53)" : ""}}
            >Web-Design</motion.button>

            <motion.button onClick={() => filter("web-development")}
           
             style={{ 
              color: activeButton === "web-development" ? "rgb(163 230 53)" : ""}}
             >Web-Development</motion.button>

            <motion.button onClick={() => filter("seo")}
             
             style={{ 
              color: activeButton === "seo" ? "rgb(163 230 53)" : ""}}
            >App-Development</motion.button>

            <motion.button onClick={() => filter("app-development")}
             
             style={{ 
              color: activeButton === "app-development" ? "rgb(163 230 53)" : ""}}
            >Seo</motion.button>

            <motion.button onClick={() => onActive("show")}
             
             style={{ 
              color: activeButton === "show" ? "rgb(163 230 53)" : ""}}
            >Show all</motion.button>
          </div>

          <div className={`${styles.category_content}`}>
            {portfolio.map((currElem) => {
              return (
                <>
                  <motion.div className={`${styles.category_contents}`} key={currElem.id}
                  whileInView={{scale: [0,1]}}
                  animate={{
                    opacity:1
                  }}
                  initial={{
                    opacity:0
                  }}
                  transition={{duration: .8}}
                  >
                    <Image
                      src={currElem.image}
                      alt={currElem.name}
                      height={300}
                      width={1000}
                    />
                    <p>{currElem.name}</p>
                  </motion.div>
                </>
              );
            })}
          </div>
        </main>
      </section>
    </>
  );
};

export default Portfolio;
