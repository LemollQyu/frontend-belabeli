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
      :is="registrationStep[stepActive].component"
      ref="formStepElement"
      v-bind="customProps"
      @next="handleNext(registrationStep[stepActive].key, $event)"
      @back="handleBack(registrationStep[stepActive].key)"
      @resend="handleResendOtp"
    />
  </div>
</template>

<script setup>
import {
  FeatureFormCompleted,
  FeatureFormOtp,
  FeatureFormPasswordBaru,
} from "#components";

definePageMeta({
  middleware: ["must-not-auth"],
});

const session = useSession();
const { tokenCookie, token, profile, registrationForm } = storeToRefs(session);

const router = useRouter();
const stepActive = ref(0);
const formStepElement = ref();

const registrationStep = [
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

const {
  status: statusValidate,
  error: errorValidate,
  execute: validateOtp,
} = useSubmit("/server/api/verify-otp");
const { status: statusResend, execute: resendOtp } = useSubmit(
  "/server/api/resend-otp",
  {
    onResponse({ response }) {
      if (response.ok) {
        formStepElement.value.startCountdown();
      }
    },
  }
);
function handleResendOtp() {
  resendOtp({
    email: registrationForm.value.email,
  });
}

const {
  status: statusRegister,
  execute: verifyRegister,
  error: errorRegister,
  data: dataRegister,
} = useSubmit("/server/api/verify-register");

const { execute: getProfile, status: statusProfile } = useApi(
  "/server/api/profile",
  {
    immediate: false,
    onResponse({ response }) {
      if (response.ok) {
        profile.value = response._data.data;
        session.resetRegistrationForm();
        stepActive.value++;
      }
    },
  }
);

const customProps = computed(() => {
  switch (registrationStep[stepActive.value].key) {
    case "otp":
      return {
        loading: statusValidate.value === "pending",
        loadingResend: statusResend.value === "pending",
      };

    case "password":
      return {
        loading:
          statusRegister.value === "pending" ||
          statusProfile.value === "pending",
      };

    default:
      return {};
  }
});

async function handleNext(step, value) {
  switch (step) {
    case "otp":
      formStepElement.value.setError("");
      await validateOtp({
        email: registrationForm.value.email,
        otp: value.otp,
      });

      if (errorValidate.value) {
        formStepElement.value.setError(
          errorValidate.value.data?.meta?.validations?.otp?.[0]
        );
        return;
      }

      if (statusValidate.value === "success") {
        registrationForm.value.otp = value.otp;
        stepActive.value++;
      }
      break;

    case "password":
      formStepElement.value.setError({});

      await verifyRegister({
        email: registrationForm.value.email,
        otp: registrationForm.value.otp,
        password: value.password,
        password_confirmation: value.password,
      });

      if (errorRegister.value) {
        formStepElement.value.setError(
          errorRegister.value.data?.meta?.validations || {}
        );
        return;
      }

      if (statusRegister.value === "success") {
        registrationForm.value.password = value.password;
        registrationForm.value.password_confirmation = value.password;

        token.value = dataRegister.value.data?.token;
        tokenCookie.value = dataRegister.value.data?.token;

        getProfile();
      }
      break;

    default:
      break;
  }
}

function handleBack(stepKey) {
  if (stepKey === "otp") {
    return router.push("/registrasi");
  }
  stepActive.value--;
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
