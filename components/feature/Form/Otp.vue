<template>
  <div class="flex gap-7 items-center">
    <div class="btn-back" @click="emit('back')"><IconArrowLeft /></div>

    <h3 class="text-xl font-medium">Masukkan Kode OTP</h3>
  </div>
  <div class="px-16 pb-16 pt-9">
    <p class="text-center text-sm text-black/80">
      Kode OTP telah dikirim via e-mail ke
    </p>
    <p class="text-center font-medium text-black/80 mt-2">irsyaad@email.com</p>
    <form class="space-y-16 mt-16">
      <UFormGroup>
        <BaseInputPin v-model="otpValue" />
      </UFormGroup>
      <div>
        <p class="text-black/25 text-sm text-center">
          Mohon tunggu {{ 47 }} detik untuk mengirim ulang.
        </p>
        <UButton block size="lg" @click="emit('next')" class="mt-2"
          >Berikutnya</UButton
        >
      </div>
    </form>
  </div>
</template>

<script setup>
const emit = defineEmits(["next", "back"]);
const otpValue = ref("");
</script>

<style scoped>
.btn-back {
  @apply w-11 h-11 rounded-full bg-[#DEF7F0];
  @apply flex justify-center items-center;
  @apply absolute top-3 left-4;
}
</style>
