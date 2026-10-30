<script setup lang="ts">
import { withBase } from 'vitepress'
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import annotations from '../../../annotations.json'

// _report.json do `npm run shots` ghi ra; có thể chưa có nếu chưa chạy chụp ảnh.
const reports = import.meta.glob('../../../public/images/_report.json', { eager: true, import: 'default' })
const report: any = Object.values(reports)[0] ?? { images: {} }

const props = defineProps<{ name: string; alt?: string }>()

type Mark = { n: number; label: string; if?: number; ifNot?: number }
const ann = computed(() => (annotations as Record<string, { marks: Mark[] }>)[props.name])
const rep = computed(() => report.images?.[props.name])

const broken = ref(false)
const available = computed(() => !broken.value && (rep.value ? rep.value.ok : true))

// Chú thích lấy đúng các khung đã vẽ trên ảnh (theo _report.json), nên số luôn khớp với ảnh.
const legend = computed<{ n: number; label: string }[]>(() => {
  if (rep.value?.ok) return rep.value.drawn
  return (ann.value?.marks ?? []).filter((m) => !m.if && !m.ifNot)
})
// Ảnh dùng khung thay thế: màn hình lúc chụp chưa có dữ liệu.
const emptyState = computed(() => {
  if (!rep.value?.ok) return false
  return rep.value.drawn.some((d: any) => ann.value?.marks.find((m) => m.n === d.source)?.ifNot)
})

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const rich = (s: string) => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')

// Thêm lần chụp vào đường dẫn: chụp lại ảnh thì trình duyệt không dùng ảnh cũ trong bộ nhớ đệm.
const src = computed(() => withBase(`/images/${props.name}.png`) + (report.generatedAt ? `?v=${encodeURIComponent(report.generatedAt)}` : ''))
const open = ref(false)
const onKey = (e: KeyboardEvent) => e.key === 'Escape' && (open.value = false)
watch(open, (v) => {
  if (typeof window === 'undefined') return
  if (v) window.addEventListener('keydown', onKey)
  else window.removeEventListener('keydown', onKey)
})
onBeforeUnmount(() => typeof window !== 'undefined' && window.removeEventListener('keydown', onKey))
</script>

<template>
  <figure class="shot">
    <button v-if="available" type="button" class="shot-frame" :aria-label="`Phóng to ảnh: ${alt}`" @click="open = true">
      <img :src="src" :alt="alt" loading="lazy" decoding="async" @error="broken = true" />
    </button>
    <div v-else class="shot-missing" role="img" :aria-label="`${alt}: ảnh minh họa đang cập nhật`">
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.6" /><circle cx="9" cy="10" r="1.8" fill="currentColor" /><path d="M4 18l5-5 4 4 3-3 4 4" fill="none" stroke="currentColor" stroke-width="1.6" /></svg>
      <span>Ảnh minh họa đang cập nhật</span>
      <small>{{ alt }}</small>
    </div>
    <figcaption>
      <span class="shot-alt">{{ alt }}</span>
      <span v-if="available && emptyState" class="shot-note">Ảnh chụp lúc tài khoản chưa có dữ liệu, nên màn hình còn trống.</span>
      <ol v-if="available && legend.length" class="shot-legend">
        <li v-for="m in legend" :key="m.n">
          <span class="shot-num" aria-hidden="true">{{ m.n }}</span>
          <span class="sr-only">Số {{ m.n }}:</span>
          <span v-html="rich(m.label)" />
        </li>
      </ol>
    </figcaption>

    <div v-if="open" class="shot-lightbox" role="dialog" aria-modal="true" :aria-label="alt" @click="open = false">
      <img :src="src" :alt="alt" />
      <button type="button" class="shot-close" aria-label="Đóng ảnh phóng to">×</button>
    </div>
  </figure>
</template>
