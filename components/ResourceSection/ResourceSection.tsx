"use client";

import urlFor from "@/lib/urlFor";
import { ButtonLink, Project, SectionParagraph } from "@/typings";
import {
  CalendarDaysIcon,
  FolderOpenIcon,
  UserIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";
import React, {useState} from "react";
import ProjectImage from "./assets/Bird.png";
import AuthorImage from "./assets/Logo-outline.png";

import SearchBar from "./ResourceSearchBar";
import FilterTab from "./ResurceFilterTab";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

// import ClientSideRoute from "./ClientSideRoute";

type Props = {
  project: Project[];
  pharagraph: SectionParagraph[];
  linkButton: ButtonLink[];
};

function Resources() {
  const  [count, setCount] = useState(0);
  
  const colors = [
    "text-yellow-500",
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-violet-500",
    "text-orange-500",
    "text-zinc-500",
    "text-lime-500",
  ];
  return (
    <section id="resource" className="p-5 sm:p-10 section">
      {/* <div
        className="w-20 sm:w-40 h-1 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200
         rounded-full"
      ></div> */}
      <h1 className="text-gredient-project text-4xl font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent mb-2">
        Resources
      </h1>
      {/* {pharagraph?.map((ph) => ( */}

      <div className="mt-5 md:mt-0  flex flex-col md:col-span-2  h-full ">
        <p className="text-base lg:text-lg ">
          {/* {ph?.projectsParagraph} */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima et
          quibusdam maxime alias placeat architecto velit dolor veniam nisi qui,
          reiciendis voluptatem deleniti? Magni corporis dolores voluptate est
          enim! Earum?
        </p>
      </div>
      <SearchBar />
      <FilterTab />

      {/* <ProjectFilterTab /> */}

      {/* ))} */}

      <div className=" flex justify-center items-center py-10">
        <div className="flex overflow-x-scroll py-5 w-full scrollbar-hide space-x-5">
          {/* {project?.map((projects) => ( */}
          <div
            // key={projects?._id}
            className="max-w-sm min-w-[350px] backdrop-blur-xl bg-white/40  px-6 pt-6 pb-2 rounded-xl shadow-lg dark:bg-zinc-700/40 opacity-100"
          >
            <h1
              // className={`mb-3 text-2xl font-bold text-${projects?.titelColor}-500`}
              className={`mb-3 text-2xl font-bold text-zinc-500`}
            >
              {/* {projects?.title} */}
              title
            </h1>

            <div className="relative ">
              <Image
                // key={projects?._id}
                className=" w-full rounded-xl  "
                src={ProjectImage}
                alt={"project image"}
                width={500}
                height={500}
              />

              <p
                // key={projects?._id}
                className={`absolute top-0 bg-green-500 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg`}
              >
                {/* {projects?.projectTag} */}
                tag
              </p>
              <p
                // key={projects?._id}
                className={`absolute right-0 top-0  text-gray-800 font-semibold py-1 px-3 rounded-bl-lg rounded-tr-lg`}
              >
                <Image
                  // key={projects?._id}
                  // className="  object-fill rounded-xl "
                  src={AuthorImage}
                  alt={"AuthorImage"}
                  width={50}
                  height={50}
                />
              </p>

              <p className="mt-4 italic text-gray-800 line-clamp-2 dark:text-gray-300 text-base font-light hover:line-clamp-none cursor-pointer">
                {/* {projects?.description} */}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit ea sed ipsa adipisci assumenda tempora? Ea, fuga alias
                natus culpa, quaerat hic mollitia, architecto reprehenderit
                voluptatum consectetur placeat dicta ab.
              </p>

              <div className="flex items-center space-x-4 mt-3">
                <div className="flex items-center">
                  <div className="flex items-center space-x-1">
                    <CalendarDaysIcon width={20} height={20} className="mr-3" />
                    <span className="font-mono">
                      {new Date().toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-3">
                <div className="flex items-center">
                  <div className="flex items-center space-x-1">
                    <UserIcon width={20} height={20} className="mr-3" />
                    <span className="font-mono">
                      {/* {projects?.author.name} */}
                      Haythem Dhahri
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex  justify-end space-x-4 mt-3">
                <div className="flex items-center">
                  <div className="flex items-center space-x-1">
                    <ArrowDownTrayIcon
                      width={30}
                      height={30}
                      className="  text-purple-400 animate-bounce   border-neutral-700 dark:border-neutral-300 py-1.5 "
                    />
                    <span className="text-purple-400 animate-bounce font-bold ">
                      {count}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <ClientSideRoute
                key={projects?._id}
                route={`/project/${projects?.slug.current}`}
              > */}
            <button
              className="flex items-center justify-center right-0 p-2 mt-4 mb-4 text-sm font-bold w-full text-white bg-purple-500 py-2 
                rounded-lg shadow-lg hover:bg-purple-400 hover:scale-105 ease-in duration-300"
            onClick={()=>setCount(count +1)}>
              <span className="mr-3 my-1">
                Get Resource of {""}
                {/* {projects.title} */}
                title
              </span>
              <WrenchScrewdriverIcon width={20} height={20} />
            </button>
            {/* </ClientSideRoute> */}
          </div>

          <div
            // key={projects?._id}
            className="max-w-sm min-w-[350px] backdrop-blur-xl bg-white/40  px-6 pt-6 pb-2 rounded-xl shadow-lg dark:bg-zinc-700/40 opacity-100"
          >
            <h1
              // className={`mb-3 text-2xl font-bold text-${projects?.titelColor}-500`}
              className={`mb-3 text-2xl font-bold text-zinc-500`}
            >
              {/* {projects?.title} */}
              title
            </h1>

            <div className="relative ">
              <Image
                // key={projects?._id}
                className=" w-full rounded-xl  "
                src={ProjectImage}
                alt={"project image"}
                width={500}
                height={500}
              />

              <p
                // key={projects?._id}
                className={`absolute top-0 bg-green-500 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg`}
              >
                {/* {projects?.projectTag} */}
                tag
              </p>
              <p
                // key={projects?._id}
                className={`absolute right-0 top-0  text-gray-800 font-semibold py-1 px-3 rounded-bl-lg rounded-tr-lg`}
              >
                <Image
                  // key={projects?._id}
                  // className="  object-fill rounded-xl "
                  src={AuthorImage}
                  alt={"AuthorImage"}
                  width={50}
                  height={50}
                />
              </p>

              <p className="mt-4 italic text-gray-800 line-clamp-2 dark:text-gray-300 text-base font-light hover:line-clamp-none cursor-pointer">
                {/* {projects?.description} */}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit ea sed ipsa adipisci assumenda tempora? Ea, fuga alias
                natus culpa, quaerat hic mollitia, architecto reprehenderit
                voluptatum consectetur placeat dicta ab.
              </p>

              <div className="flex items-center space-x-4 mt-3">
                <div className="flex items-center">
                  <div className="flex items-center space-x-1">
                    <CalendarDaysIcon width={20} height={20} className="mr-3" />
                    <span className="font-mono">
                      {new Date().toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-3">
                <div className="flex items-center">
                  <div className="flex items-center space-x-1">
                    <UserIcon width={20} height={20} className="mr-3" />
                    <span className="font-mono">
                      {/* {projects?.author.name} */}
                      Haythem Dhahri
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex  justify-end space-x-4 mt-3">
                <div className="flex items-center">
                  <div className="flex items-center space-x-1">
                    <ArrowDownTrayIcon
                      width={30}
                      height={30}
                      className="  text-purple-400 animate-bounce  border-neutral-700 dark:border-neutral-300 py-1.5 "
                    />
                    <span className="text-purple-400 animate-bounce font-bold">
                      {count}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <ClientSideRoute
                key={projects?._id}
                route={`/project/${projects?.slug.current}`}
              > */}
            <button
              className="flex items-center justify-center right-0 p-2 mt-4 mb-4 text-sm font-bold w-full text-white bg-purple-500 py-2 
                rounded-lg shadow-lg hover:bg-purple-400 hover:scale-105 ease-in duration-300"
            >
              <span className="mr-3 my-1">
                Get Resource of {""}
                {/* {projects.title} */}
                title
              </span>
              <WrenchScrewdriverIcon width={20} height={20} />
            </button>
            {/* </ClientSideRoute> */}
          </div>

          {/* ))} */}
        </div>
      </div>
    </section>
  );
}

export default Resources;
