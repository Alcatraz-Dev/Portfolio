import { defineField, defineType } from "sanity";

export default defineType({
  name: "codeInput",
  title: "Code",
  description: "max 2 files in single line",
  type: "object",
  fields: [
    defineField({
      name: "codeName",
      title: "Code Name",
      type: "string",
    }),
    defineField({
      name: "code",
      title: "code",
      type: "code",
    }),
  ],
});
