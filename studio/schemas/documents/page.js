import { MasterDetailIcon } from '@sanity/icons'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  icon: MasterDetailIcon,
  i18n: {
    base: 'fr',
    languages: ['fr', 'en']
  },
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'hero',
      type: 'hero',
      title: 'Page Hero'
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        { type: 'fTextImage' },
        { type: 'imageTextCarousel' },
        { type: 'cards' },
        { type: 'contactForm' },
        {type: 'addresses'}
      ],
    },
    {
      name: 'navigation',
      type: 'array',
      title: 'Page Navigation',
      of: [{ type: 'navItem' }]
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata',
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata',
    },
    {
      title: 'Site Editor Twitter Hanler',
      type: 'string',
      name: 'twitter',
      fieldset: 'metadata'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage',
    },
  },
}
