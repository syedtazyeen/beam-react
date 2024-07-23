import { createBrowserRouter, RouteObject } from "react-router-dom";
import { lazy } from "react";


// layouts
const RootLayoutLazy = lazy(()=> import('@/layouts/RootLayout'))
const MainLayoutLazy = lazy(()=> import('@/layouts/MainLayout'))
const StudioLayoutLazy = lazy(()=> import('@/layouts/StudioLayout'))

// screens 
const StudioHomeScreenLazy = lazy(()=> import('@/screens/studio/StudioScreen'))
const StudioStreamScreenLazy = lazy(()=> import('@/screens/studio/StreamScreen'))
const StudioEventsScreenLazy = lazy(()=> import('@/screens/studio/EventsScreen'))
const StudioSettingsScreenLazy = lazy(()=> import('@/screens/studio/SettingsScreen'))

const routes: RouteObject[] = [
    {
        path: '',
        element: <RootLayoutLazy />,
        children: [
            {
                path: '/',
                element: <MainLayoutLazy />,
                children: [
                    {
                        path: 'home',
                        element: <></>
                    }
                ]
            },
            {
                path: '/studio/',
                element: <StudioLayoutLazy />,
                children: [
                    {
                        path: '',
                        element: <StudioHomeScreenLazy/>
                    },
                    {
                        path: 'stream',
                        element: <StudioStreamScreenLazy/>
                    },
                    {
                        path: 'events',
                        element: <StudioEventsScreenLazy/>
                    },
                    {
                        path: 'settings',
                        element: <StudioSettingsScreenLazy/>
                    }
                ]
            },

        ]
    }
]

const router: any = createBrowserRouter(routes)
export default router