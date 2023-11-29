import { defineField, defineType } from "sanity";
import {FcGenealogy} from "react-icons/fc"
export default defineType({
  name: "resourceSection",
  title: "Resource Section",
  icon:FcGenealogy,
  type: "document",
  fields: [
    defineField({
      name: "resourceSectionTitle",
      title: "Resource Section Title ",
      type: "string",
    }),
    defineField({
      name: "classNameResourceSectionTitleColor",
      title: "ClassName Resource Section Title Color",
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
      name: "tagEmptyPargraph",
      title: "Tag Empty Pargraph",
      description: " this is to change Tag Empty Pargraph",
      type: "string",
    }),
    defineField({
      name: "tagEmptyPargraphIcon",
      title: "tag Empty Pargraph Icon",
      description:
        " this is to change tag Empty Pargraph Icon (png format , from svgrepo.com)",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "tabFilter",
      title: "Resource Filter",
      type: "array",
      of: [{ type: "reference", to: { type: "resourceTabFilter" } }],
    }),

    defineField({
      name: "resource",
      title: "Resource",
      type: "array",
      of: [{ type: "reference", to: { type: "resource" } }],
    }),
  ],
});
