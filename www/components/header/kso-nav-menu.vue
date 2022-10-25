<template>
  <nav class="kso-nav-menu navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-3">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link active" :to="{ name: 'home' }">Companies</router-link>
          <router-link class="nav-link active" :to="{ name: 'invoices' }">Invoices</router-link>
          <a class="nav-link" href="#">Features</a>
          <a class="nav-link" href="#">Pricing</a>
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'ksoNavMenu'
}
</script>

<style>

</style>