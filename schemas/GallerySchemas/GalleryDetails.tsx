import { defineField, defineType } from "sanity";
import { FcFolder } from "react-icons/fc";
export default defineType({
  name: "galleryDetailes",
  title: "Gallery Detailes",
  icon: FcFolder,
  type: "document",
  fields: [
    defineField({
        name: "subtitel",
        title: "Subtitel",
        type: "string",
      }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
        name: "titleColer",
        title: "Title Coler",
        type: "string",
        description:"the end of titel with anther color "
      }),
      defineField({
        name: "paragraph",
        title: "Paragraph",
        type: "text",
       
      }),
   

    defineField({
      name: "artImage",
      title: "Art Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
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
