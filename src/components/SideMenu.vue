<template>

  <ion-menu type="overlay" side="start" menu-id="first" content-id="main">

    <span>
        <ion-button fill="clear" slot='start'>
          <ion-menu-button color="medium" style="--background-hover-opacity: 0%"></ion-menu-button>
        </ion-button>
    </span>

    <ion-content>
      <ion-list inset="true" lines="none" style="--ion-item-background: transparent;">
        <!-- Trying to get the @click to close the menu when a view is selected from the menu -->
        <router-link to="/about" @click="closeMenu()">
          <ion-item>About</ion-item>
        </router-link>
        <router-link to="/media" @click="closeMenu()">
          <ion-item>Media</ion-item>
        </router-link>
        <router-link to="/store" @click="closeMenu()">
          <ion-item>Store</ion-item>
        </router-link>
        <router-link to="/contact" @click="closeMenu()">
          <ion-item>Contact</ion-item>
        </router-link>

      </ion-list>
    </ion-content>
  </ion-menu>

<ion-router-outlet id="main"></ion-router-outlet>
</template>

<style scoped>
a { 
    text-decoration: none; 
  }
ion-item {
  font-family: Office Code Pro !important;
  font-size: 1.2em;

}

ion-button {

  padding-top: 15px;
}


</style>

<script lang="ts">
import { 
  IonContent, 
  IonItem, 
  IonList, 
  IonMenu, 
  IonRouterOutlet,
  menuController
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {},
  setup() {
    return {
    IonContent, 
    IonItem, 
    IonList, 
    IonMenu, 
    IonRouterOutlet
    }
  },
  methods: {
    openFirst() {
      menuController.enable(true, 'first');
      menuController.open('first');
    },
    openEnd() {
      menuController.open('end');
    },
    openCustom() {
      menuController.enable(true, 'custom');
      menuController.open('custom');
    },
    closeMenu() {
      menuController.close();
    }
  }
});
</script>