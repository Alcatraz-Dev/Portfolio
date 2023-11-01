"use client";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { RWebShare } from "react-web-share";

const WebShare = ({ title, url }: any) => {
  return (
    <div>
      <RWebShare
        data={{
          title: title,
          url: url,
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button className="absolute top-16 right-0   cursor-pointer items-center hover:scale-105 ease-in-out duration-300">
          <EllipsisHorizontalCircleIcon
            width={40}
            height={40}
            className="mr-10"
          />
        </button>
      </RWebShare>
    </div>
  );
};

export default WebShare;
