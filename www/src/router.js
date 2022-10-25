import {createRouter, createWebHashHistory} from "vue-router";

import ksoCompanies from '../components/content/companies/kso-company-page-wrapper.vue';
import ksoInvoices from '../components/content/kso-invoices';


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: ksoCompanies,
            name: 'home'
        },
        {
            path: '/invoices',
            name: 'invoices',
            component: ksoInvoices
        },
    ]
})