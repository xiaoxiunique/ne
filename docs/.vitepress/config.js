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
      { text: '指南', link: '/'},
      { text: 'Noder', link: '/node/'},
      { text: '设计模式', link: '/dp/' },
    ],
    sidebar: {
      "/dp": getDpSidebar(),
      "/node": getNodeSidebar()
    } 
  }
}

function getNodeSidebar() {

  return [
    {
      text: 'Node 那些事',
      children: [
        {
          text: '概要', link: '/node/'
        }
      ]
    }
  ]
}

function getDpSidebar() {
  return [
    {
      text: '设计模式',
      children: [
        { text: 'Test', link: '/dp/' },
      ]
    }
  ]
}
