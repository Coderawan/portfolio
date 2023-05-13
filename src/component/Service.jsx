import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = () => {
  return (
    <div className="service-container">
      <h1 className="service-title">My Services</h1>
      <div className="service-cards-container">
        <div className="service-card">
          <h2 className="service-card-title">Web Development</h2>
          <p className="service-card-text">
            I create beautiful, responsive and high-performing websites using modern web technologies.
          </p>
        </div>

        <div className="service-card">
          <h2 className="service-card-title">Web Development</h2>
          <p className="service-card-text">
            I create beautiful, responsive and high-performing websites using modern web technologies.
          </p>
        </div>
        
        <div className="service-card">
          <h2 className="service-card-title">Web Design</h2>
          <p className="service-card-text">
            I design clean, modern and user-friendly interfaces that are tailored to your needs and preferences.
          </p>
        </div>
        <div className="service-card">
          <h2 className="service-card-title">SEO Optimization</h2>
          <p className="service-card-text">
            I provide SEO services to help your website rank higher on search engines and increase your online visibility.
          </p>
        </div>
      </div>
      {/* <div className="service-links" style={{textAlign:"center"}}>
      <Link to="/" style={{ color: "red", fontSize: "20px", textDecoration:"none",margin:"10px"}}>Home</Link>
<Link to="/contact" style={{ color: "blue", fontSize: "20px",textDecoration:"none" ,margin:"10px"}}>Contact Me</Link>

      </div> */}
    </div>
  );
};

export default Service;