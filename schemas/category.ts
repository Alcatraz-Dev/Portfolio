import {defineField, defineType} from 'sanity'
import { FcTimeline } from "react-icons/fc";
export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon:FcTimeline,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
