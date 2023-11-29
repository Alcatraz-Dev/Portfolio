import { defineField, defineType } from "sanity";
import { FcServices } from "react-icons/fc";
export default defineType({
  name: "skillsTab",
  title: "Skills Tab",
  icon: FcServices,
  description: "Add this document to about schema",
  type: "document",
  fields: [
    defineField({
      name: "skillName",
      title: "Skill Name",
      type: "string",
    }),

    defineField({
      name: "classNameSkillProgressBgColor",
      title: "ClassName Skills Progress Bg Color",
      description:
        "Tailwindcss for adding custom status... (bg-gradient-to-br from-lime-400 to-green-500)",
      type: "string",
    }),
    defineField({
      name: "skillProgress",
      title: "Skill Progress",
      type: "number",
    }),
    defineField({
      name: "skillProgressBg",
      title: "Skill Progress Bg",
      type: "number",
    }),
  ],
});
