import { defineType, defineField } from 'sanity';

export const benefits= defineType({
  name: 'benefits',
  title: 'Benefits',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'benefitItems',
      title: 'Benefit Items',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'benefitItem',
          title: 'Benefit Item',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image', // Stores the icon image
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string', // E.g., "24/7 Security Surveillance via CCTV"
            }),
          ],
        }),
      ],
    }),
  ],
});
