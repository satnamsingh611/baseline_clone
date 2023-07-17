import React from 'react'
import { motion } from 'framer-motion'
import '../Section4/Section4.less';
const Section4 = () => {
    return (
        <div className="container " >
            <div className="technologies">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1 }}>
                    <h2 style={{ fontSize: "50px", fontWeight: "700" }}><span style={{ color: "#bb372a", fontSize: "90px" }}>T</span><span style={{ color: "#bb372a", fontSize: "50px" }}>echnologies</span> We Use</h2>
                </motion.div>
                <p className='fortuneclints'>We have been working with some Fortune 500 clients</p>
            </div>
            <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}>
            <div className="row technologies-logo">
               
                    <div className="col-md-2">
                        <div className="box-1 " style={{ margin: "50px 0 0 0" }}>
                            <img src="https://baselineitdevelopment.com/assets/images/Angular.png" alt="Baseline" />
                        </div>
                    </div>
               
             
                    <div className="col-md-2">
                        <div className="box-1 " >
                            <img src="https://baselineitdevelopment.com/assets/images/Bigcommerce.png" alt="Baseline" />
                        </div>
                        <div className="box-1 " >
                            <img src="	https://baselineitdevelopment.com/assets/images/Flutter.png" alt="Baseline" />
                        </div>
                    </div>
              
                <div className="col-md-2">
                    <div className="box-1" style={{ margin: "-35px 1px 29px " }}>
                        <img src="https://baselineitdevelopment.com/assets/images/HTML.png" alt="Baseline" />
                    </div>
                    <div className="box-1">

                        <img src="https://baselineitdevelopment.com/assets/images/wordpress.png" alt="Baseline" />
                    </div>
                    <div className="box-1" >
                        <img src="https://baselineitdevelopment.com/assets/images/SF.png" alt="Baseline" />
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="box-1">
                        <img src="https://baselineitdevelopment.com/assets/images/JavaSC.png" alt="Baseline" />
                    </div>
                    <div className="box-1 aos-init">
                        <img src="	https://baselineitdevelopment.com/assets/images/React.png" alt="Baseline" />
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="box-1" style={{ margin: "50px 0 0 0" }}>
                        <img src="	https://baselineitdevelopment.com/assets/images/PHP.png" alt="Baseline" />
                    </div>
                </div>
            </div>
            </motion.div>
        </div>
    )
}

export default Section4
