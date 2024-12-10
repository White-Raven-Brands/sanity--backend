import { defineType, defineField } from 'sanity';

export const faqs= defineType({
  name: 'faqs',
  title: 'FAQs',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'faq_image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'questions',
      title: 'FAQ Items',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'faqItem',
          title: 'FAQ Item',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text', // Use text for longer answers
            }),
          ],
        }),
      ],
    }),
  ],
});
