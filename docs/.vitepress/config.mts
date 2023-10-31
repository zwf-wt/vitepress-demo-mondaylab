import { defineConfig } from 'vitepress'
import { nav, sidebar } from './relaConf/index.mts'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-demo-mondaylab',
  title: "wuta",
  description: "无它博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    lineNumbers: true
  },
})
