<template>

<!--     <header>
      <Menu></Menu>
    </header> -->

  <SideMenu />
  <div>
<!--       <div :style="{ 'margin-left': menuWidth }"> -->
    <router-view />
  </div>
    <!-- <ion-split-pane content-id='main'> -->
<!--         <Menu></Menu> -->
    <!-- </ion-split-pane> -->

</template>

<script lang="ts">


import { defineComponent } from 'vue';
import SideMenu from './components/SideMenu.vue';
// import menuWidth from '@/components/state';

export default defineComponent({
  name: 'App',
  components: {
    SideMenu,
  },
  setup() {
    return {
      // menuWidth
    }
  }
})
</script>