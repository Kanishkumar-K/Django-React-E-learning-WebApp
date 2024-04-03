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
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      age: data.get('age'),
      examDate: data.get('examDate'),
      location: data.get('location'),
    });
    // Redirect to payment page with form data
    // This is a sample redirection, you might need to adjust it according to your routing setup
    // history.push('/Payment', { formData: { ...formData } });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://wallpapers.com/images/high/coding-background-9izlympnd0ovmpli.webp)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register for React Course
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                type="number"
                autoComplete="age"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="examDate"
                label="Exam Date"
                name="examDate"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                &nbsp;&nbsp;&nbsp;Location:
                <Select style={{ marginLeft:'70px' }}
                  labelId="location-label"
                  id="location"
                  name="location"
                  fullWidth
                  defaultValue="Remote"
                >
                  <MenuItem value="Chennai">Chennai</MenuItem>
                  <MenuItem value="Bangalore">Bangalore</MenuItem>
                  <MenuItem value="Remote">Remote</MenuItem>
                </Select>
              </Box><br /><br />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Accept Terms and Conditions"
              />
              <Button type="submit" variant="contained" fullWidth>
                Register
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
