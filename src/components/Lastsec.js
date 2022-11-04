import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Last from "./Last";

export default class Lastsec extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 7,
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
            slidesToShow:5,
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
            slidesToShow: 5,
            slidesToScroll: 2,
            infinite: true,
            
          },
        },
        {
          breakpoint: 1062,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
           
          },
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
           
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2,
            swipeToSlide: true,
            centerPadding: 50,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
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
        marginTop:14,
        marginLeft:60,
      }}>
        <h6 style={{fontWeight:'bold'}}>Top sellers</h6>
        <Slider {...settings}>
        {produ?.map((item, index) => {
          return <Last item={item} />;
        })}
        </Slider>
      </div>
    );
  }
}


const produ=[
    {
        id: 1,
        image: 'fic1.webp',
        rate:'4.92(3,337)-Czech Republic',
        line2:"Most popular",
        line3:"around the world",
        line4:"From 1,323/person"
    },
    {
        id: 2,
        image: 'fic2.webp',
        rate:'4.93(2,303)-Poland',
        line2:'Solve the mystery',
        line3:"escape holloween",
        line4:"From 2000/person"
    },
    {
        id: 3,
        image: 'fic3.webp',
        rate:'4.5(3,303)-Dubai',
        line2:'Feel the luxury',
        line3:'Adventuur ride',
        line4:"From 2500/person",
    },
    {
        id: 4,
        image: 'fic4.webp',
        rate:'3.4(2000)-Vietnam',
        line2:'Mystery escape room',
        line3:"Enjot the thrill",
        line4:"From 3000/person",
    },
    {
        id: 5,
        image: 'fic5.webp',
        rate: '4.4(3000)-Delhi',
        line2:'Food is love',
        line3:"foddis dayh out",
        line4:"From 1500/person",
    },
    {
        id: 6,
        image: 'fic6.webp',
        rate:'5(4000)-Himalayas',
        line2:'Snowwhite Sparkley',
        line3:"snowflakes",
        line4:"From 3000/person",
    },
    {
        id: 7,
        image: 'fic7.webp',
        rate:'4.5(3000)-Spain',
        line2:"No spain no game",
        line3:"Fabulous game",
        line4:"From 2000/person",
    },
    {
        id: 8,
        image: 'fic8.webp',
        rate:'3.4(2000)-America',
        line2:"State statues",
        line3:"The wonder world",
        line4:"From 3000/person",
    },
    {
        id: 9,
        image: 'fic9.webp',
        rate:'4.5(3000)-Paris',
        line2:"Paris bakery-cookery",
        line3:"bread is love",
        line4:"From 2400/person"
    },
    
];
