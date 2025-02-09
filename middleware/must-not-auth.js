// untuk user yang sudah login redirect kemana, jadi route autentikasi tidak bisa diakses

export default defineNuxtRouteMiddleware(async () => {
  const session = useSession();
  if (session.token) {
    return navigateTo("/profile");
  }
});

// middleware global itu yang diproses dulu sesuai abjad atau angka, jadi nama dan angka yang awal akan di jalankan terlebih dulu
