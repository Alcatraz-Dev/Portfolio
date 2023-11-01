import { defineField, defineType } from "sanity";

export default defineType({
  name: "youtubeVideoEmbad",
  title: "Youtube Video",
  type: "object",
  fields: [
    defineField({
      name: "id",
      title: "Video Id",
      type: "string",
    }),
  ],
});
