import React from 'react'
import { Navbar } from './components/common/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from './components/common/Footer';

export default function ({
    activeTab,
    setActiveTab,
}) {

    return (
        <main className="min-h-screen w-full overflow-x-hidden bg-[#051650]">
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div>
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}