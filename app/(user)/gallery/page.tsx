"use client";
import { RichTextComponents } from "@/components/CustomText/RichText/RichTextComponents";
import { client } from "@/lib/sanity.client";
import { Gallery, PrivacyPolicy } from "@/typings";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import WebShare from "@/components/Shear/WebShare";
import { MotionDiv } from "@/components/ServerSideAnimation/MotionDiv";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import ClientSideRoute from "@/components/Route/ClientSideRoute";
export const revalidate = 10;

const BaseUrl = `${process.env.NEXT_PUBLIC_VERCEL_URL}/`;
function PrivacyPolicyPage() {
  const [pageData, setPageData] = useState<Gallery>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch<Gallery[]>(
          `*[_type == "gallery"]`
        );
        setPageData(result[0]);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  if (!pageData) {
    return (
      <div className=" w-full h-screen font-mono text-lime-500 flex justify-center items-center text-xl font-bold  ">
        Privacy Policy {''}<span className="animate-pulse">...</span>
      </div>
    ); // Loading state
  }

  return (
    <div className="relative h-screen overflow-hidden  ">
    <div className="flex justify-center items-center h-full overflow-hidden">
      <Link href="/#gallery">
        <div className=" absolute right-[-10px] top-[20%] cursor-pointer items-center z-50 ">
          <ArrowLeftCircleIcon
            width={40}
            height={40}
            className="mr-10 text-white  hover:scale-105 ease-in-out duration-300 hover:text-lime-500"
          />
        </div>
      </Link>
      <div className=" text-white absolute right-[-10px] top-[20%]  cursor-pointer items-center hover:text-blue-400 hover:scale-105 ease-in-out duration-300 z-50">
        <WebShare
          key={pageData?._id}
          title={pageData?.title}
          url={`${BaseUrl}/gallery/gallery-project/${pageData?.slug.current}`}
        />
      </div>

      <MotionDiv
        className="relative w-full h-full rounded-md "
        animate={{ opacity: 1, scale: 1.2 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {pageData?.images?.map((imageSrc, imageIndex) => (
          <MotionDiv
            key={imageIndex}
            initial={{ opacity: imageIndex === imageIndex ? 1 : 0 }}
            animate={{ opacity: imageIndex === imageIndex ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className={`w-full h-auto ${
              imageIndex === imageIndex ? "block" : "hidden"
            }`}
          >
            <Image
              key={imageIndex}
              className="w-full h-full object-cover rounded-lg"
              src={urlFor(pageData?.artImage)
                .width(500)
                .height(500)
                .url()}
              fill
              alt={`${imageIndex + 1}`}
            />

            <div className="absolute top-0 left-0 w-full h-full bg-black/10 " />

            <MotionDiv
              key={imageIndex}
              className="absolute pl-20 lg:pl-44 md:pl-40 top-[25%] flex flex-col items-center justify-center z-50"
              initial={{ filter: "blur(10px)", y: 50, opacity: 0 }}
              animate={{ filter: "blur(0)", y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
                staggerChildren: 0.5,
              }}
            >
              <MotionDiv
                key={imageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <MotionDiv
                  className="text-white text-2xl font-bold mb-2 drop-shadow-lg z-50"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: imageIndex * 0.25,

                    staggerChildren: 0.5,
                  }}
                >
                  {pageData?.authorName}
                </MotionDiv>
                <MotionDiv
                  className="text-white text-5xl font-bold mb-2 pr-10 drop-shadow-lg z-50"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: imageIndex * 0.3,

                    staggerChildren: 0.5,
                  }}
                >
                  {pageData?.projectTitle}{" "}
                  <span className="text-lime-500 drop-shadow-lg z-50">
                    {pageData?.titleSpan}
                  </span>
                </MotionDiv>
                <MotionDiv
                  className="text-white text-2xl mb-4 drop-shadow-lg z-50"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: imageIndex * 0.35,

                    staggerChildren: 0.5,
                  }}
                >
                  {pageData?.categoryOrTag}
                </MotionDiv>
                <MotionDiv
                  className=" text-white flex justify-between space-x-2 pr-20 drop-shadow-lg z-50"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: imageIndex * 0.4,

                    staggerChildren: 0.5,
                  }}
                >
                  {/* Your lorem ipsum text goes here */}
                  {pageData?.paragraph}
                </MotionDiv>
                <MotionDiv
                  className="my-5 pr-20 "
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: imageIndex * 0.4,

                    staggerChildren: 0.5,
                  }}
                >
                  <ClientSideRoute
                    key={pageData?._id}
                    route={`/gallery/project-detailes/${pageData?.slug.current}`}
                  >
                    <button className=" text-white font-medium sm:mr-10 text-center px-8  cursor-pointer inline-block py-3 w-full sm:w-fit rounded-full hover:scale-105 ease-in duration-300 bg-gradient-to-br from-lime-500 to-green-500">
                      More Detailes
                    </button>{" "}
                  </ClientSideRoute>
                </MotionDiv>
              </MotionDiv>
            </MotionDiv>
          </MotionDiv>
        ))}
      </MotionDiv>
    </div>
    <div
      className=" absolute inset-x-0 bottom-[10%] flex place-items-center items-center justify-center  px-10
     "
    >
      {pageData?.images?.map((imageSrc, imageIndex) => (
        <div
          key={imageIndex}
          className={`w-9 h-9 lg:w-25 sm:h-25 md:w-20 md:h-20 mx-2 relative rounded-lg cursor-pointer 
              active:border-2 border-lime-500`}
        >
          <Image
            key={imageIndex}
            className="w-full h-full object-cover rounded-lg"
            src={urlFor(imageSrc).width(500).height(500).url()}
            width={500}
            height={500}
            alt={`${imageIndex + 1}`}
          />
        </div>
      ))}
    </div>

    <div className="absolute inset-x-0  bottom-3 flex items-center justify-center ">
      <button
        className=" text-white mx-3 bg-gray-500/40 rounded-full w-8 h-8 items-center hover:scale-110 ease-in duration-300 hover:bg-lime-500 z-50"
        // onClick={() => handleChangeImage(-1)}
      >
        &lt;
      </button>

      {pageData?.images?.map((imageSrc, imageIndex) => (
        <div
          key={imageIndex}
          className={`w-4 h-4 mx-1 rounded-full cursor-pointer bg-gray-500 bg-opacity-40 active:bg-lime-500`}
          // onClick={() => handleChangeImage(imageIndex - imageIndex )}
        ></div>
      ))}

      <button
        className=" text-white mx-3 bg-gray-500/40 rounded-full w-8 h-8 items-center hover:scale-110 ease-in duration-300 hover:bg-lime-500 z-50"
        // onClick={() => handleChangeImage(1)}
      >
        &gt;
      </button>
    </div>
  </div>
  );
}

export default PrivacyPolicyPage;
