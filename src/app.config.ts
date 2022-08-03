export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  subPackages: [
    {
      name: 'independent',
      root: 'pages/independent',
      independent: true,
      pages: [
        'page1/index',
        // @todo 打开翻倍
        'page2/index',
      ]
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
