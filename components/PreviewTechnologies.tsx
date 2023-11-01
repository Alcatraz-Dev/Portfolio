"use client";
import { usePreview } from "@/lib/sanity.preview";

import Technologies from "./Technologies";
type Props = {
  generalTechnologies: string;
  pargraph: string;
};
function PreviewTechnologies({ generalTechnologies, pargraph }: Props) {
  const technologies = usePreview(null, generalTechnologies);
  const pargraphs = usePreview(null, pargraph);
  return <Technologies technologies={technologies} pharagraph={pargraphs} />;
}

export default PreviewTechnologies;
