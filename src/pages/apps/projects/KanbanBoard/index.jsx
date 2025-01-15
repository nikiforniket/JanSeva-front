import { PageBreadcrumb } from '@/components'
import {
	Card,
	CardBody,
	Col,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Row,
} from 'react-bootstrap'
import { tasks } from './data'
import { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'
import TaskItem from './components/TaskItem'
const KanbanBoard = () => {
	const [state, setState] = useState({
		todoTasks: tasks.filter((t) => t.status === 'Todo'),
		inprogressTasks: tasks.filter((t) => t.status === 'Inprogress'),
		codeReviewTasks: tasks.filter((t) => t.status === 'CodeReview'),
		doneTasks: tasks.filter((t) => t.status === 'Done'),
		newProjectTasks: tasks.filter((t) => t.status === 'NewProject'),
	})

	// a little function to help us with reordering the result
	const reorder = (list, startIndex, endIndex) => {
		const result = Array.from(list)
		const [removed] = result.splice(startIndex, 1)
		result.splice(endIndex, 0, removed)
		return result
	}

	/**
	 * Moves an item from one list to another list.
	 */
	const move = (source, destination, droppableSource, droppableDestination) => {
		const sourceClone = Array.from(source)
		const destClone = Array.from(destination)
		const [removed] = sourceClone.splice(droppableSource.index, 1)
		destClone.splice(droppableDestination.index, 0, removed)
		const result = {}
		result[droppableSource.droppableId] = sourceClone
		result[droppableDestination.droppableId] = destClone
		return result
	}
	const getList = (id) => {
		const modifiedState = {
			...state,
		}
		const stateTasks = modifiedState[id] && modifiedState[id]
		return stateTasks
	}
	const onDragEnd = (result) => {
		const { source, destination } = result

		// dropped outside the list
		if (!destination) {
			return
		}
		if (source.droppableId === destination.droppableId) {
			const items = reorder(
				getList(source.droppableId),
				source.index,
				destination.index
			)
			const localState = {
				...state,
			}
			localState[source.droppableId] = items
			setState(localState)
		} else {
			const result = move(
				getList(source.droppableId),
				getList(destination.droppableId),
				source,
				destination
			)
			const localState = {
				...state,
				...result,
			}
			setState(localState)
		}
	}
	return (
		<>
			<PageBreadcrumb title="Kanban Board" subName="Projects" />
			<Row>
				<Col xs={12}>
					<Card>
						<CardBody>
							<DragDropContext onDragEnd={onDragEnd}>
								<div className="kanban-board">
									<Droppable droppableId="newProjectTasks">
										{(provided) => (
											<div ref={provided.innerRef} className="kanban-col">
												<div className="kanban-main-card">
													<div className="kanban-box-title">
														<h4 className="header-title mb-3">New Projects</h4>
														<Dropdown className="kanban-main-dropdown">
															<DropdownToggle
																as="a"
																className="arrow-none"
																id="drop1"
																data-bs-toggle="dropdown"
																role="button"
																aria-haspopup="false"
																aria-expanded="false"
															>
																<i className="las la-ellipsis-v font-24 text-muted" />
															</DropdownToggle>
															<DropdownMenu align="end">
																<DropdownItem href="#">
																	Create Project
																</DropdownItem>
																<DropdownItem href="#">
																	Open Project
																</DropdownItem>
																<DropdownItem href="#">
																	Tasks Details
																</DropdownItem>
															</DropdownMenu>
														</Dropdown>
													</div>
													<div id="project-list-left" className="pb-1">
														{state.newProjectTasks.map((item, idx) => (
															<Draggable
																draggableId={item.id + ''}
																index={idx}
																key={item.id}
															>
																{(provided) => (
																	<Card
																		ref={provided.innerRef}
																		{...provided.draggableProps}
																		{...provided.dragHandleProps}
																	>
																		<TaskItem task={item} />
																	</Card>
																)}
															</Draggable>
														))}
														{provided.placeholder}
													</div>
													<button
														type="button"
														className="btn w-100 btn-soft-primary btn-sm"
													>
														Add Task
													</button>
												</div>
											</div>
										)}
									</Droppable>

									<Droppable droppableId="todoTasks">
										{(provided) => (
											<div ref={provided.innerRef} className="kanban-col">
												<div className="kanban-main-card">
													<div className="kanban-box-title">
														<h4 className="header-title mb-3">To Do</h4>
														<Dropdown className="kanban-main-dropdown">
															<DropdownToggle
																as="a"
																className="arrow-none"
																id="drop1"
																data-bs-toggle="dropdown"
																role="button"
																aria-haspopup="false"
																aria-expanded="false"
															>
																<i className="las la-ellipsis-v font-24 text-muted" />
															</DropdownToggle>
															<DropdownMenu align="end">
																<DropdownItem href="#">
																	Create Project
																</DropdownItem>
																<DropdownItem href="#">
																	Open Project
																</DropdownItem>
																<DropdownItem href="#">
																	Tasks Details
																</DropdownItem>
															</DropdownMenu>
														</Dropdown>
													</div>
													<div id="project-list-left" className="pb-1">
														{state.todoTasks.map((item, idx) => (
															<Draggable
																draggableId={item.id + ''}
																index={idx}
																key={item.id}
															>
																{(provided) => (
																	<Card
																		ref={provided.innerRef}
																		{...provided.draggableProps}
																		{...provided.dragHandleProps}
																	>
																		<TaskItem task={item} />
																	</Card>
																)}
															</Draggable>
														))}
														{provided.placeholder}
													</div>
													<button
														type="button"
														className="btn w-100 btn-soft-primary btn-sm"
													>
														Add Task
													</button>
												</div>
											</div>
										)}
									</Droppable>

									<Droppable droppableId="inprogressTasks">
										{(provided) => (
											<div ref={provided.innerRef} className="kanban-col">
												<div className="kanban-main-card">
													<div className="kanban-box-title">
														<h4 className="header-title mb-3">In Progress</h4>
														<Dropdown className="kanban-main-dropdown">
															<DropdownToggle
																as="a"
																className="arrow-none"
																id="drop1"
																data-bs-toggle="dropdown"
																role="button"
																aria-haspopup="false"
																aria-expanded="false"
															>
																<i className="las la-ellipsis-v font-24 text-muted" />
															</DropdownToggle>
															<DropdownMenu align="end">
																<DropdownItem href="#">
																	Create Project
																</DropdownItem>
																<DropdownItem href="#">
																	Open Project
																</DropdownItem>
																<DropdownItem href="#">
																	Tasks Details
																</DropdownItem>
															</DropdownMenu>
														</Dropdown>
													</div>
													<div id="project-list-left" className="pb-1">
														{state.inprogressTasks.map((item, idx) => (
															<Draggable
																draggableId={item.id + ''}
																index={idx}
																key={item.id}
															>
																{(provided) => (
																	<Card
																		ref={provided.innerRef}
																		{...provided.draggableProps}
																		{...provided.dragHandleProps}
																	>
																		<TaskItem task={item} />
																	</Card>
																)}
															</Draggable>
														))}
														{provided.placeholder}
													</div>
													<button
														type="button"
														className="btn w-100 btn-soft-primary btn-sm"
													>
														Add Task
													</button>
												</div>
											</div>
										)}
									</Droppable>

									<Droppable droppableId="codeReviewTasks">
										{(provided) => (
											<div ref={provided.innerRef} className="kanban-col">
												<div className="kanban-main-card">
													<div className="kanban-box-title">
														<h4 className="header-title mb-3">Code Review</h4>
														<Dropdown className="kanban-main-dropdown">
															<DropdownToggle
																as="a"
																className="arrow-none"
																id="drop1"
																data-bs-toggle="dropdown"
																role="button"
																aria-haspopup="false"
																aria-expanded="false"
															>
																<i className="las la-ellipsis-v font-24 text-muted" />
															</DropdownToggle>
															<DropdownMenu align="end">
																<DropdownItem href="#">
																	Create Project
																</DropdownItem>
																<DropdownItem href="#">
																	Open Project
																</DropdownItem>
																<DropdownItem href="#">
																	Tasks Details
																</DropdownItem>
															</DropdownMenu>
														</Dropdown>
													</div>
													<div id="project-list-left" className="pb-1">
														{state.codeReviewTasks.map((item, idx) => (
															<Draggable
																draggableId={item.id + ''}
																index={idx}
																key={item.id}
															>
																{(provided) => (
																	<Card
																		ref={provided.innerRef}
																		{...provided.draggableProps}
																		{...provided.dragHandleProps}
																	>
																		<TaskItem task={item} />
																	</Card>
																)}
															</Draggable>
														))}
														{provided.placeholder}
													</div>
													<button
														type="button"
														className="btn w-100 btn-soft-primary btn-sm"
													>
														Add Task
													</button>
												</div>
											</div>
										)}
									</Droppable>

									<Droppable droppableId="doneTasks">
										{(provided) => (
											<div ref={provided.innerRef} className="kanban-col">
												<div className="kanban-main-card">
													<div className="kanban-box-title">
														<h4 className="header-title mb-3">Done</h4>
														<Dropdown className="kanban-main-dropdown">
															<DropdownToggle
																as="a"
																className="arrow-none"
																id="drop1"
																data-bs-toggle="dropdown"
																role="button"
																aria-haspopup="false"
																aria-expanded="false"
															>
																<i className="las la-ellipsis-v font-24 text-muted" />
															</DropdownToggle>
															<DropdownMenu align="end">
																<DropdownItem href="#">
																	Create Project
																</DropdownItem>
																<DropdownItem href="#">
																	Open Project
																</DropdownItem>
																<DropdownItem href="#">
																	Tasks Details
																</DropdownItem>
															</DropdownMenu>
														</Dropdown>
													</div>
													<div id="project-list-left" className="pb-1">
														{state.doneTasks.map((item, idx) => (
															<Draggable
																draggableId={item.id + ''}
																index={idx}
																key={item.id}
															>
																{(provided) => (
																	<Card
																		ref={provided.innerRef}
																		{...provided.draggableProps}
																		{...provided.dragHandleProps}
																	>
																		<TaskItem task={item} />
																	</Card>
																)}
															</Draggable>
														))}
														{provided.placeholder}
													</div>
													<button
														type="button"
														className="btn w-100 btn-soft-primary btn-sm"
													>
														Add Task
													</button>
												</div>
											</div>
										)}
									</Droppable>
								</div>
							</DragDropContext>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}
export default KanbanBoard
