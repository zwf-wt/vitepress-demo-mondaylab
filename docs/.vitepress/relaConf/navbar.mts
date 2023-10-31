import { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  { text: '案例', link: '/markdown-examples' },
  {
    text: '关于我',
    items: [
      {
        text: '掘金',
        link: 'https://juejin.cn'
      },
    ]
  },
  {
    text: '后端开发',
    items: [
      {
        text: 'SQL常用语句',
        link: '/column/Sql/'
      },
    ]
  },
]