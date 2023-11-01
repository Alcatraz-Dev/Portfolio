import { defineField, defineType } from "sanity";

export default defineType({
  name: "sectionParagraph",
  title: "Section Paragraph",
  type: "document",
  fields: [
    defineField({
      name: "heroParagraph",
      title: "Hero Paragraph",
      type: "text",
    }),
    defineField({
      name: "aboutParagraph",
      title: "About Paragraph",
      type: "text",
    }),
    defineField({
      name: "technologiesParagraph",
      title: "Technologies Paragraph",
      type: "text",
    }),
    defineField({
      name: "projectsParagraph",
      title: "Projects Paragraph",
      type: "text",
    }),
    defineField({
      name: "videosParagraph",
      title: "Videos Paragraph",
      type: "text",
    }),
    defineField({
      name: "blogsParagraph",
      title: "Blogs Paragraph",
      type: "text",
    }),
    defineField({
      name: "communityParagraph",
      title: "Community Paragraph",
      type: "text",
    }),
    defineField({
      name: "contactParagraph",
      title: "Contact Paragraph",
      type: "text",
    }),
    defineField({
      name: "footerParagraph",
      title: "Footer Paragraph",
      type: "text",
    }),
  ],
});
