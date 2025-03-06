import { PageBreadcrumb } from '@/components'
import {
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Row,
} from 'react-bootstrap'
import { customersDetails } from './data'
import { Table } from '@/components'
import { Link } from 'react-router-dom'
// const columns = [
// 	{
// 		Header: 'uuid',
// 		accessor: 'uuid',
// 		defaultCanSort: true,
// 		// Cell: props => <a href="https://physically-calm-hermit.ngrok-free.app/complaints/">{"QWERTY"}</a>,
// 		// Cell: ({ row }) => (console.log('QQQQQQ',row))
// 		Cell: ({ row }) => (<Link to={{ pathname: `/` }}>{row.values.uuid}</Link>)
// 	},
// 	{
// 		Header: 'Full Name',
// 		accessor: 'full_name',
// 		defaultCanSort: true,
// 	},
// 	{
// 		Header: 'Phone Number',
// 		accessor: 'phone_number',
// 		defaultCanSort: false,
// 	},
// 	{
// 		Header: 'Department Name',
// 		accessor: 'department_name',
// 		defaultCanSort: true,
// 	},
// 	{
// 		Header: 'Category Name',
// 		accessor: 'category_name',
// 		defaultCanSort: true,
// 	},
// 	{
// 		Header: 'Status',
// 		accessor: 'status',
// 		defaultCanSort: true,
// 	},{
// 		Header: 'Location Name',
// 		accessor: 'location_name',
// 		defaultCanSort: true,
// 	},{
// 		Header: 'Created At',
// 		accessor: 'created_at',
// 		defaultCanSort: true,
// 	},{
// 		Header: 'Updated At',
// 		accessor: 'updated_at',
// 		defaultCanSort: true,
// 	},
// ]
const sizePerPageList = [
	{
		text: '5',
		value: 5,
	},
	{
		text: '10',
		value: 10,
	},
	{
		text: '25',
		value: 25,
	},
	{
		text: 'All',
		value: customersDetails.length,
	},
]
const DataTables = (props) => {
	return (
		<>
			<PageBreadcrumb title={props?.title ? props.title : ""} subName="Tables" />
			<Row>
				<Col xs="12">
					<Card>
						{/* <CardHeader>
							<CardTitle>Pagination &amp; Sort </CardTitle>
							<p className="text-muted mb-0">
								A simple example of table with pagination and column sorting
							</p>
						</CardHeader> */}
						<CardBody>
							<Table
								columns={props.columnConfig}
								data={props.rowData}
								pageSize={5}
								sizePerPageList={sizePerPageList}
								isSortable={true}
								isSearchable={true}
								pagination={true}
							/>
						</CardBody>
					</Card>
				</Col>
			</Row>
			{/* <Row>
				<Col xs="12">
					<Card>
						<CardHeader>
							<CardTitle>Search</CardTitle>
							<p className="text-muted mb-0">A Table allowing search</p>
						</CardHeader>
						<CardBody>
							<Table
								columns={columns}
								data={customersDetails}
								pageSize={5}
								sizePerPageList={sizePerPageList}
								isSortable={true}
								pagination={true}
								isSearchable={true}
							/>
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xs="12">
					<Card>
						<CardHeader>
							<CardTitle>Multiple Row Selection</CardTitle>
							<p className="text-muted mb-0">
								This table allowing selection of multiple rows
							</p>
						</CardHeader>
						<CardBody>
							<Table
								columns={columns}
								data={customersDetails}
								pageSize={5}
								sizePerPageList={sizePerPageList}
								isSortable={true}
								pagination={true}
								isSelectable={true}
							/>
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xs="12">
					<Card>
						<CardHeader>
							<CardTitle>Expand Row</CardTitle>
							<p className="text-muted mb-0">
								Expand row to see more additional details
							</p>
						</CardHeader>
						<CardBody>
							<Table
								columns={columns}
								data={customersDetails}
								pageSize={5}
								sizePerPageList={sizePerPageList}
								isSortable={true}
								pagination={true}
								isExpandable={true}
							/>
						</CardBody>
					</Card>
				</Col>
			</Row> */}
		</>
	)
}
export default DataTables
