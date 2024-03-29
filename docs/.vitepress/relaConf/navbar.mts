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
      {
        text: '无它工具',
        link: 'https://zhang_wen_fa.gitee.io/wuta_tools_view2/#/'
      }
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
  {
    text: '前端开发',
    items: [
      {
        text: '数据结构与算法',
        link: '/column/views/algorithm/'
      }
    ]
  },
]