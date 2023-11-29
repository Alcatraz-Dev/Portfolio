// "use client";
// import { usePreview } from "@/lib/sanity.preview";
// import VideoList from "./videoList";

// type Props = {
//   video: string;
//   pargraph: string;
//   buttonLink: string;
// };
// function PreviewVideo({ video, pargraph, buttonLink }: Props) {
//   const videos = usePreview(null, video);
//   const pargraphs = usePreview(null, pargraph);
//   const buttons = usePreview(null, buttonLink);
//   return (
//     <VideoList linkButton={buttons} video={videos} pharagraph={pargraphs} />
//   );
// }

// export default PreviewVideo;
import React from "react";

function PreviewVideo() {
  return <div>PreviewVideo</div>;
}

export default PreviewVideo;
