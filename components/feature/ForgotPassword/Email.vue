<template>
  <div @click="emit('back')" class="btn-back"><IconArrowLeft /></div>
  <h1 class="text-lg font-bold">Lupa kata sandi</h1>
  <p class="text-sm font-light mt-2 text-gray-900">
    Masukan email untuk mereset password
  </p>

  <form class="mt-7 space-y-7">
    <UFormGroup size="xl">
      <UInput
        color="primary"
        class="w-80 !text-black bg-[#DEF7F0]"
        placeholder="you@example.com"
      />
    </UFormGroup>
    <UButton class="btn-selanjutnya" size="xl" @click="emit('next')"
      >Selanjutnya</UButton
    >
  </form>
</template>

<script lang="ts" setup>
const emit = defineEmits(["next", "back"]);
</script>

<style>
.btn-back {
  @apply w-11 h-11 rounded-full bg-[#DEF7F0];
  @apply flex justify-center items-center;
  @apply absolute top-3 left-4;
}

.btn-selanjutnya {
  @apply w-80;
  @apply flex justify-center items-center;
}
</style>
