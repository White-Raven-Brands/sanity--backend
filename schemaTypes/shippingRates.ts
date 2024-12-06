import { defineType, defineField } from 'sanity';

export const shippingRates= defineType({
  name: 'shippingRates',
  title: 'Shipping Rates',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'rateDetails',
      title: 'Rate Details',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'rateDetail',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
});
