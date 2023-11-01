import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "aboutSectionTitle",
      title: "About Section Title ",
      type: "string",
    }),
  
     defineField({
      name: "classNameAboutTitleColor",
      title: "ClassName About Title Color",
      description: "Tailwindcss for adding custom status... (text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 )",
      type: "string",
    }),
      defineField({
        name: "shortBio",
        title: "Short Bio",
        type: "text",
      }),
      defineField({
        name: "mainImage",
        title: "Main image",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: "stempImage",
        title: "Stemp image",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: "skillsTab",
        title: "Skills Tab",
        type: "array",
        of: [{ type: "reference", to: { type: "skillsTab" } }],
      }),
      defineField({
        name: "educationTab",
        title: "Education Tab",
        type: "array",
        of: [{ type: "reference", to: { type: "educationTab" } }],
      }),
      defineField({
        name: "certificateTab",
        title: "Certificate Tab",
        type: "array",
        of: [{ type: "reference", to: { type: "certificateTab" } }],
      }),
   
  ],
});
