import * as React from 'react'
const Dashboard = React.lazy(
    () => import('../pages/user/dashboard/dashboard'),
)
const Members = React.lazy(
    () => import('../pages/user/members/members'),
)
const Projects = React.lazy(
    () => import('../pages/user/projects/projects'),
)

var userRoutes = [
    { path: '', name: 'Dashboard', component: <Dashboard /> },
    {
        path: 'members',
        name: 'Members',
        component: <Members />,
    },
    {
        path: 'projects',
        name: 'Projects',
        component: <Projects />,
    },
]

export default userRoutes