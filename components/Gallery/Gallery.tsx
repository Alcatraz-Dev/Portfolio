// 'use client'
// import React, { useEffect, useState } from "react";
// import { motion, useAnimation } from "framer-motion";
// import styles from "./index.module.css";


// const Gallery: React.FC = () => {
//   const images = ["/image/one.png", "/image/tow.png", "/image/three.png"];
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const controls = useAnimation();
//   const timeRunning = 8000;
//   const timeAutoNext = 9000;

//   const restartSlider = () => {
//     controls.start({ opacity: 0, scale: 1 });

//     setTimeout(() => {
//       controls.start({ opacity: 1, scale: 1.2 });
//       setCurrentIndex(0);
//     }, 3000);
//   };

//   useEffect(() => {
//     if (currentIndex === images.length - 1) {
//       restartSlider();
//     }
//   }, [currentIndex, images.length]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const newIndex = (currentIndex + 1) % images.length;

//       setCurrentIndex(newIndex);
//     }, timeRunning);

//     return () => clearInterval(interval);
//   }, [currentIndex, images.length]);

//   useEffect(() => {
//     controls.start({ opacity: 1, scale: 1.2 });

//     const interval = setInterval(() => {
//       // Start animation controls for the current list item
//       controls.start({ opacity: 0, scale: 1 });
  
//       // Change the current image index
//       let newIndex = (currentIndex + 1) % images.length;
//       setCurrentIndex(newIndex);
  
//       // Reset animation controls for the next list item with shorter delay
//       controls.start({ opacity: 1, scale: 1.2 });
  
//       // Check if the current image is the last one
//       if (newIndex === images.length - 1) {
//         // If so, trigger a restart after a short delay
//         setTimeout(restartSlider, 8000); // Adjust the delay as needed
//       }
//     }, timeRunning);
  
//     // Clean up interval on component unmount
//     return () => clearInterval(interval);
//   }, [currentIndex, images.length, controls, restartSlider, timeRunning]);
//   const handleChangeImage = (increment: number) => {
//     controls.start({ opacity: 0, scale: 1 });

//     let newIndex = (currentIndex + increment) % images.length;
//     setCurrentIndex(newIndex < 0 ? images.length - 1 : newIndex);

//     controls.start({ opacity: 1, scale: 1.2 });

//     if (newIndex === images.length - 1) {
//       restartSlider();
//     }
//   };

//   return (
//     <div className={styles.carousel}>
//       <div className={styles.list}>
//         <div className={styles.item}>
//           {images.map((url, index) => (
//             <motion.div
//               key={index}
//               className={`w-full h-full ${index === currentIndex ? "block" : "hidden"}`}
//               initial={{ opacity: 0, scale: 1 }}
//               animate={controls}
//             >
//               <img className="w-full h-full object-cover" src={url} alt={`${index + 1}`} />
//               <div className={styles.content}>
//                 <div className="pl-10">
//                   <div className={styles.author}>LUNDEV</div>
//                   <div className={styles.title}>DESIGN SLIDER</div>
//                   <div className={styles.topic}>ANIMAL</div>
//                   <div className={styles.des}>
//                     {/* Your lorem ipsum text goes here */}
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam
//                     nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione
//                     aliquid assumenda facere
//                   </div>
//                   <div className={styles.buttons}>
//                     <button className=" rounded-md z-50 hover:scale-105 ease-in duration-300 bg-gradient-to-br from-lime-500 to-green-500">
//                       Explore
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className={styles.thumbnail}>
//           <div className={styles.item}>
//             <div className="thumbnail flex absolute bottom-4 pl-96 left-1/2 transform -translate-x-1/2 z-50">
//               {images.map((url, index) => (
//                 <motion.div
//                   key={index}
//                   className={` w-40 h-56 mr-2 relative overflow-hidden rounded-lg cursor-pointer z-50 ${
//                     index === currentIndex ? "" : ""
//                   }`}
//                   onClick={() => handleChangeImage(index - currentIndex)}
//                   whileTap={{
//                     scale: [1, 2, 2, 1, 1],
//                     transition: { duration: 0.7 },
//                   }}
//                 >
                 
//                    <img
//                     className="w-full h-full object-cover rounded-lg"
//                     src={url}
//                     alt={`${index + 1}`}
//                   /> 
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="z-50">
//           <div className={styles.arrows}>
//             <button onClick={() => handleChangeImage(-1)}>&lt;</button>
//             <button onClick={() => handleChangeImage(1)}>&gt;</button>
//           </div>

//           <div className={styles.time}></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;
import React from "react";

function Gallery() {
  return <div>Gallery</div>;
}

export default Gallery;
