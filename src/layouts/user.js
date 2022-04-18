import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../pages/user/header/header'
import Footer from '../pages/user/footer/footer'
import Sidebar from '../pages/user/sidebar/sidebar'
import './user.scss'

import userRoutes from '../routes/user'


function UserLayout() {
    return (
        <div className="user">
            <Header />
            <React.Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    {userRoutes.map((prop, key) => {
                        return (
                            <Route
                                path={prop.path}
                                key={key}
                                element={prop.component}
                            ></Route>
                        )
                    })}
                </Routes>
            </React.Suspense>
            {/* <Sidebar /> */}
            <Footer />
        </div>
    )
}

export default UserLayout