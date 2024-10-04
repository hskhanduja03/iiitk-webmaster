import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import Link from "next/link";

const sliderData = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1685736630644-488e8146a3dc?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Workshop on Foundation of AI for Beginners",
    date: "October 1, 2024",
    description:
      "An introductory workshop on the basics of Artificial Intelligence, covering foundational concepts and practical applications in various fields. Ideal for beginners looking to explore AI.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1720048171419-b515a96a73b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    title: "Mountain Adventure",
    date: "September 28, 2024",
    description:
      "Join us for an exciting mountain adventure that includes hiking, camping, and exploring breathtaking views. Perfect for nature lovers and adventure seekers.",
  },
  // ... other items
];

export default function SimpleSlider({ changeBg }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://webteam-assignments.onrender.com/events"
      );
      const data = await response.json();
      setSliderData(data.data); // Update the sliderData with fetched data
    };

    fetchData();
  }, []);

  const closeIt = () => {
    setExpandedCard(null);
  };

  const truncateDescription = (description, maxLength = 100) => {
    if (description.length > maxLength) {
      return `${description.slice(0, maxLength)}...`;
    }
    return description;
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
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    changeBg(expandedCard !== null);
  }, [expandedCard]);

  return (
    <div className="w-[90%] h-auto" style={{ zIndex: 1000 }}>
      <Slider {...settings}>
        {sliderData.map((item, index) => (
          <Card
            key={index}
            index={index}
            item={item}
            title={
              item.title.length > 30
                ? `${item.title.slice(0, 30)}...`
                : item.title
            }
            onClick={() => setExpandedCard(index)}
          />
        ))}
      </Slider>

      {expandedCard !== null && (
        <div
          className="fixed w-full top-0 inset-0 flex  items-center justify-center transition-all duration-300"
          onClick={closeIt}
        >
          <div
            className="relative  gap-2 lg:grid lg:grid-cols-5 md:grid md:grid-cols-5 sm:overflow-y-scroll sm:grid-cols-1 bg-white p-6 rounded-lg w-[90%] max-w-4xl h-fit  shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 p-1 px-4 bg-gray-700 text-2xl rounded-lg text-white hover:text-gray-200"
              onClick={closeIt}
            >
              &times;
            </button>
            <div className="col-span-3 h-full flex justify-center items-center object-cover">
              <Link href={sliderData[expandedCard].imageurl}>
                <img
                  src={sliderData[expandedCard].imageurl}
                  alt={sliderData[expandedCard].title}
                  className="w-full max-h-[70vh] object-cover rounded-lg mb-4"
                />
              </Link>
            </div>
            <div className=" col-span-2 overflow-y-scroll">
              <div className=" p-4 w-full h-full max-h-[70vh]">
                <h2 className="text-2xl font-bold mb-2">
                  {sliderData[expandedCard].title}
                </h2>
                <p className="text-gray-600 text-xs relative">{sliderData[expandedCard].date}</p>
                <h1 className="text-xl font-medium mb-2 mt-4">About </h1>
                <p>{sliderData[expandedCard].description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
