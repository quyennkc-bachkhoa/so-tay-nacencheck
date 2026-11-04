<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'

// Tab "Doanh nghiệp" gồm 4 phần. Hàng này nằm đầu mỗi trang của tab để chuyển phần, Luồng chính vẫn có FlowSteps riêng.
const PARTS = [
  { dir: 'mo-dau', label: 'Mở đầu', chapters: '00–01', link: '/mo-dau/00-gioi-thieu' },
  { dir: 'bat-dau', label: 'Bắt đầu', chapters: '02', link: '/bat-dau/02-dang-nhap-va-giao-dien' },
  { dir: 'luong-chinh', label: 'Luồng chính', chapters: '03–10', link: '/luong-chinh/03-thiet-lap-doanh-nghiep' },
  { dir: 'mo-rong', label: 'Mở rộng', chapters: '11–13', link: '/mo-rong/11-tinh-nang-bo-sung' },
]

const { page } = useData()
const dir = computed(() => page.value.relativePath.split('/')[0])
const show = computed(() => PARTS.some((p) => p.dir === dir.value))
</script>

<template>
  <nav v-if="show" class="part-nav" aria-label="Các phần của mục Doanh nghiệp">
    <a
      v-for="p in PARTS"
      :key="p.dir"
      class="pn-item"
      :class="{ current: p.dir === dir }"
      :href="withBase(p.link)"
      :aria-current="p.dir === dir ? 'true' : undefined"
    >
      <span class="pn-label">{{ p.label }}</span>
      <span class="pn-ch">Chương {{ p.chapters }}</span>
    </a>
  </nav>
</template>

<style scoped>
.part-nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
  margin: 0 0 24px;
  padding: 4px;
  border: 1px solid var(--nc-border);
  border-radius: 10px;
  background: var(--nc-muted-bg);
}
.pn-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 4px;
  border-radius: 7px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  line-height: 1.3;
}
.pn-item:hover {
  color: var(--nc-accent);
}
.pn-item.current {
  background: var(--vp-c-bg);
  color: var(--nc-accent);
  box-shadow: 0 0 0 1px var(--nc-border);
}
.pn-label {
  font-weight: 600;
  font-size: 14.5px;
  white-space: nowrap;
}
.pn-ch {
  font-size: 12px;
  opacity: 0.8;
}
.pn-item:focus-visible {
  outline: 2px solid var(--nc-accent);
  outline-offset: 1px;
}
@media (max-width: 480px) {
  .pn-label {
    font-size: 12.5px;
  }
  .pn-ch {
    display: none;
  }
}
</style>
