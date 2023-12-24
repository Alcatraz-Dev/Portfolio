"use client";
import React, { useTransition, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TabButton from "../TabButtons/TabButton";
import { About } from "@/typings";
import urlFor from "@/lib/urlFor";
import Colors from "../Colors/Colors";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

type Props = {
  about: About[];
};

const color = Colors;

type TabData = {
  title: string;
  id: string;
  content: React.ReactElement;
};

const AboutSection = ({ about }: Props) => {
  const TAB_DATA: TabData[] = [
    {
      title: "Skills",
      id: "skills",

      content: (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="list-disc pl-2"
          >
            {about?.map((aboutSkills) => (
              <div key={aboutSkills?._id}>
                <div className="flex-wrap text-sm font-medium text-center ">
                  <div className="container mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between ">
                    <div className="grid grid-cols-3 gap-5">
                      {aboutSkills?.skillsTab?.map((skills) => (
                        <div key={skills?._id}>
                          <p
                            key={skills?._id}
                            className=" flex justify-between space-x-2 "
                          >
                            <span className="flex justify-start mb-1 text-xs font-sm capitalize line-clamp-1 hover:line-clamp-none  ">
                              {skills?.skillName}{" "}
                            </span>
                            <span className="flex justify-end mb-1 text-xs font-sm capitalize line-clamp-1 hover:line-clamp-none ">
                              {skills?.skillProgress} %
                            </span>
                          </p>
                          <div
                            style={{ width: skills?.skillProgressBg }}
                            className="w-full bg-slate-400 dark:bg-gray-500 rounded-full h-2  "
                          >
                            <div
                              style={{ width: skills?.skillProgress }}
                              className={`h-2 rounded-full ${skills?.classNameSkillProgressBgColor}`}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </>
      ),
    },
    {
      title: "Education",
      id: "education",

      content: (
        <>
          {about?.map((aboutEducation) => (
            <motion.ul
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              key={aboutEducation?._id}
            >
              {aboutEducation?.educationTab?.map((education) => (
                <li
                  key={education?._id}
                  className=" mb-4 flex text-sm sm:text-start"
                >
                  <div className="container mx-auto max-w-6xl flex flex-col-reverse md:flex-row sm:mx-0 items-center justify-between">
                    <div className="list-disc pl-2">
                      <span className="flex justify-start ">
                        <Image
                          key={education?._id}
                          src={urlFor(education?.educationlistItemImage)
                            .width(500)
                            .height(500)
                            .url()}
                          alt={education?.educationName}
                          width={40}
                          height={40}
                          className={"mt-1"}
                        />
                        <p className="mt-3 ml-3 ">{education?.educationInfo}</p>
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </motion.ul>
          ))}
        </>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",

      content: (
        <>
          {about?.map((aboutCertificate) => (
            <ul key={aboutCertificate?._id}>
              {aboutCertificate?.certificateTab?.map((certificate) => (
                <motion.li
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  key={certificate?._id}
                  className=" mb-4 flex text-sm sm:text-start"
                >
                  <div className="container mx-auto max-w-6xl flex flex-col-reverse md:flex-row sm:mx-0 items-center justify-between">
                    <div className="list-disc pl-2">
                      <span className="flex justify-start  ">
                        <Image
                          key={certificate?._id}
                          src={urlFor(certificate?.certificatelistItemImage)
                            .width(500)
                            .height(500)
                            .url()}
                          alt={certificate?.certificateName}
                          width={40}
                          height={40}
                          className={"mt-3"}
                        />
                        <p className="mt-3 ml-3 ">
                          {certificate?.certificateInfo}
                        </p>
                      </span>
                    </div>
                    <Link
                      key={certificate?._id}
                      href={`${certificate?.certificateUrl.current}`}
                      target={"_blank"}
                      className=" flex justify-center items-center"
                    >
                      <div
                        className={`${certificate?.classNameCertificateUrlColor} mt-1 mr-2 `}
                      >
                        <span className="flex justify-between items-center">
                          {" "}
                          Show Certificate{" "}
                          <ArrowUpRightIcon
                            className=" ml-3"
                            width={10}
                            height={10}
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                </motion.li>
              ))}
            </ul>
          ))}
        </>
      ),
    },
  ];

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <>
      <section className="section" id="about">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {about?.map((ab) => (
            <div
              key={ab?._id}
              className="md:grid md:grid-cols-2 gap-8 items-center xl:gap-16 sm:py-16 xl:px-16"
            >
              <div className="relative flex-1 flex justify-center items-center">
                <Image
                  key={ab?._id}
                  src={urlFor(ab?.mainImage).width(500).height(500).url()}
                  alt={ab?.aboutSectionTitle}
                  width={500}
                  height={500}
                  className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-2xl"
                />

                <div className="lg:block absolute right-0 bottom-0  ">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      key={ab?._id}
                      src={urlFor(ab?.stempImage).width(100).height(100).url()}
                      alt={ab?.aboutSectionTitle}
                      width={100}
                      height={100}
                      className="object-contain animate-pulse  "
                    />
                  </motion.div>
                </div>
              </div>

              <div className="mt-5 md:mt-0 text-left flex flex-col h-full">
                <h2
                  className={`text-4xl font-bold mb-4 ${ab?.classNameAboutTitleColor} `}
                >
                  {ab?.aboutSectionTitle}
                </h2>
                <p className="text-base lg:text-lg ">{ab?.shortBio}</p>
                <div className="flex flex-row justify-start mt-8">
                  <TabButton
                    selectTab={() => handleTabChange("skills")}
                    active={tab === "skills"}
                  >
                    {" "}
                    Skills{" "}
                  </TabButton>
                  <TabButton
                    selectTab={() => handleTabChange("education")}
                    active={tab === "education"}
                  >
                    {" "}
                    Education{" "}
                  </TabButton>
                  <TabButton
                    selectTab={() => handleTabChange("certifications")}
                    active={tab === "certifications"}
                  >
                    {" "}
                    Certifications{" "}
                  </TabButton>
                </div>
                <div className="mt-8">
                  {TAB_DATA.find((t) => t.id === tab)?.content}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default AboutSection;
