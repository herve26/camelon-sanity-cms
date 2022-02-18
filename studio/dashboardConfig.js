export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '620f45e7da339dfe6e03d55b',
                  title: 'Sanity Studio',
                  name: 'camelon-sanity-cms-studio',
                  apiId: '3e7ecd15-a63d-443c-9602-276dd5429fef'
                },
                {
                  buildHookId: '620f45e7da9fa0f5ef0aeba4',
                  title: 'Landing pages Website',
                  name: 'camelon-sanity-cms',
                  apiId: 'ec9c215f-7309-4c44-b647-7da2bc679082'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/herve26/camelon-sanity-cms',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://camelon-sanity-cms.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
