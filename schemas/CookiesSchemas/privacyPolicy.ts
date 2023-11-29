import { defineField, defineType } from "sanity";
import {FcLock} from "react-icons/fc"
export default defineType({
  name: "privacyPolicy",
  title: "Privacy Policy",
  icon:FcLock,
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
