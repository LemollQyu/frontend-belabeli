<template>
  <div class="box-informasi-akun relative pt-2">
    <UButton to="/profile" class="btn-back"><IconArrowLeft /></UButton>

    <div class="profile-akun bg-transparent">
      <!-- cara pemanggilan src di AvatarComponent -->
      <UAvatar
        :src="profile.photo_url"
        :alt="profile.name"
        size="3xl"
        icon="i-heroicons:user"
        class="bg-white"
      />
      <UButton label="Pilih Gambar" color="white" @click="handleChooseFile" />
      <input
        ref="inputFileElement"
        type="file"
        accept=".jpeg,.png"
        class="hidden"
        @change="handleUploadFile"
      />
      <ul class="text-xs font-normal text-black/55">
        <li>Ukuran gambar: maks. 1 MB</li>
        <li>Format gambar: .JPEG, .PNG</li>
      </ul>
    </div>

    <div class="menu pt-1 pb-2">
      <h1 class="pl-2 font-medium justify-start p-1 mb-2">Info Profile</h1>
      <UDivider color="black" size="sm" />
      <div class="text-xs mt-2 w-full flex-col items-center">
        <div class="p-2 flex">
          <div class="w-1/4 flex justify-start items-center text-xs">
            Username :
          </div>
          <div class="w-3/4 items-center flex pl-4 justify-between">
            {{ profile.username || "..." }}
            <UButton
              variant="link"
              color="gray"
              class=""
              icon="i-tdesign:caret-right-small"
            />
          </div>
        </div>
        <div class="p-2 flex">
          <div class="w-1/4 flex justify-start items-center text-xs">
            Name :
          </div>
          <div class="w-3/4 items-center flex pl-4 justify-between">
            {{ profile.name || "..." }}
            <UButton
              variant="link"
              color="gray"
              class=""
              icon="i-tdesign:caret-right-small"
            />
          </div>
        </div>
        <div class="p-2 flex">
          <div class="w-1/4 flex justify-start items-center text-xs">
            Nama toko :
          </div>
          <div class="w-3/4 items-center flex pl-4 justify-between">
            {{ profile.store_name || "..." }}
            <!-- <UButton
              variant="link"
              color="gray"
              class=""
              icon="i-tdesign:caret-right-small"
            /> -->
          </div>
        </div>
      </div>
    </div>

    <div class="menu pt-1 pb-2">
      <h1 class="pl-2 font-medium justify-start p-1 mb-2">Info Pribadi</h1>
      <UDivider color="black" size="sm" />

      <div class="text-xs w-full mt-2 flex-col items-center">
        <div class="p-2 flex">
          <div class="w-1/4 flex justify-start items-center text-xs">
            Email :
          </div>
          <div class="w-3/4 items-center flex pl-4 justify-between">
            {{ profile.email || "..." }}
            <UButton
              variant="link"
              color="gray"
              class=""
              icon="i-tdesign:caret-right-small"
            />
          </div>
        </div>
        <div class="p-2 flex">
          <div class="w-1/4 flex justify-start items-center text-xs">
            Handphone :
          </div>
          <div class="w-3/4 items-center flex pl-4 justify-between">
            {{ profile.phone || "..." }}
            <UButton
              variant="link"
              color="gray"
              class=""
              icon="i-tdesign:caret-right-small"
            />
          </div>
        </div>
        <div class="p-2 flex">
          <div class="w-1/4 flex justify-start items-center text-xs">
            Gender :
          </div>
          <div class="w-3/4 items-center flex pl-4 justify-between">
            {{ profile.gender || "..." }}
            <UButton
              variant="link"
              color="gray"
              class=""
              icon="i-tdesign:caret-right-small"
            />
          </div>
        </div>
        <div class="p-2 flex">
          <div class="w-1/4 flex justify-start items-center text-xs">
            Tanggal lahir:
          </div>
          <div class="w-3/4 items-center flex pl-4 justify-between">
            <p v-if="profile.birth_day">{{ formattedBirthDay }}</p>
            <p v-else>...</p>
            <UButton
              variant="link"
              color="gray"
              class=""
              icon="i-tdesign:caret-right-small"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { format } from "date-fns";
definePageMeta({
  middleware: ["must-auth"],
});

const session = useSession();
const { profile } = storeToRefs(session);

const formattedBirthDay = computed(() => {
  if (!profile.value?.birth_day) return "...";
  return format(new Date(profile.value.birth_day), "dd/MM/yyyy");
});

console.log({ profile });
// console.log(session.profile);
</script>

<style scoped>
.box-informasi-akun {
}

.menu {
  @apply rounded-md;
  @apply flex flex-col;
  @apply bg-white;
  @apply mx-4 mt-4;
}

.header-atas-informasi-akun {
  @apply w-full h-16;
  @apply flex relative justify-center items-center;
}

.btn-back {
  @apply w-11 h-11 rounded-full bg-[#DEF7F0];
  @apply flex justify-center items-center;
  @apply absolute top-3 left-4;
}

.profile-akun {
  @apply px-2 mx-4 py-2;
  @apply rounded-md;
  @apply flex items-center flex-col justify-center;
}
</style>
