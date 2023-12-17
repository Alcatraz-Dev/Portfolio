import { defineField, defineType } from "sanity";
import { FcPuzzle } from "react-icons/fc";
export default defineType({
  name: "customButton",
  title: "Custom Button",
  icon:FcPuzzle,
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
      description: "Tailwindcss for adding custom colors... (bg-blue-500 )",
      type: "string",
    }),

    defineField({
      name: "buttonHoverBgColor",
      title: "Button Hover Bg Color",
      description: "Tailwindcss for adding custom colors... (hover:bg-blue-400 )",
      type: "string",
    }),
    defineField({
      name: "buttonIcon",
      title: "Button Icon Image",
      type: "image",
      description:
        "this is for adding custom icon image and use format png form... ( svgrepo.com )",
      options: {
        hotspot: true,
      },
    }),
  ],
});
