import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
      <br />
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Welcome to my portfolio website!</h1>
      <h2>I am Muhammad Abdullah</h2>
      
      <p style={{ fontSize: '18px' }}>Take a look around and learn more about me.</p>
      {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Link to="/about" style={{ margin: '0 10px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', textDecoration: 'none' }}>About Me</Link>
        <Link to="/contact" style={{ margin: '0 10px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', textDecoration: 'none' }}>Contact Me</Link>
        <Link to="/service" style={{ margin: '0 10px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', textDecoration: 'none' }}>Service</Link>
      </div> */}
    </div>
  
  );
};
export default Home