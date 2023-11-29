import { defineField, defineType } from "sanity";

export default defineType({
  name: "emoji",
  title: "Emoji",
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
							name: "emojiImage",
							type: "image",
							title: "Emoji Image",
              options: {
                hotspot: true,
              },
						},
					],
				},
			],
		
    }),
   
  ],
  preview: {
		select: {
			title: "commentId",
		},
	},
});
