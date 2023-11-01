import { defineField, defineType } from "sanity";

export default defineType({
  name: "commentReactions",
  title: "Comment Reactions",
  type: "document",
  fields: [
    defineField({
        name: "commentId",
        title: "Comment Id",
        type: "string",
    }),
    defineField({
        name: "reactions",
        title: "Reactions",
        type: "array",
        of: [
            {
                type: "object",
                fields: [
                    {
                        name: "emoji",
                        type: "string",
                        title: "Emoji",
                    },
                    {
                        name: "counter",
                        type: "number",
                        title: "Counter",
                    },
                    {
                        name: "label",
                        type: "string",
                        title: "Label",
                    },
                ],
            },
        ],
    }),
    defineField({
        name: "userImage",
        title: "User Image",
        type: "image",
        options: {
            hotspot: true,
        },
    }),
    
  ],
  preview: {
    select: {
        title: "commentId",
    },

},
});
