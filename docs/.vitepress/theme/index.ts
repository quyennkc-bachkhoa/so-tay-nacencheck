import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import Shot from './components/Shot.vue'
import Term from './components/Term.vue'
import ChapterMeta from './components/ChapterMeta.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Shot', Shot)
    app.component('Term', Term)
    app.component('ChapterMeta', ChapterMeta)
  },
} satisfies Theme
