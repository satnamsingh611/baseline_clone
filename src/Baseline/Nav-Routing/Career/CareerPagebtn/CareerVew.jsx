import React, { useState } from "react";
import { useLottie } from "lottie-react";
import animationData from '../../../../Lottie/140397-screening.json';
import NavBar from "../../../Navbar/Nav";
import '../CareerPagebtn/Careerview.less';
import Aboutfooter from "../../../Footer/Aboutfooter";
import EmailPopup from "../../../../popup/Emailpopup"
import axios from "axios";
// import base64 from 'base-64'
import emailjs from 'emailjs-com'
import { URL } from "../../../constant/constant";
const CareerView = () => {

    const defaultOptions = {

        animationData: animationData,

    };
    const [thankupopup, setThankupopup] = useState()
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        attachment: null,
    });

    const [selectedFile, setSelectedFile] = useState(null)

    /** Action for File Change */
    const handleChange = (e) => {
        if (e.target.name === 'attachment') {
            setForm({ ...form, [e.target.name]: e.target.files[0] });
        } else {
            setForm({ ...form, [e.target.name]: e.target.value });
        }
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        // Create form data object
        const data = new FormData();
        data.append('name', form.name);
        data.append('email', form.email);
        data.append('phone', form.phone);
        data.append('attachment', form.attachment);


        // Send form data to the backend
        fetch(`${URL}/cv-section`, {
            method: 'POST',
            body: data,
        })
            .then((response) => response.json())
            .then((res) => {
                if (res.status === 'success') {
                    setThankupopup(true)
                }
                else {
                    console.log(res, "erre4ry"); // Optional: Handle response from backend
                }
            })
            .catch((error) => {
                console.error(error);
            });

        // Reset form fields
        setForm({
            name: '',
            email: '',
            phone: '',
            attachment: null,
        });
        // e.preventDefault()
        // const reader = new FileReader();
        // reader.onload = function (event) {
        //     const pdfFile = event.target.result;
        //     const templateParams = {
        //         from_name: 'Your Name',
        //         to_name: 'Recipient Name',
        //         subject: 'Email Subject',
        //         message: 'Email Body',
        //         attachment: pdfFile,
        //     };

        //     emailjs.send('service_ay6as3e', 'template_2qvkzvq', templateParams, 'fHmV_X36tWi9MXe3Q')
        //         .then((response) => {
        //             console.log('Email sent successfully!', response.text);
        //         })
        //         .catch((error) => {
        //             console.error('Error sending email:', error);
        //         });
        // };

        // if (selectedFile) {
        //     reader.readAsDataURL(selectedFile);
        // }

        // if (selectedFile) {
        //     const serviceID = 'service_ay6as3e';
        //     const templateID = 'template_2qvkzvq';
        //     const userID = 'fHmV_X36tWi9MXe3Q';
        //     const formData = new FormData();
        //     formData.append('pdfFile', selectedFile);

        //     console.log('formData:', formData);

        //     emailjs.sendForm(serviceID, templateID, e.target, userID)
        //         .then((response) => {
        //             console.log('Email sent successfully!', response.status, response.text);
        //         })
        //         .catch((error) => {
        //             console.error('Error sending email:', error);
        //         });

        // };
    }




    const { View } = useLottie(defaultOptions)
    return (
        <>
            <NavBar />
            <div className="Career-view-main">
                <div className="container">

                    <div className=" row career-content">
                        <div className="col-md-6">
                            <div className="viewform">
                                <div className="heading-career">
                                    <h1>Share your <span style={{ color: "#bb372a" }}>CV</span></h1>
                                </div>

                                <form encType="multipart/form-data" method="post" ref={form} className="form-content" onSubmit={sendEmail} >
                                    <div className="forminput">
                                        <label htmlFor="name">Your Name <span style={{ color: "red" }}>*</span></label><br />
                                        <input type="text" placeholder="Your Name" name="name"
                                            onChange={handleChange}
                                            value={form.name}
                                        />
                                    </div>

                                    <div className="forminput">
                                        <label htmlFor="email">Your Email ID <span style={{ color: "red" }}>*</span></label><br />
                                        <input type="Eemail"
                                            onChange={handleChange}
                                            value={form.email}
                                            placeholder="Your Email" name="email" />
                                    </div>

                                    <div className="forminput">
                                        <label htmlFor="phone">Your Phone Number <span style={{ color: "red" }}>*</span></label><br />
                                        <input type="text"
                                            name="phone"
                                            onChange={handleChange}
                                            value={form.phone}
                                            placeholder="Your Phone Number" />
                                    </div>

                                    <div className="forminput">
                                        <label htmlFor="file-data" >Upload Your CV  <span style={{ color: "red" }}>*</span></label><br />
                                        <input type="file"
                                            name="attachment"
                                            onChange={handleChange}
                                            placeholder="Your CV" />
                                    </div>
                                    <div className="btn">
                                        <input type="submit" value="Submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6" >
                            <div className="animation-box" >
                                {View}
                            </div>
                        </div>
                    </div>
                </div>
                <EmailPopup setThankupopup={setThankupopup} thankupopup={thankupopup} />
            </div>
            <Aboutfooter />
        </>
    )
}

export default CareerView