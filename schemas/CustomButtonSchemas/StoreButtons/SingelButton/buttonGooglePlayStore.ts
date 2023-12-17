import { defineField, defineType } from "sanity";
import { FcPuzzle } from "react-icons/fc";
export default defineType({
  name: "buttonGooglePlayStore",
  title: "Button Google Play Store",
  icon:FcPuzzle,
  type: "document",
  fields: [
    defineField({
      name: "buttonTitle",
      title: "Button Title",
      type: "string",
    }),

    defineField({
      name: "Google_Play_url",
      title: "Google Play Button Url Link",
      type: "string",
    }),
   
  ],
});
