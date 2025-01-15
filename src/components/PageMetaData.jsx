import { Helmet } from 'react-helmet'
const PageMetaData = ({ title }) => {
	return (
		<Helmet>
			<title>{title} | Complaint & Grievance Cell</title>
		</Helmet>
	)
}
export default PageMetaData
