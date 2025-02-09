<script lang="ts" setup></script>

<template>
  <div class="navigasi-bottom">
    <UButton to="/" size="lg" icon="i-tdesign-home" />
    <UButton size="lg" icon="i-tdesign-control-platform-filled" />

    <UButton size="lg" icon="i-tdesign-cart" />
    <UButton to="/profile" size="lg" icon="i-tdesign-user" />
  </div>
</template>

<style>
.navigasi-bottom {
  @apply w-full sm:w-[400px] h-12 bg-white border;
  @apply absolute bottom-0;
  @apply flex justify-around items-center;
}
</style>
