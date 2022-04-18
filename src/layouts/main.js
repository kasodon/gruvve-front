import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../pages/main/header/header'
import Footer from '../pages/main/footer/footer'
import './main.scss'

import mainRoutes from '../routes/main'

function MainLayout() {
    return (
        <div className="main">
            <Header />
            <React.Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    {mainRoutes.map((prop, key) => {
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
            <Footer />
        </div>
    );
}

export default MainLayout