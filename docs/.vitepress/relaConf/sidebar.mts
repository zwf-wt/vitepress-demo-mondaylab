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
  '/column/views/git': [
    {
      text: 'Git',
      items: [
        {
          text: 'git常用命令',
          link: '/column/views/git/common_command'
        },
        {
          text: 'git规范',
          link: '/column/views/git/git_norm'
        },
      ]
    }
  ]
}