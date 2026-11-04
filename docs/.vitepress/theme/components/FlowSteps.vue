<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'

// Thanh bước theo nhóm: Luồng chính (chương 03 → 10), Quản trị (chương 15 → 21), Cơ quan quản lý (chương 22 → 27).
const FLOWS: Record<string, { aria: string; steps: { label: string; file: string }[] }> = {
  'luong-chinh': {
    aria: 'Các bước của luồng chính',
    steps: [
      { label: 'Thiết lập DN', file: '03-thiet-lap-doanh-nghiep' },
      { label: 'Cơ sở & vùng', file: '04-co-so-va-vung-nguyen-lieu' },
      { label: 'Vật tư', file: '05-danh-muc-vat-tu' },
      { label: 'Sản phẩm', file: '06-san-pham-dinh-muc-quy-trinh' },
      { label: 'Nguồn & tạo lô', file: '07-nguon-nguyen-lieu-va-tao-lo' },
      { label: 'Ghi công đoạn', file: '08-chi-tiet-lo-va-ghi-cong-doan' },
      { label: 'Tem QR', file: '09-tem-va-truy-xuat' },
      { label: 'Bán hàng', file: '10-ban-va-phan-phoi' },
    ],
  },
  'quan-tri': {
    aria: 'Các bước của mục quản trị',
    steps: [
      { label: 'Làm quen', file: '15-tong-quan-cong-quan-tri' },
      { label: 'Tổ chức', file: '16-to-chuc-va-nguoi-dung' },
      { label: 'Ngành & biểu mẫu', file: '17-nganh-quy-trinh-bieu-mau' },
      { label: 'Bộ luật', file: '18-bo-luat-tuan-thu' },
      { label: 'Giá & thu tiền', file: '19-gia-va-thu-tien' },
      { label: 'Tích hợp', file: '20-tich-hop-va-ten-mien' },
      { label: 'Giám sát & nội dung', file: '21-giam-sat-va-noi-dung' },
    ],
  },
  'co-quan-quan-ly': {
    aria: 'Các bước của mục cơ quan quản lý',
    steps: [
      { label: 'Làm quen', file: '22-lam-quen-cong-co-quan-quan-ly' },
      { label: 'Tra cứu & truy vết', file: '23-tra-cuu-lo-va-truy-vet' },
      { label: 'Giám sát địa bàn', file: '24-giam-sat-dia-ban' },
      { label: 'Thanh tra', file: '25-thanh-tra' },
      { label: 'Vi phạm & quyết định', file: '26-vi-pham-va-quyet-dinh' },
      { label: 'Báo cáo & dữ liệu', file: '27-bao-cao-va-du-lieu' },
    ],
  },
}

const { page } = useData()
const dir = computed(() => page.value.relativePath.split('/')[0])
const flow = computed(() => FLOWS[dir.value] ?? FLOWS['luong-chinh'])
const current = computed(() => flow.value.steps.findIndex((s) => page.value.relativePath === `${dir.value}/${s.file}.md`))
</script>

<template>
  <nav class="flow-steps" :aria-label="flow.aria">
    <ol>
      <li
        v-for="(s, i) in flow.steps"
        :key="s.file"
        :class="{ done: i < current, current: i === current, todo: i > current }"
      >
        <a :href="withBase(`/${dir}/${s.file}`)" :aria-current="i === current ? 'step' : undefined">
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
