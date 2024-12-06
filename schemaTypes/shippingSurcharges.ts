import { defineType, defineField } from 'sanity';

export const shippingSurcharges= defineType({
  name: 'shippingSurcharges',
  title: 'Shipping Surcharges',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'surcharges',
      title: 'Surcharges',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'surcharge',
          title: 'Surcharge',
          fields: [
            defineField({
              name: 'item',
              title: 'Item',
              type: 'string',
            }),
            defineField({
              name: 'itemFee',
              title: 'Item Fee',
              type: 'string', // Allow formatted values like "ADD $25"
            }),
            defineField({
              name: 'locations',
              title: 'Location Surcharges',
              type: 'array',
              of: [
                defineField({
                  type: 'string',
                  name: 'location',
                  title: 'Location',
                }),
              ],
            }),
            defineField({
              name: 'locationFee',
              title: 'Location Fee',
              type: 'string', // Allow formatted values like "ADD $20"
            }),
          ],
        }),
      ],
    }),
  ],
});
