// File: router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import AllTasks from '../views/AllTasks.vue';
import Subjects from '../views/Subjects.vue';
import Today from '../views/Today.vue';
import Favorites from '../views/Favorites.vue';
import Schedule from '../views/Schedule.vue';
import Settings from '../views/Settings.vue';

const routes = [
  { path: '/', component: AllTasks },
  { path: '/subjects', component: Subjects },
  { path: '/today', component: Today },
  { path: '/favorites', component: Favorites },
  { path: '/schedule', component: Schedule },
  { path: '/settings', component: Settings }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;