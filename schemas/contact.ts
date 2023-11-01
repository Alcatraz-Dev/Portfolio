import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    defineField({
      name: "mainImage",
      title: "Stack Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "name",
      title: "Devlover Name",
      type: "string",
    }),
    defineField({
      name: "nameColor",
      title: "Color",
      type: "string",
    }),
    defineField({
      name: "shortDescription",
      title: "Developer Description",
      type: "text",
    }),
    defineField({
      name: "shortDesColor",
      title: "Color",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "socials",
      title: "Social",
      type: "array",
      of: [{ type: "reference", to: { type: "socialIcons" } }],
    }),
    defineField({
      name: "url",
      title: "Email Form Url",
      type: "string",
    }),
  ],
});
