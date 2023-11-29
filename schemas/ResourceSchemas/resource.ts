import { defineField, defineType } from "sanity";
import { FcFolder } from "react-icons/fc";
export default defineType({
  name: "resource",
  title: "Resource",
  icon: FcFolder,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "resourceTitleColor",
      title: "Resource Title Color",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "resourceShortDescriptionPage",
      title: "Resource Short Description Page",
      description: "this Description for singel pages details..",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    }),
    defineField({
      name: "resourceUrl",
      title: "Url Resource",
      type: "url",
    }),
    defineField({
      name: "sourceUrl",
      title: "Url Source",
      type: "url",
    }),

    defineField({
      name: "mainImage",
      title: "Resource Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 15,
      },
    }),

    defineField({
      name: "resourceOverlayImageClassNmae",
      title: "Resource Overlay Image ClassName",
      description:
        "Tailwindcss for adding custom BG  (spport gradient bg color and solid color ...)",
      type: "string",
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),

    defineField({
      name: "statusTitle",
      title: "Status Title",
      type: "string",
    }),
    defineField({
      name: "statusName",
      title: "Status Name",
      type: "string",
    }),
    defineField({
      name: "statusColor",
      title: "Status Color",
      type: "string",
    }),
    defineField({
      name: "statusClassName",
      title: "Status ClassName",
      description:
        "Tailwindcss for adding custom status (py-2 border border-zinc-500 rounded-full dark:border-zinc-300)",
      type: "string",
    }),

    defineField({
      name: "resourceTag",
      title: "Resource Tag",
      type: "string",
    }),
    defineField({
      name: "tagBgColor",
      title: "Tag Bg Color",
      description: " this is to change tag bg (bg-violet-500)",
      type: "string",
    }),
    defineField({
      name: "tagTitleColor",
      title: "Tag Title Color",
      description: " this is to change tag Title Color (text-violet-500)",
      type: "string",
    }),

    defineField({
      name: "buttonBgColor",
      title: "Button Bg Color",
      description: " this is to change Button bg (bg-orange-500 , bg-blue-500)",
      type: "string",
    }),
    defineField({
      name: "buttonHoverBgColor",
      title: "Button Hover Bg Color",
      description: " this is to change Button hover bg (hover:bg-orange-400 )",
      type: "string",
    }),
    defineField({
      name: "buttonIcon",
      title: "Button Icon",
      description:
        " this is to change Button icon (png format , from svgrepo.com)",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "buttonTitle",
      title: "Button Title",
      description: " this is to change Button title ...",
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
      name: "searchColor",
      title: "Search Color",
      type: "string",
      description:
        "this  for change Search color with tailwindcss (hover:bg-orange-400)..",
    }),

    defineField({
      name: "resourceDetails",
      title: "Resource Details",
      type: "array",
      of: [{ type: "reference", to: { type: "resourcesDetailsCard" } }],
    }),
    defineField({
      name: "stacks",
      title: "resource Stack",
      type: "array",
      of: [{ type: "reference", to: { type: "stack" } }],
    }),
    defineField({
      name: "categories",
      title: "categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "categoryTag",
      title: "Category Tag",
      type: "array",
      of: [
        {
          name: "categoryTag",
          title: "Category Tag",
          type: "string",
        },
      ],
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          title: "Tag",
          type: "string",
        },
      ],
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
