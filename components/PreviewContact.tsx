"use client";
import { usePreview } from "@/lib/sanity.preview";
import Contact from "./Contact";

type Props = {
  contact: string;
  pargraph: string;
};
function PreviewContact({ contact, pargraph }: Props) {
  const contactInfo = usePreview(null, contact);
  const pargraphs = usePreview(null, pargraph);
  return <Contact pharagraph={pargraphs} contact={contactInfo} />;
}

export default PreviewContact;
