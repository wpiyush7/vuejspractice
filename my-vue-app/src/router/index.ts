import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import HousiePage from '../pages/HousiePage.vue';
import GameRoomPage from '../pages/GameRoomPage.vue';

const routes = [
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
  {
    path: '/housie',
    name: 'Housie',
    component: HousiePage,
  },
  {
    path: '/gameroom',
    name: 'GameRoom',
    component: GameRoomPage,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
