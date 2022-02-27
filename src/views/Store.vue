<template>
  <ion-page>

      <ion-header>
        <ion-toolbar>

          <ion-button fill="clear" slot='start' style="--background-hover-opacity: 0%">
            <ion-menu-button color="medium"></ion-menu-button>
          </ion-button>
          
        </ion-toolbar>
      </ion-header>

    <ion-content>
      
    
      <div class="container" id="container">
      <!-- <ion-grid>
        <ion-row>
          <ion-col size="12" size-sm>
            <div id="image" class="triggerss">
              <a class="trigger" target="_blank" rel="noopener noreferrer" href="https://simplistic.fun"></a>
            </div> 
          </ion-col>
          <ion-col size="12" size-sm>
            <div id="image" class="triggerx2">
              <a class="trigger" target="_blank" rel="noopener noreferrer" href="http://x2international.com"></a>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid> -->
    </div>
    </ion-content>

  </ion-page>
      
  
</template>

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
  padding-left: 100px;
  padding-right: 100px;

}

@media (max-width: 1275px) {
  #container {
  
  padding-left: 100px;
  padding-right: 100px;

  left: 0;
  right: 0;
  top: 50px;

  }
 

  ion-grid {

  position: absolute;
  
  }
}


@media (max-width: 675px) {
  #container {
  
  padding-left: 0px;
  padding-right: 0px;
  
  left: 0;
  right: 0;
  top: 0;
  }
 

  ion-grid {

  position: absolute;
  
  }
}
/*.trigger { 
  
  width: 340px;
  height: 200px;
  display: inline-block;
  transition: scale 0.3s ease-out;
  scale: 1;
  
}
.trigger:hover { 
  
  width: 340px;
  height: 200px;
  display: inline-block;
  transition: scale 0.3s ease-in;
  scale: 1.1;
  
}

.triggerss { 
  
  width: 340px;
  height: 200px;
  background: url('../assets/images/sssprite.png') no-repeat 0px 0px;
  display: inline-block;
  transition: scale 0.3s ease-out;
  scale: 1;
  
}
.triggerss:hover { 
  
  width: 340px;
  height: 200px;
  background: url('../assets/images/sssprite.png') no-repeat 0px -200px;
  display: inline-block;
  transition: scale 0.3s ease-in;
  scale: 1.1;
  
}

.triggerx2 { 
  
  width: 340px;
  height: 200px;
  background: url('../assets/images/x2sprite.png') no-repeat 0px 0px;
  display: inline-block;
  transition: scale 0.3s ease-out;
  scale: 1;  
  
}
.triggerx2:hover { 
  
  width: 340px;
  height: 200px;
  background: url('../assets/images/x2sprite.png') no-repeat 0px -200px;
  display: inline-block;
  transition: scale 0.3s ease-in;
  scale: 1.1;
  
}*/

</style>

<script lang="ts">

import { 
    IonHeader, 
    IonPage, 
    IonToolbar, 
    IonContent
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "MerchStore",
  components: { 
    IonHeader, 
    IonPage, 
    IonToolbar, 
    IonContent
  }
});

      
</script>

