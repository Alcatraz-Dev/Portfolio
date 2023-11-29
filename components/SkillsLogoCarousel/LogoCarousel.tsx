import Image from "next/image";
import React from "react";
import urlFor from "@/lib/urlFor";
import { LogoCarousel } from "@/typings";


type Props = {
  logos: LogoCarousel[];
};

const LogoCarousel = ({ logos }: Props) => {
  return (
    
    <div className={`my-24 `}>
       <h1 className=" mb-10 text-xs md:text-sm lg:text-sm  text-gray-400  font-bold flex justify-center capitalize">
        FAMILIAR WITH THIS TECHNOLOGY AND TOOLS
        </h1>
      <div
        x-data="{}"
        x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(70%-128px),transparent_100%)]"
      >
        <ul
          x-ref="logos"
          className="flex items-center justify-center  md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        >
         
          {logos?.map((logo) => (
            <li key={logo?._id} >
              <Image
                key={logo?._id}
                src={urlFor(logo?.mainImage).width(70).height(70).url()}
                alt={logo?.brandname}
                width={70}
                height={70}
                className={`${logo?.className} `}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LogoCarousel;
const GrayscaleColor = [
  "grayscale",
  "grayscale-0",
  "dark:grayscale",
  "dark:grayscale-0",
 
];