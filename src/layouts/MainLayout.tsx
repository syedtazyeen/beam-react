import { MainFooter, MainHeader } from '@/components/main'
import React, { useCallback } from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout: React.FC = () => {
    // const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    // const { token } = useSelector((state: RootState) => state.auth)
    // const router = useRouter()
    // const { setRedirectPath } = useRedirect()

    const toggleSidebar = useCallback(() => {
        //setIsSidebarOpen(prevState => !prevState)
    }, [])

    return (
        <div>
            <MainHeader handleSidebar={toggleSidebar} />
            <Outlet />
            <MainFooter/>
        </div>
    )
}

export default MainLayout