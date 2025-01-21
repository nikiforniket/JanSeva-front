import { getComplaintDetails } from '@/api/actions'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ComplaintDetailsPage = () => {
    const {id} = useParams()

    const [complaintDetails,setComplaintDetails] = useState([])

    useEffect(() => {
        getComplaintDetails(id).then((res) => {
            console.log(res)
            setComplaintDetails(res.data.results)
        })
    },[])
  return (
    <div>"id is {id}"</div>
  )
}

export default ComplaintDetailsPage