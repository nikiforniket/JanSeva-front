import { PageBreadcrumb } from '@/components'
import {
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Row,
} from 'react-bootstrap'
import * as FeatherIcon from 'react-icons/fi'
const FeatherIcons = () => {
	const allFeatherIcons = Object.keys(FeatherIcon)
	return (
		<>
			<PageBreadcrumb subName="Icons" title="Feather Icons" />
			<Row>
				<Col xs={12}>
					<Card>
						<CardHeader>
							<CardTitle as="h4">Example</CardTitle>
							<p className="text-muted mb-0">
								Use <code>&lt;IconName&gt;</code>.
							</p>
						</CardHeader>
						<CardBody>
							<Row className="icon-demo-content">
								{allFeatherIcons.map((icon, idx) => {
									const Icon = FeatherIcon[icon]
									return (
										<Col sm={6} md={4} lg={3} key={icon + idx}>
											<Icon size={24} />
											{icon}
										</Col>
									)
								})}
							</Row>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}
export default FeatherIcons
