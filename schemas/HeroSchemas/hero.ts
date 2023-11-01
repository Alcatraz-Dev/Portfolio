import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
  
    defineField({
      name: "developerName",
      title: "Developer Name",
      type: "string",
    }), 
     defineField({
      name: "classNameHeroTitleColor",
      title: "ClassName Hero Title Color",
      description: "Tailwindcss for adding custom status... (text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600)",
      type: "string",
    }),
    defineField({
      name: "classNameHeroHireMeButtonColor",
      title: "ClassName Hero Hire Me Button Color",
      description: "Tailwindcss for adding custom status... (bg-gradient-to-br from-lime-500 to-green-500 )",
      type: "string",
    }),
    defineField({
      name: "classNameResumeMeButtonColor",
      title: "ClassName Resume Me Button Color",
      description: "Tailwindcss for adding custom status... (bg-gradient-to-br from-lime-500 to-green-500)",
      type: "string",
    }),
    defineField({
      name: "classNameHeroContactButtonColor",
      title: "ClassName Hero Hire Me Button Color",
      description: "Tailwindcss for adding custom status... (bg-gradient-to-br from-lime-500 to-green-500 )",
      type: "string",
    }),
    defineField({
      name: "skillOneTitle",
      title: "Skill One Title",
      type: "string",
    }),
    defineField({
        name: "skillTowTitle",
        title: "Skill Tow Title",
        type: "string",
      }),
      defineField({
        name: "skillthreeTitle",
        title: "Skill Three Title",
        type: "string",
      }),
      defineField({
        name: "skillfourTitle",
        title: "Skill Four Title",
        type: "string",
      }),
      defineField({
        name: "skillFiveTitle",
        title: "Skill Five Title",
        type: "string",
      }),
      defineField({
        name: "shortBio",
        title: "Short Bio",
        type: "string",
      }),
      defineField({
        name: "status",
        title: "Status",
        description: "Active Status (Current Active Status jsut one status)",
        type: "array",
        of: [{ type: "reference", to: { type: "status" } }],
      }),
   
  ],
});
