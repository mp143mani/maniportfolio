import React from "react";
import { useNavigate } from "react-router-dom";
import Typical from 'react-typical'
import './Home.css'

export default function Profile() {
  
  return (
    
    <div className="profile-container"  id="home">
      <div className="profile-parent" >
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">

              <a href="#">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-github" style={{ color: "#050505" }} />
              </a>
              <a href="#">
                <i
                  className="fa-brands fa-instagram"
                  style={{ color: "#e0067a" }}
                />
              </a>
              <a href="#">
                <i
                  className="fa-brands fa-facebook"
                  style={{ color: "#174ba6" }}
                />
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Manivenkatraj</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full stack Developer",
                    5000,
                    "UI/UX Designer",
                    5000,
                    //     "fddddddddds",
                    //     2000,
                    // "dfggrt",
                    //     2000,


                  ]}

                />
              </h1>
              <span className="profile-role-tagline">
                I have always had a great desire, becoming more of a person where I can find challenges in the work environment
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {" "}
              Hire Me{" "}
            </button>
            <a href="ehizcv.pdf" download='mani ehizcv.pdf'>
              <button className="btn primary-btn">Download</button>
            </a>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background">

          </div>
        </div>
      </div>
      <div className='footer-container'>
        <div className="footer-parent">
            <img src={require ('../../assets/Home/shape-bg.png')} alt='no internet conection'/>
        </div>
    </div>
   
    </div>
    
    
  );
}
