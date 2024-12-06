import {defineField, defineType} from 'sanity'

export const mainSection = defineType({
  name: 'main-section',
  title: 'mainSection',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      type: 'string',
      validation:(rule)=>rule.max(200)
    }),
    
  ],
})
