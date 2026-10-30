<script setup lang="ts">
import { withBase } from 'vitepress'
import { computed, nextTick, ref } from 'vue'
import glossary from '../../../glossary.json'

const props = defineProps<{ k: string }>()
const g = computed(() => (glossary as Record<string, any>)[props.k])

// Rê chuột hoặc chạm (focus) để hiện định nghĩa; dịch hộp vào trong màn hình nếu tràn mép phải.
const tip = ref<HTMLElement>()
const shift = ref(0)
async function place() {
  shift.value = 0
  await nextTick()
  const r = tip.value?.getBoundingClientRect()
  if (r && r.right > window.innerWidth - 8) shift.value = window.innerWidth - 8 - r.right
  if (r && r.left + shift.value < 8) shift.value = 8 - r.left
}
</script>

<template>
  <span class="term" tabindex="0" @mouseenter="place" @focus="place">
    <slot />
    <span ref="tip" class="term-tip" role="tooltip" :style="{ transform: `translateX(${shift}px)` }">
      <strong>{{ g?.term }}</strong>
      <span>{{ g?.def }}</span>
      <a :href="withBase('/mo-dau/01-khai-niem-co-ban')">Xem chương 01 →</a>
    </span>
  </span>
</template>
