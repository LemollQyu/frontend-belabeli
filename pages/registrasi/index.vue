<template>
  <div class="box-registrasi">
    <h1 class="font-bold text-2xl w-80 text-center">
      Daftar Sekarang <span class="text-[#2CBF95]">Dan Belanja Sepuasmu</span>
    </h1>
    <form class="mt-7 space-y-7" @submit.prevent="handleSubmit">
      <UFormGroup size="xl">
        <UInput
          color="primary"
          class="w-80 !text-black bg-[#DEF7F0]"
          placeholder="you@example.com"
        />
      </UFormGroup>
      <UButton type="submit" class="btn-daftar" size="xl">Daftar</UButton>
    </form>
    <UDivider class="mt-5" label="OR" />
    <div class="login-provider">
      <BaseButtonGoogleSignIn />
      <UButton
        size="xl"
        class="btn-daftar text-[#2CBF95]"
        variant="outline"
        icon="i-icon-park-twotone:mail"
        label="Email"
      />
    </div>
    <p class="punya-akun">
      Sudah punya akun?
      <NuxtLink to="/login" class="text-primary">Masuk</NuxtLink>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { BaseButtonGoogleSignIn } from "#components";

definePageMeta({
  middleware: ["must-not-auth"],
});
const router = useRouter();
const handleSubmit = () => {
  router.push("/registrasi/form");
};
</script>

<style scoped>
.box-registrasi {
  @apply flex flex-col items-center;
  @apply pt-28 px-5;
}

.btn-daftar {
  @apply w-80;

  @apply flex justify-center items-center;
}

.login-provider {
  @apply mt-5;
  @apply flex flex-col items-center gap-y-4;
}

.punya-akun {
  @apply text-sm;
  @apply absolute left-1/2 bottom-5 -translate-x-1/2;
}
</style>
