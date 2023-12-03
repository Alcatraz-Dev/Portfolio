import Image from "next/image";
import React from "react";
import Link from "next/link";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { Project, Resource } from "@/typings";
import urlFor from "@/lib/urlFor";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/CustomText/RichText/RichTextComponents";
import WebShare from "@/components/Shear/WebShare";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import Comments from "@/components/CommentSection/comments";

type Props = {
  params: {
    slug: string;
  };
};
export const revalidate = 10;
const BaseUrl = `${process.env.NEXT_PUBLIC_VERCEL_URL}/resource`;
const urlFile = process.env.NEXT_PUBLIC_SANITY_FILE_URL;
export async function generateStaticParams() {
  const quary = groq`*[_type =='resource']{
          slug
      }`;
  const slugs: Resource[] = await client.fetch(quary);
  const slagRoutes = slugs?.map((slug) => slug.slug.current);
  return slagRoutes?.map((slug) => ({
    slug,
  }));
}
async function Resources({ params: { slug } }: Props) {
  const query = groq`
      *[_type == 'resource' && slug.current == $slug][0]{
        ...,author->, stacks[]->,paragraph[]->,customButton[]->,assetFile[]->,categories[]->,resourceDetails[]->
      }
      `;

  const resource: Resource = await client.fetch(query, { slug });
  if (!resource) return notFound();

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div
          key={resource?._id}
          className={`absolute top-0 left-0 w-full h-[50vh] ${resource?.resourceOverlayImageClassNmae}/70 z-10`}
        />
        <Image
          className="absolute z-1 object-cover "
          fill
          src={urlFor(resource?.mainImage).width(500).height(500).url()}
          alt={resource?.title}
        />

        <div
          key={resource?._id}
          className="absolute top-[75%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2"
        >
          <Link href="/#resources">
            <div className=" absolute right-[-30px] top-14   cursor-pointer items-center hover:scale-105 ease-in-out duration-300">
              <ArrowLeftCircleIcon
                width={40}
                height={40}
                className="mr-10 hover:text-lime-400 hover:scale-105 ease-in-out duration-300"
              />
            </div>
          </Link>
          <div className=" absolute right-[-30px] top-14   cursor-pointer items-center hover:text-blue-400 hover:scale-105 ease-in-out duration-300">
            <WebShare
              key={resource?._id}
              title={resource?.title}
              url={`${BaseUrl}${resource?.slug.current}`}
            />
          </div>
          <div className="p-5">
            <h2
              className={`py-4 text-2xl lg:text-3xl font-bold ${resource?.resourceTitleColor}`}
            >
              {resource?.title}
            </h2>
            <p
              key={resource?._id}
              className={`my-3 absolute  ${resource?.tagBgColor} backdrop-blur-md ${resource?.tagTitleColor} font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg`}
            >
              {resource?.categories?.map((category) => (
                <span key={category?._id}>{category?.title}</span>
              ))}
            </p>

            <div
              key={resource?._id}
              className="flex items-center space-x-4 my-10"
            >
              <div className="flex items-center">
                <div className="flex items-center space-x-1 my-5">
                  <Image
                    src={urlFor(resource?.author?.authorImage)
                      .width(500)
                      .height(500)
                      .url()}
                    alt={resource?.author?.name}
                    width={50}
                    height={50}
                    className=" mr-3"
                  />
                  <span className="font-mono">
                    {resource?.author?.name}{" "}
                    <p>
                      {format(
                        new Date(resource?.publishedAt),
                        " dd,MMMM,yyyy, p"
                      )}
                    </p>
                  </span>
                </div>
              </div>
            </div>

            <div
              key={resource?._id}
              className="flex items-center space-x-4 mt-2 mb-32 "
            >
              <div key={resource?._id} className="flex items-center">
                <div className="flex items-center space-x-1 mb-20 font-mono text-sm lg:text-base">
                  <PortableText
                    value={resource?.resourceShortDescriptionPage}
                    components={RichTextComponents}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="  mx-5">
        <div className="mt-8">
          <div className="mx-5 col-span-4 md:col-span-1 shadow-sm shadow-gray-400 rounded-xl py-4">
            <h1 className="text-center  text-xl font-bold mt-3 text-gray-600 ">
              Information about the resource
            </h1>
            <div className="p-2">
              <div className="col-span-4 md:col-span-1 shadow-sm shadow-gray-400 rounded-xl py-4 px-3 mx-5 mt-10 mb-10">
                <p className="text-center font-bold pb-2 text-gray-600">
                  Resource Details
                </p>
                {resource?.resourceDetails?.map((details) => (
                  <div key={details?._id} className=" p-2 ">
                    <div className=" flex justify-center  text-xs font-semibold py-2 font-mono">
                      <Image
                        src={urlFor(details?.resourceDetailsAuthorCardIcon)
                          .width(500)
                          .height(500)
                          .url()}
                        alt={details?.title}
                        width={20}
                        height={20}
                        className="flex justify-start "
                      />{" "}
                      <span className="mx-2 mt-1 font-bold text-sm ">
                        Author
                      </span>
                    </div>
                    <span className=" flex justify-center text-xs  mt-1 ml-4">
                      {resource?.author?.name}
                    </span>
                  </div>
                ))}

                {resource?.resourceDetails?.map((details) => (
                  <div key={details?._id} className=" p-2 ">
                    <div className=" flex justify-center  text-xs font-semibold py-2 font-mono">
                      <Image
                        src={urlFor(details?.resourceDetailsTitleCardIcon)
                          .width(500)
                          .height(500)
                          .url()}
                        alt={details?.title}
                        width={20}
                        height={20}
                        className="flex justify-start "
                      />{" "}
                      <span className="mx-2 mt-1 font-bold text-sm ">
                        title
                      </span>
                    </div>
                    <span className=" flex justify-center text-xs  mt-1 ml-4">
                      {resource?.title}
                    </span>
                  </div>
                ))}

                {resource?.resourceDetails?.map((details) => (
                  <div key={details?._id} className=" p-2 ">
                    <div className=" flex justify-center  text-xs font-semibold py-2 font-mono">
                      <Image
                        src={urlFor(details?.resourceDetailsStatusCardIcon)
                          .width(500)
                          .height(500)
                          .url()}
                        alt={details?.title}
                        width={20}
                        height={20}
                        className="flex justify-start "
                      />{" "}
                      <span className="mx-2 mt-1 font-bold text-sm ">
                        Status
                      </span>
                    </div>
                    <span className=" flex justify-center text-xs  mt-1 ml-4">
                      {resource?.statusName}
                    </span>
                  </div>
                ))}

                {resource?.resourceDetails?.map((details) => (
                  <div key={details?._id} className=" p-2 ">
                    <div className=" flex justify-center  text-xs font-semibold py-2 font-mono">
                      <Image
                        src={urlFor(details?.resourceDetailsCategoryCardIcon)
                          .width(500)
                          .height(500)
                          .url()}
                        alt={details?.title}
                        width={20}
                        height={20}
                        className="flex justify-start "
                      />{" "}
                      <span className="mx-2 mt-1 font-bold text-sm ">
                        Category
                      </span>
                    </div>
                    <span className=" flex justify-center text-xs  mt-1 ml-4">
                      {resource?.categories?.map((category) => (
                        <span key={category?._id}>{category?.title}</span>
                      ))}
                    </span>
                  </div>
                ))}

                {resource?.resourceDetails?.map((details) => (
                  <div key={details?._id} className=" p-2 ">
                    <div className=" flex justify-center  text-xs font-semibold py-2 font-mono">
                      <Image
                        src={urlFor(details?.resourceDetailsTagCardIcon)
                          .width(500)
                          .height(500)
                          .url()}
                        alt={details?.title}
                        width={20}
                        height={20}
                        className="flex justify-start "
                      />{" "}
                      <span className="mx-2 mt-1 font-bold text-sm ">Tag</span>
                    </div>
                    <span className=" flex justify-center text-xs  mt-1 ml-4">
                      {resource?.resourceTag}
                    </span>
                  </div>
                ))}

                {resource?.resourceDetails?.map((details) => (
                  <div key={details?._id} className=" p-2 ">
                    <div className=" flex justify-center  text-xs font-semibold py-2 font-mono">
                      <Image
                        src={urlFor(details?.resourceDetailsCreatedDateCardIcon)
                          .width(500)
                          .height(500)
                          .url()}
                        alt={details?.title}
                        width={20}
                        height={20}
                        className="flex justify-start "
                      />{" "}
                      <span className="mx-2 mt-1 font-bold text-sm ">
                        Created Date
                      </span>
                    </div>
                    <span className=" flex justify-center text-xs  mt-1 ml-4">
                      {new Date(resource?.publishedAt).toLocaleDateString(
                        "en-US",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </span>
                  </div>
                ))}

                {resource?.resourceDetails?.map((details) => (
                  <div key={details?._id} className=" p-2 ">
                    <div className=" flex justify-center  text-xs  py-2 font-mono">
                      <Image
                        src={urlFor(
                          details?.resourceDetailsShortDescriptionCardIcon
                        )
                          .width(500)
                          .height(500)
                          .url()}
                        alt={details?.title}
                        width={20}
                        height={20}
                        className="flex justify-start "
                      />{" "}
                      <span className="mx-2 mt-1 font-bold text-sm ">
                        Short Description
                      </span>
                    </div>
                    <span className=" flex justify-center text-xs  mt-1 ml-4">
                      {resource?.description}
                    </span>
                  </div>
                ))}
                {resource?.resourceDetails?.map((details) => (
                  <div key={details?._id} className=" p-2 ">
                    <div className=" flex justify-center  text-xs font-semibold py-2 font-mono">
                      <Image
                        src={urlFor(details?.resourceDetailsAuthorBioCardIcon)
                          .width(500)
                          .height(500)
                          .url()}
                        alt={details?.title}
                        width={20}
                        height={20}
                        className="flex justify-start "
                      />{" "}
                      <span className="mx-2 mt-1 font-bold text-sm ">
                        Author Bio
                      </span>
                    </div>
                    <span className=" flex justify-center text-xs  mt-1 ml-4">
                      <PortableText
                        value={resource?.author?.bio}
                        components={RichTextComponents}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="  mx-5">
        <div className="mt-4 ">
          <PortableText
            key={resource?._id}
            value={resource?.body}
            components={RichTextComponents}
          />
        </div>
        <div className=" flex items-center justify-center space-x-3 mt-5 mb-5">
          {resource?.customButton?.map((buttons) => (
            <div
              key={buttons?._id}
              className="flex items-center justify-center "
            >
              <Link href={buttons?.url} target={"_blank"}>
                <div
                  className={`flex items-center justify-center right-0 p-3 py-3 mt-4 mb-4 text-xs font-bold w-auto h-auto text-white ${buttons?.buttonBgColor} py-2 
                rounded-lg shadow-lg ${buttons?.buttonHoverBgColor} hover:scale-105 ease-in duration-300`}
                >
                  <span className="mr-3">{buttons?.buttonTitle}</span>
                  <Image
                    src={urlFor(buttons?.buttonIcon)
                      .width(500)
                      .height(500)
                      .url()}
                    alt={buttons?.buttonTitle}
                    width={20}
                    height={20}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className=" flex items-center justify-center space-x-3 mt-5 mb-5">
          {resource?.assetFile?.map((asset) => (
            <div key={asset?._id} className="flex items-center justify-center ">
              <a href={`${urlFile}${asset?.fileId}?dl`} download>
                <div
                  className={`flex items-center justify-center right-0 p-3 py-3 mt-4 mb-4 text-xs font-bold w-auto h-auto text-white bg-${asset?.buttonBgColor}-600 py-2 
                rounded-lg shadow-lg hover:bg-${asset?.buttonBgColor}-300 hover:scale-105 ease-in duration-300`}
                >
                  <span className="mr-3">{asset?.name}</span>
                  <Image
                    src={urlFor(asset?.buttonIcon).width(500).height(500).url()}
                    alt={asset?.name}
                    width={20}
                    height={20}
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* <CommentSection/> */}
      <Comments />
      <div className="grid grid-cols-3 md:grid-cols-1 ">
        <Link href="/#projects">
          <p
            className={`mt-10 mb-10 mx-5  rounded-lg w-32 h-auto p-2 cursor-pointer items-center hover:scale-105 ease-in duration-300 ${resource?.buttonBgColor} ${resource?.buttonHoverBgColor}`}
          >
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

export default Resources;

const BgGradientColor = [
  "bg-gradient-to-br from-lime-500 to-green-500",
  "bg-gradient-to-br from-orange-500 to-amber-500",
  "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500",
  "bg-gradient-to-br from-green-300 via-blue-500 to-purple-600",
  "bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400",
  "bg-gradient-to-br from-gray-700 via-gray-900 to-black",
  "bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100",
  "bg-gradient-to-br from-yellow-100 via-yellow-300 to-yellow-500",
  "bg-gradient-to-br from-yellow-200 via-green-200 to-green-500",
  "bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600",
  "bg-gradient-to-br from-red-200 via-red-300 to-yellow-200",
];
const TextGradientColor = [
  "bg-gradient-to-br from-emerald-400 to-cyan-400 bg-clip-text text-transparent",
  "bg-gradient-to-br from-lime-400 to-green-600 bg-clip-text text-transparent",
  "bg-gradient-to-br from-blue-500 to-teal-500 bg-clip-text text-transparent",
  "bg-gradient-to-br from-red-500 to-orange-500 bg-clip-text text-transparent",
  "bg-gradient-to-br from-amber-200 to-yellow-500 bg-clip-text text-transparent",
  "bg-gradient-to-br from-lime-500 to-green-500 bg-clip-text text-transparent",
  "bg-gradient-to-br from-orange-500 to-amber-500 bg-clip-text text-transparent",
  "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent",
  "bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent",
  "bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent",
  "bg-gradient-to-br from-gray-700 via-gray-900 to-black bg-clip-text text-transparent",
  "bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100 bg-clip-text text-transparent",
  "bg-gradient-to-br from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text text-transparent",
  "bg-gradient-to-br from-yellow-200 via-green-200 to-green-500 bg-clip-text text-transparent",
  "bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent",
  "bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 bg-clip-text text-transparent",
];
const TextColor = [
  "text-red-50",
  "text-red-100",
  "text-red-200",
  "text-red-300",
  "text-red-400",
  "text-red-500",
  "text-red-600",
  "text-red-700",
  "text-red-800",
  "text-red-900",

  "hover:text-red-50",
  "hover:text-red-100",
  "hover:text-red-200",
  "hover:text-red-300",
  "hover:text-red-400",
  "hover:text-red-500",
  "hover:text-red-600",
  "hover:text-red-700",
  "hover:text-red-800",
  "hover:text-red-900",

  "text-pink-50",
  "text-pink-100",
  "text-pink-200",
  "text-pink-300",
  "text-pink-400",
  "text-pink-500",
  "text-pink-600",
  "text-pink-700",
  "text-pink-800",
  "text-pink-900",

  "hover:text-pink-50",
  "hover:text-pink-100",
  "hover:text-pink-200",
  "hover:text-pink-300",
  "hover:text-pink-400",
  "hover:text-pink-500",
  "hover:text-pink-600",
  "hover:text-pink-700",
  "hover:text-pink-800",
  "hover:text-pink-900",

  "text-purple-50",
  "text-purple-100",
  "text-purple-200",
  "text-purple-300",
  "text-purple-400",
  "text-purple-500",
  "text-purple-600",
  "text-purple-700",
  "text-purple-800",
  "text-purple-900",

  "hover:text-purple-50",
  "hover:text-purple-100",
  "hover:text-purple-200",
  "hover:text-purple-300",
  "hover:text-purple-400",
  "hover:text-purple-500",
  "hover:text-purple-600",
  "hover:text-purple-700",
  "hover:text-purple-800",
  "hover:text-purple-900",

  "text-indigo-50",
  "text-indigo-100",
  "text-indigo-200",
  "text-indigo-300",
  "text-indigo-400",
  "text-indigo-500",
  "text-indigo-600",
  "text-indigo-700",
  "text-indigo-800",
  "text-indigo-900",

  "hover:text-indigo-50",
  "hover:text-indigo-100",
  "hover:text-indigo-200",
  "hover:text-indigo-300",
  "hover:text-indigo-400",
  "hover:text-indigo-500",
  "hover:text-indigo-600",
  "hover:text-indigo-700",
  "hover:text-indigo-800",
  "hover:text-indigo-900",

  "text-blue-50",
  "text-blue-100",
  "text-blue-200",
  "text-blue-300",
  "text-blue-400",
  "text-blue-500",
  "text-blue-600",
  "text-blue-700",
  "text-blue-800",
  "text-blue-900",

  "hover:text-blue-50",
  "hover:text-blue-100",
  "hover:text-blue-200",
  "hover:text-blue-300",
  "hover:text-blue-400",
  "hover:text-blue-500",
  "hover:text-blue-600",
  "hover:text-blue-700",
  "hover:text-blue-800",
  "hover:text-blue-900",

  "text-cyan-50",
  "text-cyan-100",
  "text-cyan-200",
  "text-cyan-300",
  "text-cyan-400",
  "text-cyan-500",
  "text-cyan-600",
  "text-cyan-700",
  "text-cyan-800",
  "text-cyan-900",

  "hover:text-cyan-50",
  "hover:text-cyan-100",
  "hover:text-cyan-200",
  "hover:text-cyan-300",
  "hover:text-cyan-400",
  "hover:text-cyan-500",
  "hover:text-cyan-600",
  "hover:text-cyan-700",
  "hover:text-cyan-800",
  "hover:text-cyan-900",

  "text-teal-50",
  "text-teal-100",
  "text-teal-200",
  "text-teal-300",
  "text-teal-400",
  "text-teal-500",
  "text-teal-600",
  "text-teal-700",
  "text-teal-800",
  "text-teal-900",

  "hover:text-teal-50",
  "hover:text-teal-100",
  "hover:text-teal-200",
  "hover:text-teal-300",
  "hover:text-teal-400",
  "hover:text-teal-500",
  "hover:text-teal-600",
  "hover:text-teal-700",
  "hover:text-teal-800",
  "hover:text-teal-900",

  "text-green-50",
  "text-green-100",
  "text-green-200",
  "text-green-300",
  "text-green-400",
  "text-green-500",
  "text-green-600",
  "text-green-700",
  "text-green-800",
  "text-green-900",

  "hover:text-green-50",
  "hover:text-green-100",
  "hover:text-green-200",
  "hover:text-green-300",
  "hover:text-green-400",
  "hover:text-green-500",
  "hover:text-green-600",
  "hover:text-green-700",
  "hover:text-green-800",
  "hover:text-green-900",

  "text-lime-50",
  "text-lime-100",
  "text-lime-200",
  "text-lime-300",
  "text-lime-400",
  "text-lime-500",
  "text-lime-600",
  "text-lime-700",
  "text-lime-800",
  "text-lime-900",

  "hover:text-lime-50",
  "hover:text-lime-100",
  "hover:text-lime-200",
  "hover:text-lime-300",
  "hover:text-lime-400",
  "hover:text-lime-500",
  "hover:text-lime-600",
  "hover:text-lime-700",
  "hover:text-lime-800",
  "hover:text-lime-900",

  "text-yellow-50",
  "text-yellow-100",
  "text-yellow-200",
  "text-yellow-300",
  "text-yellow-400",
  "text-yellow-500",
  "text-yellow-600",
  "text-yellow-700",
  "text-yellow-800",
  "text-yellow-900",

  "hover:text-yellow-50",
  "hover:text-yellow-100",
  "hover:text-yellow-200",
  "hover:text-yellow-300",
  "hover:text-yellow-400",
  "hover:text-yellow-500",
  "hover:text-yellow-600",
  "hover:text-yellow-700",
  "hover:text-yellow-800",
  "hover:text-yellow-900",

  "text-amber-50",
  "text-amber-100",
  "text-amber-200",
  "text-amber-300",
  "text-amber-400",
  "text-amber-500",
  "text-amber-600",
  "text-amber-700",
  "text-amber-800",
  "text-amber-900",

  "hover:text-amber-50",
  "hover:text-amber-100",
  "hover:text-amber-200",
  "hover:text-amber-300",
  "hover:text-amber-400",
  "hover:text-amber-500",
  "hover:text-amber-600",
  "hover:text-amber-700",
  "hover:text-amber-800",
  "hover:text-amber-900",

  "text-orange-50",
  "text-orange-100",
  "text-orange-200",
  "text-orange-300",
  "text-orange-400",
  "text-orange-500",
  "text-orange-600",
  "text-orange-700",
  "text-orange-800",
  "text-orange-900",

  "hover:text-orange-50",
  "hover:text-orange-100",
  "hover:text-orange-200",
  "hover:text-orange-300",
  "hover:text-orange-400",
  "hover:text-orange-500",
  "hover:text-orange-600",
  "hover:text-orange-700",
  "hover:text-orange-800",
  "hover:text-orange-900",

  "text-brown-50",
  "text-brown-100",
  "text-brown-200",
  "text-brown-300",
  "text-brown-400",
  "text-brown-500",
  "text-brown-600",
  "text-brown-700",
  "text-brown-800",
  "text-brown-900",

  "hover:text-brown-50",
  "hover:text-brown-100",
  "hover:text-brown-200",
  "hover:text-brown-300",
  "hover:text-brown-400",
  "hover:text-brown-500",
  "hover:text-brown-600",
  "hover:text-brown-700",
  "hover:text-brown-800",
  "hover:text-brown-900",

  "text-grey-50",
  "text-grey-100",
  "text-grey-200",
  "text-grey-300",
  "text-grey-400",
  "text-grey-500",
  "text-grey-600",
  "text-grey-700",
  "text-grey-800",
  "text-grey-900",

  "hover:text-grey-50",
  "hover:text-grey-100",
  "hover:text-grey-200",
  "hover:text-grey-300",
  "hover:text-grey-400",
  "hover:text-grey-500",
  "hover:text-grey-600",
  "hover:text-grey-700",
  "hover:text-grey-800",
  "hover:text-grey-900",

  "text-violet-50",
  "text-violet-100",
  "text-violet-200",
  "text-violet-300",
  "text-violet-400",
  "text-violet-500",
  "text-violet-600",
  "text-violet-700",
  "text-violet-800",
  "text-violet-900",

  "hover:text-violet-50",
  "hover:text-violet-100",
  "hover:text-violet-200",
  "hover:text-violet-300",
  "hover:text-violet-400",
  "hover:text-violet-500",
  "hover:text-violet-600",
  "hover:text-violet-700",
  "hover:text-violet-800",
  "hover:text-violet-900",

  "text-zinc-50",
  "text-zinc-100",
  "text-zinc-200",
  "text-zinc-300",
  "text-zinc-400",
  "text-zinc-500",
  "text-zinc-600",
  "text-zinc-700",
  "text-zinc-800",
  "text-zinc-900",

  "hover:text-zinc-50",
  "hover:text-zinc-100",
  "hover:text-zinc-200",
  "hover:text-zinc-300",
  "hover:text-zinc-400",
  "hover:text-zinc-500",
  "hover:text-zinc-600",
  "hover:text-zinc-700",
  "hover:text-zinc-800",
  "hover:text-zinc-900",
];

const BgColor = [
  "bg-red-50",
  "bg-red-100",
  "bg-red-200",
  "bg-red-300",
  "bg-red-400",
  "bg-red-500",
  "bg-red-600",
  "bg-red-700",
  "bg-red-800",
  "bg-red-900",

  "hover:bg-red-50",
  "hover:bg-red-100",
  "hover:bg-red-200",
  "hover:bg-red-300",
  "hover:bg-red-400",
  "hover:bg-red-500",
  "hover:bg-red-600",
  "hover:bg-red-700",
  "hover:bg-red-800",
  "hover:bg-red-900",

  "bg-pink-50",
  "bg-pink-100",
  "bg-pink-200",
  "bg-pink-300",
  "bg-pink-400",
  "bg-pink-500",
  "bg-pink-600",
  "bg-pink-700",
  "bg-pink-800",
  "bg-pink-900",

  "hover:bg-pink-50",
  "hover:bg-pink-100",
  "hover:bg-pink-200",
  "hover:bg-pink-300",
  "hover:bg-pink-400",
  "hover:bg-pink-500",
  "hover:bg-pink-600",
  "hover:bg-pink-700",
  "hover:bg-pink-800",
  "hover:bg-pink-900",

  "bg-purple-50",
  "bg-purple-100",
  "bg-purple-200",
  "bg-purple-300",
  "bg-purple-400",
  "bg-purple-500",
  "bg-purple-600",
  "bg-purple-700",
  "bg-purple-800",
  "bg-purple-900",

  "hover:bg-purple-50",
  "hover:bg-purple-100",
  "hover:bg-purple-200",
  "hover:bg-purple-300",
  "hover:bg-purple-400",
  "hover:bg-purple-500",
  "hover:bg-purple-600",
  "hover:bg-purple-700",
  "hover:bg-purple-800",
  "hover:bg-purple-900",

  "bg-indigo-50",
  "bg-indigo-100",
  "bg-indigo-200",
  "bg-indigo-300",
  "bg-indigo-400",
  "bg-indigo-500",
  "bg-indigo-600",
  "bg-indigo-700",
  "bg-indigo-800",
  "bg-indigo-900",

  "hover:bg-indigo-50",
  "hover:bg-indigo-100",
  "hover:bg-indigo-200",
  "hover:bg-indigo-300",
  "hover:bg-indigo-400",
  "hover:bg-indigo-500",
  "hover:bg-indigo-600",
  "hover:bg-indigo-700",
  "hover:bg-indigo-800",
  "hover:bg-indigo-900",

  "bg-blue-50",
  "bg-blue-100",
  "bg-blue-200",
  "bg-blue-300",
  "bg-blue-400",
  "bg-blue-500",
  "bg-blue-600",
  "bg-blue-700",
  "bg-blue-800",
  "bg-blue-900",

  "hover:bg-blue-50",
  "hover:bg-blue-100",
  "hover:bg-blue-200",
  "hover:bg-blue-300",
  "hover:bg-blue-400",
  "hover:bg-blue-500",
  "hover:bg-blue-600",
  "hover:bg-blue-700",
  "hover:bg-blue-800",
  "hover:bg-blue-900",

  "bg-cyan-50",
  "bg-cyan-100",
  "bg-cyan-200",
  "bg-cyan-300",
  "bg-cyan-400",
  "bg-cyan-500",
  "bg-cyan-600",
  "bg-cyan-700",
  "bg-cyan-800",
  "bg-cyan-900",

  "hover:bg-cyan-50",
  "hover:bg-cyan-100",
  "hover:bg-cyan-200",
  "hover:bg-cyan-300",
  "hover:bg-cyan-400",
  "hover:bg-cyan-500",
  "hover:bg-cyan-600",
  "hover:bg-cyan-700",
  "hover:bg-cyan-800",
  "hover:bg-cyan-900",

  "bg-teal-50",
  "bg-teal-100",
  "bg-teal-200",
  "bg-teal-300",
  "bg-teal-400",
  "bg-teal-500",
  "bg-teal-600",
  "bg-teal-700",
  "bg-teal-800",
  "bg-teal-900",

  "hover:bg-teal-50",
  "hover:bg-teal-100",
  "hover:bg-teal-200",
  "hover:bg-teal-300",
  "hover:bg-teal-400",
  "hover:bg-teal-500",
  "hover:bg-teal-600",
  "hover:bg-teal-700",
  "hover:bg-teal-800",
  "hover:bg-teal-900",

  "bg-green-50",
  "bg-green-100",
  "bg-green-200",
  "bg-green-300",
  "bg-green-400",
  "bg-green-500",
  "bg-green-600",
  "bg-green-700",
  "bg-green-800",
  "bg-green-900",

  "hover:bg-green-50",
  "hover:bg-green-100",
  "hover:bg-green-200",
  "hover:bg-green-300",
  "hover:bg-green-400",
  "hover:bg-green-500",
  "hover:bg-green-600",
  "hover:bg-green-700",
  "hover:bg-green-800",
  "hover:bg-green-900",

  "bg-lime-50",
  "bg-lime-100",
  "bg-lime-200",
  "bg-lime-300",
  "bg-lime-400",
  "bg-lime-500",
  "bg-lime-600",
  "bg-lime-700",
  "bg-lime-800",
  "bg-lime-900",

  "hover:bg-lime-50",
  "hover:bg-lime-100",
  "hover:bg-lime-200",
  "hover:bg-lime-300",
  "hover:bg-lime-400",
  "hover:bg-lime-500",
  "hover:bg-lime-600",
  "hover:bg-lime-700",
  "hover:bg-lime-800",
  "hover:bg-lime-900",

  "bg-yellow-50",
  "bg-yellow-100",
  "bg-yellow-200",
  "bg-yellow-300",
  "bg-yellow-400",
  "bg-yellow-500",
  "bg-yellow-600",
  "bg-yellow-700",
  "bg-yellow-800",
  "bg-yellow-900",

  "hover:bg-yellow-50",
  "hover:bg-yellow-100",
  "hover:bg-yellow-200",
  "hover:bg-yellow-300",
  "hover:bg-yellow-400",
  "hover:bg-yellow-500",
  "hover:bg-yellow-600",
  "hover:bg-yellow-700",
  "hover:bg-yellow-800",
  "hover:bg-yellow-900",

  "bg-amber-50",
  "bg-amber-100",
  "bg-amber-200",
  "bg-amber-300",
  "bg-amber-400",
  "bg-amber-500",
  "bg-amber-600",
  "bg-amber-700",
  "bg-amber-800",
  "bg-amber-900",

  "hover:bg-amber-50",
  "hover:bg-amber-100",
  "hover:bg-amber-200",
  "hover:bg-amber-300",
  "hover:bg-amber-400",
  "hover:bg-amber-500",
  "hover:bg-amber-600",
  "hover:bg-amber-700",
  "hover:bg-amber-800",
  "hover:bg-amber-900",

  "bg-orange-50",
  "bg-orange-100",
  "bg-orange-200",
  "bg-orange-300",
  "bg-orange-400",
  "bg-orange-500",
  "bg-orange-600",
  "bg-orange-700",
  "bg-orange-800",
  "bg-orange-900",

  "hover:bg-orange-50",
  "hover:bg-orange-100",
  "hover:bg-orange-200",
  "hover:bg-orange-300",
  "hover:bg-orange-400",
  "hover:bg-orange-500",
  "hover:bg-orange-600",
  "hover:bg-orange-700",
  "hover:bg-orange-800",
  "hover:bg-orange-900",

  "bg-brown-50",
  "bg-brown-100",
  "bg-brown-200",
  "bg-brown-300",
  "bg-brown-400",
  "bg-brown-500",
  "bg-brown-600",
  "bg-brown-700",
  "bg-brown-800",
  "bg-brown-900",

  "hover:bg-brown-50",
  "hover:bg-brown-100",
  "hover:bg-brown-200",
  "hover:bg-brown-300",
  "hover:bg-brown-400",
  "hover:bg-brown-500",
  "hover:bg-brown-600",
  "hover:bg-brown-700",
  "hover:bg-brown-800",
  "hover:bg-brown-900",

  "bg-grey-50",
  "bg-grey-100",
  "bg-grey-200",
  "bg-grey-300",
  "bg-grey-400",
  "bg-grey-500",
  "bg-grey-600",
  "bg-grey-700",
  "bg-grey-800",
  "bg-grey-900",

  "hover:bg-grey-50",
  "hover:bg-grey-100",
  "hover:bg-grey-200",
  "hover:bg-grey-300",
  "hover:bg-grey-400",
  "hover:bg-grey-500",
  "hover:bg-grey-600",
  "hover:bg-grey-700",
  "hover:bg-grey-800",
  "hover:bg-grey-900",

  "bg-violet-50",
  "bg-violet-100",
  "bg-violet-200",
  "bg-violet-300",
  "bg-violet-400",
  "bg-violet-500",
  "bg-violet-600",
  "bg-violet-700",
  "bg-violet-800",
  "bg-violet-900",

  "hover:bg-violet-50",
  "hover:bg-violet-100",
  "hover:bg-violet-200",
  "hover:bg-violet-300",
  "hover:bg-violet-400",
  "hover:bg-violet-500",
  "hover:bg-violet-600",
  "hover:bg-violet-700",
  "hover:bg-violet-800",
  "hover:bg-violet-900",

  "bg-zinc-50",
  "bg-zinc-100",
  "bg-zinc-200",
  "bg-zinc-300",
  "bg-zinc-400",
  "bg-zinc-500",
  "bg-zinc-600",
  "bg-zinc-700",
  "bg-zinc-800",
  "bg-zinc-900",

  "hover:bg-zinc-50",
  "hover:bg-zinc-100",
  "hover:bg-zinc-200",
  "hover:bg-zinc-300",
  "hover:bg-zinc-400",
  "hover:bg-zinc-500",
  "hover:bg-zinc-600",
  "hover:bg-zinc-700",
  "hover:bg-zinc-800",
  "hover:bg-zinc-900",
];

const BorderColor = [
  "border-red-50",
  "border-red-100",
  "border-red-200",
  "border-red-300",
  "border-red-400",
  "border-red-500",
  "border-red-600",
  "border-red-700",
  "border-red-800",
  "border-red-900",

  "hover:border-red-50",
  "hover:border-red-100",
  "hover:border-red-200",
  "hover:border-red-300",
  "hover:border-red-400",
  "hover:border-red-500",
  "hover:border-red-600",
  "hover:border-red-700",
  "hover:border-red-800",
  "hover:border-red-900",

  "border-pink-50",
  "border-pink-100",
  "border-pink-200",
  "border-pink-300",
  "border-pink-400",
  "border-pink-500",
  "border-pink-600",
  "border-pink-700",
  "border-pink-800",
  "border-pink-900",

  "hover:border-pink-50",
  "hover:border-pink-100",
  "hover:border-pink-200",
  "hover:border-pink-300",
  "hover:border-pink-400",
  "hover:border-pink-500",
  "hover:border-pink-600",
  "hover:border-pink-700",
  "hover:border-pink-800",
  "hover:border-pink-900",

  "border-purple-50",
  "border-purple-100",
  "border-purple-200",
  "border-purple-300",
  "border-purple-400",
  "border-purple-500",
  "border-purple-600",
  "border-purple-700",
  "border-purple-800",
  "border-purple-900",

  "hover:border-purple-50",
  "hover:border-purple-100",
  "hover:border-purple-200",
  "hover:border-purple-300",
  "hover:border-purple-400",
  "hover:border-purple-500",
  "hover:border-purple-600",
  "hover:border-purple-700",
  "hover:border-purple-800",
  "hover:border-purple-900",

  "border-indigo-50",
  "border-indigo-100",
  "border-indigo-200",
  "border-indigo-300",
  "border-indigo-400",
  "border-indigo-500",
  "border-indigo-600",
  "border-indigo-700",
  "border-indigo-800",
  "border-indigo-900",

  "hover:border-indigo-50",
  "hover:border-indigo-100",
  "hover:border-indigo-200",
  "hover:border-indigo-300",
  "hover:border-indigo-400",
  "hover:border-indigo-500",
  "hover:border-indigo-600",
  "hover:border-indigo-700",
  "hover:border-indigo-800",
  "hover:border-indigo-900",

  "border-blue-50",
  "border-blue-100",
  "border-blue-200",
  "border-blue-300",
  "border-blue-400",
  "border-blue-500",
  "border-blue-600",
  "border-blue-700",
  "border-blue-800",
  "border-blue-900",

  "hover:border-blue-50",
  "hover:border-blue-100",
  "hover:border-blue-200",
  "hover:border-blue-300",
  "hover:border-blue-400",
  "hover:border-blue-500",
  "hover:border-blue-600",
  "hover:border-blue-700",
  "hover:border-blue-800",
  "hover:border-blue-900",

  "border-cyan-50",
  "border-cyan-100",
  "border-cyan-200",
  "border-cyan-300",
  "border-cyan-400",
  "border-cyan-500",
  "border-cyan-600",
  "border-cyan-700",
  "border-cyan-800",
  "border-cyan-900",

  "hover:border-cyan-50",
  "hover:border-cyan-100",
  "hover:border-cyan-200",
  "hover:border-cyan-300",
  "hover:border-cyan-400",
  "hover:border-cyan-500",
  "hover:border-cyan-600",
  "hover:border-cyan-700",
  "hover:border-cyan-800",
  "hover:border-cyan-900",

  "border-teal-50",
  "border-teal-100",
  "border-teal-200",
  "border-teal-300",
  "border-teal-400",
  "border-teal-500",
  "border-teal-600",
  "border-teal-700",
  "border-teal-800",
  "border-teal-900",

  "hover:border-teal-50",
  "hover:border-teal-100",
  "hover:border-teal-200",
  "hover:border-teal-300",
  "hover:border-teal-400",
  "hover:border-teal-500",
  "hover:border-teal-600",
  "hover:border-teal-700",
  "hover:border-teal-800",
  "hover:border-teal-900",

  "border-green-50",
  "border-green-100",
  "border-green-200",
  "border-green-300",
  "border-green-400",
  "border-green-500",
  "border-green-600",
  "border-green-700",
  "border-green-800",
  "border-green-900",

  "hover:border-green-50",
  "hover:border-green-100",
  "hover:border-green-200",
  "hover:border-green-300",
  "hover:border-green-400",
  "hover:border-green-500",
  "hover:border-green-600",
  "hover:border-green-700",
  "hover:border-green-800",
  "hover:border-green-900",

  "border-lime-50",
  "border-lime-100",
  "border-lime-200",
  "border-lime-300",
  "border-lime-400",
  "border-lime-500",
  "border-lime-600",
  "border-lime-700",
  "border-lime-800",
  "border-lime-900",

  "hover:border-lime-50",
  "hover:border-lime-100",
  "hover:border-lime-200",
  "hover:border-lime-300",
  "hover:border-lime-400",
  "hover:border-lime-500",
  "hover:border-lime-600",
  "hover:border-lime-700",
  "hover:border-lime-800",
  "hover:border-lime-900",

  "border-yellow-50",
  "border-yellow-100",
  "border-yellow-200",
  "border-yellow-300",
  "border-yellow-400",
  "border-yellow-500",
  "border-yellow-600",
  "border-yellow-700",
  "border-yellow-800",
  "border-yellow-900",

  "hover:border-yellow-50",
  "hover:border-yellow-100",
  "hover:border-yellow-200",
  "hover:border-yellow-300",
  "hover:border-yellow-400",
  "hover:border-yellow-500",
  "hover:border-yellow-600",
  "hover:border-yellow-700",
  "hover:border-yellow-800",
  "hover:border-yellow-900",

  "border-amber-50",
  "border-amber-100",
  "border-amber-200",
  "border-amber-300",
  "border-amber-400",
  "border-amber-500",
  "border-amber-600",
  "border-amber-700",
  "border-amber-800",
  "border-amber-900",

  "hover:border-amber-50",
  "hover:border-amber-100",
  "hover:border-amber-200",
  "hover:border-amber-300",
  "hover:border-amber-400",
  "hover:border-amber-500",
  "hover:border-amber-600",
  "hover:border-amber-700",
  "hover:border-amber-800",
  "hover:border-amber-900",

  "border-orange-50",
  "border-orange-100",
  "border-orange-200",
  "border-orange-300",
  "border-orange-400",
  "border-orange-500",
  "border-orange-600",
  "border-orange-700",
  "border-orange-800",
  "border-orange-900",

  "hover:border-orange-50",
  "hover:border-orange-100",
  "hover:border-orange-200",
  "hover:border-orange-300",
  "hover:border-orange-400",
  "hover:border-orange-500",
  "hover:border-orange-600",
  "hover:border-orange-700",
  "hover:border-orange-800",
  "hover:border-orange-900",

  "border-brown-50",
  "border-brown-100",
  "border-brown-200",
  "border-brown-300",
  "border-brown-400",
  "border-brown-500",
  "border-brown-600",
  "border-brown-700",
  "border-brown-800",
  "border-brown-900",

  "hover:border-brown-50",
  "hover:border-brown-100",
  "hover:border-brown-200",
  "hover:border-brown-300",
  "hover:border-brown-400",
  "hover:border-brown-500",
  "hover:border-brown-600",
  "hover:border-brown-700",
  "hover:border-brown-800",
  "hover:border-brown-900",

  "border-grey-50",
  "border-grey-100",
  "border-grey-200",
  "border-grey-300",
  "border-grey-400",
  "border-grey-500",
  "border-grey-600",
  "border-grey-700",
  "border-grey-800",
  "border-grey-900",

  "hover:border-grey-50",
  "hover:border-grey-100",
  "hover:border-grey-200",
  "hover:border-grey-300",
  "hover:border-grey-400",
  "hover:border-grey-500",
  "hover:border-grey-600",
  "hover:border-grey-700",
  "hover:border-grey-800",
  "hover:border-grey-900",

  "border-violet-50",
  "border-violet-100",
  "border-violet-200",
  "border-violet-300",
  "border-violet-400",
  "border-violet-500",
  "border-violet-600",
  "border-violet-700",
  "border-violet-800",
  "border-violet-900",

  "hover:border-violet-50",
  "hover:border-violet-100",
  "hover:border-violet-200",
  "hover:border-violet-300",
  "hover:border-violet-400",
  "hover:border-violet-500",
  "hover:border-violet-600",
  "hover:border-violet-700",
  "hover:border-violet-800",
  "hover:border-violet-900",

  "border-zinc-50",
  "border-zinc-100",
  "border-zinc-200",
  "border-zinc-300",
  "border-zinc-400",
  "border-zinc-500",
  "border-zinc-600",
  "border-zinc-700",
  "border-zinc-800",
  "border-zinc-900",

  "hover:border-zinc-50",
  "hover:border-zinc-100",
  "hover:border-zinc-200",
  "hover:border-zinc-300",
  "hover:border-zinc-400",
  "hover:border-zinc-500",
  "hover:border-zinc-600",
  "hover:border-zinc-700",
  "hover:border-zinc-800",
  "hover:border-zinc-900",
];
