import React from 'react'
import styles from './Contact.module.css'
import {MdLocationOn} from 'react-icons/md'
import {AiTwotoneMail} from 'react-icons/ai'
import {BsFillTelephoneOutboundFill} from 'react-icons/bs'


const Contact = () => {
    return (
        <>
            <section className={styles.contact} id='contact'>
                <h2>Contact <span style={{ color: "#5abc2e" }}>Us</span></h2>

                <main>

                    <div className={styles.fstdiv}>
                        <div className={styles.fstdiv_inner}>
                            <span style={{color:"#5abc2e"}}><MdLocationOn/></span>
                            <h4>Our Address</h4>
                            <div>
                                <p>Module 102, Webel IT Park, Phase II,
                                    Buddhapark, Kalyani, West Bengal 741235</p>

                                <p>PS Qube, Noapara,
                                    NH12, Newtown, Kolkata, West Bengal 700156</p>
                            </div>

                        </div>

                        <div className={styles.fstdiv2}>

                            <div className={styles.fstdiv2_inner}>
                                <span style={{color:"#5abc2e"}}><AiTwotoneMail/></span>
                                <h4>Email</h4>
                                <p>info@himanstech.com</p>
                            </div>

                            <div className={styles.fstdiv2_inner}>
                                <span style={{color:"#5abc2e"}}><BsFillTelephoneOutboundFill/></span>
                                <h4>Call Us</h4>
                                <p>+91 8334061823</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.scndiv}>

                        <div className={styles.scndiv_left}>
                            <iframe class="mb-4 mb-lg-0"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.7112452940914!2d88.43191691414937!3d22.96085912439536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f895bfdf5f2bd9%3A0x3a87a61f6f468815!2sHimanstech!5e0!3m2!1sen!2sin!4v1677675006893!5m2!1sen!2sin"
                                frameborder="0" style={{ border: "0", width: "100%", height: "100%" }} allowfullscreen
                            ></iframe>
                        </div>

                        <div className={styles.scndiv_right}>
                                <div>
                                    <input type="text" placeholder='Your Name' />
                                    <input type="text" placeholder='Your Email'/>
                                </div>

                                <input type="text" placeholder='Subject' style={{height:"60px"}} />

                                <textarea name="" id="" cols="30" rows="5" placeholder='Message'></textarea>

                                <button>send message</button>
                        </div>

                    </div>

                </main>
            </section>
        </>
    )
}

export default Contact