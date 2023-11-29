import { defineField, defineType } from "sanity";
import { FcTreeStructure } from "react-icons/fc";
export default defineType({
  name: "community",
  title: "Community",
  icon:FcTreeStructure,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "titelColor",
      title: "Color",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "communityUrl",
      title: "Community Url",
      type: "url",
    }),

    defineField({
      name: "mainImage",
      title: "Community Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "CoverImage",
      title: "Community Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "communityTag",
      title: "Community Tag",
      type: "string",
    }),
    defineField({
      name: "tagBgColor",
      title: "Color",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
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
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "customButton",
      title: "Link Button",
      description: "max 2 buttons in single line",
      type: "array",
      of: [{ type: "reference", to: { type: "customButton" } }],
    }),
  ],
});
