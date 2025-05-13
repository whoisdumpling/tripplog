export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/my/index',
    'pages/edit/index',
    'pages/detail/index',
    'pages/login/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/edit/index',
        text: '发布'
      },
      {
        pagePath: 'pages/my/index',
        text: '我的'
      }
    ],
    selectedColor: '#000000', // 选中时的颜色为黑色
    color: '#808080', // 未选中时的颜色为灰色
    fontSize: '18px' // 字体大小调整为 18px
  }
});
