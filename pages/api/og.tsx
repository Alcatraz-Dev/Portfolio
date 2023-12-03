import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: 'edge', // for Edge API Routes only
  unstable_allowDynamic: [
    // allows a single file
    '/lib/utilities.js',
    // use a glob to allow anything in the function-bind 3rd party module
    '/node_modules/function-bind/**',
  ],
}
const title = "Haythem Dhahri | Portfolio - Full Stack & Game Developer";

const description =
  "Haythem Dhahri, an experienced Full Stack Developer specializing in frontend, backend, game development, and graphic design, delivering innovative solutions.";
const websiteUrl =
  process.env.NEXT_PUBLIC_VERCEL_URL || ` http://localhost:3000 `;

export default async function () {
  return new ImageResponse(
    (
      <div tw="flex flex-row-reverse h-full bg-zinc-900">
        <div tw="flex w-1/2 h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}

         

          <div
            tw="absolute left-[-80px] top-[-30px] w-[150px] h-[120%] bg-white"
            style={{ transform: "rotate(12deg)" }}
          />
           <img
            tw="absolute object-fill  h-100% w-100% bg-white z-10"
            src={`${websiteUrl}/LogoImage.png`}
            width="50"
            height="50"
            alt="Brand Logo"
          />
           <div
            tw="absolute left-[-170px] top-[-30px] w-[150px] h-[120%] bg-zinc-900"
            style={{ transform: "rotate(12deg)" }}
          />
          
        </div>
        <div tw="flex flex-col w-1/2 p-[48px] mt-auto text-white ">
          <h1 tw="text-[52px] text-bold ">{title}</h1>
          <p tw="text-[26px] text-zinc-400 mx-auto ">{description}</p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
