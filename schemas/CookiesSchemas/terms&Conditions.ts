import { defineField, defineType } from "sanity";
import {FcRules} from "react-icons/fc"
export default defineType({
  name: "termsAndConditions",
  title: "Terms & Conditions",
  icon:FcRules,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
        name: "body",
        title: "Body",
        type: "blockContent",
      }),
  ],
});
