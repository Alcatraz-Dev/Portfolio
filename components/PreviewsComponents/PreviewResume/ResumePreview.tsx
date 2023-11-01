"use client";
import ResumePage from "@/components/Resume/Resume";
import { usePreview } from "@/lib/sanity.preview";


type Props = {
  resume: string;
 
};
function PreviewVideo({ resume }: Props ) {
 
  const Resume = usePreview(null, resume);
  return (
    <ResumePage resume={Resume}/>
  );
}

export default PreviewVideo;
