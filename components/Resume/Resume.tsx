"use client";

import { Resume } from "@/typings";
import React from "react";
import FileUrl from "sanity.config"
type Props = {
  resume: Resume[];
};

const ResumePage = ({ resume }: Props) => {

  const fileUrl = FileUrl.fileUrl

  return (
    <div>
      {resume?.map((rs) => (
        <iframe
          key={rs?._id}
          className="w-full h-screen"
          src={`${fileUrl}${rs?.fileId}`}
          frameBorder={0}
        ></iframe>
      ))}
    </div>
  );
};

export default ResumePage;
