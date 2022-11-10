import {createRouter, createWebHashHistory} from "vue-router";

import ksoCompanies from '../components/content/companies/kso-company-page-wrapper.vue';
import ksoInvoices from '../components/content/kso-invoices';
import ksoPageNotFound from '../components/content/kso-page-not-found';


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
            component: ksoInvoices,
            name: 'invoices',

        },
        {
            path: '/:pathMatch(.*)*',
            component: ksoPageNotFound,
            name: 'ksoPageNotFound'
        },
    ]
})