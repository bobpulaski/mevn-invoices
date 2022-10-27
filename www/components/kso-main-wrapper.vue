<template>
    <div class="kso-main-wrapper">
        <ksoHeader/>
        <div style="float: left; width: 250px; position: sticky; background-color: burlywood; height: 100%;">
            <ksoAside/>
        </div>
        <div>
            <ksoContent/>
            <ksoFooter/>
        </div>
    </div>
</template>

<script>
    import ksoHeader from "../components/header/kso-header.vue";
    import ksoAside from "../components/aside/kso-aside.vue";
    import ksoContent from "../components/content/kso-content";
    import ksoFooter from "../components/footer/kso-footer";

    export default {
        name: "ksoMainWrapper",
        components: {
            ksoHeader,
            ksoContent,
            ksoFooter,
            ksoAside,
        },
        methods: {},
    };
</script>

<style></style>
