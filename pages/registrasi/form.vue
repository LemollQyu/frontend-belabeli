<template>
  <div class="box">
    <!-- <div class="step-header">
      <template v-for="(step, index) in registrasiStep" :key="step.key">
        <div class="step-item" :class="[index <= stepRef && 'is-done']">
          <div class="step-item-icon">
            {{ index + 1 }}
          </div>
          <p class="step-item-title">{{ step.title }}</p>
        </div>
      </template>
    </div> -->
    <!-- <FeatureFormOtp /> -->
    <!-- <FeatureFormPasswordBaru /> -->
    <!-- <FeatureFormCompleted /> -->
    <component
      :is="registrasiStep[stepRef].component"
      @next="handleNext"
      @back="handleBack(registrasiStep[stepRef].key)"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  FeatureFormCompleted,
  FeatureFormOtp,
  FeatureFormPasswordBaru,
} from "#components";

definePageMeta({
  middleware: ["must-not-auth"],
});

const router = useRouter();

const stepRef = ref(0);

const registrasiStep = [
  {
    key: "otp",
    title: "Verifikasi email",
    component: FeatureFormOtp,
  },
  {
    key: "password",
    title: "Password",
    component: FeatureFormPasswordBaru,
  },
  {
    key: "completed",
    title: "Complated",
    component: FeatureFormCompleted,
  },
];

function handleNext() {
  stepRef.value++;
}

function handleBack(key: string) {
  if (key == "otp") {
    router.push("/registrasi");
  }
  stepRef.value--;
}
</script>

<style scoped>
.box {
  @apply pt-28 relative;
  @apply flex items-center flex-col;
}

/* .step-header {
  @apply flex items-center;
}
.step-item {
  @apply flex gap-2 flex-col items-center;
}

.step-item-icon {
  @apply rounded-full px-3 py-1 ring-1 ring-inset ring-black/25;
  @apply flex items-center justify-center;
  @apply text-black/25;
}

.step-item-title {
  @apply text-black/25 text-xs font-normal mt-1;
}

.step-item.is-done .step-item-icon {
  @apply bg-green-500 text-white ring-transparent;
}
.step-item.is-done .step-item-title {
  @apply text-green-500;
} */
</style>
