import React from 'react';
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'

const RootLayout = () => {
    return (
        <div className="root-layout">
            <Navbar/>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout

