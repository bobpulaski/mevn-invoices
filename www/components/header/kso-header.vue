<template>
  <div class="header__menu">
    <ksoUserMenuDropdown />
  </div>
</template>

<script>
import ksoUserMenuDropdown from '../header/kso-user-menu-dropdown.vue';

export default {
  name: "ksoHeader",
  components: {
      ksoUserMenuDropdown,
  },
};
</script>
<style></style>
