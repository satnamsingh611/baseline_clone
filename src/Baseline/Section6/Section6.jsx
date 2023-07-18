import React from 'react'
import '../Section6/Section6.less';
import { motion, useAnimation } from 'framer-motion'
const Section6 = () => {
    return (
        <>
            <div className="container">
                <div className="get-a-beautiful-website">
                    <div className=" row get-beautiful-website__box">
                        <div className="col-md-6">
                            <h2> <span style={{ color: "#bb372a" }} >Get a beautiful</span> website that<br /> converts visitors into customers.</h2>
                        </div>
                        <div className="col-md-6">
                            <p className='get-beautiful-website__box__business-website'>Elaborate your business with trusted websites. We have a creative team of designers and developers who build your website that your customer will love. On all devices, your website looks great with a fast loading speed. Our team always believes in word challenging and teamwork.</p>
                        </div>
                    </div>
                    <div className="col-md-12 baseline-pic">
                        <div className="picc">
                            <img src="	https://baselineitdevelopment.com/assets/images/CoverImage.png" alt="Baseline" />
                        </div>
                        <div className="img-button">
                            <a className="read-btn cta" href="https://baselineitdevelopment.com/services" role="button">
                                <span style={{marginLeft:"10px"}}>
                                    {/* <motion.div
                                        initial={{ x: '-100%' }}
                                        whileInView={{ x: '0' }}
                                        transition={{ duration: 1 }}

                                    >
                                        <i className="fa-solid fa-arrow-right-long aos-init" ></i>
                                    </motion.div> */}
                                    <span>Read more</span>
                                    <svg width="13px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
                                </span></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section6