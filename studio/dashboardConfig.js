export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '60a66f38a1c8e24841ff4680',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-567aao71',
                  apiId: '2499aeec-0642-48ee-9447-350f59a47147'
                },
                {
                  buildHookId: '60a66f38fb64f676f7ee97b5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-gfup242x',
                  apiId: '953ab8ca-6a5d-490d-a906-7afb692d7319'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/trburkholder/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-gfup242x.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
