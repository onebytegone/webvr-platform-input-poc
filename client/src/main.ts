import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Welcome from './views/Welcome.vue';
import Game from './views/Game.vue';
import NotFound from './views/NotFound.vue';

const routes = [
   { path: '/', component: Welcome },
   { path: '/game/:id', component: Game },
   { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
   history: createWebHashHistory(),
   routes,
});

createApp(App)
   .use(router)
   .mount('#app');
