import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Props from './Props';
import img11 from './img/img11.png';
import { useEffect } from 'react';
import Navbar from './Navbar';

function Page31() {
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div style={{ 
      backgroundImage: "linear-gradient(to right, #ffefba, #ffffff)",
      width:"1378px" ,
      marginTop:"1703px",
      marginLeft:"-420px"
    }}> 

      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"170px" }}><br /><br /><br />Props</h1><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' ,lineHeight: '1.6' , marginLeft:'200px', backgroundColor:"snow", padding:"5px", border:"1px solid black", marginRight:"170px", paddingLeft:"30px"}}><br />Props (short for properties) are a way of passing data from parent to child components in React.<br /><br />They are read-only, meaning that the child component receiving props cannot modify the props directly.<br />Props allow components to be reusable, customizable, and flexible.</p><br />
      <div style={{marginLeft:"300px"}}>
        <img src="https://i.stack.imgur.com/wqvF2.png" height="350px" width="790px"/><br /><br /><br />
      </div>
      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"00px" }}>Example </h1><br />

      <div style={{marginLeft:"240px"}}>
        <img src={img11} height="650px" width="590px"/>
      </div>
      <div style={{paddingLeft:"900px", marginTop:"-550px", marginRight:"200px"}}>
        <Props />
        </div>
      <div>
    </div>
    
    <Link to="/page4"><br /><br />
    <button style={{textAlign:"right", padding:"13px", borderRadius:"10px",backgroundColor:"#0dd943", color:"black", marginTop:"10px", float:"right", marginRight:"120px"}}>Lifecycle Methods</button>
      </Link>

      <Sidebar /> <br />
      <section style={{ backgroundColor:"#101010", color:"white", width:"1300px", marginLeft:"80px", marginTop:"100px", marginBottom:"-50px" }} >
       <Footer />
      </section>  
      <Navbar />
    </div>
  );
}

export default Page31;
