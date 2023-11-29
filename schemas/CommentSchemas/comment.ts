import { defineField, defineType } from "sanity";

export default defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
     
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "comment",
      title: "Comment",
      type: "text",
     
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
      name: "childComments",
			title: "Child Comments",
			type: "array",
			of: [{ type: "comment" }],
		
    }),
    defineField({
      name: "childCommentsEmojis",
			title: "Child Comments Emojis",
			type: "array",
			of: [{ type: "emoji" }],
		
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
