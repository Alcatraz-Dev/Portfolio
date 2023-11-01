// "use client";
// import StatusPage from "@/components/Status/Status";
// import { groq } from "next-sanity";
// import { client } from "@/lib/sanity.client";

// const statusQuery = groq`
// *[_type == 'status']{
//      ...,
//   }|order(_createAt desc)
// `;
// export const revalidate = 10;
// export default async function PreviewStatus( {status , active } :any) {
 
//   const Status = await client.fetch(statusQuery);
 
//   return (
//     <StatusPage status={Status} active={Status} />
//   );
// }

import React from "react";

function StatusPreview() {
  return <div>StatusPreview</div>;
}

export default StatusPreview;

