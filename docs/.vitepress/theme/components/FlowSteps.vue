<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'

// 9 bước của Luồng chính, ứng với chương 03 → 11.
const STEPS = [
  { label: 'Thiết lập DN', file: '03-thiet-lap-doanh-nghiep' },
  { label: 'Cơ sở & vùng', file: '04-co-so-va-vung-nguyen-lieu' },
  { label: 'Vật tư', file: '05-danh-muc-vat-tu' },
  { label: 'Sản phẩm', file: '06-san-pham-dinh-muc-quy-trinh' },
  { label: 'Nguyên liệu', file: '07-nguon-nguyen-lieu' },
  { label: 'Tạo lô', file: '08-tao-lo-hang' },
  { label: 'Ghi công đoạn', file: '09-chi-tiet-lo-va-ghi-cong-doan' },
  { label: 'Tem QR', file: '10-tem-va-truy-xuat' },
  { label: 'Bán hàng', file: '11-ban-va-phan-phoi' },
]

const { page } = useData()
const current = computed(() => STEPS.findIndex((s) => page.value.relativePath === `luong-chinh/${s.file}.md`))
</script>

<template>
  <nav class="flow-steps" aria-label="Các bước của luồng chính">
    <ol>
      <li
        v-for="(s, i) in STEPS"
        :key="s.file"
        :class="{ done: i < current, current: i === current, todo: i > current }"
      >
        <a :href="withBase(`/luong-chinh/${s.file}`)" :aria-current="i === current ? 'step' : undefined">
          <span class="fs-dot" aria-hidden="true">
            <svg v-if="i < current" viewBox="0 0 16 16" width="12" height="12"><path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" /></svg>
            <template v-else>{{ i + 1 }}</template>
          </span>
          <span class="fs-label">{{ s.label }}</span>
          <span class="sr-only">{{ i < current ? '(đã qua)' : i === current ? '(đang đọc)' : '' }}</span>
        </a>
      </li>
    </ol>
  </nav>
</template>
