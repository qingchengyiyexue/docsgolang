module.exports = {
    lang: 'en-US',
    title: 'GolangAI',
    description: '欢迎来到Golang联盟',
    themeConfig: {
        algolia: {
          apiKey: 'your_api_key',
          indexName: 'index_name'
        },
        carbonAds: {
            carbon: 'your-carbon-key',
            custom: 'your-carbon-custom',
            placement: 'your-carbon-placement'
          },
          logo: '../log.svg',
          nav: [
            { text: 'Golang', link: '../golang/index.md' },
            { text: 'Java', link: 'https://www.w3cschool.cn/java/java-tutorial.html' },
            { text: 'Mysql', link: 'https://github.com/...' },
            { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
          ],
          socialLinks: [
            { icon: 'github', link: 'https://github.com/qingchengyiyexue' },
            { icon: 'twitter', link: '...' },
            // You can also add custom icons by passing SVG as string:
            {
              icon: {
                svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
              },
              link: '...'
            }
          ]
      },
      socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: '...'
      }
    ]
      
  }