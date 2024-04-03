import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ClassComponentImg from './img/img5.png';
import FunctionalComponentImg from './img/img6.png';
import { useEffect } from 'react';
import Navbar from './Navbar';

function Page3() {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div style={{ 
      backgroundImage: "linear-gradient(to right, #ffefba, #ffffff)",
      width:"1378px" ,
      marginTop:"1753px",
      marginLeft:"-420px"
    }}> 

      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"170px" }}><br /><br /><br />React Components</h1><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' ,lineHeight: '1.6' , marginLeft:'200px', backgroundColor:"snow", padding:"5px", border:"1px solid black", marginRight:"170px", paddingLeft:"30px"}}><br />React components are the building blocks of a React application. They are reusable, independent, and encapsulated pieces of code that represent a part of the UI. There are two main types of React components: Class Components and Functional Components.<br /><br /></p><br /><br />
      
      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"00px" }}>Class Components</h1><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' ,lineHeight: '1.6' , marginLeft:'200px' , paddingLeft:"30px"}}>Class components are ES6 classes that extend from React.Component. They have a render() method where the UI is defined. <br />Class components can manage state and have access to lifecycle methods such as componentDidMount, componentDidUpdate, <br />componentWillUnmount, etc.</p><br />
      <div style={{marginLeft:"260px"}}>
        <img src={ClassComponentImg} height="450px" width="930px"/>
      </div>
      
      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"50px" }}>Functional Components</h1><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' ,lineHeight: '1.6' , marginLeft:'200px' , paddingLeft:"30px"}}>Functional components are simple JavaScript functions that accept props and return React elements. They are also known as stateless components. Functional components are easier to read, test, and maintain. With the introduction of React Hooks, functional components <br />can also manage state and have lifecycle features.</p><br />
      <div style={{marginLeft:"260px"}}>
        <img src={FunctionalComponentImg} height="450px" width="830px"/>
      </div>

      <Link to="/page31"><br /><br />
        <button style={{textAlign:"right", padding:"13px", borderRadius:"10px",backgroundColor:"#0dd943", color:"black", marginTop:"30px", float:"right", marginRight:"120px"}}>Props</button>
      </Link>

      <Sidebar /> <br />
      <section style={{ backgroundColor:"#101010", color:"white", width:"1300px", marginLeft:"80px", marginTop:"100px", marginBottom:"-50px" }} >
      <Footer />
      </section>  
      <Navbar />
    </div>
  );
}

export default Page3;
