"use client";

import AboutSection from "@/components/AboutSection/AboutSection";
import { usePreview } from "@/lib/sanity.preview";


type Props = {
  about: string;
 
};
function PreviewVideo({ about }: Props ) {
 
  const About = usePreview(null, about);
  return (
    <AboutSection about={About}/>
  );
}

export default PreviewVideo;
