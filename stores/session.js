export const useSession = defineStore("session", () => {
  const profile = ref({
    name: "",
    email: "",
    photo_url: "",
    username: "",
    phone: null,
    store_name: "",
    gender: null,
    birth_day: null,
    balance: 0,
  });
  const token = ref("");
  const tokenCookie = useCookie("access_token");

  const registrationForm = ref({
    email: "",
    otp: "",
    password: "",
    password_confirmation: "",
  });

  function resetRegistrationForm() {
    registrationForm.value = {
      email: "",
      otp: "",
      password: "",
      password_confirmation: "",
    };
  }

  // function untuk logout

  function logout() {
    // token set kosong dan profile value set kosong
    token.value = "";
    profile.value = {
      name: "",
      email: "",
      photo_url: "",
      username: "",
      phone: null,
      store_name: "",
      gender: null,
      birth_day: null,
      balance: 0,
    };
    tokenCookie.value = undefined;
    navigateTo("/");
  }

  return {
    profile,
    token,
    logout,
    registrationForm,
    resetRegistrationForm,
    tokenCookie,
  };
});
