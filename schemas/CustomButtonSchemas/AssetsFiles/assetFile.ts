import { defineField, defineType } from "sanity";
import { FcScatterPlot } from "react-icons/fc";
export default defineType({
  name: "assetFile",
  title: "Asset File",
  icon:FcScatterPlot,
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
      "Tailwindcss for adding custom colors... (hover:bg-blue-400 )",
      type: "string",
    }),
    defineField({
      name: "buttonIcon",
      title: "Button Icon",
      description:
      "this is for adding custom icon image and use format png form... ( svgrepo.com )",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
