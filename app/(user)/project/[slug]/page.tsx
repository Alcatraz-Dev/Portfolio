import Image from "next/image";
import React from "react";
import Link from "next/link";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { Project } from "@/typings";
import urlFor from "@/lib/urlFor";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import WebShare from "@/components/WebShare";
import Colors from "@/components/Colors/Colors";

const colors = [Colors];

type Props = {
  params: {
    slug: string;
  };
};
export const revalidate = 10;

export async function generateStaticParams() {
  const quary = groq`*[_type =='project']{
          slug
      }`;
  const slugs: Project[] = await client.fetch(quary);
  const slagRoutes = slugs?.map((slug) => slug.slug.current);
  return slagRoutes?.map((slug) => ({
    slug,
  }));
}
async function Projects({ params: { slug } }: Props) {
  const query = groq`
      *[_type == 'project' && slug.current == $slug][0]{
        ...,author->, stacks[]->,paragraph[]->,customButton[]->,assetFile[]->,categories[]->,projectDetails[]->
      }
      `;

  const project: Project = await client.fetch(query, { slug });
 

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div
          key={project?._id}
          className={`absolute top-0 left-0 w-full h-[50vh] ${project?.projectOverlayImageClassNmae}/70 z-10`}
        />
        <Image
          className="absolute z-1 object-cover "
          fill
          src={urlFor(project?.mainImage).url()}
          alt={project?.title}
        />

        <div
          key={project?._id}
          className="absolute top-[75%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2"
        >
          <Link href="/#projects">
            <div className=" absolute top-0 right-0   cursor-pointer items-center hover:scale-105 ease-in-out duration-300">
              <ArrowLeftCircleIcon width={40} height={40} className="mr-10" />
            </div>
          </Link>
          <WebShare
            key={project?._id}
            title={project?.title}
            url={`https://alcatraz-portfolio.vercel.app/project/${project?.slug.current}`}
          />

          <h2
            className={`py-4  text-4xl  font-bold ${project?.projectTitleColor}`}
          >
            {project?.title}
          </h2>
          <p
            className={`my-3 absolute  ${project?.tagBgColor} backdrop-blur-md text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg`}
          >
            {project?.categories?.map((category) => (
              <span key={category?._id}>{category?.title}</span>
            ))}
          </p>

          <div key={project?._id} className="flex items-center space-x-4 my-10">
            <div className="flex items-center">
              <div className="flex items-center space-x-1 my-5">
                <Image
                  src={urlFor(project?.authorImage)
                    .width(500)
                    .height(500)
                    .url()}
                  alt={project?.authorName}
                  width={50}
                  height={50}
                  className=" mr-3"
                />
                <span className="font-mono">
                  {project?.authorName}{" "}
                  <p>
                    {new Date(project?.publishedAt).toLocaleDateString(
                      "en-US",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </p>
                </span>
              </div>
            </div>
          </div>

          <div
            key={project?._id}
            className="flex items-center space-x-4 mt-2 mb-32 "
          >
            <div key={project?._id} className="flex items-center">
              <div className="flex items-center space-x-1 mb-20 font-mono text-sm lg:text-base">
                <PortableText
                  value={project?.projectShortDescriptionPage}
                  components={RichTextComponents}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="  mx-5">
        <div className="mt-8">
          <div className="mx-5 col-span-4 md:col-span-1 shadow-sm shadow-gray-400 rounded-xl py-4">
          <h1 className="text-center  text-xl font-bold mt-3 text-gray-600 ">Information about the project</h1>
            <div className="p-2">
              <div className="col-span-4 md:col-span-1 shadow-sm shadow-gray-400 rounded-xl py-4 mx-5 mt-10 mb-10">
                <div className="p-2">
                  <div className="text-center font-bold pb-2">
                    <span className="text-center font-bold pb-2 pt-2 text-gray-600 ">
                      {" "}
                      Project Technologies
                    </span>
                    <div className=" mt-3 place-items-center grid gap-x-8 gap-y-4 grid-cols-3 xl:grid-cols-6 md:grid-cols-4 px-2  ">
                      {project?.stacks?.map((stack) => (
                        <div
                          key={stack?._id}
                          className="  text-gray-600 py-2  mt-5 mb-5 "
                        >
                          <Image
                            src={urlFor(stack?.mainImage)
                              .width(500)
                              .height(500)
                              .url()}
                            alt={stack?.title}
                            width={40}
                            height={40}
                            className="flex items-center justify-center "
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4 md:col-span-1 shadow-sm shadow-gray-400 rounded-xl py-4 px-3 mx-5 mt-10 mb-10">
                <p className="text-center font-bold pb-2 text-gray-600">Project Details</p>
                {project?.projectDetails?.map((details) => (
                  <div key={details?._id} className=" p-2 ">
                    <div className=" flex justify-start  text-xs font-semibold py-2 font-mono">
                      <Image
                        src={urlFor(details?.projectDetailsTitleCardIcon)
                          .width(500)
                          .height(500)
                          .url()}
                        alt={details?.title}
                        width={20}
                        height={20}
                        className="flex justify-start "
                      />{" "}
                      <span className="mx-2 mt-1">Project Title : {""}</span>
                      <span className="text-xs font-semibold mt-1  font-mono">
                        {project?.title}
                      </span>
                    </div>
                  </div>
                ))}
                {project?.projectDetails?.map((details) => (
                  <div key={details?._id} className=" p-2 ">
                    <div className=" flex justify-start  text-xs font-semibold py-2 font-mono">
                      <Image
                        src={urlFor(details?.projectDetailsStatusCardIcon)
                          .width(500)
                          .height(500)
                          .url()}
                        alt={details?.title}
                        width={20}
                        height={20}
                        className="flex justify-start "
                      />{" "}
                      <span className="mx-2 mt-1">Project Status : {""}</span>
                      <span className="text-xs font-semibold mt-1  font-mono">
                        {project?.statusName}
                      </span>
                    </div>
                  </div>
                ))}

                {project?.projectDetails?.map((details) => (
                  <div key={details?._id} className=" p-2 ">
                    <div className=" flex justify-start  text-xs font-semibold py-2 font-mono">
                      <Image
                        src={urlFor(details?.projectDetailsCategoryCardIcon)
                          .width(500)
                          .height(500)
                          .url()}
                        alt={details?.title}
                        width={20}
                        height={20}
                        className="flex justify-start "
                      />{" "}
                      <span className="mx-2 mt-1">Project Category : {""}</span>
                      <span className="text-xs font-semibold font-mono mt-1">
                        {project?.categories?.map((category) => (
                          <span key={category?._id}>{category?.title}</span>
                        ))}
                      </span>
                    </div>
                  </div>
                ))}
                {project?.projectDetails?.map((details) => (
                  <div key={details?._id} className=" p-2 ">
                    <div className=" flex justify-start  text-xs font-semibold py-2 font-mono">
                      <Image
                        src={urlFor(details?.projectDetailsTagCardIcon)
                          .width(500)
                          .height(500)
                          .url()}
                        alt={details?.title}
                        width={20}
                        height={20}
                        className="flex justify-start "
                      />{" "}
                      <span className="mx-2 mt-1">Project Tag : {""}</span>
                      <span className="text-xs font-semibold font-mono mt-1">
                        {project?.projectTag}
                      </span>
                    </div>
                  </div>
                ))}

                {project?.projectDetails?.map((details) => (
                  <div key={details?._id} className=" p-2 ">
                    <div className=" flex justify-start  text-xs font-semibold py-2 font-mono">
                      <Image
                        src={urlFor(details?.projectDetailsCreatedDateCardIcon)
                          .width(500)
                          .height(500)
                          .url()}
                        alt={details?.title}
                        width={20}
                        height={20}
                        className="flex justify-start "
                      />{" "}
                      <span className="mx-2 mt-1">
                        Project Created Date : {""}
                      </span>
                      <span className="text-xs font-semibold mt-1  font-mono">
                        {new Date(project?.publishedAt).toLocaleDateString(
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
                ))}

                {project?.projectDetails?.map((details) => (
                  <div key={details?._id} className=" p-2 ">
                    <div className=" flex justify-start  text-xs font-semibold py-2 font-mono">
                      <Image
                        src={urlFor(details?.projectDetailsAuthorCardIcon)
                          .width(500)
                          .height(500)
                          .url()}
                        alt={details?.title}
                        width={20}
                        height={20}
                        className="flex justify-start "
                      />{" "}
                      <span className="mx-2 mt-1">Project Author : {""}</span>
                      <span className="text-xs font-semibold mt-1  font-mono">
                        {project?.authorName}
                      </span>
                    </div>
                  </div>
                ))}
                {project?.projectDetails?.map((details) => (
                  <div key={details?._id} className=" p-2 ">
                    <div className=" flex justify-start  text-xs font-semibold py-2 font-mono">
                      <Image
                        src={urlFor(details?.projectDetailsAuthorBioCardIcon)
                          .width(500)
                          .height(500)
                          .url()}
                        alt={details?.title}
                        width={20}
                        height={20}
                        className="flex justify-start "
                      />{" "}
                      <span className="mx-2 mt-1">Author Bio : {""}</span>
                    </div>
                    <span className=" flex justify-start text-xs font-semibold font-mono mt-1">
                      <PortableText
                        value={project?.authorBio}
                        components={RichTextComponents}
                      />
                    </span>
                  </div>
                ))}

                {project?.projectDetails?.map((details) => (
                  <div key={details?._id} className=" p-2 ">
                    <div className=" flex justify-start  text-xs font-semibold py-2 font-mono">
                      <Image
                        src={urlFor(
                          details?.projectDetailsShortDescriptionCardIcon
                        )
                          .width(500)
                          .height(500)
                          .url()}
                        alt={details?.title}
                        width={20}
                        height={20}
                        className="flex justify-start "
                      />{" "}
                      <span className="mx-2 mt-1">
                        Project Short Description : {""}
                      </span>
                    </div>
                    <span className=" flex justify-start text-xs font-semibold font-mono mt-1">
                      {project?.description}
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
            key={project?._id}
            value={project?.body}
            components={RichTextComponents}
          />
        </div>
        <div className=" flex items-center justify-center space-x-3 mt-5 mb-5">
          {project?.customButton?.map((buttons) => (
            <div
              key={buttons?._id}
              className="flex items-center justify-center "
            >
              <Link href={buttons.url} target={"_blank"}>
                <div
                  className={`flex items-center justify-center right-0 p-3 py-3 mt-4 mb-4 text-xs font-bold w-auto h-auto text-white ${buttons?.buttonBgColor} py-2 
                rounded-lg shadow-lg hover:${buttons?.buttonHoverBgColor}-300 hover:scale-105 ease-in duration-300`}
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
          {project?.assetFile?.map((asset) => (
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
      <div className="grid grid-cols-3 md:grid-cols-1 ">
        <Link href="/#projects">
          <p
            className={`mt-10 mb-10 mx-5  rounded-lg w-32 h-auto p-2 cursor-pointer items-center hover:scale-105 ease-in duration-300 ${project?.buttonBgColor} hover:${project?.buttonHoverBgColor}`}
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

export default Projects;
