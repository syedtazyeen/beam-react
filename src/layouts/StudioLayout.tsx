import React, { Suspense, useEffect, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { StudioHeader, StudioSidebar } from '@/components/studio'
import { useRedirect } from '@/config/providers'
import { RootState } from '@/redux/store'
import { useRouter } from '@/router/hooks'
import { LoadingView } from '@/views'

const StudioLayout: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const { token } = useSelector((state: RootState) => state.auth)
    const router = useRouter()
    const { setRedirectPath } = useRedirect()

    const toggleSidebar = useCallback(() => {
        setIsSidebarOpen(prevState => !prevState)
    }, [])

    useEffect(() => {
        if (!token) {
            setRedirectPath(window.location.pathname)
            router.replace('/login')
        } else {
            setRedirectPath(null)
        }
    }, [token, router, setRedirectPath])

    if (!token) {
        return null
    }

    return (
        <div className='fixed w-full h-screen'>
            <StudioHeader handleSidebar={toggleSidebar} />
            <div className='flex h-[calc(100%-3rem)]'>
                {isSidebarOpen && (
                    <div className='w-[14rem] h-full p-2 bg-[var(--paperColor)] shadow-md'>
                        <StudioSidebar />
                    </div>
                )}
                <Suspense fallback={<LoadingView />}>
                    <div className='flex-1 overflow-y-auto'>
                        <Outlet />
                    </div>
                </Suspense>
            </div>
        </div>
    )
}

export default StudioLayout