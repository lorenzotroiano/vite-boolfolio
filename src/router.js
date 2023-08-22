import { createRouter, createWebHistory } from 'vue-router';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./components/Home.vue')
        },

        {
            path: '/projects/:id',
            name: 'project-card',
            component: () => import('./components/ProjectCard.vue')
        },



    ]
});

export { router };