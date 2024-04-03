import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Import jwt-decode library
import AuthContext from '../context/AuthContext'; // Import the AuthContext
import { Link } from 'react-router-dom'; // Import Link for navigation
import Image4 from './img/image4.png';
import './New.css';
import Navbar from './Navbar';
import Modal from 'react-modal'; // Import react-modal
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

Modal.setAppElement('#root'); // Set the root element for accessibility

const AttendanceRecords = () => {
  const { authTokens } = useContext(AuthContext); // Access authTokens from the context
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingStaff, setLoadingStaff] = useState(true); // State for loading user type determination
  const [isStaff, setIsStaff] = useState(true); // State to determine if the user is staff (admin)
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [filters, setFilters] = useState({}); // State for filters
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(true); // State to control modal visibility
  const recordsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Decode JWT token to extract user_id
        const decodedToken = jwtDecode(authTokens.access);
        const userId = decodedToken.user_id;
        setIsStaff(userId === 7);
        setLoadingStaff(false); // Set loadingStaff to false once the user type is determined

        // Fetch attendance records based on user type
        const url = isStaff
          ? 'http://localhost:8000/api/admin/'
          : `http://127.0.0.1:8000/api/user/${userId}/attendance/`;
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${authTokens.access}`,
          },
        });

        // If fetching admin data, filter out details of user with userId 7
        const adminRecords = isStaff ? response.data.filter(user => user.id !== 7) : response.data;
        const uniqueRecords = isStaff
          ? adminRecords
          : adminRecords.filter((record, index, self) => {
              const threshold = 60 * 1000; // 1 minute in milliseconds
              const currentIndexTime = new Date(record.login_time).getTime();
              const duplicateIndex = self.findIndex(
                (r) => Math.abs(new Date(r.login_time).getTime() - currentIndexTime) <= threshold
              );
              return duplicateIndex === index;
            });
        setRecords(uniqueRecords);
        setLoading(false);
        setShowModal(false); // Close the modal when data is loaded
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [authTokens.access, isStaff]);

  // Function to handle searching
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle filtering
  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Function to apply filtering and searching
  const filteredRecords = records.filter((record) => {
    // Apply search filter
    if (searchTerm && !record.user_email.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    // Apply other filters
    for (let key in filters) {
      if (filters[key] && record[key] !== parseInt(filters[key])) {
        return false;
      }
    }
    return true;
  });

  // Pagination Logic
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredRecords.slice(indexOfFirstRecord, indexOfLastRecord);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ width: "100%", paddingTop: "80px" }} className="new"><br />
      <Navbar /><br />
      <h3 style={{ textAlign: 'center', marginLeft: "-900px" }}>{isStaff ? 'User List' : 'Attendance Records'}</h3><br />

      {/* Loading Modal */}
      <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)} style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' }, content: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px' } }}>
        <center><h2>Loading Attendance Data</h2></center>
        <center><p>Please wait...</p></center>
      </Modal>
      {!isStaff && (
        <div style={{ marginBottom: '20px' }}>
          {/* Add more filter options as needed */}
        </div>
      )}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <TableContainer component={Paper} style={{ margin: '0 auto', width: '90vw', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', overflow: 'hidden' }}>
            <Table aria-label="attendance records table">
              <TableHead style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>
                <TableRow>
                  <TableCell style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>{isStaff ? 'Learner Id' : 'Learner Id'}</TableCell>
                  <TableCell style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>{isStaff ? 'User Name' : 'Full Name'}</TableCell>
                  <TableCell style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>{isStaff ? 'User Email' : 'Email'}</TableCell>
                  {isStaff && (
                    <>
                      <TableCell style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>{isStaff ? 'Date Joined' : ''}</TableCell>
                      <TableCell style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>{isStaff ? 'First Login' : ''}</TableCell>
                      <TableCell style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>{isStaff ? 'Attendance' : ''}</TableCell>
                    </>
                  )}
                  {!isStaff && (
                    <>
                      <TableCell style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>Login Date</TableCell>
                      <TableCell style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>Login Time</TableCell>
                    </>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {currentRecords.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>{isStaff ? record.id : record.user}</TableCell>
                    <TableCell style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>{isStaff ? record.username : record.user_full_name}</TableCell>
                    <TableCell style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>{isStaff ? record.email : record.user_email}</TableCell>
                    {isStaff && (
                      <>
                        <TableCell style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>{isStaff ? record.date_joined.split(' ')[0] : ''}</TableCell>
                        <TableCell style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>{isStaff ? record.date_joined.split(' ')[1] : ''}</TableCell>
                        <TableCell style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>
                          <Link to="/all" style={{ color: 'blue', textDecoration: 'none' }}>View Attendance</Link>
                        </TableCell>
                      </>
                    )}
                    {!isStaff && (
                      <>
                        <TableCell style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>{record.login_time ? record.login_time.split(' ')[0] : ''}</TableCell>
                        <TableCell style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>{record.login_time ? record.login_time.split(' ')[1] : ''}</TableCell>
                      </>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {isStaff && (
            <>
              <br />
              <Button variant="contained" style={{ backgroundColor: "#43f74c", color: "black", marginLeft: "650px" }} component={Link} to="/form">MANAGE LEAVE REQUESTS</Button>
            </>
          )}

          {!isStaff && (
            <>
              <br />
              <div style={{ display: "inline-block", marginLeft: "570px" }}>
                <Button variant="contained" style={{ backgroundColor: "#eb5d44", color: "black" }} component={Link} to="/leave">APPLY FOR LEAVE</Button>
              </div>
              <div style={{ display: "inline-block", marginLeft: "30px" }}>
                <Button variant="contained" style={{ backgroundColor: "#43f74c", color: "black" }} component={Link} to="/form">VIEW LEAVE STATUS</Button>
              </div>
            </>
          )}
          {/* Pagination */}
          <br />
          <br />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', marginLeft: "0px" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: '#43f74c',
                color: 'white',
                marginRight: '10px',
                cursor: 'pointer',
                outline: 'none',
              }}
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {'<'}
            </Button>
            <span style={{ margin: '0 20px', fontSize: '16px' }}>Page {currentPage}</span>
            <Button
              variant="contained"
              style={{
                backgroundColor: '#43f74c',
                color: 'white',
                marginLeft: '10px',
                cursor: 'pointer',
                outline: 'none',
              }}
              onClick={() => paginate(currentPage + 1)}
              disabled={currentRecords.length < recordsPerPage}
            >
              {'>'}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default AttendanceRecords;
