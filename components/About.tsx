import { Resume, SectionParagraph } from "@/typings";
import React from "react";
type Props = {
  resume: Resume[];
  pharagraph: SectionParagraph[];
};
function About({ resume, pharagraph }: Props) {
  const resumeLength = resume.length;
  return (
    <section id="about" className="p-5 sm:p-10">
      <div
        className="w-20 sm:w-40 h-1 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200
    rounded-full"
      ></div>
      <h1 className="text-gredient-about py-10"> About Me</h1>
      {pharagraph?.map((ph) => (
        <div key={ph._id}>
          <p className="text-lg font-light w-72">{ph.aboutParagraph}</p>
        </div>
      ))}

      <div className="flex items-center space-x-20 pt-20 overflow-x-scroll scrollbar-hide">
        {resume?.map((res, index) => (
          <div
            key={res._id}
            className="w-52 flex flex-col relative flex-shrink-0"
          >
            {/* {index < resumeLength - 1 && (
              <span className="absolutes h-1 bg-gradient-to-r from-transparent via-[#4ca1af] to-[#2c3e50] top-0 right-0 w-20"></span>
            )} */}
            <span className="absolutes rounded-full h-1 bg-gradient-to-r from-[#91f0ff] to-[#0080ff] top-0 right-0 w-20"></span>
            <h3 className="font-extrabold pt-5 text-gray-600 dark:text-gray-400">
              {res.year}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 pt-5 font-light italic text-xs w-32">
              {res.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
