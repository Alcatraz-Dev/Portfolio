"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Gallery: React.FC = () => {
  const images = [
    "/image/one.png",
    "/image/two.png",
    "/image/three.png",
    "/image/four.png",
    "/image/one.png",
    "/image/two.png",
    "/image/three.png",
    "/image/four.png",
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const controls = useAnimation();
  const timeRunning = 8000;

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(newIndex);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const restartSlider = () => {
    controls.start({ opacity: 0, scale: 1 });

    setTimeout(() => {
      controls.start({ opacity: 1, scale: 1.2 });
      setCurrentIndex(0);
    }, 6000);
  };

  useEffect(() => {
    if (currentIndex === images.length - 1) {
      restartSlider();
    }
  }, [currentIndex, images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(newIndex);
    }, timeRunning);

    return () => clearInterval(interval);
  }, [currentIndex, images.length, timeRunning]);

  const handleChangeImage = (increment: number) => {
    controls.start({ opacity: 0, scale: 1 });

    let newIndex = (currentIndex + increment) % images.length;
    setCurrentIndex(newIndex < 0 ? images.length - 1 : newIndex);

    controls.start({ opacity: 1, scale: 1.2 });

    if (newIndex === images.length - 1) {
      restartSlider();
    }
  };

  useEffect(() => {
    controls.start({
      filter: "blur(10px)",
      y: 50,
      opacity: 0,
    });
    controls.start({
      filter: "blur(0)",
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.5, staggerChildren: 0.2 },
    });
  }, [currentIndex, controls]);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="flex justify-center items-center h-full">
        <motion.div
          className="relative w-full h-full rounded-md overflow-hidden"
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {images.map((url, index) => (
            <motion.div
              key={index}
              initial={{ opacity: index === currentIndex ? 1 : 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className={`w-full h-full ${
                index === currentIndex ? "block" : "hidden"
              }`}
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <motion.div
                key={currentIndex}
                className="absolute pl-20 lg:pl-44 md:pl-40 py-44 flex flex-col items-center justify-center"
                initial={{ filter: "blur(10px)", y: 50, opacity: 0 }}
                animate={{ filter: "blur(0)", y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, staggerChildren: 0.2 }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="text-white text-2xl font-bold mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    LUNDEV
                  </motion.div>
                  <motion.div
                    className="text-white text-5xl font-bold mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    DESIGN <span className="text-lime-500">SLIDER</span>
                  </motion.div>
                  <motion.div
                    className="text-white text-2xl mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    ANIMAL
                  </motion.div>
                  <motion.div
                    className="font-light text-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    {/* Your lorem ipsum text goes here */}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                    sequi, rem magnam nesciunt minima placeat, itaque eum neque
                    officiis unde, eaque optio ratione aliquid assumenda facere
                  </motion.div>
                  <div className="mt-4">
                    <button className="rounded-xl px-6 py-2 bg-gradient-to-br  from-lime-500 to-green-500 text-white hover:scale-105 transition duration-300 cursor-pointer">
                      Explore
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-40 flex place-items-center items-center justify-center overflow-x-scroll  px-10  scrollbar-hide
       ">
        {images.map((url, index) => (
          <motion.div
            key={index}
            className={`w-16 h-16 mx-2 relative overflow-hidden rounded-lg cursor-pointer ${
              index === currentIndex ? "border-2 border-lime-500" : ""
            }`}
            onClick={() => handleChangeImage(index - currentIndex)}
            whileTap={{
              scale: [1, 2, 2, 1, 1],
              transition: { duration: 0.7 },
            }}
          >
            <img
              className="w-full h-full object-cover rounded-lg"
              src={url}
              alt={`${index + 1}`}
              onClick={() => handleChangeImage(index - currentIndex)}
            />
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center mb-20">
        <button
          className="mx-3 bg-black/40 rounded-full w-8 h-8 items-center hover:scale-110 transition duration-400 hover:bg-lime-500"
          onClick={() => handleChangeImage(-1)}
        >
          &lt;
        </button>
        {images.map((url, index) => (
          <motion.div
            key={index}
            className={`w-4 h-4 mx-1 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-lime-500" : "bg-gray-500"
            }`}
            onClick={() => handleChangeImage(index - currentIndex)}
          ></motion.div>
        ))}
        <button
          className="mx-3 bg-black/40 rounded-full w-8 h-8 items-center hover:scale-110 transition duration-400 hover:bg-lime-500"
          onClick={() => handleChangeImage(1)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Gallery;
