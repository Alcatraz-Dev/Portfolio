import { defineField, defineType } from "sanity";
import { FcCallback } from "react-icons/fc";
export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  icon:FcCallback,
  fields: [
  
    defineField({
      name: "formTitle",
      title: "Form Title Name",
      type: "string",
    }),
    defineField({
      name: "formTitleColor",
      title: "Form Title Color",
      description:
      "Tailwindcss for adding custom colors... (text-zinc-700 dark:text-zinc-500  )",
      type: "string",
    }),
    defineField({
      name: "formShortDescription",
      title: "Form Short Description",
      type: "text",
    }),
  
    defineField({
      name: "socials",
      title: "Social",
      type: "array",
      of: [{ type: "reference", to: { type: "socialIcons" } }],
    }),
    defineField({
      name: "url",
      title: "Email Form Url",
      type: "string",
    }),
  ],
});
