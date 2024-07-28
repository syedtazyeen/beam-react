import { createBrowserRouter, RouteObject } from "react-router-dom";
import { lazy } from "react";


//-- layouts --//
const RootLayoutLazy = lazy(() => import('@/layouts/RootLayout'))
const MainLayoutLazy = lazy(() => import('@/layouts/MainLayout'))
const StudioLayoutLazy = lazy(() => import('@/layouts/StudioLayout'))

//-- screens --//
// studio
const StudioHomeScreenLazy = lazy(() => import('@/screens/studio/StudioScreen'))
const StudioStreamScreenLazy = lazy(() => import('@/screens/studio/StreamScreen'))
const StudioEventsScreenLazy = lazy(() => import('@/screens/studio/EventsScreen'))
const StudioSettingsScreenLazy = lazy(() => import('@/screens/studio/SettingsScreen'))
const CreateEventScreenLazy = lazy(() => import('@/screens/studio/CreateEventScreen'))
// common
const LoginScreenLazy = lazy(() => import('@/screens/common/LoginScreen'))
const RegisterScreenLazy = lazy(() => import('@/screens/common/RegisterScreen'))
// main
const HomeScreenLazy = lazy(() => import('@/screens/main/HomeScreen'))
const StreamScreenLazy = lazy(() => import('@/screens/main/StreamScreen'))

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
                        path: '',
                        element: <HomeScreenLazy/>
                    },
                    {
                        path: '/live',
                        element: <HomeScreenLazy/>
                    },
                    {
                        path: '/following',
                        element: <HomeScreenLazy/>
                    },
                    {
                        path: 'live/:id',
                        element: <StreamScreenLazy/>
                    }
                ]
            },
            {
                path: '/studio/',
                element: <StudioLayoutLazy />,
                children: [
                    {
                        path: '',
                        element: <StudioHomeScreenLazy />
                    },
                    {
                        path: 'stream',
                        element: <StudioStreamScreenLazy />
                    },
                    {
                        path: 'events',
                        element: <StudioEventsScreenLazy />
                    },
                    {
                        path: 'settings',
                        element: <StudioSettingsScreenLazy />
                    },
                    {
                        path: 'create-event',
                        element: <CreateEventScreenLazy />
                    }
                ]
            },
            {
                path: '/login',
                element: <LoginScreenLazy />,
            },
            {
                path: '/register',
                element: <RegisterScreenLazy />,
            },

        ]
    }
]

const router: any = createBrowserRouter(routes)
export default router