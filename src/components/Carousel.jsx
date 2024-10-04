import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

const sliderData = [
  {
    image: "https://plus.unsplash.com/premium_photo-1685736630644-488e8146a3dc?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Workshop on Foundation of AI for Beginners",
    date: "October 1, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1720048171419-b515a96a73b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    title: "Mountain Adventure",
    date: "September 28, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1727800347935-bfac85334cfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
    title: "Serene Forest",
    date: "September 15, 2024",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1727443795447-19e29ef8fffd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D",
    title: "Cityscape at Night",
    date: "August 20, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1727791962712-1d36ec09b068?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
    title: "Waves of Tranquility",
    date: "July 10, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1576158114131-f211996e9137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9yYXRyYWl0JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
    title: "Morning Dew",
    date: "June 5, 2024",
  },
];

export default function SimpleSlider({changeBg}) {
  const [expandedCard, setExpandedCard] = useState(null); 

  const closeIt = () => {
    setExpandedCard(null);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if (expandedCard !== null) {
      changeBg(true);
    } else {
      changeBg(false);
    }
  }, [expandedCard])
  return (
    <div className="w-[90%] h-auto" style={{ zIndex: 1000 }}>
      <Slider {...settings}>
        {sliderData.map((item, index) => (
          <Card
            key={index}
            index={index}
            item={item}
            title={item.title.length > 30 ? `${item.title.slice(0, 30)}...` : item.title}
            onClick={() => setExpandedCard(index)} 
          />
        ))}
      </Slider>

      {expandedCard !== null && (
        <div
          className="fixed w-full top-0 inset-0 flex items-center justify-center "
          onClick={closeIt} 
        >
          <div
            className="relative bg-white p-6 rounded-lg w-[80%] max-w-xl h-fit max-h-3/4 overflow-hidden shadow-lg"
            onClick={(e) => e.stopPropagation()} 
          >
            <button
              className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-900"
              onClick={closeIt}
            >
              &times;
            </button>
            <img
              src={sliderData[expandedCard].image} 
              alt={sliderData[expandedCard].title}
              className="w-full max-h-[70vh] object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{sliderData[expandedCard].title}</h2>
            <p className="text-gray-600">{sliderData[expandedCard].date}</p>
          </div>
        </div>
      )}
    </div>
  );
}
