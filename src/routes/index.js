/* Route declarations for the app */
import * as reviews from '../views';

const routData = [
    {
        id: 'route-000',
        path: '/login',
        component: reviews.Login,
        requiresAuth: true,
    },
    {
        id: 'route-001',
        path: '/auth',
        component: reviews.Auth,
        requiresAuth: true,
    },
    {
        id: 'route-002',
        path: '/home',
        component: reviews.Home,
        requiresAuth: true,
    },
    {
        id: 'route-003',
        path: '/dashboard',
        component: reviews.Dashboard,
        requiresAuth: true,
    },
    
];

export default routData;