
import React from "react";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";


import ResumePage from "@/components/Resume/Resume";


const resumeQuery = groq`
  *[_type == 'cv-resume']{
       ...,
    }|order(_createAt desc)
`;


export const revalidate = 10;
export default async function Resume() {
 
  const resume = await client.fetch(resumeQuery);
return (
  <>
    <ResumePage resume={resume} />
  </>
);

}

