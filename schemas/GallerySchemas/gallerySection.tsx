import { defineField, defineType } from "sanity";
import { FcGenealogy } from "react-icons/fc";

export default defineType({
  name: "gallerySection",
  title: "Gallery Section",
  icon: FcGenealogy,
  type: "document",
  fields: [
    defineField({
      name: "gallerySectionTitle",
      title: "gallery Section Title ",
      type: "string",
    }),
    defineField({
      name: "classNamegallerySectionTitleColor",
      title: "ClassName gallery Section Title Color",
      description:
        "Tailwindcss for adding custom status... (text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 )",
      type: "string",
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
    }),
 
    
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "reference", to: { type: "gallery" } }],
    }),
  ],
});
