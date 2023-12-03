
import React from "react";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { previewData } from "next/headers";
import PreviewSuspense from "@/components/PreviewSuspense";
import ResumePreview from "@/components/PreviewsComponents/PreviewResume/ResumePreview"
import ResumePage from "@/components/Resume/Resume";


const resumeQuery = groq`
  *[_type == 'cv-resume']{
       ...,
    }|order(_createAt desc)
`;


export const revalidate = 10;
export default async function Resume() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role={"status"}>
            <p className="text-center text-lg animate-pulse text-[#99e000]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
 <ResumePreview resume={resumeQuery} />
      </PreviewSuspense>
    )
  }
  const resume = await client.fetch(resumeQuery);
return (
  <>
    <ResumePage resume={resume} />
  </>
);

}

