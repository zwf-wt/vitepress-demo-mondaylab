import { defineConfig } from 'vitepress'
import { nav, sidebar } from './relaConf/index.mts'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-demo-mondaylab',
  title: "wuta",
  description: "无它博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/avatar.jpg',
    nav,
    sidebar,
    outline: {
      level: [2, 6],
      label: '目录'
    },
    search: {
      provider: 'local'
    },
    i18nRouting: true,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  },
  markdown: {
    lineNumbers: true
  },
})
