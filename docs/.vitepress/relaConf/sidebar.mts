import { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Sidebar = {
  '/column/Sql/': [
    {
      text: 'sql简介',
      items: [
        {
          text: '常用SQL',
          link: '/column/Sql/common-sql'
        },
        {
          text: 'SQL面试题',
          link: '/column/Sql/sql-interview'
        }
      ]
    },
  ],
  '/column/views/algorithm': [
    {
      text: '排序',
      link: '/column/views/algorithm/sort/index'
    }
  ],
}