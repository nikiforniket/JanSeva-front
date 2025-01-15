import { PageMetaData } from '@/components'
import { Card, CardBody } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthLayout from '../auth/AuthLayout'
import errorSvg from '@/assets/images/error.svg'
import logoSm from '@/assets/images/logo-sm.png'
const Error500 = () => {
	return (
		<>
			<PageMetaData title="Error 500" />
			<AuthLayout>
				<Card>
					<CardBody className="p-0 auth-header-box">
						<div className="text-center p-3">
							<Link to="/" className="logo logo-admin">
								<img
									src={logoSm}
									height={50}
									alt="logo"
									className="auth-logo"
								/>
							</Link>
							<h4 className="mt-3 mb-1 fw-semibold text-white font-18">
								Oops! Sorry page does not found
							</h4>
							<p className="text-muted  mb-0">Back to dashboard of Metrica.</p>
						</div>
					</CardBody>
					<CardBody>
						<div className="ex-page-content text-center">
							<img src={errorSvg} height={170} />
							<h1 className="mt-5 mb-4">500!</h1>
							<h5 className="font-16 text-muted mb-5">Somthing went wrong</h5>
						</div>
						<Link className="btn btn-primary w-100" to="/">
							Back to Dashboard <i className="fas fa-redo ml-1" />
						</Link>
					</CardBody>
					<CardBody className="bg-light-alt text-center">
						© {new Date().getFullYear()} Metrica
					</CardBody>
				</Card>
			</AuthLayout>
		</>
	)
}
export default Error500
