import { Card, CardBody, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const NewsCard2 = ({ description,image, variant, title, id }) => {
	return (
		<Card>
			<CardBody>
				{/* <Image src={image} className="img-fluid" /> */}
				{/* <ul className="p-0 mt-4 list-inline">
					<li className="list-inline-item">
						<span className={`badge bg-soft-${variant} px-3`}>Crypto</span>
					</li>
					<li className="list-inline-item">26 March 2021</li>
					<li className="list-inline-item">
						by <Link to="">admin</Link>
					</li>
				</ul> */}
				<Link to={{ pathname: `/news/${id}` }} style={{ color: "blue", textDecoration: "underline" }} className="h4 mt-2">
					{title}
				</Link>
				<p className="text-muted mt-2">
					{description}
				</p>
				{/* <Link to="" className="text-primary d-flex align-items-center gap-1">
					Continue Reading <i className="fas fa-long-arrow-alt-right" />
				</Link> */}
			</CardBody>
		</Card>
	)
}
export default NewsCard2
