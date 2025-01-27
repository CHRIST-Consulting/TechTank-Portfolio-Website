import React from 'react'
import { Navbar } from './components/common/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from './components/common/Footer';

export default function () {

    return (
        <main className="min-h-screen w-full overflow-x-hidden bg-[#051650]">
            <Navbar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}