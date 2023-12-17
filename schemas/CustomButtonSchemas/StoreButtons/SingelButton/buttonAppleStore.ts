import { defineField, defineType } from "sanity";
import { FcPuzzle } from "react-icons/fc";
export default defineType({
  name: "buttonAppleStore",
  title: "Button Apple Store",
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
   
  ],
});
