<template>
  <div class="box-registrasi">
    <h1 class="font-bold text-2xl w-80 text-center">
      Daftar Sekarang <span class="text-[#2CBF95]">Dan Belanja Sepuasmu</span>
    </h1>
    <form class="mt-7 space-y-7" @submit.prevent="handleSubmit">
      <UFormGroup :error="v$.email.$errors?.[0]?.$message" size="xl">
        <UInput
          v-model="registrationForm.email"
          color="primary"
          class="w-80 !text-black bg-[#DEF7F0]"
          placeholder="you@example.com"
        />
      </UFormGroup>
      <UButton
        :loading="status === 'pending'"
        type="submit"
        block
        class="btn-daftar"
        size="xl"
        >Daftar</UButton
      >
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

<script setup>
import { BaseButtonGoogleSignIn } from "#components";
import useVuelidate from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";

definePageMeta({
  middleware: ["must-not-auth"],
});
const router = useRouter();
const { registrationForm } = storeToRefs(useSession());

const rules = {
  email: { required, email },
};

const $externalResults = ref({});

const v$ = useVuelidate(rules, registrationForm, {
  $autoDirty: true,
  $externalResults,
});

const { status, error, execute } = useSubmit("/server/api/register");

async function handleSubmit() {
  $externalResults.value = {};

  const isValid = await v$.value.$validate();
  if (!isValid) return;

  await execute({
    email: registrationForm.value.email,
  });

  if (error.value) {
    $externalResults.value = error.value.data?.meta?.validations || {};
    return;
  }

  if (status.value === "success") {
    router.push("/registrasi/form");
  }
}
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
