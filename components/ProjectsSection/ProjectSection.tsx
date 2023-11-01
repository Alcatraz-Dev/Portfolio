"use client";

import urlFor from "@/lib/urlFor";
import { Project, ProjectSection } from "@/typings";
import {
  CalendarDaysIcon,
  FolderOpenIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import SearchBar from "./ProjectSearchBar";
import FilterTab from "./ProjectFilterTab";
import Colors from "../Colors/Colors";
import ClientSideRoute from "../ClientSideRoute";
import { client } from "@/lib/sanity.client";

// import ClientSideRoute from "./ClientSideRoute";

type Props = {
  projectSection: ProjectSection[];
  projects: Project[];
};
export const revalidate = 10;

const color = [Colors];

function ProjectsSction({ projectSection, projects }: Props) {
  return (
    <section id="projects" className="p-5 sm:p-10 section">
      {projectSection?.map((pr) => (
        <div
          key={pr?._id}
          className="mt-5 md:mt-0 text-left flex flex-col h-full"
        >
          <h2
            className={`text-4xl font-bold mb-4 ${pr?.classNameProjectSectionTitleColor} `}
          >
            {pr?.projectSectionTitle}
          </h2>
          <p className="text-base lg:text-lg ">{pr?.shortDescription}</p>
        </div>
      ))}

      <SearchBar />
      <FilterTab />
      

      {/* ))} */}
      {projects?.map((pr) => (
        <div key={pr?._id} className=" flex justify-center items-center py-10">
          <div className="flex overflow-x-scroll py-5 w-full scrollbar-hide space-x-5">
            <div
              key={pr?._id}
              className="max-w-sm min-w-[350px] backdrop-blur-xl bg-white/40  px-6 pt-6 pb-2 rounded-xl shadow-lg dark:bg-zinc-700/40 opacity-100"
            >
              <h1
              
                className={`mb-3 text-2xl font-bold ${pr?.projectTitleColor}`}
              >
                {pr?.title}
              </h1>

              <div className="relative ">
                <Image
                  key={pr?._id}
                  src={urlFor(pr?.mainImage).width(500).height(500).url()}
                  alt={pr?.title}
                  width={500}
                  height={500}
                  className=" w-full rounded-xl  "
                />

                <p
                  key={pr?._id}
                  className={`absolute top-0  text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg ${pr?.tagBgColor}`}
                >
                  {pr?.categories?.map((category) => (
                    <span key={category?._id}>{category?.title}</span>
                  ))}
                </p>

                <p
                  key={pr?._id}
                  className={`absolute right-0 top-0  text-gray-800 font-semibold py-1 px-3 rounded-bl-lg rounded-tr-lg`}
                >
                  <Image
                    src={urlFor(pr?.authorImage).width(500).height(500).url()}
                    alt={pr?.authorName}
                    width={50}
                    height={50}
                  />
                </p>

                <div key={pr?._id} className="mt-6 mb-6 ">
                  <span
                    className={`inline-flex items-center px-2  text-xs font-bold pointer-events-auto  ${pr?.statusClassName}`}
                  >
                    <span className="mr-1.5 flex justify-center h-2 w-2 items-center ">
                      <span
                        className={`absolute flex  w-2 h-2 rounded-full  opacity-75 animate-ping ${pr?.statusColor}`}
                      ></span>
                      <span
                        className={`relative inline-flex w-1 h-1 rounded-full ${pr?.statusColor}`}
                      ></span>
                    </span>
                    <span className="dark:text-neutral-400 ">
                      {pr?.statusName}
                    </span>
                  </span>
                </div>

                <p className="mt-4 italic text-gray-800 line-clamp-2 dark:text-gray-300 text-base font-light hover:line-clamp-none cursor-pointer">
                  {pr?.description}
                </p>
                <div className="flex items-center space-x-4 mt-3">
                  <div className="flex items-center">
                    <div className="flex items-center space-x-1">
                      <CalendarDaysIcon
                        width={20}
                        height={20}
                        className="mr-3"
                      />
                      <span className="font-mono">
                        {new Date(pr?.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </div>

                <div key={pr?._id} className="flex items-center space-x-4 mt-3">
                  <div className="flex items-center">
                    <div className="flex items-center space-x-1">
                      <UserIcon width={20} height={20} className="mr-3" />
                      <span className="font-mono">{pr?.authorName}</span>
                    </div>
                  </div>
                </div>
              </div>

              <ClientSideRoute
                key={pr?._id}
                route={`/project/${pr?.slug.current}`}
              >
                <button
                  key={pr?._id}
                  className={`flex items-center justify-center right-0 p-2 mt-4 mb-4 text-center text-sm font-bold w-full text-white py-2 
                rounded-lg shadow-lg hover:scale-105 ease-in duration-300 ${pr?.buttonBgColor} hover:${pr?.buttonHoverBgColor}  `}
                >
                  <span className="mr-3 my-1">
                    {pr?.buttonTitle} {""}
                    {pr?.title}
                  </span>
                  <Image
                    key={pr?._id}
                    src={urlFor(pr?.buttonIcon).width(500).height(500).url()}
                    alt={pr?.title}
                    width={20}
                    height={20}
                    className="flex items-center mb-1 "
                  />
                </button>
              </ClientSideRoute>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProjectsSction;
