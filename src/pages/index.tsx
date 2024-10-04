import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Home() {
  const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
  ];
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const startLoader = () => {
      const counterElement = document.querySelector<HTMLHeadingElement>(".counter");
      let currentValue = 0;

      const updateCounter = () => {
        if (currentValue === 100) return;
        currentValue += Math.floor(Math.random() * 10) + 1;

        if (currentValue > 100) currentValue = 100;
        if (counterElement) {
          counterElement.textContent = currentValue.toString();
        }
        setCurrentValue(Math.min(currentValue, 100));
        const delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
      };

      updateCounter();
    };

    startLoader();

    gsap.to(".counter", {
      opacity: 0,
      delay: 3.0,
      duration: 0.25,
    });

    gsap.to(".bar", {
      height: 0,
      delay: 3.5,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
      duration: 1.5,
    });

    // Animate the IIIT image
    gsap.from(".iiit", {
      delay: 3.5,
      scale: 2,
      x: "40vw",
      y: "40vh",
      transformOrigin: "center center",
    });

    gsap.from(".h1", {
      y: 800,
      delay: 4,
      stagger: {
        amount: 0.7,
      },
      ease: "power4.inOut",
      duration: 1.5,
    });

    gsap.from(".hero", {
      y: 800,
      opacity: 0,
      delay: 4,
      ease: "power4.inOut",
      duration: 2,
    });
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-300 overflow-hidden">
      <h1 className="lg:text-[10vw] counter text-white absolute flex justify-end items-end w-full h-full text-[15vw] p-2 font-carpenter z-30">
        {currentValue + "%"}
      </h1>

      <div className="lg:text-[10vw] overlay absolute flex w-screen h-screen">
        {[...Array(8)].map((_, idx) => (
          <div key={idx} className="bar w-[20vw] h-[105vh] bg-gray-900"></div>
        ))}
      </div>

      <div className="header flex justify-between p-4 w-full items-center">
        <div className="iiit relative w-[10vw] h-[20vh] mx-auto rounded-lg mb-5">
          <Image
            src="/iiit.png"
            alt="Panda"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex h1 lg:text-[10vw] sm:text-[10vw] md:text-[10vw] text-[10vw] font-bold font-carpenter leading-tight">
          <h1>I</h1>
          <h1>I</h1>
          <h1>I</h1>
          <h1>T</h1>
        </div>
        <div className="flex h1 lg:text-[10vw] sm:text-[10vw] md:text-[10vw] text-[10vw] font-bold font-carpenter leading-tight">
          <h1>K</h1>
          <h1>O</h1>
          <h1>T</h1>
          <h1>A</h1>
        </div>
        <div className="h1 lg:text-[10vw] sm:text-[10vw] md:text-[10vw] text-[10vw] font-bold font-carpenter leading-tight">
          -
        </div>
        <div className="h1 lg:text-[10vw] sm:text-[10vw] md:text-[10vw] text-[10vw] font-bold font-carpenter leading-tight">
          E
        </div>
        <div className="h1 lg:text-[10vw] sm:text-[10vw] md:text-[10vw] text-[10vw] font-bold font-carpenter leading-tight">
          V
        </div>
        <div className="h1 lg:text-[10vw] sm:text-[10vw] md:text-[10vw] text-[10vw] font-bold font-carpenter leading-tight">
          E
        </div>
        <div className="h1 lg:text-[10vw] sm:text-[10vw] md:text-[10vw] text-[10vw] font-bold font-carpenter leading-tight">
          N
        </div>
        <div className="h1 lg:text-[10vw] sm:text-[10vw] md:text-[10vw] text-[10vw] font-bold font-carpenter leading-tight">
          T
        </div>
        <div className="h1 lg:text-[10vw] sm:text-[10vw] md:text-[10vw] text-[10vw] font-bold font-carpenter leading-tight">
          S
        </div>
      </div>

      <div className="hero relative w-[calc(50vw-4em)] h-[70vh] mx-auto rounded-lg border-4 border-black overflow-hidden z-30">
        
      </div>
    </div>
  );
}
