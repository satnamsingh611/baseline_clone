import React, { useState, useEffect } from "react";
import { useLottie } from "lottie-react";
import animationData from "../../../../Lottie/140397-screening.json";
import NavBar from "../../../Navbar/Nav";
import "../CareerPagebtn/Careerview.less";
import Aboutfooter from "../../../Footer/Aboutfooter";
import EmailPopup from "../../../../popup/Emailpopup";
import axios from "axios";
// import base64 from 'base-64'
import emailjs from "emailjs-com";
import { URL } from "../../../constant/constant";
const CareerView = () => {
  const defaultOptions = {
    animationData: animationData,
  };
  const [thankupopup, setThankupopup] = useState();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    attachment: null,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const validateForm = () => {
    let validationErrors = {};
    let isValid = true;

    // Validate name
    if (form.name.trim() === "") {
      validationErrors.name = "Please enter your name";
      isValid = false;
    }

    // Validate email
    if (form.email.trim() === "") {
      validationErrors.email = "Please enter your email";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      validationErrors.email = "Please enter a valid email";
      isValid = false;
    }

    // Validate phone number
    if (form.phone.trim() === "") {
      validationErrors.phone = "Please enter your phone number";
      isValid = false;
    } else if (!/^\d{10}$/.test(form.phone)) {
      validationErrors.phone = "Please enter a valid 10-digit phone number";
      isValid = false;
    }

    // Validate attachment
    if (!form.attachment) {
      validationErrors.attachment = "Please upload your CV";
      isValid = false;
    }

    setErrors(validationErrors);
    return isValid;
  };

  /** Action for File Change */
  const handleChange = (e) => {
    if (e.target.name === "attachment") {
      setForm({ ...form, [e.target.name]: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

//   useEffect(() => {
//     // Function to clear the error message when input values change
//     const clearErrorsOnChange = () => {
//       setErrors({}); // Clear the error state
//     };
  
//     // Attach the clearErrorsOnChange function to input change events
//     const inputElements = document.querySelectorAll('.form-content input');
//     inputElements.forEach((input) => {
//       input.addEventListener('input', clearErrorsOnChange);
//     });
  
//     // Clean up the event listeners when the component unmounts
//     return () => {
//       inputElements.forEach((input) => {
//         input.removeEventListener('input', clearErrorsOnChange);
//       });
//     };
//   }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Create form data object
      const data = new FormData();
      data.append("name", form.name);
      data.append("email", form.email);
      data.append("phone", form.phone);
      data.append("attachment", form.attachment);

      // Send form data to the backend
      fetch(`${URL}/cv-section`, {
        method: "POST",
        body: data,
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.status === "success") {
            setThankupopup(true);
            setIsSubmitting(false);
          } else {
            setIsSubmitting(false);
            alert("Internal error! Please try again later");
          }
        })
        .catch((error) => {
          console.error(error);
        });

      // Reset form fields
      setForm({
        name: "",
        email: "",
        phone: "",
        attachment: null,
      });
    }
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
  };

  const { View } = useLottie(defaultOptions);
  return (
    <>
      <NavBar />
      <div className="Career-view-main">
        <div className="container">
          <div className=" row career-content">
            <div className="col-md-6">
              <div className="viewform">
                <div className="heading-career">
                  <h1>
                    Share your <span style={{ color: "#bb372a" }}>CV</span>
                  </h1>
                </div>

                <form
                  encType="multipart/form-data"
                  method="post"
                  ref={form}
                  className="form-content"
                  onSubmit={sendEmail}
                >
                  <div className="forminput">
                    <label htmlFor="name">
                      Your Name <span style={{ color: "red" }}>*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      onChange={handleChange}
                      value={form.name}
                      className={errors.name ? "border-red" : null}
                    />
                    {errors.name && (
                      <span className="error">{errors.name}</span>
                    )}
                  </div>

                  <div className="forminput">
                    <label htmlFor="email">
                      Your Email ID <span style={{ color: "red" }}>*</span>
                    </label>
                    <br />
                    <input
                      type="Eemail"
                      onChange={handleChange}
                      value={form.email}
                      placeholder="Your Email"
                      name="email"
                      className={errors.email ? "border-red" : null}
                    />
                    {errors.email && (
                      <span className="error">{errors.email}</span>
                    )}
                  </div>

                  <div className="forminput">
                    <label htmlFor="phone">
                      Your Phone Number <span style={{ color: "red" }}>*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      name="phone"
                      onChange={handleChange}
                      value={form.phone}
                      placeholder="Your Phone Number"
                      className={errors.phone ? "border-red" : null}
                    />
                    {errors.phone && (
                      <span className="error">{errors.phone}</span>
                    )}
                  </div>

                  <div className="forminput">
                    <label htmlFor="file-data">
                      Upload Your CV <span style={{ color: "red" }}>*</span>
                    </label>
                    <br />
                    <input
                      type="file"
                      name="attachment"
                      onChange={handleChange}
                      placeholder="Your CV"
                      className={errors.attachment ? "border-red" : null}
                    />
                    {errors.attachment && (
                      <span className="error">{errors.attachment}</span>
                    )}
                  </div>
                  <div className="btn">
                    <button type="submit" disabled={isSubmitting}>
                      {isSubmitting ?
                      <>
                      <span>Sending...</span> <img src="/src/image/loading.gif"  className="loading-gif"/>
                      </>
                       : "Submit"}
                       {/* "Sending..." <img src="/src/image/loading.gif"  className="loading-gif"/> */}
                      {/* <img src="/src/image/loading.gif" className="loading-gif" /> */}
                    </button>
                    {/* <input type="submit" value={isSubmitting ? "Sending...": "Submit"} /> */}
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="animation-box">{View}</div>
            </div>
          </div>
        </div>
        <EmailPopup setThankupopup={setThankupopup} thankupopup={thankupopup} />
      </div>
      <Aboutfooter />
    </>
  );
};

export default CareerView;
