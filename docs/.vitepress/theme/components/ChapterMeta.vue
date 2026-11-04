<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()
// Bốn phần thuộc tab Doanh nghiệp.
const ENTERPRISE = ['Mở đầu', 'Bắt đầu', 'Luồng chính', 'Mở rộng']
</script>

<template>
  <p v-if="frontmatter.readingMinutes" class="chapter-meta">
    <span class="cm-item">
      <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2" /><path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>
      Khoảng {{ frontmatter.readingMinutes }} phút đọc
    </span>
    <span v-if="frontmatter.group" class="cm-item cm-group">{{ ENTERPRISE.includes(frontmatter.group) ? `Doanh nghiệp · ${frontmatter.group}` : frontmatter.group }}</span>
  </p>
</template>
