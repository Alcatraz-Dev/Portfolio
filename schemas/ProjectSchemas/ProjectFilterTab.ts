import {defineField, defineType} from 'sanity'
import {FcAddRow} from "react-icons/fc"
export default defineType({
  name: 'projectTabFilter',
  title: 'Project Tab Filter',
  icon:FcAddRow,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'tabColor',
      title: 'Tab Color',
      type: 'string',
      description: "this  for change tab color with tailwindcss (bg-orange-400)..",
    }),
  
  ],
})
