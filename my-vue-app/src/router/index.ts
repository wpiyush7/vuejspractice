import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import HousiePage from '../pages/HousiePage.vue';
import GameRoomPage from '../pages/GameRoomPage.vue';
import DashboardPage from '../pages/DashboardPage.vue';
import ContactPage from '../pages/contacts/ContactPage.vue';
import CreateContactPage from '../pages/contacts/CreateContactPage.vue';


const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardPage,
  },
  {
    path: '/contacts',
    name: 'Contact',
    component: ContactPage,
  },
  {
    path: '/contacts/create',
    name: 'CreateContact',
    component: CreateContactPage,
  },
  {
    path: '/housie',
    name: 'Housie',
    component: HousiePage,
  },
  {
    path: '/gameroom',
    name: 'GameRoom',
    component: GameRoomPage,
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
