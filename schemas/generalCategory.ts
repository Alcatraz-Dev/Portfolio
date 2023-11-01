import { defineField, defineType } from "sanity";

export default defineType({
  name: "generalCategory",
  title: "General Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
    }),
    defineField({
      name: "stacks",
      title: "Stack",
      type: "array",
      of: [{ type: "reference", to: { type: "stack" } }],
    }),
  ],
});
