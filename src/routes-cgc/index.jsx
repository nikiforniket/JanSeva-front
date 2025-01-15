import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const HomePage = lazy(() => import('@/pages/HomePage.jsx'))
const Login = lazy(() => import('@/pages/auth/Login/Login'))
const ComplaintPage = lazy(() => import('@/pages/ComplaintPage.jsx'))

const appsRoutes = [
    {
        path : '/',
        name : 'HomePage',
        element: <HomePage/>
    },
    {
        path : '/complaint',
        name : 'ComplaintPage',
        element: <ComplaintPage/>
    }
]

const authRoutes = [
	{
		path: '/login',
		name: 'Login',
		element: <Login />,
	}
]

const allAuthRoutes = [
    ...appsRoutes
]

const allBlankRoutes = [...authRoutes]

export {allAuthRoutes, allBlankRoutes}