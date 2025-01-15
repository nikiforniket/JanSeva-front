import { Link } from 'react-router-dom'
import AuthLayoutAlt from '../auth-alt/AuthLayoutAlt'
import { PageMetaData } from '@/components'
import errorSvg from '@/assets/images/error.svg'
const PageNotFoundAlt = () => {
	return (
		<>
			<PageMetaData title="Page Not Found Alt" />
			<AuthLayoutAlt
				title="Oops! Sorry page does not found"
				helpText="Back to dashboard of Metrica."
			>
				<div className="ex-page-content text-center">
					<img src={errorSvg} height={170} />
					<h1 className="mt-5 mb-4">404!</h1>
					<h5 className="font-16 text-muted mb-5">Somthing went wrong</h5>
				</div>
				<Link className="btn btn-primary w-100" to="/">
					Back to Dashboard <i className="fas fa-redo ml-1" />
				</Link>
			</AuthLayoutAlt>
		</>
	)
}
export default PageNotFoundAlt
