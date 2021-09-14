module.exports = {
  lang: 'zh-CN',
  title: 'NE',
  description: 'Fork自vitepress，针对组件开发做了一些功能增强',
  themeConfig: {
    repo: 'xiaoxiunique/ne',
    docsDir: 'docs',
    editLinks: false,
    editLinkText: '在Github上编辑此页面',

    editLinks: false,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: '最近更新',

    nav: [
      { text: '指南', link: '/' },
    ],
    sidebar: getGuideSidebar()
  }
}

function getGuideSidebar() {
  return [
    {
      text: '一些 Node 相关的知识点',
      children: [
        { text: '背景', link: '/' },
      ]
    }
  ]
}
