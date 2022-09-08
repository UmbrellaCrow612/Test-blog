export default {
  title: 'Page', // Visual name
  name: 'page', // name when querying
  type: 'document',
  fields: [
    // contains all the things inside of it
    {
      title: 'Location of page',
      name: 'locationOfPage',
      type: 'string',
    },
    {
      title: 'Release date',
      name: 'release',
      type: 'date',
    },
    {
      title: 'Edited At',
      name: 'edited',
      type: 'date',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: `Some of your visitors cannot see images, 
            be they blind, color-blind, low-sighted; 
            alternative text is of great help for those 
            people that can rely on it to have a good idea of 
            what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'locationOfPage',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
  ],
}
