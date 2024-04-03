import React from 'react';
import Slider from 'react-slick';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import react from './react.png';
import vue from './vue.jpg';
import angular from './angular.jpg';
import Navbar from '../Navbar';
import './List.css';

export default function Intro() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginLeft: '40px', marginRight: '40px', marginTop: '30px' }}>
      <h2><br /><br /><br />Available<br />Courses👉</h2>

      <div>
        <Card sx={{ width: 300, height: 300, marginLeft: '20px', marginRight: '20px' }}>
          <Link to="https://react.dev/learn" style={{ textDecoration: 'none' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={react}
                alt="React JS"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  React JS
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </div>

      <div>
        <Card sx={{ width: 300, height: 300, marginRight: '20px' }}>
          <Link to="https://angular.io/docs" style={{ textDecoration: 'none' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={angular}
                alt="Angular JS"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Angular JS
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </div>

      <div>
        <Card sx={{ width: 300, height: 300, marginRight: '20px' }}>
          <Link to="https://vuejs.org/guide/introduction" style={{ textDecoration: 'none' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={vue}
                alt="Vue JS"
              />
                  <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Vue JS
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </div>

    </div>
  );
}
