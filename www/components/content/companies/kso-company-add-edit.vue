<template>
  <h1>Company Add Edit Page</h1>
  <h2></h2>
</template>

<script>
export default {
  name: "ksoCompanyAddEdit",

  props: {
    jaga: {type: String, required: true}
  },

  mounted() {
    console.log(this.$route.query.type)
  }
};

</script>

<style></style>
