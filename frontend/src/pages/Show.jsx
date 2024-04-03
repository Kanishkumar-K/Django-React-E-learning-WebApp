import React, { Component } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Import jwtDecode
import { Container, Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

// ErrorBoundary component to catch and handle errors gracefully
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

class App extends Component {
  state = {
    imageData: [],
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    const token = localStorage.getItem("authTokens");
    const decode = jwtDecode(token);
    const user_id = decode.user_id;

    axios.get(`http://localhost:8000/api/api/posts/?user_id=${user_id}`)
      .then(res => {
        this.setState({
          imageData: res.data,
          isLoading: false
        });
      })
      .catch(err => {
        this.setState({
          error: err.message,
          isLoading: false
        });
      });
  }

  render() {
    const { imageData, isLoading, error } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    const profileImage = imageData.length > 0 ? imageData[0].image : null;

    return (
      <ErrorBoundary>
        <Container maxWidth="sm">
          <Grid container spacing={2} justifyContent="center">
            {profileImage ? (
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <img
                  src={profileImage}
                  alt="Profile"
                  style={{ width: 200, height: 200, objectFit: 'cover', borderRadius: '50%' }}
                />
              </Grid>
            ) : (
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <div style={{ width: 150, height: 150, borderRadius: '50%', backgroundColor: '#ccc', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft:"200px" }}>
                  <PersonIcon style={{ fontSize: 120, color: '#fff' }} />
                </div>
              </Grid>
            )}
          </Grid>
        </Container>
      </ErrorBoundary>
    );
  }
}

export default App;
