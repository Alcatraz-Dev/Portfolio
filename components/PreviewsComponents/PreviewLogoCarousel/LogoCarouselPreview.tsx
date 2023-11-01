"use client";
import LogoCarousel from "@/components/SkillsLogoCarousel/LogoCarousel";
import { usePreview } from "@/lib/sanity.preview";


type Props = {
  logo: string;
 
};
function PreviewVideo({ logo }: Props ) {
 
  const Logo = usePreview(null, logo);
  return (
    <LogoCarousel logos={Logo}/>
  );
}

export default PreviewVideo;
