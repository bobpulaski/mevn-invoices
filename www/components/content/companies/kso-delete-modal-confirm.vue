<template>
  <div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Удалить?</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Вы уверены, что хотите удалить <strong>{{ companyName }}</strong>?</p>
            <p><small>Данное действие отменить невозможно.</small></p>
          </div>
          <div class="modal-footer">
            <button id="closeButton" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
            <button type="button" class="btn btn-danger" v-on:click="deleteCompany(companyId)">Удалить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'kso-delete-modal-confirm',

        props: {
          companyId: Number,
          companyName: String,
        },

        methods: {
            async deleteCompany(companyId) {
                await axios.delete("api/company/" + companyId);
                document.getElementById('closeButton').click();
                this.$emit('deleteCompany');
            },
        }
    }


</script>

<style scoped>
</style>