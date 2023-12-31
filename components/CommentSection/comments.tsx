"use client";

import Giscus from "@giscus/react";
import { useState, useEffect } from "react";

export default function Comments() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(savedTheme);
  }, []);



  return (
    <div className="p-5">
     <h1 className="flex justify-center md:justify-start lg:justify-start mt-5 mb-2 text-3xl font-bold text-gray-500">Leave a comment </h1>
     <p className="text-gray-500 text-sm font-semibold flex justify-center md:justify-start lg:justify-start mb-3">
       Comment support markdown 
      </p>
      <Giscus
        id="comments"
        repo="Alcatraz-Dev/Portfolio"
        repoId="R_kgDOKzlG0w"
        category="Q&A"
        categoryId="DIC_kwDOKzlG084CbXY7"
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme={theme === "light" ? "light_high_contrast" : "dark_dimmed"}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
