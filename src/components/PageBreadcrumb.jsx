import { Col, Row } from 'react-bootstrap'
import { PageMetaData } from '.'
import { Link } from 'react-router-dom'
const PageBreadcrumb = ({ title, subName }) => {
	return (
		<>
			<PageMetaData title={title} />
			<Row>
				<Col sm={12}>
					<div className="page-title-box">
						<div className="float-end">
							<ol className="breadcrumb">
								<li className="breadcrumb-item">
									<Link to="">Metrica</Link>
								</li>
								<li className="breadcrumb-item">
									<Link to="">{subName}</Link>
								</li>
								<li className="breadcrumb-item active">{title}</li>
							</ol>
						</div>
						<h4 className="page-title">{title}</h4>
					</div>
				</Col>
			</Row>
		</>
	)
}
export default PageBreadcrumb
