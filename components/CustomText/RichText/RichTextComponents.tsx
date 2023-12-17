import urlFor from "@/lib/urlFor";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Code from "../Code/Code";
import Colors from "../../Colors/Colors";

export const revalidate = 10;
const colors = Colors;

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="flex items-center justify-center mt-5 mb-5 ">
          <Image
            className="object-cover rounded-xl  "
            src={urlFor(value)?.maxWidth(500).maxHeight(500).url()}
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
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share autoplay=fauls"
            allowFullScreen
          ></iframe>
        </div>
      );
    },
    buttonAppleAndGoogle_Store: ({ value }: any) => {
      const Google_href = `${value.Google_url}`;
      const Google_rel = !Google_href ? "noreferrer noopener" : undefined;
      const Apple_href = `${value.Apple_url}`;
      const Apple_rel = !Apple_href ? "noreferrer noopener" : undefined;
      return (
        <div className="flex items-center justify-center  mt-3 mb-3 mx-2 space-x-8 sm:space-x-20 ">
          <Link href={Google_href} rel={Google_rel} target={"_blank"}>
            <div className="flex mt-3 w-48 h-14 bg-transparent text-black dark:text-white border border-black  dark:border-white  rounded-xl items-center justify-center hover:scale-105 ease-in duration-300 ">
              <div className="mr-3">
                <svg viewBox="30 336.7 120.9 129.2" width="30">
                  <path
                    fill="#FFD400"
                    d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                  />
                  <path
                    fill="#FF3333"
                    d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                  />
                  <path
                    fill="#48FF48"
                    d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                  />
                  <path
                    fill="#3BCCFF"
                    d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs">Download on the</div>
                <div className="text-2xl font-semibold font-sans -mt-1">
                  Google Play
                </div>
              </div>
            </div>
          </Link>
          <Link href={Apple_href} rel={Apple_rel} target={"_blank"}>
            <div className="flex mt-3 w-48 h-14 bg-transparent text-black dark:text-white border border-black  dark:border-white  rounded-xl items-center justify-center hover:scale-105 ease-in duration-300 ">
              <div className="mr-3">
                <svg viewBox="0 0 384 512" width="30">
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs">Download on the</div>
                <div className="text-2xl font-semibold font-sans -mt-1">
                  App Store
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    },
    buttonAppleStore: ({ value }: any) => {
      const Apple_href = `${value.Apple_url}`;
      const Apple_rel = !Apple_href ? "noreferrer noopener" : undefined;
      return (
        <div className="flex items-center justify-center  mt-3 mb-3 mx-2 space-x-8 sm:space-x-20 ">
          <Link href={Apple_href} rel={Apple_rel} target={"_blank"}>
            <div className="flex mt-3 w-48 h-14 bg-transparent text-black dark:text-white border border-black  dark:border-white  rounded-xl items-center justify-center hover:scale-105 ease-in duration-300 ">
              <div className="mr-3">
                <svg viewBox="0 0 384 512" width="30">
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs">Download on the</div>
                <div className="text-2xl font-semibold font-sans -mt-1">
                  App Store
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    },
    buttonGooglePlayStore: ({ value }: any) => {
      const Google_href = `${value.Google_Play_url}`;
      const Google_rel = !Google_href ? "noreferrer noopener" : undefined;
      return (
        <div className="flex items-center justify-center  mt-3 mb-3 mx-2 space-x-8 sm:space-x-20 ">
          <Link href={Google_href} rel={Google_rel} target={"_blank"}>
            <div className="flex mt-3 w-48 h-14 bg-transparent text-black dark:text-white border border-black  dark:border-white  rounded-xl items-center justify-center hover:scale-105 ease-in duration-300 ">
              <div className="mr-3">
                <svg viewBox="30 336.7 120.9 129.2" width="30">
                  <path
                    fill="#FFD400"
                    d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                  />
                  <path
                    fill="#FF3333"
                    d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                  />
                  <path
                    fill="#48FF48"
                    d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                  />
                  <path
                    fill="#3BCCFF"
                    d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs">Download on the</div>
                <div className="text-2xl font-semibold font-sans -mt-1">
                  Google Play
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    },
    buttonBuyMeACafe: ({ value }: any) => {
      const BuyMeACafe_href = `${value.BuyMeACafe_url}`;
      const BuyMeACafe_rel = !BuyMeACafe_href
        ? "noreferrer noopener"
        : undefined;
      return (
        <div className="flex items-center justify-center  mt-3 mb-3 mx-2 space-x-8 sm:space-x-20 ">
          <Link href={BuyMeACafe_href} rel={BuyMeACafe_rel} target={"_blank"}>
            <div className="flex mt-3 w-50 h-16 bg-transparent text-black dark:text-white border border-black  dark:border-white  rounded-xl items-center justify-center hover:scale-105 ease-in duration-300 mx-2 ">
              <div className="mx-3">
                <svg viewBox="0 0 24 24" width="30">
                  {" "}
                  <path
                    fill="currentColor"
                    d="m20.216 6.415-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 0 0-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 0 0-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 0 1-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 0 1 3.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 0 1-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 0 1-4.743.295 37.059 37.059 0 0 1-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0 0 11.343.376.483.483 0 0 1 .535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 0 1 .39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 0 1-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 0 1-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 0 0-1.322-.238c-.826 0-1.491.284-2.26.613z"
                  />
                </svg>
              </div>
              <div className="mx-3">
                <div className="text-xs">Make a donate</div>
                <div className="text-xl font-semibold font-sans -mt-1">
                  Buy me a coffee
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    },
    buttonKofi: ({ value }: any) => {
      const buttonKofi_href = `${value.Kofi_url}`;
      const buttonKofi_rel = !buttonKofi_href
        ? "noreferrer noopener"
        : undefined;
      return (
        <div className="flex items-center justify-center  mt-3 mb-3 mx-2 space-x-8 sm:space-x-20 ">
          <Link href={buttonKofi_href} rel={buttonKofi_rel} target={"_blank"}>
            <div className="flex mt-3 w-50 h-16 bg-transparent text-black dark:text-white border border-black  dark:border-white  rounded-xl items-center justify-center hover:scale-105 ease-in duration-300 mx-2 ">
              <div className="mx-3">
                <svg
                  viewBox="0 0 501.333 501.333"
                  width="30"
                  fill="currentColor"
                >
                  {" "}
                  <path d="M291.275,257.067c-6.4-26.667-28.8-41.6-45.867-48c-17.067-6.4-36.267-2.133-54.4,9.6c-18.133-12.8-38.4-16-55.467-10.667 c-17.067,6.4-38.4,22.4-45.867,48c-4.267,17.067-4.267,43.733,21.333,74.667c59.733,71.467,71.467,75.733,78.933,75.733 c1.067,0,1.067,0,1.067,0h1.067c7.467,0,19.2-4.267,77.867-74.667C296.608,300.8,295.542,274.133,291.275,257.067z M239.008,304 c-14.933,17.067-35.2,40.533-48,53.333c-12.8-12.8-34.133-37.333-49.067-54.4c-7.466-9.6-16-23.466-12.799-36.266 c2.133-9.6,11.733-17.067,19.2-19.2c6.4-2.133,17.067,2.133,26.667,11.733c2.133,1.067,3.2,2.133,5.333,3.2 c8.533,4.267,18.133,4.267,25.6-2.133c9.6-9.6,20.267-13.867,26.667-11.733c7.467,2.133,16,9.6,19.2,19.2 C255.008,280.533,246.475,294.4,239.008,304z"></path>
                  <path d="M493.942,220.8c-13.867-26.667-41.6-40.533-71.467-35.2l-40.533,6.4v-55.467c0-11.733-9.6-21.333-21.333-21.333h-339.2 c-11.733,0-21.333,9.6-21.333,21.333V400c0,55.467,45.867,101.333,101.333,101.333h178.133c56.533,0,101.333-45.867,102.4-100.267 l101.333-105.6C502.475,275.2,506.742,246.4,493.942,220.8z M339.275,400c0,33.067-26.667,59.733-59.733,59.733H101.408 c-33.067,0-59.733-26.667-59.733-59.733V157.867h297.6V400z M453.408,266.667l-71.467,73.6v-105.6l48-7.467 c13.867-3.2,23.467,5.333,27.733,12.8C459.808,244.267,464.075,256,453.408,266.667z"></path>
                  <path d="M87.542,0C75.808,0,66.208,9.6,66.208,21.333V57.6c0,11.733,9.6,21.333,21.333,21.333s20.267-9.6,21.333-20.267V21.333 C108.875,9.6,99.275,0,87.542,0z"></path>
                  <path d="M191.008,0c-11.733,0-21.333,9.6-21.333,21.333V57.6c0,11.733,9.6,21.333,21.333,21.333s20.267-9.6,21.333-20.267V21.333 C212.342,9.6,202.742,0,191.008,0z"></path>
                  <path d="M294.475,0c-11.733,0-21.333,9.6-21.333,21.333V57.6c0,11.733,9.6,21.333,21.333,21.333s21.333-9.6,21.333-20.267V21.333 C315.808,9.6,306.208,0,294.475,0z"></path>
                </svg>
              </div>
              <div className="mx-3">
                <div className="text-xs">Make a donate</div>
                <div className="text-xl font-semibold font-sans -mt-1">
                  Buy me a coffee
                </div>
              </div>
            </div>
          </Link>
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
                rounded-lg shadow-lg hover:scale-105 ease-in duration-300 ${value?.buttonBgColor} ${value?.buttonHoverBgColor} `}
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
          <Link href={`${url}${value?.fileId}?dl`} download>
            <button
              key={value?._id}
              className={`flex items-center justify-center right-0 p-2 mt-4 mx-2 mb-4 text-center text-sm font-bold w-full text-white py-2 
                rounded-lg shadow-lg hover:scale-105 ease-in duration-300 ${value?.buttonBgColor} ${value?.buttonHoverBgColor}  `}
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
      <ul className="ml-10 py-5 list-disc space-y-5 marker:text-[#99e000]">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-lg list-decimal marker:text-[#99e000]">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold ">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-bold ">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 font-bold ">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-bold ">{children}</h4>
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
