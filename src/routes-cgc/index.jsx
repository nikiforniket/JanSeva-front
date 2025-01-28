import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const HomePage = lazy(() => import('@/cgc-pages/HomePage.jsx'))
const Login = lazy(() => import('@/pages/auth/Login/Login'))
const ComplaintPage = lazy(() => import('@/cgc-pages/complaints/ComplaintPage.jsx'))
const DepartmentsPage = lazy(() => import('@/cgc-pages/departments/DepartmentsPage'))
const ComplaintDetailsPage = lazy(() => import('@/cgc-pages/complaints/ComplaintDetailsPage'))
const DepartmentDetailsPage = lazy(() => import('@/cgc-pages/departments/DepartmentDetailsPage'))
const DemandLettersPage = lazy(() => import('@/cgc-pages/demand-letters/DemandLetter'))
const DemandDetails = lazy(() => import('@/cgc-pages/demand-letters/DemandDetails'))
const SuggestionPage = lazy(() => import('@/cgc-pages/Suggestions/SuggestionPage'))
const SuggestionDetails = lazy(() => import('@/cgc-pages/Suggestions/SuggestionDetails'))
const GeoComplaintsPage = lazy(() => import('@/cgc-pages/geo-complaints/GeoComplaintsPage'))
const GeoComplaintDetailsPage = lazy(() => import('@/cgc-pages/geo-complaints/GeoComplaintDetailsPage'))

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
        name : 'DepartmentDetailsPage',
        element: <DepartmentDetailsPage/>
    },
    {
        path : '/demandletters',
        name : 'DemandLettersPage',
        element: <DemandLettersPage/>
    },
    {
        path : '/demandletters/:id',
        name : 'DemandDetailsPage',
        element: <DemandDetails/>
    },
    {
        path : '/suggestions',
        name : 'SuggestionPage',
        element: <SuggestionPage/>
    },
    {
        path : '/suggestions/:id',
        name : 'SuggestionDetailsPage',
        element: <SuggestionDetails/>
    },
    {
        path : '/geocomplaints',
        name : 'GeoComplaintsPage',
        element: <GeoComplaintsPage/>
    },
    {
        path : '/geocomplaints/:id',
        name : 'GeoComplaintDetails',
        element: <GeoComplaintDetailsPage/>
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