<template>
    <div class="kso-main-wrapper container-fluid">
        <KsoHeader />
        <ksoContent />
        <ksoFooter />
    </div>
</template>

<script>
import KsoHeader from '../components/header/kso-header.vue';
import ksoContent from '../components/content/kso-content';
import ksoFooter from '../components/footer/kso-footer';


export default {
    name: 'ksoMainWrapper',
    components: {
        KsoHeader,
        ksoContent,
        ksoFooter,
    },
    methods: {

    }
}

</script>

<style>

</style>