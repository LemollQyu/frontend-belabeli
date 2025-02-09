<template>
  <div>
    <div class="box-profile">
      <h1 class="font-medium text-lg">Menu Utama</h1>

      <!-- tampilan masuk dan daftar -->
      <template v-if="!session.token">
        <div class="silahkan-masuk my-4">
          <UButton
            to="/login"
            variant="outline"
            class="w-40 flex justify-center items-center"
            size="md"
            >Masuk</UButton
          >
          <UButton
            to="/registrasi"
            class="w-40 flex justify-center items-center"
            size="md"
            >Daftar</UButton
          >
        </div>
      </template>

      <!-- tampilan jika sudah login -->
      <template v-else>
        <div class="profile-akun bg-white">
          <!-- cara pemanggilan src di AvatarComponent -->
          <UAvatar
            :src="session.profile.photo_url"
            :alt="session.profile.name"
            size="xl"
            icon="i-heroicons:user"
          />
          <div class="text-area-akun">
            <h1 class="font-medium">{{ session.profile.name }}</h1>
            <h2>{{ session.profile.email }}</h2>
          </div>
        </div>
      </template>

      <!-- tampilan menu yang ada di profile -->

      <div class="menu">
        <h1 class="font-medium justify-start mb-2">Menu akun</h1>

        <UButton
          icon="i-tdesign:user-1-filled"
          size="md"
          variant="ghost"
          label="Akun saya"
          block
          :trailing="false"
          class="justify-start text-black font-light"
        />
        <UButton
          icon="i-tdesign:location-filled"
          size="md"
          variant="ghost"
          label="Alamat"
          block
          :trailing="false"
          class="justify-start text-black font-light"
        />
        <UButton
          icon="i-tdesign:mail-filled"
          size="md"
          variant="ghost"
          label="Ubah email"
          block
          :trailing="false"
          class="justify-start text-black font-light"
        />
        <UButton
          icon="i-tdesign:user-password-filled"
          size="md"
          variant="ghost"
          label="Ubah password"
          block
          :trailing="false"
          class="justify-start text-black font-light"
        />
      </div>

      <!-- tampilan menu yang ada di transaksi -->

      <div class="menu">
        <h1 class="font-medium justify-start mb-2">Menu transaksi</h1>

        <UButton
          icon="i-tdesign:undertake-transaction-filled"
          size="md"
          variant="ghost"
          label="Transaksi saya"
          block
          :trailing="false"
          class="justify-start text-black font-light"
        />
        <UButton
          icon="i-tdesign:star"
          size="md"
          variant="ghost"
          label="Ulasan"
          block
          :trailing="false"
          class="justify-start text-black font-light"
        />
        <UButton
          icon="i-tdesign:heart"
          size="md"
          variant="ghost"
          label="Wishlist"
          block
          :trailing="false"
          class="justify-start text-black font-light"
        />
      </div>

      <!-- tampilan logout -->
      <div v-if="!session.token">
        <div></div>
      </div>

      <div class="menu" v-else>
        <UButton
          @click="session.logout"
          icon="i-tdesign:logout"
          size="md"
          variant="outline"
          color="red"
          label="Logout"
          block
          :trailing="false"
          class="justify-start"
        />
      </div>
    </div>
    <LayoutsNavigasi />
  </div>
</template>

<script setup>
const session = useSession();

console.log(session.token, "ini tokennya");

if (!session.token) {
  console.log("token tidak ada");
} else {
  console.log("token ada");
}

// console.log(!ada);
</script>

<style>
.box-profile {
  @apply px-4 pt-5;
  @apply flex flex-col gap-4;
}

.box-profile .silahkan-masuk {
  @apply flex items-center justify-between;
  @apply w-full   rounded-md;
}

.box-profile .menu {
  @apply w-full  rounded-md;
  @apply flex flex-col;
  @apply bg-white p-2;
}

.profile-akun {
  @apply px-2 py-4;
  @apply rounded-md;
  @apply flex items-center gap-4;
}
</style>
