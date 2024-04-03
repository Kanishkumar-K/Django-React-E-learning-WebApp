import React, { useState } from 'react';
import './Page4.css';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Navbar from './Navbar';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Page4 = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  const [activeComponent, setActiveComponent] = useState('Mounting'); // Initial value set to 'Mounting'

  const components = [
    { 
      title: 'Mounting', 
      content: 'Mounting phase is the one where the component is created using constructor() with the given Props and default state. When the component is inserted into the DOM using render(). componentDidMount() allows to execute the React code when the component is already placed'+
               'componentDidMount() is called when the component is inserted into the DOM.'
    },
    { 
      title: 'Updating', 
      content: 'getDerivedStateFromProps() is called after the constructor and before render(). It provides an opportunity to update the component\'s state based on changes in props before the initial render.'
    },
    { 
      title: 'Unmounting', 
      content: 'The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.' +
               'React has only one built-in method that gets called when a component is unmounted: componentWillUnmount()' 
    },
    { 
      title: 'Error Boundary', 
      content: 'This phase handles errors that occur during rendering, in lifecycle methods, or in the constructors of the whole tree below them.' 
    },
  ];
  
  return (
    <div className="page-container" style={{ 
      backgroundImage: "linear-gradient(to right, #ffefba, #ffffff)",
    }}> <br /><br />

      <h2 className="heading"><br /><center>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React Component Lifecycle</center></h2><br />
      <p style={{  fontFamily: "Arial, Helvetica, sans-serif", color:"black", fontSize:"20px", marginLeft:"100px", textAlign:"justify"}}>
      A React component undergoes three phases in its lifecycle: mounting, updating, and unmounting. The mounting phase is when a new component is created and inserted into the DOM or, in other words, when the life of a component begins. This can only happen once, and is often called “initial render.” The updating phase is when the component updates or re-renders. This reaction is triggered when the props are updated or when the state is updated. This phase can occur multiple times, which is kind of the point of React. The last phase within a component's lifecycle is the unmounting phase, when the component is removed from the DOM.
    </p>
    <br />
    <br />   
      <div className="component-container">
        <div className="component-list">
          {components.map((component, index) => (
            <div
              key={index}
              className={`component-name ${activeComponent === component.title ? 'active' : ''}`}
              onClick={() => setActiveComponent(component.title)}
            >
              {component.title}
            </div>
          ))}
        </div>
        <div className="component-content">
          {activeComponent && (
            <div className="content-wrapper">
              <h3>{activeComponent}</h3>
              <p>{components.find(c => c.title === activeComponent).content}</p>
            </div>
          )}
        </div>
      </div>
      <br />
      <br />
    <img className="img1" src="https://i.imgur.com/PVPr1dK.jpg" height="500px" width="900px"></img>

          <br />
          <br />
      <Sidebar />

      <br />
      <Link to="/page5">
            <button style={{textAlign:"right", padding:"13px", borderRadius:"10px",backgroundColor:"#0dd943", color:"black", marginTop:"20px", float:"right", marginRight:"120px"}}>Webpack and Babel </button>
      </Link>
  

      <section style={{ backgroundColor:"#101010", color:"white", width:"1350px", marginLeft:"-110px", marginTop:"130px", marginBottom:"-60px" }} >
      <Footer />
      </section>  
      <Navbar />
    </div>
  );
};

export default Page4;
