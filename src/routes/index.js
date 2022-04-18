// Main pages import
// User pages import
// Admin pages import
// Layouts import
import MainLayout from '../layouts/main'
import UserLayout from '../layouts/user'

var indexRoutes = [

    {
        path: '/user/*',
        name: 'User Dashboard',
        component: <UserLayout />,
    },
    { path: '/*', name: 'Main Layout', component: <MainLayout /> },
]

export default indexRoutes