<template>
  <div>
    <div @click="emit('back')" class="btn-back"><IconArrowLeft /></div>
    <h3 class="text-xl font-medium">Reset Password Baru</h3>
    <p class="text-center mt-2 text-sm text-gray-900">Buat password baru</p>
  </div>
  <div class="px-16 pb-16 pt-9">
    <form class="space-y-6" @submit.prevent="handleSubmit">
      <UFormGroup>
        <BaseInputPassword
          v-model="form.password"
          placeholder="Password"
          size="lg"
          class="w-80"
        />
      </UFormGroup>
      <ul class="!mt-2">
        <li
          v-for="validation in validationMessage"
          :key="validation.key"
          class="text-sm py-1"
          :class="{
            'text-red-500': !isContain[validation.key],
            'text-green-500': isContain[validation.key],
          }"
        >
          {{ validation.message }}
          <UIcon
            :name="
              isContain[validation.key]
                ? 'i-heroicons:check-circle'
                : 'i-heroicons:x-circle'
            "
            class="w-5 h-5 -mb-1.5"
          />
        </li>
      </ul>
      <UButton
        size="lg"
        type="submit"
        block
        class="uppercase"
        :loading="loading"
        >Berikutnya</UButton
      >
    </form>
  </div>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["next", "back"]);

const form = ref({
  password: "",
});
const validationMessage = [
  { message: "Min. satu karakter huruf kecil", key: "lowercase" },
  { message: "Min. satu karakter huruf besar", key: "uppercase" },
  { message: "8-16 karakter", key: "validLength" },
  {
    message: "Hanya huruf, angka, dan tanda baca umum yang dapat digunakan",
    key: "allowedChar",
  },
];

const isContain = reactive({
  lowercase: false,
  uppercase: false,
  validLength: false,
  allowedChar: false,
});

function hasLowerCase(str) {
  return /[a-z]/.test(str);
}

function hasUpperCase(str) {
  return /[A-Z]/.test(str);
}

function hasValidLength(str) {
  return str.length >= 8 && str.length <= 16;
}

function hasAllowedChars(str) {
  return /^[a-zA-Z0-9,.!?-]+$/.test(str);
}

watch(
  () => form.value.password,
  (newValue) => {
    isContain.lowercase = hasLowerCase(newValue);
    isContain.uppercase = hasUpperCase(newValue);
    isContain.validLength = hasValidLength(newValue);
    isContain.allowedChar = hasAllowedChars(newValue);
  }
);

const $externalResults = ref({});

const rules = {
  password: {
    required,
    validLength: hasValidLength,
    minLowerCase: hasUpperCase,
    minUpperCase: hasUpperCase,
    validCharacter: hasAllowedChars,
  },
};

const v$ = useVuelidate(rules, form, {
  $autoDirty: true,
  $externalResults,
});

async function handleSubmit() {
  $externalResults.value = {};
  const isValid = await v$.value.$validate();
  if (!isValid) return;

  emit("next", { password: form.value.password });
}

defineExpose({
  setError: (error) => {
    $externalResults.value = error;
  },
});
</script>

<style scoped>
.btn-back {
  @apply w-11 h-11 rounded-full bg-[#DEF7F0];
  @apply flex justify-center items-center;
  @apply absolute top-3 left-4;
}
</style>
