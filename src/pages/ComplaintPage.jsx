import { getComplaintsList } from '@/api/actions'
import { HttpClient } from '@/common'
import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'

const ComplaintPage = () => {

  // useEffect(async() => {
  //   const res = await getComplaintsList()
  //   console.log(res)
  // },[])

  return (
    <>
    <div>ComplaintPage</div>
    <Button onClick={getComplaintsList}>Hit me</Button>
    </>
  )
}

export default ComplaintPage