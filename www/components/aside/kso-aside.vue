<template>
  <h1>ASIDE</h1>

  <router-link :to="{ name: 'home' }">Companies</router-link> |
  <router-link :to="{ name: 'invoices' }">Invoices</router-link>
</template>

<script>
export default {
  name: "ksoAside",
};
</script>

<style>

</style>
