<template>
    <div class="row kso-header-wrapper">
        <ksoNavMenu />
    </div>
</template>

<script>
    import ksoNavMenu from '../header/kso-nav-menu.vue';
    
    export default {
        name: 'ksoHeader',
        components: {
            ksoNavMenu,
        }
    }
</script>

<style>

</style>