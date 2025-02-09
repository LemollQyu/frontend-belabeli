// plugins ini berfungsi unutk nge get data hanya satu kali, jadi setiap page tidak get terus menerus
// plugin ini itu terrender ketika sesbelum aplikasi itu terbuat
// di plugins ini juga tidak bisa pake useFetch dan useAsyncData, karena konsep itu milik lifescale dari nuxtJs

// tapi disini itu bisa menggunakan $fetch

export default defineNuxtPlugin(async () => {
  const token = useCookie("access_token");
  const session = useSession();

  if (token.value) {
    try {
      const response = await $fetch("/server/api/profile", {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });

      if (response.data) {
        session.token = token.value;
        session.profile = response.data;
      }
    } catch (error) {
      session.token = "";
      token.value = undefined;
    }
  }
});
