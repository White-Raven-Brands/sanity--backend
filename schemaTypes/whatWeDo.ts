import {defineField, defineType} from 'sanity'

export const whatWeDo = defineType({
  name: 'what-we-do',
  title: 'whatWeDo',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      type: 'string',
      validation:(rule)=>rule.max(200)
    }),
    defineField({
        name: 'firstHeading',
        type: 'string',
        validation:(rule)=>rule.max(50)
      }),
      defineField({
        name: 'secondHeading',
        type: 'string',
        validation:(rule)=>rule.max(50)
      }),
      defineField({
        name: 'thirdHeading',
        type: 'string',
        validation:(rule)=>rule.max(50)
      }),
  ],
})
