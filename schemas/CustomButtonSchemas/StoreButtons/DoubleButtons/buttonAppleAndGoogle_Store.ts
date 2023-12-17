import { defineField, defineType } from "sanity";
import { FcPuzzle } from "react-icons/fc";
export default defineType({
  name: "buttonAppleAndGoogle_Store",
  title: "Button Apple And Google Store",
  icon:FcPuzzle,
  type: "document",
  fields: [
    defineField({
      name: "buttonTitle",
      title: "Button Title",
      type: "string",
    }),

    defineField({
      name: "Apple_url",
      title: "Apple Button Url Link",
      type: "string",
    }),
    defineField({
        name: "Google_url",
        title: "Google Button Url Link",
        type: "string",
      }),
   
  ],
});
