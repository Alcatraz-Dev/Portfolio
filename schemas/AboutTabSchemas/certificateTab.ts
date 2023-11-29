import { defineField, defineType } from "sanity";
import {FcServices} from "react-icons/fc"

export default defineType({
  name: "certificateTab",
  title: "Certificate Tab",
  icon:FcServices,
  description:"Add this document to about schema ",
  type: "document",
  fields: [
    defineField({
      name: "certificateName",
      title: "Certificate Name",
      type: "string",
    }),
      defineField({
        name: "certificateInfo",
        title: "Education Info",
        type: "text",
      }),
      defineField({
        name: "certificatelistItemImage",
        title: "Certificate List Item Image",
        description:"this is for change list item icon ... (png format)",
        type: "image",
      }),
      defineField({
        name: "certificateUrl",
        title: "Certificate Url",
        description:"this is for show Certtificate ...",
        type: "slug",
      }),
      defineField({
        name: "classNameCertificateUrlColor",
        title: "ClassName Certificate Url Color",
        description:
          "Tailwindcss for adding custom status... (text-cyan-500 )",
        type: "string",
      }),

  
  
  ],
});
