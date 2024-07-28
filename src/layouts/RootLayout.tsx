import { LoadingView } from '@/views'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout: React.FC = () => {
    return (
        <Suspense fallback={<LoadingView />}>
            <Outlet />
        </Suspense>
    )
}

export default RootLayout