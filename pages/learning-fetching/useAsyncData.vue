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
// useAsyncData fecth network hanya satu kali
function getProduct() {
  return fetch("http://localhost:8000/api/welcome").then((res) => res.json());
}

// immadiate ini untuk me triger datanya, jadi fetch data tidak akan langsung tampil sebelum execute ke trigger
const { data, status, error, execute } = useAsyncData("product", getProduct, {
  immediate: false,
});

const refresh = () => {
  // untuk refresh data ('dan key data yang mau direfresh')
  //   dan ini itu sebenarnya menjalankan execute
  refreshNuxtData("product");
};

console.log(data, error);
</script>

<!-- style -->
<style></style>
