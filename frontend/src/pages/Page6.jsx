import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import UseState from './UseState';
import img2 from './img/img2.png';
import { useEffect } from 'react';
import Navbar from './Navbar';

function Page6() {
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div style={{ 
      backgroundImage: "linear-gradient(to right, #ffefba, #ffffff)",
      width:"1378px" ,
      marginTop:"1493px",
      marginLeft:"-420px"
    }}> 

      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"170px" }}><br /><br /><br />Hooks</h1><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' ,lineHeight: '1.6' , marginLeft:'200px', backgroundColor:"snow", padding:"5px", border:"1px solid black", marginRight:"170px", paddingLeft:"30px"}}><br />Hooks are specially-implemented functions that let us add functionality to React components beyond just creating and returning React elements.<br /><br />With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. <br />Functional Components can have state behaviour using hooks.<br /></p><br />
      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"00px" }}>UseState Hook </h1><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' ,lineHeight: '1.6' , marginLeft:'200px' , paddingLeft:"30px"}}>The React "useState" Hook allows us to track state in a function component.
      </p><br />
      <p style={{paddingLeft:"150px"}}><img src="https://media.graphassets.com/QvKtGhSzSXe8a0851syB" width="600px" height="200px" /></p><br /><br />
      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"00px" }}>Example </h1><br />

      <div style={{marginLeft:"380px"}}>
        <img src={img2} height="450px" width="430px"/>
      </div>
      <div style={{paddingLeft:"600px", marginTop:"-400px"}}>
        <UseState />
        </div>
      <div>
    </div>
    <br />
    <div style={{fontSize:"18px", textAlign: 'left',  paddingRight: '50px', marginTop:"300px", marginLeft:"40px" }}> 
      <p>-  UseState Hook: UseState(0) initializes a state variable named count and the initial value is set to be zero.&nbsp;&nbsp;&nbsp;&nbsp;<br />- Inside the component, count holds the current value of the state, and setCount is used to update its value.</p>
    </div>
    
    <Link to="/page7"><br /><br />
    <button style={{textAlign:"right", padding:"13px", borderRadius:"10px",backgroundColor:"#0dd943", color:"black", marginTop:"20px", float:"right", marginRight:"120px"}}>UseEffect</button>
      </Link>

      <Sidebar /> <br />
      <section style={{ backgroundColor:"#101010", color:"white", width:"1300px", marginLeft:"80px", marginTop:"100px", marginBottom:"-50px" }} >
      <Footer />
      </section>  
      <Navbar />
    </div>
  );
}

export default Page6;
