<template>
  <Layout>
    <template #aside-outline-after>
      <div class="custom-outline-image">
        <img src="/OIP.webp" alt="UCAO-TECH Team" />
      </div>
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
const Layout = DefaultTheme.Layout
</script>

<style>
.custom-outline-image {
  margin-top: 1rem;
  text-align: center;
}

.custom-outline-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>