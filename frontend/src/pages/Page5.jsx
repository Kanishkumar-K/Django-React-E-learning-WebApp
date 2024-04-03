import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import img7 from './img/img7.png';
import img8 from './img/img8.png';
import { useEffect } from 'react';
import Navbar from './Navbar';


function Page5() {
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div style={{ 
      backgroundImage: "linear-gradient(to right, #ffefba, #ffffff)",
      width:"1378px" ,
      marginTop:"1923px",
      marginLeft:"-420px"
    }}> 

      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"00px" }}><br /><br />Webpack</h1><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' ,lineHeight: '1.6' , marginLeft:'200px'}}>Webpack is a tool used to combine multiple files into a single bundle (bundle.js).</p>
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' , lineHeight: '1.6',  marginLeft:'200px'}}>The main purpose of Webpack is to manage dependencies and optimize the build process for web applications.</p><br /><br />
      <div style={{marginLeft:"320px"}}>
        <img src={img7} height="250px" width="530px"/>
      </div>
      <br />

      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"00px" }}>Babel</h1><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' ,lineHeight: '1.6' , marginLeft:'200px'}}>Babel is a highly configurable compiler that lets us use newer JavaScript syntax, transforming it into older syntax that's supported <br/>on a wider range of platforms.</p><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' , lineHeight: '1.6',  marginLeft:'200px'}}>Babel comes in two parts: the core, and plugins. Each individual language feature that Babel can transform, such as ES2015 classes, <br />has a separate plugin. Collections of plugins are grouped into presets.</p><br />
      <div style={{marginLeft:"320px"}}>
        <img src={img8} height="300px" width="530px"/>
      </div>
      <br />

      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"00px" }}>npm</h1><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' ,lineHeight: '1.6' , marginLeft:'200px'}}>npm (Node Package Manager) is a package manager for JavaScript and the world's largest software registry. It consists of a<br />command-line client and an online database of public and private packages.</p><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' , lineHeight: '1.6',  marginLeft:'200px'}}>npm is used to install, share, and distribute code, as well as manage dependencies in projects. It is commonly used for managing  <br />packages and scripts in Node.js projects.</p><br />
     
      <Link to="/page6"><br /><br />
        <button style={{textAlign:"right", padding:"13px", borderRadius:"10px",backgroundColor:"#0dd943", color:"black", marginTop:"390px", float:"right", marginRight:"120px"}}>Hooks</button>
      </Link>
      <br />

      <Sidebar /> 
      <div>
        <p style={{  fontFamily: "Arial, Helvetica, sans-serif",  fontSize:"20px",textAlign: 'left', paddingLeft: '200px', paddingRight: '200px' }}><b>Summary</b></p><br />
      <p style={{  fontFamily: "Arial, Helvetica, sans-serif", fontSize:"17px", textAlign: 'justify', paddingLeft: '200px', paddingRight: '200px' }}>&#8226; Webpack is a tool used to bundle JavaScript files and other assets for web applications.</p>
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif",  fontSize:"17px",textAlign: 'justify', paddingLeft: '200px', paddingRight: '0px' }}>&#8226; Babel is a compiler that allows you to use modern JavaScript syntax while ensuring compatibility with older browsers.</p>
        <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize:"17px",  textAlign: 'justify', paddingLeft: '200px', paddingRight: '200px' }}>&#8226; npm is the package manager for Node.js, used for installing and managing dependencies in projects.</p>
      </div>

      <section style={{ backgroundColor:"#101010", color:"white", width:"1300px", marginLeft:"80px", marginTop:"230px", marginBottom:"-50px" }} >
      <Footer />
      </section>  
      <Navbar />
    </div>
  );
}

export default Page5;
