import {defineField, defineType} from 'sanity'

export const mainSection = defineType({
  name: 'main-section',
  title: 'mainSection',
  type: 'document',
  fields: [
    defineField({
      name: 'main_image',
      title: 'MainSectionImage',
      type: 'image',
    }),
    defineField({
      name: 'beforeColored',
      type: 'string',
      validation:(rule)=>rule.max(200)
    }),
    defineField({
      name: 'Colored_content',
      type: 'string',
      validation:(rule)=>rule.max(200)
    }),
    defineField({
      name: 'afterColored',
      type: 'string',
      validation:(rule)=>rule.max(200)
    }),

    
  ],
})
