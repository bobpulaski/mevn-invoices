import {createRouter, createWebHashHistory} from "vue-router";

import ksoCompanies from '../components/content/kso-companies.vue';
import ksoInvoices from '../components/content/kso-invoices';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/companies', component: ksoCompanies},
        {path: '/invoices', component: ksoInvoices},
    ]
})