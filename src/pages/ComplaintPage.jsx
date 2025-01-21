import { getComplaintsList } from '@/api/actions'
import { HttpClient } from '@/common'
import { PageMetaData } from '@/components'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import DataTables from './uikit/tables/DataTables'
import { Link } from 'react-router-dom'
import { customersDetails } from './uikit/tables/data'

const ComplaintPage = () => {

  const [complaintList,setComplaintList] = useState([])

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
      if(res?.data.results){
        setComplaintList(res?.data?.results)
      }
    })

  },[])

  return (
    <>
    <PageMetaData title="Complaints" />
    <DataTables title={`Complaints`} columnConfig = {columnConfig} rowData={complaintList} />
    {/* <Button onClick={getComplaintsList}>Hit Me</Button> */}
    </>
  )
}

export default ComplaintPage