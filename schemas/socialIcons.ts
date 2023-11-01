import { defineField, defineType } from "sanity";

export default defineType({
  name: "socialIcons",
  title: "Social Icons",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "Url",
      type: "string",
    }),
    defineField({
      name: "fgcolor",
      title: "Fg Color",
      type: "string",
    }),
    defineField({
      name: "bgcolor",
      title: "Bg Color",
      type: "string",
    }),
  ],
});
