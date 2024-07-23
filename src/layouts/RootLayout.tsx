import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout: React.FC = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default RootLayout

const LoadingScreen = () => {
    return (
        <div className='w-full h-screen text-center'>
            Loading...
        </div>
    )
}