import {defineField, defineType} from 'sanity'
import {FcCancel} from "react-icons/fc"
export default defineType({
  name: 'defaultNotFoundPage',
  title: 'Not Found Page 404',
  icon:FcCancel,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
      }),
      defineField({
        name: 'errorImage',
        title: 'Error Image',
        type: 'image',
        options:{
            hotspot:true,
        }
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
      }),
      defineField({
        name: 'url',
        title: 'Url',
        type: 'url',
        description:" this url for back to Home Page ex(http://localhost:3000/)",
          }),
          defineField({
            name: 'buttonTitel',
            title: 'Button Titel',
            type: 'string',
          }),
          defineField({
            name: 'buttonTitelClassName',
            title: 'Button Titel ClassName',
            type: 'string',
            description: 'this for chanje button titel color or font if you dont use bouton color ',
          }),
          defineField({
            name: 'buttonBg',
            title: 'Button Bg',
            type: 'string',
          }),
          defineField({
            name: 'buttonHoverBg',
            title: 'Button Hover Bg',
            type: 'string',
          }),
  
  ],
})
