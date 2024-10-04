import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="hover:opacity-100 absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 opacity-70 text-white rounded-full px-3 p-2 shadow-lg z-10 cursor-pointer"
      onClick={onClick}
    >
      &gt;
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="hover:opacity-100 absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 opacity-70 text-white rounded-full px-3 p-2 shadow-lg z-10 cursor-pointer"
      onClick={onClick}
    >
      &lt;
    </div>
  );
};

const sliderData = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1685736630644-488e8146a3dc?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Workshop on Foundation of AI for Beginners",
    date: "October 1, 2024",
  },
  {
    image:
      "https://images.unsplash.com/photo-1720048171419-b515a96a73b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    title: "Mountain Adventure",
    date: "September 28, 2024",
  },
  {
    image:
      "https://images.unsplash.com/photo-1727800347935-bfac85334cfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
    title: "Serene Forest",
    date: "September 15, 2024",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1727443795447-19e29ef8fffd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D",
    title: "Cityscape at Night",
    date: "August 20, 2024",
  },
  {
    image:
      "https://images.unsplash.com/photo-1727791962712-1d36ec09b068?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
    title: "Waves of Tranquility",
    date: "July 10, 2024",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576158114131-f211996e9137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9yYXRyYWl0JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
    title: "Morning Dew",
    date: "June 5, 2024",
  },
];

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="w-[90%] max-w-lg h-auto md:w-96 rounded-lg border p-1 ">
      <Slider {...settings}>
        {sliderData.map((item, index) => {
          const title =
            item.title.length > 28
              ? item.title.slice(0, 28) + "..."
              : item.title;
          return (
            <>
              <div
                className="flex flex-col items-center justify-center h-[300px] md:h-[400px] w-full relative  rounded-lg overflow-hidden "
                key={index}
              >
                <img
                  src={item.image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className=" mt-2 text-white text-xl font-bold text-center">
                  {title}
                </h1>
                <h6 className=" text-white text-xs font-medium text-center">
                  {item.date}
                </h6>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
}
