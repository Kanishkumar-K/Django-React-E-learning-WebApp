import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUserCircle, FaSignOutAlt } from 'react-icons/fa'; // Import icons
import AuthContext from '../context/AuthContext'; 
import './New.css';
import { FaCalendarCheck, FaCog } from 'react-icons/fa';
import { Modal, Button } from '@mui/material';

function Navbar() {
  const { user, logoutUser } = useContext(AuthContext); 
  const [showMenu, setShowMenu] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleLogout = () => {
    setShowConfirmationModal(true);
  };

  const confirmLogout = () => {
    logoutUser();
  };

  return (
    <nav style={{ backgroundColor: '#171717', color: 'white', width: '100%', position: 'fixed', top: 0, left: 0, zIndex: 9999, fontFamily: 'Arial, sans-serif' }}>
      <ul style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', margin: 0, fontSize: '16px', listStyle: 'none' }}>
        <li>
          <Link to="/" className='new0' style={{ color: 'white', textDecoration: 'none', marginRight: '18px' }}>Home</Link>
          <Link to="/about" className='new0' style={{ color: 'white', textDecoration: 'none', marginRight: '18px' }}>About</Link>
          <Link to="/products" className='new0' style={{ color: 'white', textDecoration: 'none', marginRight: '18px' }}>Courses</Link>
          <Link to="/contacts" className='new0'style={{ color: 'white', textDecoration: 'none', marginRight: '18px' }}>Contacts</Link>
          <Link to="/attendance" className='new0' style={{ color: 'white', textDecoration: 'none', marginRight: '18px' }}>Attendance</Link> {/* New line for Attendance tab */}
        </li>
        <li style={{ fontSize: '16px', position: 'relative' }} className="user-info">
          {user ? (
            <>
              <span style={{ marginRight: '30px', display: 'flex', alignItems: 'center' }}>
                <FaUserCircle style={{ marginRight: '10px' }} />
                Welcome, {user.full_name} &nbsp;&nbsp;
                <button onClick={() => setShowMenu(!showMenu)} style={{ backgroundColor: 'transparent', color: 'white', border: 'none', cursor: 'pointer', fontSize: '16px', marginLeft: '10px' }}>
                <FaBars /></button>
              </span> 
      
            </>
          ) : (
            <Link to="/signup" style={{ color: 'white', textDecoration: 'none', marginRight: '10px', display: 'flex', alignItems: 'center' }}>
              <FaUserCircle style={{ marginRight: '5px' }} />
              Sign Up
            </Link>
          )}
          {showMenu && user && (
            <div style={{ backgroundColor: '#171717', color: 'white', padding: '10px', position: 'absolute', top: '40px', right: '0', fontFamily: 'Arial, sans-serif', borderRadius: '5px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)', zIndex: '100' }}>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px', fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                  <Link to="/dashboard" className='new0' style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', ':hover': { color: 'lightgreen' } }}>
                    <FaUserCircle style={{ marginRight: '5px' }} />
                    Profile
                  </Link>
                </li>

                <li style={{ marginBottom: '10px', fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <Link to="/attendance" className='new0' style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', ':hover': { color: 'lightgreen' } }}>
                  <FaCalendarCheck style={{ marginRight: '5px' }} />
                  Attendance
                </Link>
              </li>
              <li style={{ marginBottom: '10px', fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <Link to="/settings" className='new0' style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', ':hover': { color: 'lightgreen' } }}>
                  <FaCog style={{ marginRight: '5px' }} />
                  Settings
                </Link>
              </li>


                <li style={{ fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                  <button className='new0'
                    style={{ 
                      backgroundColor: 'transparent', 
                      color: 'white', 
                      border: 'none', 
                      cursor: 'pointer', 
                      fontSize: '16px',
                    }} 
                    onClick={handleLogout}>
                    <FaSignOutAlt style={{ marginRight: '5px' }} />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>

      {/* Confirmation Modal */}
      <Modal
        open={showConfirmationModal}
        onClose={() => setShowConfirmationModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '5px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)' }}>
          <h2 id="modal-modal-title">Logout Confirmation</h2><br/>
          <p id="modal-modal-description">Are you sure you want to logout?</p>
          <div style={{ textAlign: 'center' }}>
            <Button onClick={() => setShowConfirmationModal(false)} variant="contained" color="secondary" style={{ marginRight: '10px' }}>Cancel</Button>
            <Button onClick={confirmLogout} variant="contained" color="primary">Logout</Button>
          </div>
        </div>
      </Modal>
    </nav>
  );
}

export default Navbar;
