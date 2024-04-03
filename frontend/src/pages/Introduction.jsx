import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import imgIntro from './img/intro.png';
import { useEffect } from 'react';

function Introduction() {
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div style={{ 
      backgroundImage: "linear-gradient(to right, #ffefba, #ffffff)",
      width:"1378px" ,
      marginTop:"2050px",
      marginLeft:"-400px",
      fontFamily: "Arial, Helvetica, sans-serif"

    }}> 
      <h1 style={{  fontFamily: "Arial, Helvetica, sans-serif",color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'160px', marginTop:"00px" }}><br /><br />Welcome to React</h1><br />
      <p style={{  fontFamily: "Arial, Helvetica, sans-serif",color: '#010',  textAlign:"justify", fontSize: '21px', textAlign:'left' ,lineHeight: '1.6' , marginLeft:'200px', marginRight:"200px"}}>React is a JavaScript library for building user interfaces, developed and maintained by Facebook. It is widely used for building single-page applications and user interfaces for web and mobile applications.<br /> Create React App (CRA) is the officially recommended way to create single-page React applications. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.
      </p><br />        
      <img style={{paddingLeft:"300px"}}src="https://www.tutorialandexample.com/wp-content/uploads/2019/11/Getting-started-with-Reactjs.png" /><br /><br /><br />
      
      <div style={{      fontFamily: "Arial, Helvetica, sans-serif"
}}>
          <h1 style={{  fontFamily: "Arial, Helvetica, sans-serif",color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"00px" }}>Installing Node.js and npm</h1><br />
          <p style={{  fontFamily: "Arial, Helvetica, sans-serif",textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>Before you can start using Create React App or any other JavaScript tooling, you need to have Node.js and npm installed on your machine. Follow these steps to install Node.js and npm:</p>
          <ol style={{  fontFamily: "Arial, Helvetica, sans-serif",textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>
            <li>Visit the <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js website</a>.</li>
            <li>Download the appropriate installer for your operating system.</li>
            <li>Run the installer and follow the installation instructions.</li>
            <li>Once Node.js is installed, npm will also be installed automatically.</li>
            <li>To verify that Node.js and npm are installed correctly, open a terminal or command prompt and type the following commands:</li>
            <ul>
              <li><code>node -v</code> (This should print the installed version of Node.js.)</li>
              <li><code>npm -v</code> (This should print the installed version of npm.)</li>
            </ul>
          </ol>
        </div><br /><br />
      <h1 style={{  fontFamily: "Arial, Helvetica, sans-serif",color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"00px" }}>Getting Started with CRA</h1>
 
      <div style={{paddingLeft:"800px", marginTop:"-400px" , width:"90%"}}>
        <div style={{marginLeft:"-620px"}}>
        <p style={{marginLeft:"00px", marginTop:"420px"}}><img src={imgIntro} width="800px" height="200px" /></p>

      </div>
      </div>
      <div>
        <Link to="/page2">
          <button style={{textAlign:"right", padding:"13px", borderRadius:"10px",backgroundColor:"#0dd943", color:"black", marginTop:"630px", float:"right", marginRight:"120px"}}>Introduction to JSX</button>
        </Link>
        
        <Sidebar />
       
        
        <div>
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif", textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>&#8226; React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application.</p>
          <p style={{  fontFamily: "Arial, Helvetica, sans-serif",textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>&#8226; Create React App is a tool built by developers at Facebook to help you build React applications. It saves you from time-consuming setup and configuration, so you can focus on writing code rather than configuring build tools.</p>
          <p style={{  fontFamily: "Arial, Helvetica, sans-serif",textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>&#8226; To create a new app, you can run `npx create-react-app my-app` and then `cd my-app`. This will create a new directory called `my-app` and set up a new React project inside it.</p>
          <p style={{  fontFamily: "Arial, Helvetica, sans-serif",textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>&#8226; After creating a new app, you can start it by running `npm start` or `yarn start` inside the `my-app` directory. This will start the development server and open your new React application in your default web browser.</p>
        </div>

      </div>
      <section style={{ backgroundColor:"#101010", color:"white", width:"1300px", marginLeft:"100px", marginTop:"230px", marginBottom:"-50px" }}>
       <Footer />
      </section>  
      <Navbar />

    </div>
  );
}

export default Introduction;
