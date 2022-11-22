<template>
  <h1>Company Add Edit Page</h1>
  <h2>
    <div>{{ $route.query.type }}</div>
  </h2>
  <h2>
    <div>{{ $route.params.id }}</div>
    <div>{{ decryptedId }}</div>
  </h2>
</template>

<script>
export default {
  name: "ksoCompanyAddEdit",

  data() {
    return {
      type: [],
    };
  },

  mounted() {
    //console.log(this.$route.query.type);

    const decryptedId = this.$CryptoJS.AES.decrypt(
      this.$route.params.id,
      "jaga"
    ).toString(this.$CryptoJS.enc.Utf8);
    console.log(decryptedId);
  },
};
</script>

<style></style>
