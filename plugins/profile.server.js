// plugins ini berfungsi unutk nge get data hanya satu kali, jadi setiap page tidak get terus menerus
export default defineNuxtPlugin((nuxtApp) => {
  const token = "sgsdf";
  const profile = "";

  if (token) {
    console.log("get profile plugins, ke server");
  }
});
