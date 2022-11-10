<template>
  <div>
    <table class="table" v-if="companies && companies.length">
      <thead>
      <tr>
        <th>#</th>
        <th>ID</th>
        <th>NAME</th>
        <th>INN</th>
        <th>ACTIONS</th>
      </tr>
      </thead>

      <tbody v-for="(company, index) of companies" v-bind:key="company.id">
      <tr>
        <th>{{ index + 1 }}</th>
        <th>{{ company.id }}</th>
        <th>{{ company.name }}</th>
        <th>{{ company.inn }}</th>
        <th>
          <button class="btn bg-info" v-on:click="deleteCompany(company.id)">Удалить</button>
        </th>
      </tr>
      </tbody>
    </table>

    <button v-on:click="addCompany">addCompany</button>

    <ul v-if="errors && errors.length">
      <li v-for="error of errors" v-bind:key="error.id">
        {{ error.message }}
      </li>
    </ul>
  </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "ksoCompanyTable",
        data() {
            return {
                companies: [],
                errors: [],
                render: 1,
            };
        },
        methods: {
            async getCompanies() {
                await axios
                    .get("/api/company")
                    //.get("https://jsonplaceholder.typicode.com/posts")
                    .then((response) => {
                        this.companies = response.data;
                    })
                    .catch((e) => {
                        this.errors.push(e);
                    });
            },


            async addCompany() {
                try {
                    await axios
                        .post("api/company", {
                            name: "JJJ Apple",
                            inn: "000000999",
                        })
                        .then((response) => {
                            this.companies.push({
                                id: response.data.insertId,
                                name: JSON.parse(response.config.data).name,
                                inn: JSON.parse(response.config.data).inn,
                            });
                            //this.getCompanies();
                        })
                } catch (e) {
                    console.log(e);
                }
            },

            async deleteCompany(id) {
                await axios
                    .delete("api/company/" + id)
                    .then(() => {
                        this.getCompanies();
                    });
            }
        },

        mounted() {
            this.getCompanies();

        },
    };
</script>
