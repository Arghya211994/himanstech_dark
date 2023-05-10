import React from 'react'
import styles from "./Why.module.css"
import {AiTwotoneSetting} from "react-icons/ai"
import {RiUserSettingsFill} from "react-icons/ri"
import {RiSettingsFill} from "react-icons/ri"

const Why = () => {
  return (
    <>
    <section className={styles.whyus} id='why-us'>
        <p> Why Choose <span style={{color:"#5abc2e"}}>Us ?</span></p>
        <p>We care for your goals and align our work to meet your expectations. We aim to be the one step solution for your future targets.</p>

        <main className={styles.whyus_content}>

          <div className={styles.whyus_content_item}>

             <div className={styles.logo}>
              <AiTwotoneSetting/>
             </div>

             <div className={styles.innercontent}>
                <p>Long Term <span style={{color:"#5abc2e"}}>Support</span></p>
                <p>We provide tech support for 6 months.</p>
             </div>

             <button>
              Read More
             </button>

          </div>


          <div className={styles.whyus_content_item}>

             <div className={styles.logo}>
              <RiUserSettingsFill/>
             </div>

             <div className={styles.innercontent}>
                <p>Most Affordable <span style={{color:"#5abc2e"}}>Pricing</span></p>
                <p>We provide the most competitive pricing plans. No one can beat us in affordablity.</p>
             </div>

             <button>
              Read More
             </button>

          </div>


          <div className={styles.whyus_content_item}>

             <div className={styles.logo}>
              <RiSettingsFill/>
             </div>

             <div className={styles.innercontent}>
                <p>Quality and <span style={{color:"#5abc2e"}}> Punctuality</span></p>
                <p>We deliver our projects during the given timeline.Quality is everybody&apos;s obligation.</p>
             </div>

             <button>
              Read More
             </button>

          </div>
        </main>
    </section>
    </>
  )
}

export default Why
