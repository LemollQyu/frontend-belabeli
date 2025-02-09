<template>
  <div class="box">
    <!-- <FeatureForgotPasswordEmail /> -->
    <!-- <FeatureFormOtp /> -->
    <!-- <FeatureFormPasswordBaru /> -->

    <!-- state yang dipasang di component ini bisa dipanggil componen yang sudah didaftarkan  -->
    <component
      :is="lupaPasswordStep[stepActive].component"
      @next="handleNext(lupaPasswordStep[stepActive].key)"
      @back="handleBack(lupaPasswordStep[stepActive].key)"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  FeatureForgotPasswordEmail,
  FeatureFormOtp,
  FeatureFormPasswordBaru,
} from "#components";

definePageMeta({
  middleware: ["must-not-auth"],
});

const router = useRouter();

const stepActive = ref(0);

const lupaPasswordStep = [
  {
    key: "lupa-password",
    component: FeatureForgotPasswordEmail,
  },
  {
    key: "otp",
    component: FeatureFormOtp,
  },
  {
    key: "password-baru",
    component: FeatureFormPasswordBaru,
  },
];

const handleNext = (key: string) => {
  if (key == "password-baru") {
    alert("ganti password berhasil");
    return router.push("/login");
  }
  stepActive.value++;
};

const handleBack = (key: string) => {
  if (key == "lupa-password") {
    return router.push("/login");
  }

  stepActive.value--;
};
</script>

<style scoped>
.box {
  @apply pt-28 relative;
  @apply flex items-center flex-col;
}
</style>
