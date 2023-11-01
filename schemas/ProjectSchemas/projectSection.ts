import { defineField, defineType } from "sanity";

export default defineType({
  name: "projectSection",
  title: "Project Section",
  type: "document",
  fields: [
    defineField({
      name: "projectSectionTitle",
      title: "Project Section Title ",
      type: "string",
    }),
    defineField({
      name: "classNameProjectSectionTitleColor",
      title: "ClassName Project Section Title Color",
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
      name: "project",
      title: "Project",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }],
    }),
  ],
});
