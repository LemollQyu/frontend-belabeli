<template>
  <div>
    <h1>Data fetching</h1>
    <p v-if="status == 'pending'">Loading....</p>
    <pre>{{ data }}</pre>
    <button @click="execute">Get Data</button>
    <button @click="refresh">Refresh</button>
    <UButton type="submit" block :loading="status == 'pending'">Log in</UButton>
  </div>
</template>

<script setup>
const { data, status, execute, refresh } = useApi(
  "https://dummyjson.com/products",
  {
    immediate: false,
  }
);
</script>

<style></style>
