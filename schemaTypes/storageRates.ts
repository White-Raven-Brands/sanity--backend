import { defineType, defineField } from 'sanity';

export const storageRates= defineType({
  name: 'storageRates',
  title: 'Storage Rates',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'our_rates_image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    // defineField({
    //   name: 'noHandlingFees',
    //   title: 'No Handling Fees',
    //   type: 'boolean',
    // }),
    defineField({
      name: 'rateOptions',
      title: 'Rate Options',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'rateOption',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'string', // Use string to allow "/month" or similar formatting
            }),
            defineField({
              name: 'ctaText',
              title: 'CTA Text',
              type: 'string',
            }),
            // defineField({
            //   name: 'ctaLink',
            //   title: 'CTA Link',
            //   type: 'url',
            // }),
          ],
        }),
      ],
    }),
  ],
});
