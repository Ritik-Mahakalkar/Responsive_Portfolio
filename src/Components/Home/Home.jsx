import React from 'react'
import './Home.css';
const Home = () => {
  return (
    <div className='Main_home_container'>
        <section class="hero">
        <div class="container">
            <div class="hero-text">
                <h1>Hi, I'm <span>Ritik Mahakalkar</span></h1>
                <h2>Web Developer | Designer</h2>
                <p>I create stunning and responsive websites that help businesses grow.<br/> Let's work together to bring your ideas to life!</p>
                <a href="tel:+1234567890" class="btn-contact">Call Now</a>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQLwDqDwd2JfzifvfBTFT8I7iKFFevcedYg&s" alt="Your Name" class="profile-img"/>
        </div>
    </section>
      
    </div>
  )
}

export default Home
