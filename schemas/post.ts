import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
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
      name: "postDescription",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "postTag",
      title: "Project Tag",
      type: "string",
    }),
    defineField({
      name: "tagBgColor",
      title: "Color",
      type: "string",
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
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
    defineField({
      name: "customButton",
      title: "Link Button",
      description: "max 2 buttons in single line",
      type: "array",
      of: [{ type: "reference", to: { type: "customButton" } }],
    }),
    defineField({
      name: "assetFile",
      title: "Asset File",
      description: "max 2 asset file in single line",
      type: "array",
      of: [{ type: "reference", to: { type: "assetFile" } }],
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
