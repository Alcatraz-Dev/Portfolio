import { defineField, defineType } from "sanity";

export default defineType({
  name: "educationTab",
  title: "Education Tab",
  description:"Add this document to about schema",
  type: "document",
  fields: [
    defineField({
      name: "educationName",
      title: "Education Name",
      type: "string",
    }),
      defineField({
        name: "educationInfo",
        title: "Education Info",
        type: "text",
      }),
      defineField({
        name: "educationlistItemImage",
        title: "Education List Item Image",
        description:"this is for change list item icon ... (png format)",
        type: "image",
      }),

  
  
  ],
});
