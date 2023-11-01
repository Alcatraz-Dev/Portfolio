import { defineField, defineType } from "sanity";

export default defineType({
  name: "videoEmbad",
  title: "Video",
  type: "object",
  fields: [
    defineField({
      name: "videoFile",
      title: "Video File",
      type: "file",
    }),
    defineField({
      name: "id",
      title: "Video Id",
      type: "string",
    }),
  ],
});
