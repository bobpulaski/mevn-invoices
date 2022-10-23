<template>
    <div>
        <h1>Companies Page</h1>
        <ul v-if="companies && companies.length">
            <li v-for="company of companies" v-bind:key="company.id">
                <p><strong>{{company.name}}</strong></p>
                <p>{{company.inn}}</p>
            </li>
        </ul>

        <ul v-if="errors && errors.length">
            <li v-for="error of errors" v-bind:key="error.id">
                {{error.message}}
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';


    export default {
        name: 'ksoCompanies',
        data() {
            return {
                companies: [],
                errors: []
            }
        },

        // Извлекает сообщения при создании компонента.
        mounted() {
            axios.get('/api/company')
                .then(response => {
                    // Ответы JSON обрабатываются автоматически.
                    this.companies = response.data
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }
    }

</script>