import urlFor from "@/lib/urlFor";
import { ButtonLink, Post, SectionParagraph } from "@/typings";
import {
  CalendarDaysIcon,
  NewspaperIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import ClientSideRoute from "./Route/ClientSideRoute";

type Props = {
  post: Post[];
  pharagraph: SectionParagraph[];
  linkButton: ButtonLink[];
};

function BlogList({ post, pharagraph, linkButton }: Props) {
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
    <section id="blog" className="p-5 sm:p-10">
      <div
        className="w-20 sm:w-40 h-1 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200
         rounded-full"
      ></div>
      <h1 className="text-gredient-blog py-10">Blog</h1>
      {pharagraph?.map((ph) => (
        <div key={ph?._id}>
          <p className="text-lg font-light w-72">{ph?.blogsParagraph}</p>
        </div>
      ))}

      <div className=" flex justify-center items-center py-20">
        <div className="flex overflow-x-scroll py-5 w-full scrollbar-hide space-x-5 lg:p-4 h-full">
          {post?.map((blogPost) => (
            <div
              key={blogPost?._id}
              className="max-w-sm min-w-[350px]  bg-gray-300  px-6 pt-6 pb-2 rounded-xl shadow-lg dark:bg-zinc-700"
            >
              <h1
                className={`mb-3 text-2xl font-bold text-${blogPost?.titelColor}-500`}
              >
                {blogPost?.title}
              </h1>

              <div className="relative  w-full h-auto">
                <Image
                  key={blogPost?._id}
                  className="  object-fill rounded-xl "
                  src={urlFor(blogPost?.mainImage).width(500).height(500).url()}
                  alt={blogPost?.title}
                  width={500}
                  height={500}
                />
                <p
                  key={blogPost?._id}
                  className={`absolute top-0 bg-${blogPost?.tagBgColor}-500 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg`}
                >
                  {blogPost?.postTag}
                </p>
                <p
                  key={blogPost?._id}
                  className={`absolute right-0 top-0 text-gray-800 font-semibold py-1 px-3 rounded-bl-lg rounded-tr-lg`}
                >
                  <Image
                    key={blogPost?._id}
                    src={urlFor(blogPost?.author.mainImage)
                      .width(500)
                      .height(500)
                      .url()}
                    alt={blogPost?.title}
                    width={50}
                    height={50}
                  />
                </p>
              </div>

              <p className="mt-4 italic text-gray-800 line-clamp-2 dark:text-gray-300 text-base font-light">
                {blogPost?.postDescription}
              </p>
              <div className="flex items-center space-x-4 mt-3">
                <div key={blogPost._id} className="flex items-center">
                  <div className="flex items-center space-x-1">
                    <CalendarDaysIcon width={20} height={20} className="mr-3" />
                    <span className="font-mono">
                      {new Date(blogPost?._createdAt).toLocaleDateString(
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
                <div key={blogPost._id} className="flex items-center">
                  <div className="flex items-center space-x-1">
                    <UserIcon width={20} height={20} className="mr-3" />
                    <span className="font-mono">{blogPost?.author.name}</span>
                  </div>
                </div>
              </div>
              <ClientSideRoute
                key={blogPost?._id}
                route={`/post/${blogPost?.slug.current}`}
              >
                <button
                  className="flex items-center justify-center right-0 p-2 mt-4 mb-4 text-sm font-bold w-full text-white bg-cyan-600 py-2 
                rounded-lg shadow-lg hover:bg-cyan-400 hover:scale-105 ease-in duration-300"
                >
                  <span className="mr-3 my-1">
                    Read more about {""}
                    {blogPost.title}
                  </span>
                  <NewspaperIcon width={20} height={20} />
                </button>
              </ClientSideRoute>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogList;
