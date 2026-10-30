<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { VPNavBarSearch } from 'vitepress/theme'
import { computed } from 'vue'

const { theme, page, isDark } = useData()

// Đường dẫn hiện tại dạng "/luong-chinh/07-nguon-nguyen-lieu-va-tao-lo", trang chủ là "/".
const current = computed(() => '/' + page.value.relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, ''))
const tabs = computed(() =>
  (theme.value.nav as { text: string; link: string; activeMatch: string }[]).map((t) => ({
    ...t,
    active: new RegExp(t.activeMatch).test(current.value),
  }))
)
</script>

<template>
  <header class="site-header">
    <div class="sh-row sh-top">
      <a class="sh-brand" :href="withBase('/')" aria-label="Về trang chủ sổ tay">
        <svg class="sh-logo" viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
          <rect x="1.5" y="1.5" width="29" height="29" rx="7" fill="#0a5743" stroke="#fff" stroke-width="2" />
          <path d="M9 16.5l4.6 4.6L23.5 11" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="sh-title">Hướng dẫn sử dụng NacenCheck</span>
      </a>
      <div class="sh-tools">
        <VPNavBarSearch class="sh-search" />
        <button
          class="sh-theme"
          type="button"
          :aria-label="isDark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'"
          :title="isDark ? 'Giao diện sáng' : 'Giao diện tối'"
          @click="isDark = !isDark"
        >
          <svg v-if="isDark" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="2" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>
          <svg v-else viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" /></svg>
        </button>
      </div>
    </div>
    <nav class="sh-row sh-tabs" aria-label="Nhóm chương">
      <a
        v-for="t in tabs"
        :key="t.link"
        class="sh-tab"
        :class="{ active: t.active }"
        :href="withBase(t.link)"
        :aria-current="t.active ? 'page' : undefined"
      >{{ t.text }}</a>
    </nav>
  </header>
</template>
