<template>
  <div class="kso-main-wrapper" style="display: flex; flex: 1 0 auto">
    <div>
      <div style="width: 250px; display: flex; flex-direction: column; flex-shrink: 0;">
        <ksoAside />
      </div>
      <div style="position: relative; display: flex; flex; flex-direction: column;">
        <ksoHeader />
        <ksoContent />
        <ksoFooter />
      </div>
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
