// unutk user yang sudah login redirect kemana
export default defineNuxtRouteMiddleware(async () => {
  const token = "an";
  if (token == "annas") {
    return navigateTo("/");
  }
});
