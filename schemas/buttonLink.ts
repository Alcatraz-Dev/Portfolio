import { defineField, defineType } from "sanity";

export default defineType({
  name: "customButton",
  title: "Custom Button",
  description: "max 2 buttons in single line",
  type: "document",
  fields: [
    defineField({
      name: "buttonTitle",
      title: "Button Title",
      type: "string",
    }),
   
    defineField({
      name: "url",
      title: "Button Url Link",
      type: "string",
    }),
    defineField({
      name: "buttonBgColor",
      title: "Button Bg Color",
      description:
      "Tailwindcss for adding custom colors... (bg-blue-500 )",
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
      title: "Button Icon Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
