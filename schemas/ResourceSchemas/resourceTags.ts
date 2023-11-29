import {defineField, defineType} from 'sanity'
import {FcWorkflow} from 'react-icons/fc'
export default defineType({
  name: 'resourceTags',
  title: 'Tag',
  type: 'document',
  icon:FcWorkflow,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'classNameTagColor',
      title: 'ClassName Tag Color',
      description: " this is to change tag bg (bg-violet-500)",
      type: 'string',
    }),
  ],
})
