"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import WebShare from "../Shear/WebShare";
import { Gallery, GallerySection } from "@/typings";
import { client } from "@/lib/sanity.client";
import Image from "next/image";
import urlFor from "@/lib/urlFor";



const AutoScrollingGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const controls = useAnimation();
  const timeRunning = 8000;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const newIndex = (currentIndex + 1) % images.length;
  //     setCurrentIndex(newIndex);
  //   }, 8000);

  //   return () => clearInterval(interval);
  // }, [currentIndex, images.length]);

  // const restartSlider = () => {
  //   controls.start({ opacity: 0, scale: 1 });

  //   setTimeout(() => {
  //     controls.start({ opacity: 1, scale: 1.2 });
  //     setCurrentIndex(0);
  //   }, 6000);
  // };

  // useEffect(() => {
  //   if (currentIndex === images.length - 1) {
  //     restartSlider();
  //   }
  // }, [currentIndex, images.length]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const newIndex = (currentIndex + 1) % images.length;
  //     setCurrentIndex(newIndex);
  //   }, timeRunning);

  //   return () => clearInterval(interval);
  // }, [currentIndex, images.length, timeRunning]);

  // const handleChangeImage = (increment: number) => {
  //   controls.start({ opacity: 0, scale: 1 });

  //   let newIndex = (currentIndex + increment) % images.length;
  //   setCurrentIndex(newIndex < 0 ? images.length - 1 : newIndex);

  //   controls.start({ opacity: 1, scale: 1.2 });

  //   if (newIndex === images.length - 1) {
  //     restartSlider();
  //   }
  // };

  // useEffect(() => {
  //   controls.start({
  //     filter: "blur(10px)",
  //     y: 50,
  //     opacity: 0,
  //   });
  //   controls.start({
  //     filter: "blur(0)",
  //     y: 0,
  //     opacity: 1,
  //     transition: { duration: 1, delay: 0.5, staggerChildren: 0.2 },
  //   });
  // }, [currentIndex, controls]);

  const [galleryData, setGalleryData] = useState<GallerySection>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch<GallerySection[]>(
          `*[_type == "gallerySection" ]{...,gallery[]->}`
        );
        setGalleryData(result[0]);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [setGalleryData]);
  if (!galleryData) {
    return (
      <div className=" w-full h-screen font-mono text-lime-500 flex justify-center items-center text-xl font-bold  ">
        Loading Gallery Section {""}
        <span className="animate-pulse">...</span>
      </div>
    ); // Loading state
  }

  return (
    <div className="relative h-screen overflow-hidden  ">
      <div className="flex justify-center items-center h-full overflow-hidden">
        <Link href="/#gallery">
          <div className=" absolute right-[-10px] top-[20%] cursor-pointer items-center z-50 ">
            <ArrowLeftCircleIcon
              width={40}
              height={40}
              className="mr-10 text-white  hover:scale-105 ease-in-out duration-300 hover:text-lime-500"
            />
          </div>
        </Link>
        <div className=" text-white absolute right-[-10px] top-[20%]  cursor-pointer items-center hover:text-blue-400 hover:scale-105 ease-in-out duration-300 z-50">
          <WebShare
          // key={project?._id}
          // title={project?.title}
          // url={`${BaseUrl}${project?.slug.current}`}
          />
        </div>

        <motion.div
          className="relative w-full h-full rounded-md "
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {galleryData?.gallery?.map((image, index) => (
            <div   key={index} className="flex">
              {image?.images?.map((imageSrc, imageIndex) => (
                <motion.div
                  key={imageIndex}
                  initial={{ opacity: imageIndex === currentIndex ? 1 : 0 }}
                  animate={{ opacity: imageIndex === currentIndex ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className={`w-full h-auto ${
                    imageIndex === currentIndex ? "block" : "hidden"
                  }`}
                  
                >
                  <Image
                    key={imageIndex}
                    className="w-full h-full object-cover rounded-lg"
                    src={urlFor(image?.artImage).width(500).height(500).url()}
                    fill
                    alt={`${imageIndex + 1}`}
                  />

                  <div className="absolute top-0 left-0 w-full h-full bg-black/10 " />

                  <motion.div
                    key={currentIndex}
                    className="absolute pl-20 lg:pl-44 md:pl-40 top-[25%] flex flex-col items-center justify-center z-50"
                    initial={{ filter: "blur(10px)", y: 50, opacity: 0 }}
                    animate={{ filter: "blur(0)", y: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 0.5,
                      staggerChildren: 0.2,
                    }}
                  >
                    <motion.div
                      key={imageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="text-white text-2xl font-bold mb-2 drop-shadow-lg z-50"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                      >
                        {image?.authorName}
                      </motion.div>
                      <motion.div
                        className="text-white text-5xl font-bold mb-2 pr-10 drop-shadow-lg z-50"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                      >
                        {image?.projectTitle}{" "}
                        <span className="text-lime-500 drop-shadow-lg z-50">
                          {image?.titleSpan}
                        </span>
                      </motion.div>
                      <motion.div
                        className="text-white text-2xl mb-4 drop-shadow-lg z-50"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                      >
                        {image?.categoryOrTag}
                      </motion.div>
                      <motion.div
                        className=" text-white flex justify-between space-x-2 pr-20 drop-shadow-lg z-50"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                      >
                        {/* Your lorem ipsum text goes here */}
                        {image?.paragraph}
                      </motion.div>
                      <div className="my-5 pr-20  ">
                        <Link
                          href={"/"}
                          className=" text-white font-medium sm:mr-10 text-center px-8  cursor-pointer inline-block py-3 w-full sm:w-fit rounded-full hover:scale-105 ease-in duration-300 bg-gradient-to-br from-lime-500 to-green-500"
                        >
                          More Detailes
                        </Link>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
           ))} 
        </motion.div>
      </div>
      <div
        className=" absolute inset-x-0 bottom-[10%] flex place-items-center items-center justify-center  px-10 
       "
      >
        {galleryData?.gallery?.map((image, index) => (
          <div   key={index} className="flex">
            {image?.images?.map((imageSrc, imageIndex) => (
              <motion.div
                key={imageIndex}
                className={`w-9 h-9 lg:w-25 sm:h-25 md:w-20 md:h-20 mx-2 relative rounded-lg cursor-pointer ${
                  imageIndex === currentIndex ? "border-2 border-lime-500" : ""
                }`}
                whileTap={{
                  scale: [1, 2, 2, 1, 1],
                  transition: { duration: 0.7 },
                }}
              >
                <Image
                  key={imageIndex}
                  className="w-full h-full object-cover rounded-lg"
                  src={urlFor(imageSrc).width(500).height(500).url()}
                  width={500}
                  height={500}
                  alt={`${imageIndex + 1}`}
                />
              </motion.div>
            ))}
          </div>
         ))} 
      </div>

      <div className="absolute inset-x-0  bottom-3 flex items-center justify-center ">
        <button
          className=" text-white mx-3 bg-gray-500/40 rounded-full w-8 h-8 items-center hover:scale-110 ease-in duration-300 hover:bg-lime-500 z-50"
          // onClick={() => handleChangeImage(-1)}
        >
          &lt;
        </button>
        {galleryData?.gallery?.map((image, index) => (
           <div key={index} className="flex">
           {image?.images?.map((imageSrc, imageIndex) => (
          <motion.div
            key={imageIndex}
            className={`w-4 h-4 mx-1 rounded-full cursor-pointer ${
              imageIndex === currentIndex ? "bg-lime-500" : "bg-gray-500/40"
            }`}
            // onClick={() => handleChangeImage(index - currentIndex)}
          ></motion.div>
          ))}
          </div>
         ))} 
        <button
          className=" text-white mx-3 bg-gray-500/40 rounded-full w-8 h-8 items-center hover:scale-110 ease-in duration-300 hover:bg-lime-500 z-50"
          // onClick={() => handleChangeImage(1)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default AutoScrollingGallery;
