<script setup>
useSeoMeta({
  title: "Homepage",
  description: "The Intuitive Vue Framework.",
});

definePageMeta({
  layout: "homeprofile",
  header: {
    title: "homepage",
  },
  // middleware: ["must-auth"],
});

const session = useSession();

console.log("session = ", session.token);

if (!session.token) {
  console.log("token tidak ada");
} else {
  console.log("token ada");
}
</script>

<template>
  <div class="banner-ads">
    <h1 class="text">banner Homepage</h1>
    <LayoutsNavigasi />
  </div>
</template>

<style scoped>
.banner-ads {
  @apply w-full sm:w-[400px] border h-80;
  @apply flex justify-center items-center;
  @apply bg-slate-400;
}

.text {
  @apply underline;
}
</style>
