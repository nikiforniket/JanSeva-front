import { PageMetaData } from '@/components'
import React, { useEffect, useState } from 'react'
import DataTables from './uikit/tables/DataTables'
import { Button } from 'react-bootstrap'
import { getDepartmentList } from '@/api/actions'
import { Link } from 'react-router-dom'

const DepartmentsPage = () => {

    const columnConfig = [
        {
            Header: 'ID',
            accessor: 'id',
            defaultCanSort: true,
            Cell: ({ row }) => (<Link to={{ pathname: `/departments/${row.values.id}` }}>{row.values.id}</Link>)
        },
        {
            Header: 'Name',
            accessor: 'name',
            defaultCanSort: true,
        },
        {
            Header: 'Created At',
            accessor: 'created_at',
            defaultCanSort: true,
        },
        {
            Header: 'Updated At',
            accessor: 'updated_at',
            defaultCanSort: true,
        },
    ]

    const [departmentList,setDepartmentList] = useState([])

    useEffect(() => {
        getDepartmentList().then((res)=> {
            if(res?.data.results){
            setDepartmentList(res.data.results)
            }
        })
    },[])
    
  return (
    <>
        <PageMetaData title="Departments" />
        <DataTables title={`Departments`} columnConfig = {columnConfig} rowData={departmentList} />
        {/* <Button onClick={getDepartmentList}>Hit Me</Button> */}
    </>
  )
}

export default DepartmentsPage