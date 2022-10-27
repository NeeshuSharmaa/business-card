import React from "react";
// import "./index.css";
import './index.css';

export default function App() {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <img className="profile-img" src="./images/nee_photo.jpg"></img>
        <div className="main-content">
          <div className="name-n-profile">
            <h2>Neeshu Sharma</h2>
            <h4>Frontend Developer</h4>
            <h5>
              <a class="link" href="https://neeshu-sharmaa.netlify.app/">neeshusharmaa.website</a>
            </h5>
          </div>
          <div className="social-btn">
            <button className="btn-box-e">
              <img class="logo-e" src="./images/email.svg"></img>
              <span><a class="link email" href="mailto: neeshusharmaa@gmail.com">Email</a></span>
            </button>
            <button className="btn-box-l">
              <img class="logo-l" src="./images/linkedin.svg"></img>
              <span><a class="link linkedin" href="https://www.linkedin.com/in/neeshusharma/">LinkedIn</a></span>
            </button>
          </div>
         
          <section className="details">
            <div className="about">
              <h3>About</h3>
              <p>
                I am a frontend developer with a particular interest in making
                things simple and automating daily tasks. I try to keep up with
                security and best practices, and am always looking for new
                things to learn.
              </p>
            </div>
            <div className="interests">
              <h3>Interests</h3>
              <p>
                Gourmet. Music obsessed. Reader. Internet fanatic. Jazz 
                Drummer . Explorer. Travel geek. Pop culture ninja. Coffee
                fanatic.
              </p>
            </div>
          </section>
        </div>
        <footer className="footer">
          <img className="sm-logo" src="./images/facebook.svg" target="" alt="facebook"></img>
          <a href="https://www.linkedin.com/in/neeshusharma/"><img className="sm-logo" src="./images/github.svg" target="" alt="github" /></a>
          <a href="https://twitter.com/neeshusharmaa"><img className="sm-logo" src="./images/twitter.svg" target="" alt="twitter" /></a>
          <img className="sm-logo" src="./images/instagram.svg" target="" alt="instagram"></img>
          {/* <img className="sm-logo" src="./images/linkedin.svg" target="" alt="linkedin"></img> */}
        </footer>
      </div>
    </div>
  );
}
