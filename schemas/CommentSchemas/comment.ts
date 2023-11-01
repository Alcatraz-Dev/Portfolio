import { defineField, defineType } from "sanity";

export default defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    defineField({
        name: "name",
        title: "User Name",
        type: "string",
    }),
    defineField({
        name: "email",
        title: "Email",
        type: "string",
    }),
    defineField({
        name: "userImage",
        title: "User Image",
        type: "image",
        options: {
            hotspot: true,
        },
    }),
    defineField({
        name: "comment",
        title: "Comment",
        type: "text",
    }),
    defineField({
        name: "childComments",
			title: "Child Comments",
			type: "array",
			of: [{ type: "comment" }],
    }),
    defineField({
        name: "approved",
			title: "Approved",
			type: "boolean",
    }),
  ],
  preview: {
    select: {
        title: "name",
        subtitle: "comment",
    },
},
});
