"use client";
import ContactSection from "@/components/ContactSection/ContactSection";
import { usePreview } from "@/lib/sanity.preview";


type Props = {
  contact: string;
 
};
function PreviewVideo({ contact }: Props ) {
 
  const Contact = usePreview(null, contact);
  return (
    <ContactSection contact={Contact}/>
  );
}

export default PreviewVideo;
