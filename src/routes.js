import HomeView from './Views/HomeView.vue'


export const routes = [
    {
        path: '/',
        component: HomeView
    },
    { 
        path: '/home', 
        redirect: '/' 
    },
    { 
        path: '/categories',
        component: ()=> import('./Views/CategoriesView.vue'),
        children:[{
                path: ':category',
                component:()=>import('@/Views/CategoryChildView.vue'),
            }]
    },
    { 
        path: '/products',
        component: ()=> import('./Views/ProductsView.vue'),
        children:[{
            path: ':product',
            component:()=>import('@/Views/ProductChildView.vue'),
        }]
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