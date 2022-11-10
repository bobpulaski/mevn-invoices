<template>
  <div class="kso-main-wrapper">
    <div class="header">
      <ksoHeader/>
    </div>
    <div class="sidebar">
      <ksoAside/>
    </div>
    <div class="main">
      <ksoContent/>
    </div>
    <div class="footer">
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
