import React, { useState, useContext, useEffect } from 'react';
import useAxios from "../utils/useAxios";
import { jwtDecode } from 'jwt-decode';
import { Typography, TextField, Button, Grid, Card, CardContent, Tab, Tabs, IconButton } from '@mui/material';
import { AccountCircle, VpnKey } from '@mui/icons-material';
import Navbar from './Navbar';
import bgi from './img/image4.png';
import Swal from 'sweetalert2';
import AuthContext from '../context/AuthContext';

const Settings = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changePasswordError, setChangePasswordError] = useState(null);
  const [newUsername, setNewUsername] = useState(""); 
  const [tabValue, setTabValue] = useState(0);
  const api = useAxios();
  const token = localStorage.getItem("authTokens");
  const { logoutUser } = useContext(AuthContext);
  let inactivityTimer;

  const decode = jwtDecode(token);
  const user_id = decode.user_id;
  const username = decode.username;

  const handleInactivityLogout = () => {
    logoutUser();
    clearTimeout(inactivityTimer);
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put("/change-password/", { old_password: oldPassword, new_password: newPassword });
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setChangePasswordError(null);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Password changed successfully!',
      });
    } catch (error) {
      console.error("An error occurred while changing password:", error);
      setChangePasswordError("Error changing password");
    }
  };

  const handleEditProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put("/edit-profile/", { username: newUsername });
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Profile updated successfully! Login again to View Changes',
      });
    } catch (error) {
      console.error("An error occurred while updating profile:", error);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Profile updated successfully! Login again to see the changes',
      });
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await api.delete("/delete-account/");
      logoutUser();
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Account deleted successfully!',
      });
    } catch (error) {
      console.error("An error occurred while deleting account:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to delete account. Please try again later.',
      });
    }
  };

  useEffect(() => {
    const checkTokenValidity = () => {
      if (token) {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now()/1000;
        if (decodedToken.exp < currentTime) {
          logoutUser();
        }
      }
    };

    inactivityTimer = setTimeout(handleInactivityLogout, 60 * 60 * 1000); // 1 hour
    checkTokenValidity();

    return () => {
      clearTimeout(inactivityTimer);
    };

  }, [token, logoutUser]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className='dashboard-container' style={{ height: "100vh", width: "100vw", marginLeft:"-600px", marginTop:"100px", backgroundImage: `url(${bgi})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Navbar /><br /><br />       
      <h2 style={{paddingLeft:"140px", color: '#010'}}>Account Settings</h2><br /> 
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab icon={<VpnKey />} label="Change Password" />
        <Tab icon={<AccountCircle />} label="Edit Profile" />
      </Tabs>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6}>
          {tabValue === 0 && (
            <Card style={{width:"80%", margin: "0 auto"}}>
              <CardContent>
                <Typography variant="h4" gutterBottom style={{ textAlign: 'center', color: '#333' }}>Change Password</Typography>
                <form onSubmit={handleChangePassword}>
                  <TextField fullWidth type="password" label="Old Password" value={oldPassword} required onChange={(e) => setOldPassword(e.target.value)} InputProps={{ style: { color: '#333' } }} /><br /><br />
                  <TextField fullWidth type="password" label="New Password" value={newPassword} required onChange={(e) => setNewPassword(e.target.value)} InputProps={{ style: { color: '#333' } }} /><br /><br />
                  <TextField fullWidth type="password" label="Confirm New Password" value={confirmPassword} required onChange={(e) => setConfirmPassword(e.target.value)} InputProps={{ style: { color: '#333' } }} /><br /><br />
                  <Button type="submit" variant="contained" color="primary" fullWidth style={{ background: 'linear-gradient(to right, #4caf50, #4caf50, #2e7d32)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)' }}>Change Password</Button>
                  {changePasswordError && <Typography color="error">{changePasswordError}</Typography>}
                </form>
              </CardContent>
            </Card>
          )}
          {tabValue === 1 && (
            <Card style={{width:"80%", margin: "0 auto"}}>
              <CardContent>
                <Typography variant="h4" gutterBottom style={{ textAlign: 'center', color: '#333' }}>Edit Profile</Typography><br />
                <form onSubmit={handleEditProfile}>
                  <TextField fullWidth required label="Current Username" InputProps={{ style: { color: '#333' } }} /><br /><br />
                  <TextField fullWidth label="New Username" value={newUsername} required  onChange={(e) => setNewUsername(e.target.value)} InputProps={{ style: { color: '#333' } }} /><br /><br /><br /><br />
                  <Button type="submit" variant="contained" color="primary" fullWidth style={{ background: 'linear-gradient(to right, #2196f3, #2196f3, #1976d2)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)' }}>Save Changes</Button><br />
                </form>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Settings;

