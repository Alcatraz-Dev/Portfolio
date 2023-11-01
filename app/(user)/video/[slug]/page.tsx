import Image from "next/image";
import React from "react";
import Link from "next/link";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { Video } from "@/typings";
import urlFor from "@/lib/urlFor";
import {
  ArrowLeftCircleIcon,
  CommandLineIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import WebShare from "@/components/WebShare";

type Props = {
  params: {
    slug: string;
  };
};
export const revalidate = 10;
export async function generateStaticParams() {
  const quary = groq`*[_type =='video']{
          slug
      }`;
  const slugs: Video[] = await client.fetch(quary);
  const slagRoutes = slugs?.map((slug) => slug.slug.current);
  return slagRoutes?.map((slug) => ({
    slug,
  }));
}
async function Videos({ params: { slug } }: Props) {
  const query = groq`
      *[_type == 'video' && slug.current == $slug][0]{
        ...,author->,categories[]->,customButton[]->,assetFile[]->
      }
      `;

  const video: Video = await client.fetch(query, { slug });

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div
          key={video?._id}
          className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10"
        />
        <Image
          className="absolute z-1 object-cover "
          fill
          src={urlFor(video?.mainImage).url()}
          alt={video?.title}
        />

        <div
          key={video?._id}
          className="absolute top-[75%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2"
        >
          <Link href="/#videos">
            <div className=" absolute top-0 right-0   cursor-pointer items-center hover:scale-105 ease-in-out duration-300">
              <ArrowLeftCircleIcon width={40} height={40} className="mr-10" />
            </div>
          </Link>
          <WebShare
            key={video?._id}
            title={video?.title}
            url={`https://alcatraz-portfolio.vercel.app/video/${video?.slug.current}`}
          />
          <h2
            className={`py-2  text-4xl  font-bold text-${video?.titelColor}-500`}
          >
            {video?.title}
          </h2>
          <p
            className={`absolute  bg-${video?.tagBgColor}-500 backdrop-blur-md text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg`}
          >
            {video?.videoTag}
          </p>
          <div className="flex items-center space-x-4 mt-10">
            <div key={video?._id} className="flex items-center">
              <div className="flex items-center space-x-1">
                <Image
                  src={urlFor(video?.author?.mainImage)
                    .width(500)
                    .height(500)
                    .url()}
                  alt={video?.author.name}
                  width={50}
                  height={50}
                  className=" mr-3"
                />
                <span className="font-mono">
                  {video?.author?.name}{" "}
                  <p>
                    {new Date(video?._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-2 mb-20 ">
            <div key={video?._id} className="flex items-center">
              <div className="flex items-center space-x-1 mb-20 font-mono text-sm lg:text-base">
                <PortableText
                  value={video?.author.bio}
                  components={RichTextComponents}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="  mx-5">
        <div className="mt-4 ">
          <PortableText
            key={video?._id}
            value={video?.body}
            components={RichTextComponents}
          />
        </div>

        <div className=" flex  items-center justify-center   space-x-3 mt-5 mb-5   ">
          {video?.customButton?.map((buttons) => (
            <div
              key={buttons?._id}
              className="flex items-center justify-center "
            >
              <Link href={buttons.url} target={"_blank"}>
                <div
                  className={`flex items-center justify-center right-0 p-3 py-3 mt-4 mb-4 text-xs font-bold w-auto h-auto text-white bg-${buttons?.buttonBgColor}-600 py-2 
                rounded-lg shadow-lg hover:bg-${buttons?.buttonBgColor}-300 hover:scale-105 ease-in duration-300`}
                >
                  <span className="mr-3">{buttons?.buttonTitle}</span>
                  <Image
                    src={urlFor(buttons?.mainImage).url()}
                    alt={buttons?.buttonName}
                    width={20}
                    height={20}
                    className={buttons?.className}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className=" flex items-center justify-center space-x-3 mt-5 mb-5">
          {video?.assetFile?.map((asset) => (
            <div key={asset?._id} className="flex items-center justify-center ">
              <a
                href={`https://cdn.sanity.io/files/hfvycul6/production/${asset?.fileId}?dl`}
                download
              >
                <div
                  className={`flex items-center justify-center right-0 p-3 py-3 mt-4 mb-4 text-xs font-bold w-auto h-auto text-white bg-${asset?.buttonBgColor}-600 py-2 
                rounded-lg shadow-lg hover:bg-${asset?.buttonBgColor}-300 hover:scale-105 ease-in duration-300`}
                >
                  <span className="mr-3">{asset?.name}</span>
                  <Image
                    src={urlFor(asset?.mainImage).url()}
                    alt={asset?.name}
                    width={20}
                    height={20}
                    className={asset?.className}
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-1 ">
        <div className="col-span-4 md:col-span-1 shadow-sm shadow-gray-400 rounded-xl py-4 mx-5 mt-10 mb-10">
          <div className="mx-5 col-span-4 md:col-span-1 py-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Video Details</p>

              <div className="p-2 ">
                <span className="text-xs font-semibold py-2 font-mono">
                  ✨ Video Title : {""}
                </span>
                <span className="text-xs font-semibold py-2 font-mono">
                  {video?.title}
                </span>
              </div>

              <div className="p-2">
                <span className="text-xs font-semibold py-2 font-mono">
                  ✨ Video Tag : {""}
                </span>
                <span className="text-xs font-semibold py-2 font-mono">
                  {video?.videoTag}
                </span>
              </div>
              <div className="p-2">
                <span className="text-xs font-semibold py-2 font-mono">
                  ✨ Video Created Date : {""}
                </span>
                <span className="text-xs font-semibold py-2 font-mono">
                  {new Date(video?._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="p-2">
                <span className="text-xs font-semibold py-2 font-mono">
                  ✨ Video Author : {""}
                </span>
                <span className="text-xs font-semibold py-2 font-mono">
                  {video?.author.name}
                </span>
              </div>
              <div className="p-2">
                <span className="text-xs font-semibold py-2 font-mono">
                  ✨ Author Bio : {""}
                </span>
                <span className="text-xs font-semibold py-2 font-mono">
                  <PortableText
                    value={video?.author.bio}
                    components={RichTextComponents}
                  />
                </span>
              </div>
              <div className="p-2">
                <span className="text-xs font-semibold py-2 font-mono">
                  ✨ Video Short Description : {""}
                </span>
                <span className="text-xs font-semibold py-2 font-mono">
                  {video?.description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <Link href="/#videos">
          <p className="mt-10 mb-10 mx-5 bg-orange-600 rounded-lg w-32 h-auto p-2 cursor-pointer items-center  hover:bg-orange-400 hover:scale-105 ease-in duration-300">
            <span className="font-semibold text-white flex items-center justify-center ">
              <ArrowLeftCircleIcon width={20} height={20} className="mr-3" />
              Back
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Videos;
