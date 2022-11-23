<template>
  <h1>Company Add Edit Page</h1>
  <h2>{{ companies.id }}</h2>
  <input type="text" class="form-control" v-model="companies.name">
</template>

<script>
import axios from "axios";

export default {
  name: "ksoCompanyAddEdit",

  data() {
    return {
      companies: [{}],
    };
  },

  methods: {
    async getCompanyById() {
      const decryptedId = this.$CryptoJS.AES.decrypt(
        this.$route.params.id,
        "jaga"
      ).toString(this.$CryptoJS.enc.Utf8);

      await axios
        .get("/api/company/" + decryptedId)
        .then((response) => {
          this.companies = response.data[0];
          console.log(this.companies);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },

  mounted() {
    this.getCompanyById();
  },
};
</script>

<style></style>
