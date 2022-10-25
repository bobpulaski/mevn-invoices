<template>
    <div>
        <table class="table" v-if="companies && companies.length">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">INN</th>
                </tr>
            </thead>
        
        
        <tbody v-for="(company, index) of companies" v-bind:key="company.id">
            <tr>
                <th>{{ index + 1 }}</th>
                <th>{{ company.id }}</th>
                <th>{{ company.name }}</th>
                <th>{{ company.inn }}</th>
            </tr>
        </tbody>
    </table>

        <ul v-if="errors && errors.length">
            <li v-for="error of errors" v-bind:key="error.id">
                {{ error.message }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ksoCompanyTable',
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