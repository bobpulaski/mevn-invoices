<template>
  <h1>Company Add Edit Page</h1>
  <h2>{{ company.id }}</h2>
  <div class="row">
    <div class="col-3">
      <form @submit.prevent="onSubmit">
        <input type="text" class="form-control" v-model="company.name" />
        <input type="text" class="form-control" v-model="company.inn" />
        <button class="btn btn-primary" v-on:click="updateCompany">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ksoCompanyAddEdit",

  data() {
    return {
      company: [],
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
          this.company = response.data[0];
          //console.log(this.company);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },

    async updateCompany() {
      //console.log(this.company);
      try {
        await axios
          .put("/api/company/update", {
            // id: this.company.id,
            // name: this.company.name,
            // inn: this.company.inn,
            data: this.company,
          })
          .then((response) => {
            console.log(response);
            this.$router.go(-1)
          });
      } catch (e) {
        console.log(e);
      }
    },
  },

  mounted() {
    this.getCompanyById();
  },
};
</script>

<style></style>
