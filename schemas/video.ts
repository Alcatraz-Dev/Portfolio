import { defineField, defineType } from "sanity";

export default defineType({
  name: "video",
  title: "Video",
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
      name: "videoUrl",
      title: "Video Url",
      type: "url",
    }),

    defineField({
      name: "mainImage",
      title: "Video Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "videoTag",
      title: "Video Tag",
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
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
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
});
