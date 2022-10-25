<template>
    <h1>Контрагенты</h1>
    <ksoCompanyTable />
</template>

<script>
    import ksoCompanyTable from '../companies/kso-company-table.vue';

    export default {
        name: 'ksoCompanyPageWrapper',
        components: {
            ksoCompanyTable
        }
    }
</script>

<style>

</style>