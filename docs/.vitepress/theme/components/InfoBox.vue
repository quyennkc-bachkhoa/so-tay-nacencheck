<script setup lang="ts">
import { withBase } from 'vitepress'

// kind="before": danh sách việc phải xong từ chương trước (frontmatter `prerequisites`).
// kind="outcome": một câu nói rõ người đọc sẽ có gì sau chương (frontmatter `outcome`).
defineProps<{ kind: 'before' | 'outcome'; title: string; items?: { text: string; link: string }[]; text?: string }>()

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const rich = (s: string) => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
</script>

<template>
  <aside class="info-box" :class="`info-${kind}`">
    <p class="ib-title">
      <svg v-if="kind === 'before'" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="2" /><path d="M8 9h8M8 13h8M8 17h5" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>
      <svg v-else viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2" /><path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
      {{ title }}
    </p>
    <ul v-if="items">
      <li v-for="it in items" :key="it.link + it.text">
        <a :href="withBase(it.link)" v-html="rich(it.text)" />
      </li>
    </ul>
    <p v-else class="ib-text" v-html="rich(text || '')" />
  </aside>
</template>
