import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '40px 0', textAlign: 'center', fontFamily: 'Arial, sans-serif', marginLeft: "-53px", marginBottom: "-200px", marginRight: "-50px" }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}><br />
        <div style={{ flex: '1', textAlign: 'left', marginRight: '50px' }}>
          <h3 style={{ fontSize: '22px', marginBottom: '20px', color: '#fff' }}>Useful Links</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '7px' }}><a href="#about" style={{ fontSize: '20px',color: '#fff', textDecoration: 'none' }}>About Us</a></li>
            <li style={{ marginBottom: '7px' }}><a href="#services" style={{ fontSize: '20px',color: '#fff', textDecoration: 'none' }}>Our Services</a></li>
            <li style={{ marginBottom: '7px' }}><a href="#contact" style={{ fontSize: '20px',color: '#fff', textDecoration: 'none' }}>Contact Us</a></li>
          </ul>
        </div>
        <div style={{ flex: '1', textAlign: 'left', marginRight: '50px' }}>
          <h3 style={{ fontSize: '22px', marginBottom: '20px', color: '#fff' }}>Connect with Us</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '7px' }}><a href="#" style={{fontSize: '20px', color: '#fff', textDecoration: 'none' }}><FaFacebook style={{ marginRight: '5px' }} />Facebook</a></li>
            <li style={{ marginBottom: '7px' }}><a href="#" style={{ fontSize: '20px',color: '#fff', textDecoration: 'none' }}><FaTwitter style={{ marginRight: '5px' }} />Twitter</a></li>
            <li style={{ marginBottom: '7px' }}><a href="#" style={{ fontSize: '20px',color: '#fff', textDecoration: 'none' }}><FaInstagram style={{ marginRight: '5px' }} />Instagram</a></li>
            <li style={{ marginBottom: '7px' }}><a href="#" style={{ fontSize: '20px',color: '#fff', textDecoration: 'none' }}><FaLinkedin style={{ marginRight: '5px' }} />LinkedIn</a></li>
          </ul>
        </div>
        <div style={{ flex: '1', textAlign: 'left' }}>
          <h3 style={{ fontSize: '22px', marginBottom: '20px', color: '#fff' }}>Subscribe to Our Newsletter</h3>
          <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input type="email" placeholder="Enter your email" style={{ border: 'none', backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '10px', width: '100%', marginBottom: '10px', color: '#fff' }} /><br />
            <button type="submit" style={{ backgroundColor: '#fff', color: '#333', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Subscribe</button>
          </form>
        </div>
      </div>
      {/* Map Component Placeholder */}
      <div style={{ marginTop: '40px', height: '300px', backgroundColor: 'lightgray', width: '60%', marginLeft: "300px" }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9108671463046!2d80.22798197454661!3d12.977552514748789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dcd0fb35a7b%3A0x65ceccd028077e0f!2sTrillion%20Thoughts%20Technologies!5e0!3m2!1sen!2sin!4v1711714049664!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 'none' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>


      <div style={{ marginTop: '40px' }}>
        <p style={{ fontSize: '18px', color: '#fff', marginLeft: "-30px" }}>© 2024 ReactJS Tutorial. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
