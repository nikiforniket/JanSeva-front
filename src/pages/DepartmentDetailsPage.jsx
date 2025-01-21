import { getDepartmentDetails } from '@/api/actions'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const DepartmentDetailsPage = () => {
    const {id} = useParams()

    useEffect(() => {
        getDepartmentDetails(id).then((res) => {
            console.log(res)
        })
    },[])
  return (
    <div>DepartmentDetailsPage</div>
  )
}

export default DepartmentDetailsPage