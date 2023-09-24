import HomeView from './Views/HomeView.vue'


export const routes = [
    {
        path: '/',
        component: HomeView
    },
    { 
        path: '/categories',
        component: ()=> import('./Views/CategoriesView.vue')
    },
    { 
        path: '/products',
        component: ()=> import('./Views/ProductsView.vue')
    },
    { 
        path: '/about',
        component: ()=> import('./Views/AboutView.vue')
    },
    { 
        path: '/contact',
        component: ()=> import('./Views/ContactView.vue')
    }
]