import * as React from 'react'
const Home = React.lazy(
    () => import('../pages/main/home/home'),
)
const Login = React.lazy(
    () => import('../pages/main/login/login'),
)
const Join = React.lazy(
    () => import('../pages/main/join/join'),
)

var mainRoutes = [
    { path: '/', name: 'Homepage', component: <Home /> },
    {
        path: 'login',
        name: 'Login',
        component: <Login />,
    },
    {
        path: 'join',
        name: 'Join',
        component: <Join />,
    },
]

export default mainRoutes