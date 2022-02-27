import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import AboutUs from '../views/About.vue'
import MediaPlayer from '../views/Media.vue'
import MerchStore from '../views/Store.vue';
import ContactUs from '../views/Contact.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/media',
    name: 'MediaPlayer',
    component: MediaPlayer
  },
  {
    path: '/store',
    name: 'MerchStore',
    component: MerchStore
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: ContactUs
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router