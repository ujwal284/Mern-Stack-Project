import React from 'react'
import {Link} from "react-router-dom";

function Contact() {
    return (
        <>
    
    <div className="contact-container">
      <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
            height: 100%;
          
          }

          .contact-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh; 
            text-align: center;
            padding: 20px;
          }

          .contact-form {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 20px;
            max-width: 400px;
            width: 100%;
            margin:10px;
          }

          .form-group {
            margin-bottom: 15px;
            text-align: left;
            color:black;
          }

          label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
          }

          input, textarea {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            color:#abdbe3;
          }

          .submit-button {
            background-color:#FF69B4 ;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
          }

          .submit-button:hover {
            background-color:	#AA336A;
            transition: 1s ease;
          }
            .contact-us{
            font-size: 40px;
            }
        `}
      </style>
      <h1 className='contact-us'>Contact Us</h1>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder='Enter your name' required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder='Enter your email'required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" placeholder='Your message'required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
      
      </>
    
  )
    
}
    

export default Contact
