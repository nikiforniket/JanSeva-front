import { getComplaintsList } from '@/api/actions'
import { HttpClient } from '@/common'
import { PageMetaData } from '@/components'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import DataTables from '../../pages/uikit/tables/DataTables'
import { Link } from 'react-router-dom'
import { customersDetails } from '../../pages/uikit/tables/data'
import { useDispatch, useSelector } from 'react-redux'
import { setComplaintList } from '@/store/actions/ComplaintActions'

const ComplaintPage = () => {

//   const [complaintList,setComplaintList] = useState([])
  const dispatch = useDispatch()

  const complaintDetails = useSelector((state) => state.ComplaintReducer.complaintDetails)

  const columnConfig = [
	{
		Header: 'uuid',
		accessor: 'uuid',
		defaultCanSort: true,
		// Cell: props => <a href="https://physically-calm-hermit.ngrok-free.app/complaints/">{"QWERTY"}</a>,
		// Cell: ({ row }) => (console.log('QQQQQQ',row))
		Cell: ({ row }) => (<Link to={{ pathname: `/complaints/${row.values.uuid}` }}>{row.values.uuid}</Link>)
	},
	{
		Header: 'Full Name',
		accessor: 'full_name',
		defaultCanSort: true,
	},
	{
		Header: 'Phone Number',
		accessor: 'phone_number',
		defaultCanSort: false,
	},
	{
		Header: 'Department Name',
		accessor: 'department_name',
		defaultCanSort: true,
	},
	{
		Header: 'Category Name',
		accessor: 'category_name',
		defaultCanSort: true,
	},
	{
		Header: 'Status',
		accessor: 'status',
		defaultCanSort: true,
	},{
		Header: 'Location Name',
		accessor: 'location_name',
		defaultCanSort: true,
	},{
		Header: 'Created At',
		accessor: 'created_at',
		defaultCanSort: true,
    // Cell: ({ row }) => <Moment format='MM/DD/YYYY'></Moment>
	},{
		Header: 'Updated At',
		accessor: 'updated_at',
		defaultCanSort: true,
	},
]
  useEffect(() => {

    getComplaintsList().then((res) => {
      if(res?.data?.results){
        // setComplaintList(res?.data?.results)
		dispatch(setComplaintList(res.data.results))
      }
    })

  },[])
  return (
    <>
    <PageMetaData title="Complaints" />
	{complaintDetails.length > 0 && ( // need to check for whatever we pass to rowData -> on initial render complaintDetails was empty hence datatables was throwing errors as it has some map function looping over rowData without null checks
    <DataTables title={`Complaints`} columnConfig = {columnConfig} rowData={complaintDetails} />
	)
}
    {/* <Button onClick={getComplaintsList}>Hit Me</Button> */}
    </>
  )
}

export default ComplaintPage