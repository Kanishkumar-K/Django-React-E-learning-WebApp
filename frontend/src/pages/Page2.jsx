import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import img10 from './img/img10.jpg';
import { useEffect } from 'react';
import Navbar from './Navbar';

function Page2() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div style={{ 
      backgroundImage: "linear-gradient(to right, #ffefba, #ffffff)",
      width:"1378px" ,
      marginTop:"1000px",
      marginLeft:"-390px"
    }}> 
      <br />      
      <br />      
      <br />
      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"00px" }}>Introduction to JSX</h1><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' ,lineHeight: '1.6' , marginLeft:'200px'}}>JSX is an extension to the JavaScript language that adds a new kind of expression, the JSX expression, used to create React elements.</p><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' , lineHeight: '1.6',  marginLeft:'200px'}}>JSX expressions are a concise syntax for calling the React.createElement API.</p><br />
     
      <div style={{backgroundColor: '#fff', marginLeft:'200px', padding: '10px'}}>
        <p style={{ color: '#010', fontSize: '16px', textAlign:'left' , lineHeight: '1.6' }}>React.createElement(type, props, ...children)</p>
      </div><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' , lineHeight: '1.6',  marginLeft:'200px'}}>We can use JSX expressions anywhere we could use any other expression, e.g. in a return statement or variable assignment.</p><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' , lineHeight: '1.6',  marginLeft:'200px'}}><b>Why JSX?</b><br />The XML-like syntax is typically more concise, easier to read, and visually looks a little like the generated UI (both are tree-like).<br/>We don't have to use JSX, but there are few disadvantages, so we probably should use it.</p><br />
      <div style={{marginLeft:"-10px"}}><br />
        <img style={{marginLeft:"400px"}} src={img10} height="300px" width="650px"/>
      </div>
      <Link to="/page3">
        <button style={{textAlign:"right", padding:"13px", borderRadius:"10px",backgroundColor:"#0dd943", color:"black", marginTop:"20px", float:"right", marginRight:"120px"}}>React Component</button>
      </Link>
      <br />
      <br />

      <Sidebar /> <br /><br />
      <section style={{ backgroundColor:"#101010", color:"white", width:"1300px", marginLeft:"80px", marginTop:"30px", marginBottom:"-50px" }} >
       <Footer />
      </section>  
      <Navbar />

    </div>
    
  );
}

export default Page2;
