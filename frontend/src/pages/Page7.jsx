import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import UseEffect from './UseEffect';
import img3 from './img/img3.png';
import { useEffect } from 'react';
import Navbar from './Navbar';

function Page7() {
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);


  return (
    <div style={{ 
      backgroundImage: "linear-gradient(to right, #ffefba, #ffffff)",
      width:"1430px" ,
      marginTop:"2129px",
      marginLeft:"-500px"
    }}> 

      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"00px" }}><br /><br /><br />UseEffect Hook </h1><br />
      <p style={{ color: '#010', fontSize: '18px', textAlign:'left' ,lineHeight: '1.6' , marginLeft:'200px'}}>The UseEffect Hook allows you to perform side effects in your components.<br />Some examples of side effects are: fetching data, directly updating the DOM, and timers.
      </p><br />
      <p style={{marginLeft:"00px"}}><img src="https://qph.cf2.quoracdn.net/main-qimg-043d835feb9d9333f81e97f858f37600-pjlq" width="500px" height="570px" /></p><br /><br />
      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"0px" }}>Example </h1><br />

   
      <div style={{marginLeft:"280px"}}>
        <img src={img3} height="450px" width="430px"/>
      </div>
      <div style={{paddingLeft:"800px", marginTop:"-400px" , width:"90%"}}>
      <h3>Output</h3><br />
        <UseEffect />
        </div>
      <div>
    </div>
    <br />
    <Link to="/"><br /><br />
    <button style={{textAlign:"right", padding:"13px", borderRadius:"10px",backgroundColor:"#0dd943", color:"black", marginTop:"710px", float:"right", marginRight:"120px"}}>Next Section</button>
      </Link>
      <br />
      <br />

      <Sidebar /> <br /><br />
      <div>
      <p style={{  fontSize: '18px', textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>&#8226; `useEffect` is a hook in React that allows you to perform side effects in function components. Side effects may include data fetching, subscriptions, or manually changing the DOM.</p>
      <p style={{  fontSize: '18px', textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>&#8226; In this component, `useEffect` is used to set up a timer that increments the counter every second.</p>
      <p style={{  fontSize: '18px', textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>&#8226; When the component mounts (`[]` as the second argument to `useEffect`), it creates an interval that increases the counter's value by 1 every second using `setCounter`.</p>
      <p style={{  fontSize: '18px', textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>&#8226; The return function inside `useEffect` acts as cleanup. It clears the interval when the component unmounts to avoid memory leaks or unnecessary computations.</p>
      <p style={{  fontSize: '18px', textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>&#8226; The counter state is initialized using `useState`, and it starts at 0.</p>
      <p style={{  fontSize: '18px', textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>&#8226; There's also a button labeled "Increment Counter" that calls the `handleIncrement` function when clicked, which manually increments the counter by 1.</p>
      <p style={{  fontSize: '18px', textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>&#8226; The background color of the container alternates between 'lightblue' and 'lightgreen' based on whether the counter is even or odd (`counter % 2 === 0`). This is done by dynamically setting the `backgroundColor` variable inside the component based on the counter value.</p>
    </div>
      <section style={{ backgroundColor:"#101010", color:"white", width:"1300px", marginLeft:"80px", marginTop:"230px", marginBottom:"-50px" }} >
        <Footer />
      </section>  
      <Navbar />
    </div>
  );
}

export default Page7;
