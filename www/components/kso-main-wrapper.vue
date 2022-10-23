<template>
    <div class="kso-main-wrapper container-fluid bg-black pb-4">
        <h3>wrapper</h3>
        <kso-header />
        <kso-content />
        <kso-footer />
    </div>
</template>

<script>
    import ksoHeader from '../components/header/kso-header';
    import ksoContent from '../components/content/kso-content';
    import ksoFooter from '../components/footer/kso-footer';

    export default {
        name: 'kso-main-wrapper',
        components: {
            ksoHeader,
            ksoContent,
            ksoFooter,
        }
    }
</script>

<style>

</style>