import React, { useState } from 'react'
import './Contact.css'
const Contact = () => {
    const [data,setData]=useState({
        name:"",
        email:"",
       message:""
   });
   const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
  }
  const onSubmitHandler = async (event)=>{
    event.preventDefault();
    alert("Submitted Successfully");
  }

  return (
    <div>
         <div class="contact-section">
        <div class="contact-container">
            
            <div class="contact-info">
                <h2>Contact Me</h2>
                <p><i class="fas fa-phone-alt"></i> +91 9763767457</p>
                <p><i class="fas fa-envelope"></i> ritik@gmail.com</p>
                <p><i class="fas fa-map-marker-alt"></i> Nagpur, India</p>
                
                
                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>

            
            <div class="contact-form">
                <input type="text" placeholder="Your Name" onChange={onChangeHandler} name='name' value={data.name} required/>
                <input type="email" placeholder="Your Email" onChange={onChangeHandler} name='email' value={data.email} required/>
                <textarea placeholder="Your Message" onChange={onChangeHandler} name='message' value={data.message} required></textarea>
                <button type="submit" onClick={onSubmitHandler}>Send Message</button>
            </div>
            
        </div>
    </div>
      
    </div>
  )
}

export default Contact
