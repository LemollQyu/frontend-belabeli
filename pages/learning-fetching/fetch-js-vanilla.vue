<template>
  <div>
    <h1>Data fetching</h1>
    <p v-if="load">Loading....</p>
    <pre>{{ data }}</pre>
    <UButton type="submit" block :loading="load">Log in</UButton>
  </div>
</template>

<!-- script -->
<script setup>
const data = ref("");
const load = ref(true);

onMounted(() => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((res) => {
      data.value = res;
    })
    .finally(() => (load.value = false));
});
</script>

<!-- style -->
<style></style>
