import { defineField, defineType } from "sanity";
import { FcBusinessContact } from "react-icons/fc";
export default defineType({
  name: "socialIcons",
  title: "Social Icons",
  type: "document",
  icon:FcBusinessContact,
  fields: [
    defineField({
      name: "socialIconName",
      title: "Social Icon Name",
      type: "string",
    }),
    defineField({
      name: "socialIconUrl",
      title: "Social Icon Url",
      type: "string",
    }),
    defineField({
      name: "socialIconButtonIcon",
      title: "Social Icon Button Icon",
      description:
      "this is for adding custom icon image and use format png form... ( svgrepo.com )",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  
  ],
});
