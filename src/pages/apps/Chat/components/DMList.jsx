import { Link } from 'react-router-dom'
import { users } from '../data'
import { Image } from 'react-bootstrap'
const DMList = ({ onUserSelect }) => {
	const user = [...users]

	/**
	 * Activates the user
	 * @param {*} user
	 */
	const activateUser = (user) => {
		if (onUserSelect) {
			onUserSelect(user)
		}
	}

	// new-message
	return (
		<>
			{user.map((user, idx) => {
				return (
					<Link
						to=""
						key={idx}
						className="media"
						onClick={() => {
							activateUser(user)
						}}
					>
						<div className="media-left">
							<Image
								src={user.avatar}
								alt="user"
								className="rounded-circle thumb-md"
							/>
							{/* <span className="round-10 bg-success" /> */}
						</div>
						<div className="media-body">
							<div className="d-inline-block">
								<h6>{user.name}</h6>
								<p>{user.lastMessage}</p>
							</div>
							<div>
								<span>{user.lastMessageOn}</span>
							</div>
						</div>
					</Link>
				)
			})}
		</>
	)
}
export default DMList
