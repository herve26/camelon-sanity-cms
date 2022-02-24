export default {
  title: 'Simple Portable Text',
  name: 'simplePortableText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [{title: 'h1', value: 'h3'}, {title: 'h2', value: 'h4'}],
      lists: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [{ type: 'link' }, { type: 'internalLink' }],
      },
    }
  ],
};
