import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import { Radio, RadioGroup, FormControl, FormLabel, InputLabel, MenuItem, Select } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const defaultTheme = createTheme();

export default function PaymentForm() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [mode, setMode] = useState('');
  const [location, setLocation] = useState('');
  const [examDate, setExamDate] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isRequiredEmpty, setIsRequiredEmpty] = useState(false); // State to track if any required field is empty

  const paymentAmount = 1000;

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("Form submitted"); // Log to check if the form submission is triggered
    
    // Check if any required field is empty
    if (!name || !course || !mode || (mode === 'Onsite' && !location) || !examDate) {
      // If any required field is empty, set isRequiredEmpty to true and return
      setIsRequiredEmpty(true);
      console.log("Form submission prevented: Required fields are empty");
      return;
    }
    
    // All required fields are filled, you can proceed with form submission
    setIsRequiredEmpty(false);
    console.log({ name, course, mode, location, examDate });
  };
  

  const handlePayNow = () => {
    toast.success('Payment successful');
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const generateReceipt = () => {
    const receiptContent = `
      COURSE REGISTRATION SYSTEM
      
      Name: ${name}
      Course: ${course}
      Payment Mode: ${mode}
      Location: ${location}
      Exam Date: ${examDate} (10:00 AM - 1:00 PM)
      Payment Amount: ${paymentAmount}
      Account Number: ${accountNumber}
      Phone Number: ${phoneNumber}
      
      Thank you for registering with our Course Registration System. 
      Your payment has been successfully processed.
      All the best for your Assessment.
      
      Assessment Rules:
      - One attempt only
      - Duration: 180 minutes
      - Maximum Marks: 100
      - Pass Mark: 40 or more
      - Certificate will be issued upon passing.
    `;
    
    const pdf = new jsPDF();
    
    pdf.text(receiptContent, 10, 10); 
    
    pdf.save('receipt.pdf');
  };
  

  return (   
    <div style={{marginLeft:"-430px"}}>
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ marginTop:'-43px',  height: '90vh', justifyContent: 'center', alignItems: 'center',
 marginLeft:'-173px', width:'1540px' }}>
        <CssBaseline />
        <Grid item xs={12} sm={6} md={5} component={Paper} elevation={4} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
        
            <Typography component="h1" variant="h5">
              Registration and Payment
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <TextField required
                margin="normal"
                fullWidth
                label="Name"
                autoComplete="name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={isRequiredEmpty && !name} // Set error if the field is empty and it's required
              />
              <FormControl fullWidth sx={{ mb: 1 }}>
                <InputLabel>Course</InputLabel>
                <Select
                  value={course}
                  onChange={handleCourseChange}
                  required
                  error={isRequiredEmpty && !course} // Set error if the field is empty and it's required
                >
                  <MenuItem value="" disabled>Select Course</MenuItem>
                  <MenuItem value="React">React</MenuItem>
                  <MenuItem value="Angular">Angular</MenuItem>
                  <MenuItem value="Vue">Vue</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ mb: 1 }}>
                <InputLabel>Mode</InputLabel>
                <Select
                  value={mode}
                  onChange={(e) => setMode(e.target.value)}
                  required
                  error={isRequiredEmpty && !mode} // Set error if the field is empty and it's required
                >
                  <MenuItem value="" disabled>Select Mode</MenuItem>
                  <MenuItem value="Onsite">Onsite</MenuItem>
                  <MenuItem value="Remote">Remote</MenuItem>
                </Select>
              </FormControl>
              {mode === 'Onsite' && (
                <FormControl fullWidth sx={{ mb: 1 }}>
                  <InputLabel>Location</InputLabel>
                  <Select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    error={isRequiredEmpty && !location} // Set error if the field is empty and it's required
                  >
                    <MenuItem value="" disabled>Select Location</MenuItem>
                    <MenuItem value="Chennai">Chennai</MenuItem>
                    <MenuItem value="Bangalore">Bangalore</MenuItem>
                    <MenuItem value="Trichy">Trichy</MenuItem>
                    <MenuItem value="Salem">Salem</MenuItem>
                    <MenuItem value="Madurai">Madurai</MenuItem>
                    <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                  </Select>
                </FormControl>
              )}
              <TextField
                margin="normal"
                fullWidth
                required
                id="examDate"
                label="Exam Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                  style: { textOverflow: 'ellipsis' }
                }}
                value={examDate}
                onChange={(e) => setExamDate(e.target.value)}
                sx={{ mb: 1 }}
                error={isRequiredEmpty && !examDate} // Set error if the field is empty and it's required
              />
              <TextField
                margin="normal"
                fullWidth
                label="Payment"
                value={`${paymentAmount}`}
                InputProps={{
                  readOnly: true,
                }}
                sx={{ mb: 2 }}
              />
              <FormControlLabel
                control={<Checkbox value="acceptTerms" color="primary" />}
                label="I agree to the terms and conditions"
                sx={{ mb: 2 }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleOpenModal}
                sx={{ mb: 2 }}
              >
                Select Payment Method
              </Button>
     
            </Box>
          </Box>
       
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="payment-method-modal"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Payment Details
          </Typography>
          <Typography variant="body1" gutterBottom>
            Username: {name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Course: {course}
          </Typography>
          {mode === 'Onsite' && (
            <Typography variant="body1" gutterBottom>
              Location: {location}
            </Typography>
          )}
          <Typography variant="body1" gutterBottom>
            Exam Date: {examDate}
          </Typography>
          <FormControl component="fieldset" sx={{ mt: 2 }}>
            <FormLabel component="legend">Payment Method</FormLabel>
            <RadioGroup value={mode} onChange={(e) => setMode(e.target.value)}>
              <FormControlLabel value="Credit Card" control={<Radio />} label="Credit Card" />
              <FormControlLabel value="PayPal" control={<Radio />} label="PayPal" />
              <FormControlLabel value="Bank Transfer" control={<Radio />} label="Bank Transfer" />
            </RadioGroup>
          </FormControl>
          <TextField
            margin="normal"
            fullWidth
            required
            label="Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            sx={{ mt: 2 }}
          />
          <TextField
            margin="normal"
            fullWidth
            required
            label="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            onClick={handlePayNow}
            variant="contained"
            sx={{ mr: 2 }}
          >
            Pay Now
          </Button>
          <Button
            onClick={generateReceipt}
            variant="contained"
            sx={{ mt: 2 , marginTop:'-1.7px'}}
          >
            Generate Receipt
          </Button>
        </Box>
      </Modal>
      <ToastContainer />
    </ThemeProvider>
    </div>
  );
}
