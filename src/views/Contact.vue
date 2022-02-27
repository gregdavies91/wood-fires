<template>
  <ion-page>

    <ion-header>
      <ion-toolbar style="--background: transparent">

<!--         This button has to be on all views, can it be in a component? -->
        <ion-button fill="clear" background="transparent" slot='start'>
          <ion-menu-button color="medium"></ion-menu-button>
        </ion-button>
        
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
    
      <div id="container">
        <ion-grid>
        <ion-row>
          <ion-col size="12" size-sm>
            
          </ion-col>
        </ion-row>
      </ion-grid>
      </div>

    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactUs',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar
  }
});
</script>

<style scoped>
#image {
  margin: 50px;
}

@media (max-width:  1025px) {
  #image {
    margin: 25px;
  }
}

@media (max-width:  800px) {
  #image {
    margin: 0px;
  }
}  

#container {
    padding-left: 300px;
    padding-right: 300px;

}

@media (max-width: 1275px) {
  #container {
  
  padding-left: 300px;
  padding-right: 300px;

  left: 0;
  right: 0;
  top: 350px;

  }
 

  ion-grid {

  position: unset;
  
  }
}


@media (max-width: 675px) {
  #container {
  
  padding-left: 100px;
  padding-right: 100px;
  
  left: 0;
  right: 0;
  top: 350px;
  }
 

  ion-grid {

  position: unset;
  
  }
}

</style>