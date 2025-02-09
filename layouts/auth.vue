<template>
  <div class="layout-auth">
    <div class="btn-back"><IconArrowLeft /></div>
    <slot />
  </div>
</template>

<script></script>

<style scoped>
.layout-auth {
  @apply min-h-screen mx-auto bg-[#EEFBF8] w-full sm:w-[400px];
  @apply text-black;
}

.btn-back {
  @apply w-11 h-11 rounded-full bg-[#DEF7F0];
  @apply flex justify-center items-center;
  @apply absolute top-3 left-4;
}
</style>
