import { defineField, defineType } from "sanity";
import { FcProcess } from "react-icons/fc";
export default defineType({
  name: "status",
  title: "Status",
  type: "document",
  icon:FcProcess,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
    }),
    defineField({
      name: "className",
      title: "ClassName",
      description:"Tailwindcss for adding custom status (py-2 border border-zinc-500 rounded-full dark:border-zinc-300)",
      type: "string",
    }),
    
   
  ],
});
