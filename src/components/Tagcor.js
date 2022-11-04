import React, { Component } from "react";
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Tagcard from "./Tagcard";

export default class Tagcor extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "40px",
      slidesToShow: 13,
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
            slidesToShow:4,
            slidesToScroll: 1,
            initialSlide: 2,

            infinite: true,
            swipeToSlide: true,
            centerPadding: "70px",
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow:8.5,
            slidesToScroll: 2,
            infinite: true,
            
          },
        },
        {
          breakpoint: 1062,
          settings: {
            slidesToShow:8,
            slidesToScroll: 2,
            infinite: true,
           
          },
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow:7.3,
            slidesToScroll: 2,
            infinite: true,
           
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 1,
            initialSlide: 2,
            swipeToSlide: true,
            centerPadding: 50,
          }
        },
        {
          breakpoint: 586,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 5,
            swipeToSlide: true,
            centerPadding:'0px',
          } 
    
              
          
          
        },
        {
          breakpoint: 473,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeToSlide: true,
          }
        }
      ],
    };
    return (
      <div style={{
        marginTop:14,
        marginLeft:60,
      }}>
        
        <Slider {...settings}>
        {product?.map((item, index) => {
          return <Tagcard item={item} />;
        })}
        </Slider>
      </div>
    );
  }
}

const product = [
    {
      id: 1,
     line1:"Baking",
    },
    {
      id: 2,
      line1:"Arts", 
    },
    {
      id: 3,
      line1:"Dates", 
    },
    {
      id: 4,
      line1:"Drinks", 
    },
    {
      id: 5,
      line1:"Writing",
    },
    {
      id: 6,
      line1:"Dates",
    },
    {
        id: 7,
        line1:"Culture",
      } ,
      {
        id: 8,
        line1:"culture",
      } 
      ,{
        id: 9,
        line1:"Writing",
      } ,
      {
        id: 10,
        line1:"Cook",
      },
      {
        id: 11,
        line1:"Dessert",
      },
      {
        id: 12,
        line1:"Cook",
      },
      {
        id: 13,
        line1:"Arts",
      },
      {
        id: 14,
        line1:"culture",
      },
  ];