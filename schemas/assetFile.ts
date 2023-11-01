import { defineField, defineType } from "sanity";

export default defineType({
  name: "assetFile",
  title: "Asset File",
  description: "max 2 files in single line",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "assetFile",
      title: "Asset File",
      type: "file",
    }),
    defineField({
      name: "fileId",
      title: "File Id",
      type: "string",
    }),

    defineField({
      name: "buttonBgColor",
      title: "Button Bg Color",
      type: "string",
    }),
    defineField({
      name: "buttonHoverBgColor",
      title: "Button Hover Bg Color",
      description:
      "Tailwindcss for adding custom colors... (bg-blue-400 )",
      type: "string",
    }),
    defineField({
      name: "buttonIcon",
      title: "Button Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
