import { defineField, defineType } from "sanity";
import { FcPuzzle } from "react-icons/fc";
export default defineType({
  name: "buttonKofi",
  title: "Button Ko-fi",
  icon:FcPuzzle,
  type: "document",
  fields: [
    defineField({
      name: "buttonTitle",
      title: "Button Title",
      type: "string",
    }),

    defineField({
      name: "Kofi_url",
      title: "Ko-fi Button Url Link",
      type: "string",
    }),
   
  ],
});
