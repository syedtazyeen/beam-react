import { StudioHeader, StudioSidebar } from '@/components/studio'
import React, { Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'

const StudioLayout: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='fixed w-full h-screen'>
            <StudioHeader handleSiderbar={toggleSidebar} />
            <div className='flex h-[calc(100%-3rem)]'>

                {isSidebarOpen &&
                    <div className={`w-[14rem] h-full p-2 bg-[var(--paperColor)]`}>
                        <StudioSidebar />
                    </div>}
                <Suspense fallback={<LoadingScreen />}>
                    <div className='flex-1 overflow-y-auto'>
                        <Outlet />
                    </div>
                </Suspense>
            </div>

        </div>
    )
}

export default StudioLayout

const LoadingScreen = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
           <p className='font-bold text-md'>Loading...</p>
        </div>
    )
}