<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { computed } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import FlowSteps from './components/FlowSteps.vue'
import InfoBox from './components/InfoBox.vue'
import NewbieSteps from './components/NewbieSteps.vue'

const { page, frontmatter } = useData()
const isFlow = computed(() => /^(luong-chinh|quan-tri)\//.test(page.value.relativePath))
</script>

<template>
  <DefaultTheme.Layout>
    <template #layout-top>
      <SiteHeader />
    </template>

    <template #doc-before>
      <FlowSteps v-if="isFlow" />
      <InfoBox v-if="isFlow && frontmatter.prerequisites" kind="before" title="Trước khi bắt đầu" :items="frontmatter.prerequisites" />
    </template>

    <template #doc-footer-before>
      <InfoBox v-if="isFlow && frontmatter.outcome" kind="outcome" title="Kết quả sau bước này" :text="frontmatter.outcome" />
    </template>

    <template #home-features-before>
      <NewbieSteps />
    </template>
  </DefaultTheme.Layout>
</template>
