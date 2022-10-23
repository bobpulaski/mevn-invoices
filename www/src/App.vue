<template>
        <ksoMainWrapper/>
    <!--<div>
      <h1>jaga</h1>
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
    </div>-->
</template>

<script>
    import ksoMainWrapper from '../components/kso-main-wrapper'

    export default {
        name: 'App',
        components: {
            ksoMainWrapper
        }
    }

    /*import axios from 'axios';

    export default {
      data() {
        return {
          companies: [],
          errors: []
        }
      },*/

    // Извлекает сообщения при создании компонента.
    /*mounted() {
      axios.get('/api/company')
              .then(response => {
                // Ответы JSON обрабатываются автоматически.
                this.companies = response.data
              })
              .catch(e => {
                this.errors.push(e)
              })
    }
  }*/
</script>

<style>


</style>