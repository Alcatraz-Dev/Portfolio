import { defineField, defineType } from "sanity";
import { FcPuzzle } from "react-icons/fc";
export default defineType({
  name: "buttonBuyMeACafe",
  title: "Button Buy Me A Cafe",
  icon:FcPuzzle,
  type: "document",
  fields: [
    defineField({
      name: "buttonTitle",
      title: "Button Title",
      type: "string",
    }),

    defineField({
      name: "BuyMeACafe_url",
      title: "Buy Me A Cafe Button Url Link",
      type: "string",
    }),
   
  ],
});
