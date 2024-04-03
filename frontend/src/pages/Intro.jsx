import React from 'react';
import Slider from 'react-slick';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import crud from './img/crud.png';
import upcoming from './img/upcoming.png';
import Sidebar from './Sidebar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Navbar';
import bgi from './img/image4.png';

export default function Intro() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div style={{ 
      paddingTop: '20px'
      
    }}>  
      <Sidebar />
      <div style={{marginLeft:'223px', marginTop:'30px'}}>
      <Slider {...settings}>
        <div>
          <Card sx={{ maxWidth: 320, marginLeft:'0px'  }}>
            <Link to="/crud1" style={{ textDecoration: 'none' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="500"
                  image={crud}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    CRUD Application
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </div>

        <div>
          <Card sx={{ maxWidth: 320, margin: 0 }}>
            <Link to="" style={{ textDecoration: 'none' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="500"
                  image={upcoming}
                  alt="green iguana" 
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Upcoming..
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </div>

        <div>
          <Card sx={{ maxWidth: 320, margin: 0 }}>
            <Link to="" style={{ textDecoration: 'none' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="500"
                  image={upcoming}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Upcoming..
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </div>
      </Slider>
    </div>
    <Navbar />
    </div>
  );
}