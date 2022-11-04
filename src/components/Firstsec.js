import React, { Component } from "react";
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Firstcard from "./Firstcard";


export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "70px",
      slidesToShow: 3,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
      responsive: [
        {
          breakpoint: 1424,
          settings: {
            slidesToShow: 2.3,
            slidesToScroll: 1,
            initialSlide: 2,

            infinite: true,
            swipeToSlide: true,
            centerPadding: "70px",
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,

            infinite: true,
            swipeToSlide: true,
            centerPadding: "70px",
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
            initialSlide: 2,
            swipeToSlide: true,
            centerPadding: 50,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 5,
            swipeToSlide: true,
            centerPadding:'0px',
          } 
    
              
          
          
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
          }
        }
      ],
      
    };

    return (
      <div style={{
         marginTop:-25,
        marginLeft:60,
      }}>
        <h4 style={{fontWeight:'bold'}}>New this Week</h4>
        <Slider {...settings} >
        {produc?.map((item, index) => {
          return <Firstcard item={item} />;
        })}
        </Slider>
      </div>
    );
  }
}

const produc=[
    {
        id: 1,
        image: 'pic1.webp',
        line1:"Most popular",
        line2:"around the world",
    },
    {
        id: 2,
        image: 'pic2.webp',
        line1:"Great for",
        line2:"team building",
    },
    {
        id: 3,
        image: 'pic3.webp',
        line1:"Fun for",
        line2:"them",
    },
    {
        id: 4,
        image: 'pic1.webp',
        line1:"Fun for",
        line2:"them",
    },
    {
        id: 5,
        image: 'pic2.webp',
        line1:"Fun for",
        line2:"them",
    },
    
];