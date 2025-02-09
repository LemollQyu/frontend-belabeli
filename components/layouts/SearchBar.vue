<script></script>
<template>
  <div class="search-bar">
    <input class="input-search" placeholder="Search" />
    <UButton class="!bg-white"><IconSearch /></UButton>
  </div>
</template>

<style>
.search-bar {
  @apply m-1 rounded-md bg-white;
  @apply flex;
}

.input-search {
  @apply outline-none pl-3 p-1 rounded-md bg-white  w-[184px];
}
</style>
