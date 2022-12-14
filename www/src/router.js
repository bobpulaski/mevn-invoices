import { createRouter, createWebHistory } from "vue-router";

import ksoCompanies from "../components/content/companies/kso-company-page-wrapper.vue";
import ksoInvoices from "../components/content/kso-invoices";
import ksoPageNotFound from "../components/content/kso-page-not-found";
import ksoCompanyAddEdit from "../components/content/companies/kso-company-add-edit";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: ksoCompanies,
      name: "home",
    },
    {
      path: "/company/add",
      component: ksoCompanyAddEdit,
      name: "company-add",
    },
    {
      path: "/company/:id/edit",
      component: ksoCompanyAddEdit,
      name: "company-edit",
    },
    {
      path: "/invoices",
      component: ksoInvoices,
      name: "invoices",
    },
    {
      path: "/:pathMatch(.*)*",
      component: ksoPageNotFound,
      name: "ksoPageNotFound",
    },
  ],
});
