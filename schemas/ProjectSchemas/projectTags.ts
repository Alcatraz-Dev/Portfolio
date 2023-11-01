import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectTags',
  title: 'Tag',
  type: 'document',
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
