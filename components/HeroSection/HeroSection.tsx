"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import "../../styles/globals.css";
import { Link } from "react-scroll";
import { Hero } from "@/typings";
import Colors from "../Colors/Colors";
type Props = {
  hero: Hero[];
};

export const revalidate = 10;

const color = [Colors];

const HeroSection = ({ hero }: Props) => {
  return (
    <>
      <section id="home" className="section mt-40">
        {hero?.map((hr) => (
          <div key={hr?._id} className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >
              <h1 className=" mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                <span className={`${hr?.classNameHeroTitleColor}`}>
                  Hi there, I&apos;m{" "}
                </span>
                <br></br>
                <TypeAnimation
                  sequence={[
                    `${hr?.developerName}`,
                    1000,
                    `${hr?.skillOneTitle}`,
                    1000,
                    `${hr?.skillTowTitle}`,
                    1000,
                    `${hr?.skillthreeTitle}`,
                    1000,
                    `${hr?.skillfourTitle}`,
                    1000,
                    `${hr?.skillFiveTitle}`,
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h1>

              <p className="text-[#afafaf] text-base sm:text-lg mb-6 lg:text-xl">
                {hr?.shortBio}
              </p>
              {hr?.status?.map((st) => (
                <div key={st?._id}>
                  <div className="mt-8 mb-8 ">
                    <span
                      className={`inline-flex items-center px-2  text-xs font-bold pointer-events-auto  ${st?.className}`}
                    >
                      <span className="mr-1.5 flex justify-center h-2 w-2 items-center ">
                        <span
                          className={`absolute flex  w-2 h-2 rounded-full  opacity-75 animate-ping ${st?.color}`}
                        ></span>
                        <span
                          className={`relative inline-flex w-1 h-1 rounded-full ${st?.color}`}
                        ></span>
                      </span>
                      <span className="dark:text-neutral-400 ">{st?.name}</span>
                    </span>
                  </div>

                  <Link
                    to="contact"
                    smooth={true}
                    duration={1000}
                    spy={true}
                    className={`px-6 cursor-pointer inline-block py-3 w-full sm:w-fit rounded-full mr-4 hover:scale-105 ease-in duration-300 ${hr?.classNameHeroHireMeButtonColor}`}
                  >
                    Hire Me
                  </Link>
                  <a
                    href="/resume"
                    className={`px-1 inline-block  cursor-pointer py-1 w-full sm:w-fit rounded-full  hover:scale-105 ease-in duration-300 mt-3 ${hr?.classNameResumeMeButtonColor}`}
                  >
                    <span className="block bg-[#ffffff] dark:bg-[#333333] rounded-full px-5 py-2">
                      Resume
                    </span>
                  </a>
                </div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-4 place-self-center mt-4 lg:mt-0"
            ></motion.div>
          </div>
        ))}
      </section>
    </>
  );
};

export default HeroSection;
