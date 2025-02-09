<template>
  <div class="layout-utama">
    <main class="main-auth pt-20">
      <IconBelabeli class="mx-auto" />
      <IconTextBelabeli class="mx-auto mt-2" />

      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.layout-utama {
  @apply bg-gradient-to-b from-[#51D7B1] to-[#219171] w-full mx-auto sm:w-[400px];
}

.main-auth {
  @apply min-h-screen;
}
</style>
