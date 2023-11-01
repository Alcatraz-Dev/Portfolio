import urlFor from "@/lib/urlFor";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Code from "./Code";
import Colors from "./Colors/Colors";

export const revalidate = 10;
const colors = Colors;

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="flex items-center justify-center mt-5 mb-5 ">
          <Image
            className="object-cover rounded-xl  "
            src={urlFor(value).maxWidth(500).maxHeight(500).url()}
            alt="Blog Post Image"
            width={600}
            height={400}
          />
        </div>
      );
    },
    youtubeVideoEmbad: ({ value }: any) => {
      const url = `https://www.youtube.com/embed/${value.id}`;
      return (
        <div className="flex items-center justify-center mt-10 mb-10 min-w-[250px] max-sm:space-x-2">
          <iframe
            className="rounded-xl"
            width={640}
            height={360}
            src={url}
            title="YouTube"
            frameBorder={0}
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      );
    },

    videoEmbad: ({ value }: any) => {
      const url = process.env.NEXT_PUBLIC_SANITY_FILE_URL;
      const videoId = `${value.id}`;
      const videoUrl = `${url}${videoId}`;
      return (
        <div className="flex items-center justify-center mt-10 mb-10 min-w-[250px] max-sm:space-x-2">
          <iframe
            className="rounded-xl"
            width={640}
            height={360}
            src={videoUrl}
            title="video"
            frameBorder={0}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      );
    },
    customButton: ({ value }: any) => {
      const href = `${value.url}`;
      const rel = !href ? "noreferrer noopener" : undefined;
      return (
        <div className="flex items-center justify-start mt-3 mb-3 mx-2">
          <Link href={href} rel={rel} target={"_blank"}>
            <button
              key={value?._id}
              className={`flex items-center justify-center right-0 p-2 mt-4 mx-2 mb-4 text-center text-sm font-bold w-full text-white py-2 
                rounded-lg shadow-lg hover:scale-105 ease-in duration-300 hover:${value?.buttonHoverBgColor} ${value?.buttonBgColor}`}
            >
              <span className="mr-3 my-1">
                {value?.buttonTitle} {""}
              </span>
              <Image
                key={value?._id}
                src={urlFor(value?.buttonIcon).width(500).height(500).url()}
                alt={value?.title}
                width={20}
                height={20}
                className="flex items-center mb-1 "
              />
            </button>
          </Link>
        </div>
      );
    },
    assetFile: ({ value }: any) => {

      const url = process.env.NEXT_PUBLIC_SANITY_FILE_URL;
      return (
        <div className="flex items-center justify-start mt-3 mb-3 mx-2">
          <Link
            href={`${url}${value?.fileId}?dl`}
            download
          >
            <button
              key={value?._id}
              className={`flex items-center justify-center right-0 p-2 mt-4 mx-2 mb-4 text-center text-sm font-bold w-full text-white py-2 
                rounded-lg shadow-lg hover:scale-105 ease-in duration-300 hover:${value?.buttonHoverBgColor} ${value?.buttonBgColor}`}
            >
              <span className="mr-3 my-1">
                {value?.name} {""}
              </span>
              <Image
                key={value?._id}
                src={urlFor(value?.buttonIcon).width(500).height(500).url()}
                alt={value?.title}
                width={20}
                height={20}
                className="flex items-center mb-1 "
              />
            </button>
          </Link>
        </div>
      );
    },
    codeInput: ({ value }: any) => {
      return <Code value={value} />;
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold mx-8">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-bold mx-8">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 font-bold mx-8">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-bold mx-8">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#99e000] border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href ? "noreferrer noopener" : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          target={"_blank"}
          className=" underline  decoration-[#99e000] hover:decoration-[#ceff65] hover:cursor-pointer"
        >
          {children}
        </Link>
      );
    },
  },
};
