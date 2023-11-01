import { SectionParagraph } from "@/typings";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React from "react";
import BackgroundAnimation from "./BgAnimation";
type Props = {
  pharagraph: SectionParagraph[];
};
function HomeSection({ pharagraph }: Props) {
  return (
    <section id="home" className="section">
      <div className="grid grid-cols-1 gap-10 h-full justify-center items-center relative">
        <BackgroundAnimation />

        <div>
          <h1 className="text-gredient-one">Welcome</h1>
          <h2 className="text-gredient-tow my-2">Alcatraz Dev</h2>
          {pharagraph?.map((ph) => (
            <div key={ph._id}>
              <p className="mt-5 text-lg font-light w-72">{ph.heroParagraph}</p>
            </div>
          ))}
          <div className="mt-10 ">
            <a href="#about">
              <p className=" bg-cyan-600 rounded-xl max-w-[200px] h-auto p-2 cursor-pointer items-center  hover:bg-cyan-400 hover:scale-105 ease-in duration-300">
                <span className="font-semibold text-white flex items-center justify-center ">
                  <BookOpenIcon width={20} height={20} className="mr-3" />
                  Read More
                </span>
              </p>
            </a>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <a href="#contact">
            <div className="rounded-full shadow-sm shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <ChevronDownIcon
                className="text-[#5e8a00]"
                width={30}
                height={30}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
