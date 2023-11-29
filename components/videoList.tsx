import React from "react";
import urlFor from "@/lib/urlFor";
import { ButtonLink, Video } from "@/typings";
import {
  CalendarDaysIcon,
  PlayCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import ClientSideRoute from "./Route/ClientSideRoute";

type Props = {
  video: Video[];
 
  linkButton: ButtonLink[];
};

function VideoList({ video, linkButton }: Props) {
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
    <section id="videos" className="p-5 sm:p-10">
      <div
        className="w-20 sm:w-40 h-1 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200
         rounded-full"
      ></div>
      <h1 className="text-gredient-video py-10">Videos</h1>
      {/* {pharagraph?.map((ph) => (
        <div key={ph?._id}>
          <p className="text-lg font-light w-72">{ph?.videosParagraph}</p>
        </div>
      ))} */}

      <div className=" flex justify-center items-center py-20">
        <div className="flex overflow-x-scroll py-5 w-full scrollbar-hide space-x-5">
          {video?.map((videos) => (
            <div
              key={videos?._id}
              className="max-w-sm min-w-[350px]  bg-gray-300  px-6 pt-6 pb-2 rounded-xl shadow-lg dark:bg-zinc-700"
            >
              <h1
                className={`mb-3 text-2xl font-bold text-${videos?.titelColor}-500`}
              >
                {videos?.title}
              </h1>

              <div className="relative">
                <Image
                  key={videos?._id}
                  className="w-full rounded-xl"
                  src={urlFor(videos?.mainImage).width(500).height(500).url()}
                  alt={videos?.title}
                  width={500}
                  height={500}
                />
                <p
                  key={videos?._id}
                  className={`absolute top-0 bg-${videos?.tagBgColor}-500 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg`}
                >
                  {videos?.videoTag}
                </p>
                <p
                  key={videos?._id}
                  className={`absolute right-0 top-0  text-gray-800 font-semibold py-1 px-3 rounded-bl-lg rounded-tr-lg`}
                >
                  <Image
                    key={videos?._id}
                    // className="  object-fill rounded-xl "
                    src={urlFor(videos?.author?.authorImage)
                      .width(500)
                      .height(500)
                      .url()}
                    alt={videos?.title}
                    width={50}
                    height={50}
                  />
                </p>
              </div>

              <p className="mt-4 italic text-gray-800 line-clamp-2 dark:text-gray-300 text-base font-light">
                {videos?.description}
              </p>

              <div className="flex items-center space-x-4 mt-3">
                <div key={videos._id} className="flex items-center">
                  <div className="flex items-center space-x-1">
                    <CalendarDaysIcon width={20} height={20} className="mr-3" />
                    <span className="font-mono">
                      {new Date(videos?._createdAt).toLocaleDateString(
                        "en-US",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-3">
                <div key={videos._id} className="flex items-center">
                  <div className="flex items-center space-x-1">
                    <UserIcon width={20} height={20} className="mr-3" />
                    <span className="font-mono">{videos?.author.name}</span>
                  </div>
                </div>
              </div>
              <ClientSideRoute
                key={videos?._id}
                route={`/video/${videos?.slug.current}`}
              >
                <button
                  className="flex items-center justify-center right-0 p-2 mt-4 mb-4 text-sm font-bold w-full text-white bg-red-500 py-2 
                rounded-lg shadow-lg hover:bg-red-400 hover:scale-105 ease-in duration-300"
                >
                  <span className="mr-3 my-1">
                    Watch {""}
                    {videos.title}
                  </span>
                  <PlayCircleIcon width={20} height={20} />
                </button>
              </ClientSideRoute>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoList;
