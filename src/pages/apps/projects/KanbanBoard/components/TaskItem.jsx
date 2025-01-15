import {
	CardBody,
	Col,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Row,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
const TaskItem = ({ task }) => {
	return (
		<CardBody>
			<Dropdown className="d-inline-block float-end">
				<DropdownToggle
					as="a"
					className="mr-n2 mt-n2"
					id="drop2"
					role="button"
					aria-haspopup="false"
					aria-expanded="false"
				>
					<i className="las la-ellipsis-v font-14 text-muted" />
				</DropdownToggle>
				<DropdownMenu align="end" aria-labelledby="drop2">
					<DropdownItem href="#">Edit</DropdownItem>
					<DropdownItem href="#">Delete</DropdownItem>
				</DropdownMenu>
			</Dropdown>
			<i
				className={clsx(
					'mdi mdi-circle-outline d-block mt-n2 font-14',
					task.status == 'NewProject'
						? 'text-primary'
						: task.status == 'Todo'
							? 'text-info'
							: task.status == 'InProgress'
								? 'text-warning'
								: task.status == 'CodeReview'
									? 'text-danger'
									: 'text-success'
				)}
			/>
			<h5 className="my-1 font-14">{task.title}</h5>
			<p className="text-muted mb-2">Mobile App</p>
			<Row className="justify-content-center">
				<Col xs={6} className="align-self-center">
					<ul className="list-inline mb-0">
						<li className="list-item d-inline-block me-1">
							<Link to="">
								<i className="mdi mdi-format-list-bulleted text-muted me-1" />
								<span className="text-muted font-weight-bold">0/5</span>
							</Link>
						</li>
						<li className="list-item d-inline-block">
							<Link to="" className="d-flex align-items-center gap-1">
								<i className="mdi mdi-comment-outline text-muted" />
								<span className="text-muted font-weight-bold">
									{task.comments}
								</span>
							</Link>
						</li>
					</ul>
				</Col>
				<Col xs={6} className="align-self-center">
					{task.userAvatar.map((user, idx) => {
						return (
							<Link key={idx} className="float-end" to="">
								<img
									src={user.image}
									alt="user"
									className="thumb-xs rounded-circle"
								/>
							</Link>
						)
					})}
				</Col>
			</Row>
		</CardBody>
	)
}
export default TaskItem
