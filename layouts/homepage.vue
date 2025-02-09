<template>
  <div class="layout-utama">
    <div class="navigasi-homepage">
      <LayoutsSearchBar />
      <div class="button-right">
        <UButton class="!bg-white"><IconFilter /></UButton>
        <UButton class="!bg-white"><IconNotification /></UButton>
      </div>
    </div>

    <slot />
  </div>
</template>

<script></script>

<style scoped>
.layout-utama {
  @apply sm:w-[400px] mx-auto w-full min-h-screen bg-[#EEFBF8];
  @apply text-black;
}

.navigasi-homepage {
  @apply absolute w-full sm:w-[400px] top-2;
  @apply flex gap-2 items-center justify-between;
  @apply pl-3 pr-4; /*px-4*/
}

.layout-utama .navigasi-homepage .button-right {
  @apply flex gap-1;
}
</style>
