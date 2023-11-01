"use client";
import { usePreview } from "@/lib/sanity.preview";
import About from "./About";

type Props = {
  resume: string;
  pargraph: string;
};
function PreviewResume({ resume, pargraph }: Props) {
  const resumes = usePreview(null, resume);
  const pargraphs = usePreview(null, pargraph);
  return <About resume={resumes} pharagraph={pargraphs} />;
}

export default PreviewResume;
