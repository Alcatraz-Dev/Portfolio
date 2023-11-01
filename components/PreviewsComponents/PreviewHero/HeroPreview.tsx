"use client";
import HeroSection from "@/components/HeroSection/HeroSection";
import { usePreview } from "@/lib/sanity.preview";


type Props = {
  hero: string;
 
};
function PreviewVideo({ hero }: Props ) {
 
  const Hero = usePreview(null, hero);
  return (
    <HeroSection hero={Hero}/>
  );
}

export default PreviewVideo;
