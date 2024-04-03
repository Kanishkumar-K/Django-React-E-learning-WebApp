import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import Footer from './Footer';

const Article = () => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.div style={{ ...fade, padding: '50px' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}><br /><br /><br /><br />
        <h1 style={{ fontSize: '6rem', marginBottom: '20px', color: '#333' }}>REACT JS</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#555' }}>Welcome to ReactJS Tutorial! Learn ReactJS to build dynamic and interactive web applications.</p>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#555' }}>Discover the power of ReactJS! Elevate your web development skills and create stunning user interfaces with ease.</p>
        <Link to="/intro">
          <button style={{ backgroundColor: '#0dd943', color: 'white', padding: '20px 30px', fontSize: '1.2rem', borderRadius: '50px', border: 'none', cursor: 'pointer', textDecoration: 'none' }}>Get Started</button>
        </Link>
      </div>

      <div style={{ padding: '0 40px', textAlign: 'center' }}>
        <animated.div style={{ ...fade, marginBottom: '50px' }}>
          <div style={{ backgroundColor: 'white', border: '1px solid black', borderRadius: '10px', padding: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#333' }}>Why React?</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555' }}>
              React is a powerful JavaScript library for building user interfaces.
              It offers a component-based architecture, allowing for easy management of UI elements and state.
              With React, developers can create dynamic and interactive web applications efficiently.
            </p>
          </div>
        </animated.div>

        <animated.div style={{ ...fade, marginBottom: '50px' }}>
          <div style={{ backgroundColor: 'white', border: '1px solid black', borderRadius: '10px', padding: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#333' }}>Is React suitable for large-scale applications?</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555' }}>
              Yes, React is suitable for large-scale applications. Its component-based architecture and virtual DOM make it scalable and efficient.
              React also provides tools and libraries, such as Redux and React Router, which help manage state and routing in complex applications.
            </p>
          </div>
        </animated.div>

        <animated.div style={{ ...fade }}>
          <div style={{ backgroundColor: 'white', border: '1px solid black', borderRadius: '10px', padding: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#333' }}>How does React differ from other JavaScript frameworks?</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555' }}>
              Unlike traditional JavaScript frameworks like Angular, React is a library rather than a full-fledged framework.
              It focuses solely on the view layer of the application, allowing developers to integrate it seamlessly with other libraries and frameworks.
              React's virtual DOM and one-way data flow make it highly performant and suitable for building modern web applications.
            </p>
          </div>
        </animated.div>
      </div><br /><br /><br /><br />

      <Footer style={{ marginBottom: '-600px' }} />
    </animated.div>
  );
};

export default Article;
