<template>
  <div class="layout-paling-utama">
    <slot />
  </div>
</template>

<script></script>

<style scoped>
.layout-paling-utama {
  @apply min-h-screen mx-auto bg-[#EEFBF8] w-full sm:w-[400px];
  @apply text-black;
}
</style>
