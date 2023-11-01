import { defineField, defineType } from "sanity";

export default defineType({
  name: "logoCarousel",
  title: "Logo Carousel",
  type: "document",
  fields: [
    defineField({
      name: "brandname",
      title: "Brand Name",
      type: "string",
    }),
    defineField({
      name: "className",
      title: "ClassName",
      description: "Tailwindcss for adding custom status... (grayscale dark:grayscale-0)",
      type: "string",
    }),
    defineField({
      name: "mainImage",
      title: "Brand Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
