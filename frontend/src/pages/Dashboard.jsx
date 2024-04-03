import React, { useState, useContext, useEffect } from 'react';
import { Typography, Card, CardContent, Button, Box, Avatar } from '@mui/material';
import { jwtDecode } from 'jwt-decode';
import AuthContext from '../context/AuthContext';
import Navbar from './Navbar';
import { FaUser, FaEnvelope, FaIdBadge, FaClock, FaKey } from 'react-icons/fa';
import bgi from './img/image4.png';
import Show from './Show';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [response, setResponse] = useState("");
  const [tokenValid, setTokenValid] = useState(true);
  const [lastLogin, setLastLogin] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changePasswordError, setChangePasswordError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [newFullName, setNewFullName] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const { logoutUser } = useContext(AuthContext);
  let inactivityTimer;

  const token = localStorage.getItem("authTokens");
  const decode = jwtDecode(token);
  const user_id = decode.user_id;
  const username = decode.username;
  const email = decode.email;
  const full_name = decode.full_name;
  const tokenExpiry = new Date(decode.exp * 1000);
  const tokenValidityDuration = Math.floor((tokenExpiry - Date.now()) / (1000 * 60));
  const isActive = decode.is_active;

  return (
    <div className='dashboard-container' style={{ width: "103vw", height: "100vh", marginTop:"100px", marginLeft:"-600px"}}>
      <Navbar />
      <div className='dashboard' style={{ backgroundImage: `url(${bgi})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: 'calc(120vh - 100px)' }}>
      <br /><br /><br />
      <Typography variant="h3" gutterBottom style={{ color: '#000', fontFamily: 'roboto', fontSize:"35px", fontWeight: 'bold', marginTop: 0 , marginLeft:"150px"}}>Welcome, {username}</Typography><br />
      <br />
      <div style={{marginLeft:"-800px", marginTop:"10px"}}><Show /></div>
        <div className="content" style={{ display: 'flex',  flexDirection: 'column', alignItems: 'center' , marginTop:"-200px"}}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '800px' }}>
          <Card sx={{ maxWidth: "1200px", marginBottom: 10, marginTop:"1000px", padding:"30px", marginLeft:"170px" }}>
  <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <FaUser className="icon" />
      <Typography variant="h6" component="div" style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '22px', color: '#333', marginLeft: 10 }}>Username: </Typography>
      <Typography style={{ fontFamily: 'Arial', fontSize: '20px', color: '#555' }}>{username}</Typography>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <FaIdBadge className="icon" />
      <Typography variant="h6" component="div" style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '22px', color: '#333', marginLeft: 10 }}>User ID: </Typography>
      <Typography style={{ fontFamily: 'Arial', fontSize: '20px', color: '#555' }}>{user_id}</Typography>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <FaUser className="icon" />
      <Typography variant="h6" component="div" style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '22px', color: '#333', marginLeft: 10 }}>Full Name: </Typography>
      <Typography style={{ fontFamily: 'Arial', fontSize: '20px', color: '#555' }}>{full_name}</Typography>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <FaEnvelope className="icon" />
      <Typography variant="h6" component="div" style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '22px', color: '#333', marginLeft: 10 }}>Email: </Typography>
      <Typography style={{ fontFamily: 'Arial', fontSize: '20px', color: '#555' }}>{email}</Typography>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <FaClock className="icon" />
      <Typography variant="h6" component="div" style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '22px', color: '#333', marginLeft: 10 }}>Token Validity: </Typography>
      <Typography style={{ fontFamily: 'Arial', fontSize: '20px', color: '#555' }}>{tokenValidityDuration} minutes</Typography>
    </div>
  </CardContent>
</Card>

          </Box>
          <Button style={{backgroundColor:"#6beb34", color:"black", marginLeft:"-120px", marginTop:"-30px"}}><Link to="/profile" style={{ color: 'blue', textDecoration: 'none',color:"black" }}>Upload / Change Profile</Link></Button>

          <Button variant="contained" color="primary" onClick={() => window.location.href = '/'} style={{ marginTop: "-38px" , marginLeft:"320px"}}>
            Continue to Course
          </Button>
          <br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br />          
 
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
