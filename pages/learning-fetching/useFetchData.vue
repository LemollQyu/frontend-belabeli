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

<!-- script -->
<script setup>
// di useFecth refres sudah ada

// informasi penting useFetch dan useAsyncData itu ter fetch ketika halaman itu di buka user, artiannya adalah csr, jadi dapat datanya cepet cepet pindah
const { data, status, execute, refresh } = useFetch(
  "https://dummyjson.com/products",
  {
    // sebenarnya ini ada keynya, cuma di random oleh nuxt js nya, tapi bisa di buat manual sendiri
    // key: "product-list",
    immediate: false,
    params: { limit: 10, skip: 10 },
  }
);
</script>

<!-- style -->
<style></style>
