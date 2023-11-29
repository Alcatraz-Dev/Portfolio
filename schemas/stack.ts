import { defineField, defineType } from "sanity";
import { FcCommandLine } from "react-icons/fc";
export default defineType({
  name: "stack",
  title: "Stack",
  type: "document",
  icon:FcCommandLine,
  fields: [
    defineField({
      name: "title",
      title: "Stack Title",
      type: "string",
    }),
    defineField({
      name: "skill",
      title: "Skill Number",
      type: "number",
    }),
    defineField({
      name: "mainImage",
      title: "Stack Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
