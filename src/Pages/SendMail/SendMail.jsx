import React, { useRef } from "react";
import "./SendMail.css";
import emailjs from "@emailjs/browser";
import { Container } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SendMail = () => {
    const form = useRef();

    const sendToast=()=>{
        toast("sent your Mail")
  
     }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pgp6apm', 'template_xqxicq8', form.current, '_kzTXrFfQk2uFNUe9')
        .then((result) => {
            console.log(result.text);
           // form.reset();
            sendToast()
          

        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <Container className="">
      <div className="emailContainer">
        <h1 className="availableShapeTitle mx-auto">Give us Feedback</h1>
        <form className="emailForm" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" required /> <br />
        
            <label>Email</label>
            <input type="email" name="user_email" required /> <br />

            {/* <label>Subject</label>
            <input type="text" name="user_subject" required /> <br /> */}
            
            <label>Message</label>
            <textarea name="message" /> 
            <input className="btn btn-success" type="submit" value="Send" />
        </form>
        <ToastContainer/>
      </div>
    </Container>
  );
};

export default SendMail;
