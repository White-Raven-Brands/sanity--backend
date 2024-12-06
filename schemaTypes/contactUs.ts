import {defineField, defineType} from 'sanity'

export const contactType = defineType({
  name: 'contact-us',
  title: 'ContactUs',
  type: 'document',
  fields: [
    defineField({
      name: 'first_name',
      type: 'string',
    }),
    defineField({
      name: 'last_name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'phnoe_number',
      type: 'string',
    }),
    defineField({
      name: 'company_name',
      type: 'string',
    }),
    defineField({
      name: 'company_address',
      type: 'string',
    }),
    defineField({
      name: 'service_requested',
      type: 'string',
      initialValue: 'us-south',
      options: {
        list: [
          {title: 'US-North', value: 'us-north'},
          {title: 'US-South', value: 'us-south'},
          {title: 'US-East', value: 'us-east'},
        ],
      },
    }),
    defineField({
      name: 'what_are_you_storing',
      type: 'string',
    }),
    defineField({
      name: 'pallets_number',
      type: 'number',
    }),
    defineField({
      name: 'average_wxlxh_of_pallets',
      type: 'string',
    }),
    defineField({
      name: 'total_weight',
      type: 'number',
    }),
    defineField({
      name: 'storage_start_date',
      type: 'datetime',
    }),
    defineField({
      name: 'storage_end_date',
      type: 'datetime',
    }),
    defineField({
      name: 'need_other_services',
      type: 'string',
    }),
    defineField({
      name: 'additional_info',
      type: 'string',
    }),
  ],
})
