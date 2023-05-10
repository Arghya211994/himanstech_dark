
import React from 'react'
import styles from "./Services.module.css"
import Image from 'next/image'

const Services = () => {
  return (
    <>
    <section className={styles.service} id='services'>
      <p>We’re in the Business of <span style={{color:"#5abc2e"}}>Digital Innovation</span></p>
      <p><span style={{color:"#5abc2e"}}>Himanstech</span> is a full-service technology solution provider offering comprehensive product engineering services marked by innovation, experience, and technical expertise. We work hand-in-hand with our customers to create engaging consumer products, mission-critical technology solutions, and stunning streaming experiences. With hundreds of millions of users across the globe, our products touch countless lives every day.</p>

      <main className={styles.service_content}>

        <div className={styles.service_content_item}>
          <div className={styles.overlay}></div>
          <Image src="/service_img1.jpeg" alt="" width={100} height={100}/>
          <div className={styles.service_content_item_layer}>

            <h4><span style={{color:"#5abc2e"}}>UI-UX </span>CREATIVE</h4>
            <p>Helping businesses mitigate cost, enhance agility, and seamlessly scale through the power of
              digital transformation..</p>
          
        </div>
        </div>

        <div className={styles.service_content_item}>
          <div className={styles.overlay}></div>
          <Image src="/services_img2.jpeg" alt="" width={100} height={100}/>
          <div className={styles.service_content_item_layer}>

            <h4><span style={{color:"#5abc2e"}}>WEB </span>DEVELOPMENT</h4>
            <p>Helping businesses mitigate cost, enhance agility, and seamlessly scale through the power of
              digital transformation.</p>
          
        </div>
        </div>

        <div className={styles.service_content_item}>
          <div className={styles.overlay}></div>
          <Image src="/services_img3.jpeg" alt="" width={100} height={100}/>
          <div className={styles.service_content_item_layer}>

            <h4><span style={{color:"#5abc2e"}}>APP </span>DEVELOPMENT</h4>
            <p>Build and scale mobile app solutions across multiple platforms and devices to reach your
              customers on the go.</p>
          
        </div>
        </div>


        <div className={styles.service_content_item}>
          <div className={styles.overlay}></div>
          <Image src="/services_img4.jpeg" alt="" width={100} height={100}/>
          <div className={styles.service_content_item_layer}>

            <h4><span style={{color:"#5abc2e"}}>FULLSTACK </span>DEVELOPMENT</h4>
            <p>Accelerate the creation and delivery of your scalable web products with our custom-built
              front-end and back-end solutions.</p>
          
        </div>
        </div>


        <div className={styles.service_content_item}>
          <div className={styles.overlay}></div>
          <Image src="/services_img5.jpeg" alt="" width={100} height={100}/>
          <div className={styles.service_content_item_layer}>

            <h4><span style={{color:"#5abc2e"}}>DATA </span>ANALYTICS</h4>
            <p>We provide cutting-edge data analysis tools and strategies to transform your raw data into
              actionable insights.</p>
          
        </div>
        </div>

        <div className={styles.service_content_item}>
          <div className={styles.overlay}></div>
          <Image src="/services_img6.jpeg" alt="" width={100} height={100}/>
          <div className={styles.service_content_item_layer}>

            <h4><span style={{color:"#5abc2e"}}>DIGITAL</span>MARKETING</h4>
            <p>Develop and implement go-to-market strategies that align marketing with business goals,
              build brand awareness, enhance engagement, and increase uptake.</p>
          
        </div>
        </div>


      </main>
    </section>
    </>
  )
}

export default Services
