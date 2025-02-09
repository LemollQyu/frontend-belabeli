<template>
  <div class="box-registrasi">
    <IconLogo class="mx-auto" />

    <form class="mt-7 space-y-5" @submit.prevent="handleSubmit">
      <UFormGroup size="xl" :error="v$.email_phone?.$errors?.[0]?.$message">
        <UInput
          color="primary"
          v-model="form.email_phone"
          class="w-80 !text-black bg-[#DEF7F0]"
          placeholder="you@example.com"
        />
      </UFormGroup>
      <UFormGroup size="xl" :error="v$.password?.$errors?.[0]?.$message">
        <BaseInputPassword
          size="xl"
          placeholder="Password"
          v-model="form.password"
        />
      </UFormGroup>
      <UButton
        type="submit"
        :loading="status == 'pending' || statusProfile == 'pending'"
        block
        class="btn-daftar"
        size="xl"
        >Login</UButton
      >
    </form>
    <div class="mt-2 flex justify-end w-full pr-6">
      <NuxtLink class="text-sm text-[#2CBF95]" to="/lupa-password"
        >Lupa password</NuxtLink
      >
    </div>
    <p class="absolute bottom-5">
      Belum punya akun?
      <NuxtLink to="/registrasi" class="font-medium text-[#2CBF95]"
        >Daftar</NuxtLink
      >
    </p>
  </div>
</template>

<script setup>
import { NuxtLink } from "#components";
import useVuelidate from "@vuelidate/core";
import { email, helpers, minLength, required } from "@vuelidate/validators";

definePageMeta({
  header: {
    title: "login",
  },
  middleware: ["must-not-auth"],
});

const session = useSession();
const { profile, token: tokenSession } = storeToRefs(session);
const token = useCookie("access_token");

const nuxtApp = useNuxtApp();

const form = ref({
  email_phone: "",
  password: "",
});

// untuk rules dari input login

const rules = {
  email_phone: {
    required,
    isValidUsername: helpers.withMessage("Value is not valid", (value) => {
      if (value) {
        if (/^\d{4}/.test(value)) {
          // checking phone number
          return /^\d+$/.test(value);
        }

        // chekcing email
        return email.$validator(value);
      }
      return true;
    }),
  },
  password: { required, minLength: minLength(8) },
};

// tampilin error yang dari backend
const $externalResults = ref({});

const v$ = useVuelidate(rules, form, {
  $autoDirty: true,
  $externalResults,
});

const { status, execute, error, data } = useSubmit("/server/api/login");
const { execute: getProfile, status: statusProfile } = useApi(
  "/server/api/profile",
  {
    immediate: false,
    onResponse({ response }) {
      if (response.ok) {
        profile.value = response._data?.data;
        // redirect ke homepage
        nuxtApp.runWithContext(() => {
          navigateTo("/");
        });
      }
    },
  }
);

async function handleSubmit() {
  const isValid = await v$.value.$validate();
  if (!isValid) return;
  // Fetch api

  await execute(form.value);

  // tampilin error yang dari BE

  if (error.value) {
    $externalResults.value = error.value.data?.meta?.validations || {};
    return;
  }

  if (status.value === "success" && data.value?.data?.token) {
    tokenSession.value = data.value?.data?.token;
    token.value = data.value?.data?.token;
    getProfile();
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
</style>
