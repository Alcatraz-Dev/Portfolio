import { defineField, defineType } from "sanity";
import { FcFolder } from "react-icons/fc";
export default defineType({
  name: "galleryProject",
  title: "Gallery Project",
  icon: FcFolder,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    
    defineField({
      name: "galleryDetails",
      title: " Detailes Gallery",
      type: "array",
      of: [{ type: "reference", to: { type: "galleryDetailes" } }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
