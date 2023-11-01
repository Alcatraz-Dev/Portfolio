"use client";
import urlFor from "@/lib/urlFor";
import { GeneralCategory, SectionParagraph } from "@/typings";
import Image from "next/image";
import React from "react";

type Props = {
  technologies: GeneralCategory[];
  pharagraph: SectionParagraph[];
};
function Technologies({ technologies, pharagraph }: Props) {
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
    <section id="technologies" className="p-5 sm:p-10">
      <div
        className="w-20 sm:w-40 h-1 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200
    rounded-full"
      ></div>
      <h1 className="text-gredient-three py-10"> Technologies</h1>
      {pharagraph?.map((ph) => (
        <div key={ph?._id}>
          <p className="text-lg font-light w-72">{ph?.technologiesParagraph}</p>
        </div>
      ))}

      <div className=" flex justify-center items-center py-20">
        <div className="flex overflow-x-scroll py-5 w-full scrollbar-hide space-x-5">
          {technologies?.map((categores) => (
            <div
              key={categores._id}
              className="max-w-sm min-w-[350px]   bg-gray-300  px-6 pt-6 pb-2 rounded-xl shadow-lg dark:bg-zinc-700"
            >
              <h1
                className={`mb-3 text-2xl font-bold text-${categores.color}-500`}
              >
                {categores.title}
              </h1>

              <p className="mt-4 text-zinc-800 dark:text-gray-300 text-sm font-semibold font-mono">
                {categores.description}
              </p>
              <h1 className="mt-3 mb-3 text-sm font-bold space-x-2">
                Alcatraz Dev{" "}
                <span className={`text-${categores.color}-500`}>
                  {" "}
                  {categores.title}
                </span>
                {""} Stacks...
              </h1>
              <div className="flex flex-row gap-2 overflow-y-auto scrollbar-hide flex-shrink-0  ">
                {categores?.stacks.map((stack) => (
                  <div
                    key={stack?._id}
                    className="  text-gray-600 py-2 px-2 mt-5 mb-5 mx-2"
                  >
                    <Image
                      src={urlFor(stack?.mainImage).url()}
                      alt={stack?.title}
                      width={25}
                      height={25}
                      className="flex pl-2 items-start justify-start mx-5 left-0"
                    />
                    <span
                      className="
                   flex items-center justify-center pl-4 mt-3 font-light text-xs dark:text-white text-zinc-900"
                    >
                      {""}
                      {stack?.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
