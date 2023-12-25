import { defineField, defineType } from "sanity";
import { FcFolder } from "react-icons/fc";
export default defineType({
  name: "gallery",
  title: "Gallery",
  icon: FcFolder,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "authorName",
      title: "Author Name",
      type: "string",
    }),
    defineField({
      name: "projectTitle",
      title: "Project Title",
      type: "string",
    }),

    defineField({
      name: "titleSpan",
      title: "Title Span",
      type: "string",
      description:"this the complet of title but with anouther color"
    }),
    defineField({
      name: "categoryOrTag",
      title: "Category Or Tag",
      type: "string",
    }),
    defineField({
      name: "paragraph",
      title: "Paragraph",
      type: "text",
    }),
    defineField({
      name: "buttonSlug",
      title: "Button Slug",
      type: "slug",
      options: {
        source: "projectTitle",
        maxLength: 96,
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

    defineField({
      name: "artImage",
      title: "Art Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "images",
      type: "array",
      title: "Images",
      of: [
        
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    }),

 
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "artImage",
      images: "images",
      image: "images.0",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
