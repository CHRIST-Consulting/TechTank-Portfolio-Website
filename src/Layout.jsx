import React, { useState } from 'react'
import { Navbar } from './components/common/Navbar'
import { Outlet } from 'react-router-dom';

export default function () {

    const [activeTab, setActiveTab] = useState('home');

    return (
        <main className="min-h-screen w-full overflow-x-hidden bg-[#051650]">
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div>
                <Outlet />
            </div>
        </main>
    )
}
