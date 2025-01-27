import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const HomePage = lazy(() => import('@/cgc-pages/HomePage.jsx'))
const Login = lazy(() => import('@/pages/auth/Login/Login'))
const ComplaintPage = lazy(() => import('@/cgc-pages/complaints/ComplaintPage.jsx'))
const DepartmentsPage = lazy(() => import('@/cgc-pages/departments/DepartmentsPage'))
const ComplaintDetailsPage = lazy(() => import('@/cgc-pages/complaints/ComplaintDetailsPage'))
const DepartmentDetailsPage = lazy(() => import('@/cgc-pages/departments/DepartmentDetailsPage'))

const appsRoutes = [
    {
        path : '/',
        name : 'HomePage',
        element: <HomePage/>
    },
    {
        path : '/complaints',
        name : 'ComplaintPage',
        element: <ComplaintPage/>
    },
    {
        path : '/departments',
        name : 'DepartmentsPage',
        element: <DepartmentsPage/>
    },
    {
        path : '/complaints/:id',
        name : 'ComplaintDetailsPage',
        element: <ComplaintDetailsPage/>
    },
    {
        path : '/departments/:id',
        name : 'ComplaintDetailsPage',
        element: <DepartmentDetailsPage/>
    },
]

const authRoutes = [
	{
		path: '/login',
		name: 'Login',
		element: <Login />,
	}
]

const allAuthRoutes = [...appsRoutes]

const allBlankRoutes = [...authRoutes]

export {allAuthRoutes, allBlankRoutes}