"use client";
import { usePreview } from "@/lib/sanity.preview";

import Header from "./Header";
type Props = {
  socialIcons: string;
};
function PreviewSocialIcons({ socialIcons }: Props) {
  const socialIcon = usePreview(null, socialIcons);

  return <Header socialIcons={socialIcon} />;
}

export default PreviewSocialIcons;
