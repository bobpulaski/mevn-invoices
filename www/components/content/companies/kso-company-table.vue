<template>
  <div>
    <div class="row mb-4">
      <div class="col">
        <h1>Companies</h1>
      </div>
      <div class="col text-end">
        <router-link
          class="btn btn-success"
          :to="{ name: 'company-add', params: { id:1 } }"
          >Добавить компанию</router-link
        >

        <!-- <button v-on:click="isAddOrEdit = 'add'">Добавить</button> -->
      </div>
    </div>
    <ksoDeleteModalConfirm
      :companyId="companyId"
      :companyName="companyName"
      @deleteCompany="getCompanies"
    />

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
          <td>{{ index + 1 }}</td>
          <td>{{ company.id }}</td>
          <td>{{ company.name }}</td>
          <td>{{ company.inn }}</td>
          <td>
            <button
              class="btn btn-danger"
              v-on:click="showModal(company.id, company.name)"
            >
              <font-awesome-icon icon="fa-regular fa-trash-alt" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <button v-on:click="addCompany">Добавить компанию</button>

    <ul v-if="errors && errors.length">
      <li v-for="error of errors" v-bind:key="error.id">
        {{ error.message }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import ksoDeleteModalConfirm from "../companies/kso-delete-modal-confirm";
//import ksoCompanyAddEdit from "../companies/kso-company-add-edit";

export default {
  name: "ksoCompanyTable",

  components: {
    ksoDeleteModalConfirm,
    //ksoCompanyAddEdit,
  },

  data() {
    return {
      companies: [],
      errors: [],
      render: 1,
      companyId: 0,
      companyName: "",
      isAddOrEdit: "jaga",
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
          });
      } catch (e) {
        console.log(e);
      }
    },

    showModal(id, name) {
      this.companyId = id;
      this.companyName = name;
      let myModal = new window.bootstrap.Modal(
        document.getElementById("exampleModal")
      );
      myModal.show();
    },
  },

  created() {
    this.getCompanies();
  },
};
</script>
