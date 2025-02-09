<template>
  <div class="main-authentikasi">
    <UButton to="/registrasi" class="btn-authentikasi">Registrasi</UButton>
    <UButton to="/login" class="btn-authentikasi">Login</UButton>
    <!-- <h2 class="font-light text-sm">Atau</h2>
    <UButton class="btn-google"><IconGoogle /></UButton> -->
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "authentikasi",
  middleware: ["must-not-auth"],
});
</script>

<style>
.main-authentikasi {
  @apply flex flex-col items-center gap-3;
  @apply h-full;
  @apply pt-8 mt-28;
}

.main-authentikasi .btn-authentikasi {
  @apply w-72 h-12 border border-[#EEFBF8];
  @apply rounded-md bg-transparent;
  @apply flex justify-center items-center;
  @apply text-[#EEFBF8];
}

.main-authentikasi .btn-google {
  @apply w-11 h-11 rounded-full;
  @apply flex justify-center items-center;
  @apply bg-[#dfdfdf];
}
</style>
